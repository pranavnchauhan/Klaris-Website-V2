import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";
import { KLARIS_EMAIL } from "@/lib/constants";

// TODO: wire to Sentry when available
function logServerError(message: string, meta?: unknown) {
  console.error(message, meta);
}

interface SendLog {
  event: "klaris.contact.send";
  provider: "resend";
  to: string;
  replyTo: string;
  subject: string;
  success: boolean;
  error?: string;
}

function logSend(entry: SendLog) {
  // Single-line JSON for Vercel log filtering / jq pipelines.
  console.log(JSON.stringify(entry));
}

// Zod schema
const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
  honeypot: z.string().max(0).optional(),
});

interface SendArgs {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}

async function sendViaResend(args: SendArgs): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Klaris <noreply@klaris.com.au>",
      to: [args.to],
      reply_to: args.replyTo,
      subject: args.subject,
      text: args.text,
      html: args.html,
    }),
  });

  if (!res.ok) {
    let body = "";
    try {
      body = await res.text();
    } catch {
      // ignore
    }
    throw new Error(`Resend ${res.status}: ${body}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 per 15 min per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
    const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
    if (upstashUrl && upstashToken) {
      try {
        const ratelimit = new Ratelimit({
          redis: new Redis({ url: upstashUrl, token: upstashToken }),
          limiter: Ratelimit.slidingWindow(5, "15 m"),
        });
        const { success } = await ratelimit.limit(ip);
        if (!success) {
          return NextResponse.json(
            { error: "Too many requests" },
            { status: 429 }
          );
        }
      } catch (rlErr) {
        // Fail open — Upstash failure shouldn't kill the contact form
        const msg = rlErr instanceof Error ? rlErr.message : String(rlErr);
        logServerError(`Rate limiter error (failing open): ${msg}`);
      }
    }

    const body = await request.json();

    // Honeypot check — silently pretend success so bots don't learn it failed.
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    const composedSubject = `Klaris Contact: ${subject} - ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const html = `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`;

    const sendArgs: SendArgs = {
      to: KLARIS_EMAIL,
      replyTo: email,
      subject: composedSubject,
      text,
      html,
    };

    if (!process.env.RESEND_API_KEY) {
      logServerError("Klaris contact form: RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    try {
      await sendViaResend(sendArgs);
      logSend({
        event: "klaris.contact.send",
        provider: "resend",
        to: sendArgs.to,
        replyTo: sendArgs.replyTo,
        subject: sendArgs.subject,
        success: true,
      });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      logSend({
        event: "klaris.contact.send",
        provider: "resend",
        to: sendArgs.to,
        replyTo: sendArgs.replyTo,
        subject: sendArgs.subject,
        success: false,
        error: errMsg,
      });
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logServerError("Contact form submission failed", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

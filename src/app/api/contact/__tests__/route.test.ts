import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Stub Upstash so the route's optional rate-limit branch is skipped during
// tests (no UPSTASH_REDIS_REST_* env vars set).
vi.mock("@upstash/ratelimit", () => ({
  Ratelimit: class {
    static slidingWindow() {}
    async limit() {
      return { success: true };
    }
  },
}));
vi.mock("@upstash/redis", () => ({
  Redis: { fromEnv: () => ({}) },
}));

import { POST } from "../route";

const RESEND_URL = "https://api.resend.com/emails";

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBody = {
  name: "Jane Tester",
  email: "jane@example.com",
  subject: "Demo request",
  message: "Hi, please book me in.",
};

describe("POST /api/contact", () => {
  let originalEnv: NodeJS.ProcessEnv;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    originalEnv = { ...process.env };
    delete process.env.RESEND_API_KEY;
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.unstubAllGlobals();
  });

  it("valid submission with RESEND_API_KEY → calls Resend once with expected payload", async () => {
    process.env.RESEND_API_KEY = "re_test";
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ id: "x" }), { status: 200 }));

    const res = await POST(makeRequest(validBody) as never);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(RESEND_URL);
    expect((init as RequestInit).method).toBe("POST");
    const headers = (init as RequestInit).headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer re_test");

    const body = JSON.parse((init as RequestInit).body as string);
    expect(body).toEqual({
      from: "Klaris <noreply@klaris.com.au>",
      to: ["info@klaris.com.au"],
      reply_to: "jane@example.com",
      subject: "Klaris Contact: Demo request - Jane Tester",
      text: expect.stringContaining("Name: Jane Tester"),
      html: expect.stringContaining("Demo request"),
    });
  });

  it("honeypot submission → success, no provider called", async () => {
    process.env.RESEND_API_KEY = "re_test";
    const res = await POST(
      makeRequest({ ...validBody, honeypot: "I'm a bot" }) as never,
    );
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("invalid body → 400 validation error, provider not called", async () => {
    process.env.RESEND_API_KEY = "re_test";
    const res = await POST(
      makeRequest({ name: "", email: "not-an-email", subject: "", message: "" }) as never,
    );
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "Invalid form data" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("provider failure (Resend non-2xx) → 500 with proper error JSON", async () => {
    process.env.RESEND_API_KEY = "re_test";
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ message: "Domain not verified" }), { status: 422 }),
    );
    const res = await POST(makeRequest(validBody) as never);
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to send message" });
  });

  it("missing RESEND_API_KEY → 500, NEVER fake success (regression test)", async () => {
    // No RESEND_API_KEY in env.
    const res = await POST(makeRequest(validBody) as never);
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Email service is not configured" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("emits structured JSON log on success with provider=resend", async () => {
    process.env.RESEND_API_KEY = "re_test";
    fetchMock.mockResolvedValue(new Response("", { status: 200 }));
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

    await POST(makeRequest(validBody) as never);

    const logLine = logSpy.mock.calls
      .map((c) => c[0] as string)
      .find((s) => typeof s === "string" && s.includes("klaris.contact.send"));
    expect(logLine).toBeDefined();
    const parsed = JSON.parse(logLine!);
    expect(parsed).toEqual({
      event: "klaris.contact.send",
      provider: "resend",
      to: "info@klaris.com.au",
      replyTo: "jane@example.com",
      subject: "Klaris Contact: Demo request - Jane Tester",
      success: true,
    });
    logSpy.mockRestore();
  });

  it("emits structured JSON log on provider failure with success:false + error", async () => {
    process.env.RESEND_API_KEY = "re_test";
    fetchMock.mockResolvedValue(new Response("nope", { status: 500 }));
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

    await POST(makeRequest(validBody) as never);

    const logLine = logSpy.mock.calls
      .map((c) => c[0] as string)
      .find((s) => typeof s === "string" && s.includes("klaris.contact.send"));
    const parsed = JSON.parse(logLine!);
    expect(parsed.success).toBe(false);
    expect(parsed.provider).toBe("resend");
    expect(parsed.error).toMatch(/Resend 500/);
    logSpy.mockRestore();
  });
});

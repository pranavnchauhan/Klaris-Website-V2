"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, MapPin, Calendar, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("website")) {
      return;
    }

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      router.push("/contact/success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Contact Klaris
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Have a question about Klaris AI? Want to book a demo or discuss
            advisor licensing? We&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&rsquo;ll get back to you
                    within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more..."
                        rows={6}
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive">{error}</p>
                    )}

                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-muted-foreground mt-3">
                      By submitting this form, you agree that Krrisp Pty Ltd (trading as Klaris) may contact you in relation to your enquiry. We handle your information in accordance with our{" "}
                      <Link href="/privacy" className="underline hover:text-primary transition-colors">
                        Privacy Policy
                      </Link>.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right: Sidebar Cards */}
            <div className="space-y-6">
              {/* Alternative Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Alternative Contact Methods
                  </CardTitle>
                  <CardDescription>
                    Prefer to reach us another way?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:info@klaris.com.au"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@klaris.com.au
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Bella Vista, NSW 2153, Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-primary mt-0.5 shrink-0"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/company/klaris-au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Follow Klaris
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Advisor Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Financial Advisor Tools
                  </CardTitle>
                  <CardDescription>
                    Accountants, financial planners, and solicitors — Klaris
                    offers volume licensing for your entire client base.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Multi-client advisor dashboards with role-based access,
                      white-label options, and dedicated onboarding support.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://cal.com/kd-pc/klaris-partnership-discussion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Meeting
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

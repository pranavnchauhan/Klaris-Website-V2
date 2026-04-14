// TODO(legal): Awaiting solicitor review before client handoff.
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KLARIS_EMAIL, KLARIS_PHONE_DISPLAY, KLARIS_PHONE_TEL, KLARIS_SITE_URL } from "@/lib/constants";

const sections = [
  { id: "subscription-model", label: "1. Subscription Model" },
  { id: "cancellation", label: "2. Cancellation" },
  { id: "no-partial-refunds", label: "3. No Refunds for Partial Months" },
  { id: "price-changes", label: "4. Price Changes" },
  { id: "exceptional-circumstances", label: "5. Exceptional Circumstances" },
  { id: "australian-consumer-law", label: "6. Australian Consumer Law" },
  { id: "contact", label: "7. Contact" },
];

export default function RefundPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Refund & Cancellation Policy",
            description:
              "Refund and cancellation policy for Klaris AI subscription plans.",
            url: `${KLARIS_SITE_URL}/refund-policy`,
            publisher: {
              "@type": "Organization",
              name: "Klaris AI",
              url: KLARIS_SITE_URL,
            },
            datePublished: "2026-04-01",
            dateModified: "2026-04-01",
            inLanguage: "en-AU",
          }),
        }}
      />

      <main className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: 1 April 2026
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Entity Header */}
            <div className="bg-secondary/20 rounded-lg p-6 mb-12">
              <p className="text-foreground/80 mb-1">
                <strong>Entity:</strong> Krrisp Pty Ltd
              </p>
              <p className="text-foreground/80 mb-1">
                <strong>ABN:</strong> 38 609 221 570 |{" "}
                <strong>ACN:</strong> 609 221 570
              </p>
              <p className="text-foreground/80">
                <strong>Product:</strong> Klaris AI - Wealth Planning
                Software
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="bg-secondary/30 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Table of Contents
              </h2>
              <ol className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        document
                          .getElementById(section.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-accent hover:text-primary hover:underline transition-colors text-left"
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            {/* 1. Subscription Model */}
            <section id="subscription-model" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Subscription Model
              </h2>
              <p className="text-foreground/80">
                Klaris AI is offered on a subscription basis. Subscription fees
                are billed monthly via Stripe.
              </p>
            </section>

            {/* 2. Cancellation */}
            <section id="cancellation" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Cancellation
              </h2>
              <p className="text-foreground/80 mb-4">
                You may cancel your Klaris subscription at any time from your
                account settings. Cancellation takes effect at the end of your
                current billing period.
              </p>
              <p className="text-foreground/80">
                You will retain access to the platform until the end of the paid
                period.
              </p>
            </section>

            {/* 3. No Refunds for Partial Months */}
            <section id="no-partial-refunds" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. No Refunds for Partial Months
              </h2>
              <p className="text-foreground/80 mb-4">
                We do not provide refunds for partial months of subscription. If
                you cancel mid-period, you will retain access until the end of
                that billing cycle and will not be charged for the following
                period.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  Summary
                </h4>
                <p className="text-blue-700">
                  Cancel anytime. Keep access until the end of the billing
                  cycle. No charge for the next period.
                </p>
              </div>
            </section>

            {/* 4. Price Changes */}
            <section id="price-changes" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Price Changes
              </h2>
              <p className="text-foreground/80 mb-4">
                We will provide at least 30 days&apos; written notice before any
                price increase. If you do not accept the new price, you may
                cancel before the increase takes effect without charge.
              </p>
            </section>

            {/* 5. Exceptional Circumstances */}
            <section id="exceptional-circumstances" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Exceptional Circumstances
              </h2>
              <p className="text-foreground/80 mb-4">
                If you believe a charge was made in error, contact us at{" "}
                <a
                  href={`mailto:${KLARIS_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {KLARIS_EMAIL}
                </a>{" "}
                within 14 days of the charge date and we will investigate.
              </p>
              <p className="text-foreground/80">
                Refunds for billing errors are at our discretion.
              </p>
            </section>

            {/* 6. Australian Consumer Law */}
            <section id="australian-consumer-law" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Australian Consumer Law
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-700">
                  Our services come with guarantees under the Australian Consumer
                  Law that cannot be excluded. If a service fails to meet a
                  consumer guarantee, you may be entitled to a refund or other
                  remedy.
                </p>
              </div>
            </section>

            {/* 7. Contact */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Contact
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about our refund or cancellation policy,
                please contact us:
              </p>
              <div className="bg-secondary/20 rounded-lg p-6">
                <p className="text-foreground/80 mb-1">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${KLARIS_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {KLARIS_EMAIL}
                  </a>
                </p>
                <p className="text-foreground/80 mb-1">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${KLARIS_PHONE_TEL}`}
                    className="text-accent hover:underline"
                  >
                    {KLARIS_PHONE_DISPLAY}
                  </a>
                </p>
                <p className="text-foreground/80">
                  <strong>Address:</strong> Bella Vista, NSW 2153, Australia
                </p>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Have Questions About Refunds?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any questions about our refund or cancellation
                policy, our team is happy to help.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </section>

            {/* Legal Pages Navigation */}
            <nav className="border-t border-border pt-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Legal Pages
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/security"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Data Security Policy
                </Link>
                <Link
                  href="/disclaimer"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Disclaimer
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-accent hover:text-primary hover:underline transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
                >
                  Refund &amp; Cancellation Policy
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}

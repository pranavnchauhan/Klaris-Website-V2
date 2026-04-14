// TODO(legal): Awaiting solicitor review before client handoff.
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KLARIS_EMAIL, KLARIS_PHONE_DISPLAY, KLARIS_PHONE_TEL, KLARIS_SITE_URL } from "@/lib/constants";

const sections = [
  { id: "what-are-cookies", label: "1. What Are Cookies" },
  { id: "how-we-use-cookies", label: "2. How We Use Cookies" },
  { id: "third-party-cookies", label: "3. Third-Party Cookies" },
  { id: "cookie-consent", label: "4. Cookie Consent" },
  { id: "managing-cookies", label: "5. Managing Cookies" },
  { id: "contact", label: "6. Contact" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cookie Policy",
            description:
              "How Klaris AI uses cookies and tracking technologies on our website.",
            url: `${KLARIS_SITE_URL}/cookie-policy`,
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
              Cookie Policy
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
                <strong>Trading as:</strong> Klaris AI
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

            {/* 1. What Are Cookies */}
            <section id="what-are-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-foreground/80">
                Cookies are small text files stored on your device when you visit
                a website. They help the site function and give operators insight
                into how the site is used.
              </p>
            </section>

            {/* 2. How We Use Cookies */}
            <section id="how-we-use-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. How We Use Cookies
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Essential Cookies
              </h3>
              <p className="text-foreground/80 mb-4">
                These cookies are necessary for the platform to function. They
                handle session management, security, and login state. Essential
                cookies cannot be disabled.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Analytics Cookies
              </h3>
              <p className="text-foreground/80 mb-4">
                We use Google Analytics to collect anonymised data about how our
                website is used. Analytics cookies are only set if you accept
                them via our consent banner.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Preference Cookies
              </h3>
              <p className="text-foreground/80">
                These cookies remember your settings and preferences to provide a
                more personalised experience.
              </p>
            </section>

            {/* 3. Third-Party Cookies */}
            <section id="third-party-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Third-Party Cookies
              </h2>
              <p className="text-foreground/80 mb-4">
                The following third-party services may set cookies when you use
                our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  <strong>Google Analytics</strong> - Anonymised usage
                  data.{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Stripe</strong> - Payment processing.{" "}
                  <a
                    href="https://stripe.com/au/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Stripe Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>SendGrid</strong> - Email delivery. SendGrid
                  does not set cookies on the public website.
                </li>
              </ul>
            </section>

            {/* 4. Cookie Consent */}
            <section id="cookie-consent" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Cookie Consent
              </h2>
              <p className="text-foreground/80 mb-4">
                On your first visit we show a cookie consent banner. You may
                accept or decline non-essential cookies.
              </p>
              <p className="text-foreground/80">
                You can change your cookie preferences at any time via your
                browser settings.
              </p>
            </section>

            {/* 5. Managing Cookies */}
            <section id="managing-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Managing Cookies
              </h2>
              <p className="text-foreground/80 mb-4">
                You can control cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>View and delete existing cookies</li>
                <li>Block all cookies or only third-party cookies</li>
                <li>
                  Set preferences for specific websites
                </li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-amber-800 mb-2">
                  Please Note
                </h4>
                <p className="text-amber-700">
                  Blocking essential cookies may prevent you from accessing
                  certain features of the Klaris platform, including login and
                  account management.
                </p>
              </div>
            </section>

            {/* 6. Contact */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Contact
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about our use of cookies, please contact
                us:
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
                <p className="text-foreground/80">
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
                Have Questions About Cookies?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any concerns about how we use cookies or manage your
                data, our team is here to help.
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
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-accent hover:text-primary hover:underline transition-colors"
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

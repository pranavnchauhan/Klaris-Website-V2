// TODO: Solicitor review required before publishing
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "no-financial-advice", label: "1. No Financial Advice" },
  { id: "no-guarantee", label: "2. No Guarantee of Outcomes" },
  { id: "accuracy", label: "3. Accuracy of Information" },
  { id: "external-links", label: "4. External Links" },
  { id: "limitation-of-liability", label: "5. Limitation of Liability" },
  { id: "australian-consumer-law", label: "6. Australian Consumer Law" },
  { id: "contact", label: "7. Contact" },
];

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Disclaimer",
            description:
              "Important disclaimers about Klaris AI wealth planning software. No financial advice provided.",
            url: "https://klaris.com.au/disclaimer",
            publisher: {
              "@type": "Organization",
              name: "Klaris AI",
              url: "https://klaris.com.au",
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
              Disclaimer
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

            {/* 1. No Financial Advice */}
            <section id="no-financial-advice" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. No Financial Advice
              </h2>
              <p className="text-foreground/80 mb-4">
                Klaris AI is a data management and financial structure
                visualisation platform. It does not provide financial advice, tax
                advice, legal advice, or any other professional advisory
                services.
              </p>
              <p className="text-foreground/80">
                Nothing displayed within the Klaris platform, on this website, or
                in any communications from Krrisp Pty Ltd constitutes financial
                advice within the meaning of the Corporations Act 2001 (Cth).
              </p>
            </section>

            {/* 2. No Guarantee of Outcomes */}
            <section id="no-guarantee" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. No Guarantee of Outcomes
              </h2>
              <p className="text-foreground/80 mb-4">
                The tools, reports, and visualisations provided by Klaris AI are
                for organisational and informational purposes only. They are not
                a substitute for advice from a licensed financial adviser,
                accountant, or solicitor.
              </p>
              <p className="text-foreground/80">
                You should obtain independent professional advice before making
                any financial, investment, or structural decisions.
              </p>
            </section>

            {/* 3. Accuracy of Information */}
            <section id="accuracy" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Accuracy of Information
              </h2>
              <p className="text-foreground/80">
                While we take reasonable steps to ensure the accuracy and
                currency of information displayed in the Klaris platform, we make
                no representations or warranties about its completeness,
                reliability, or fitness for a particular purpose.
              </p>
            </section>

            {/* 4. External Links */}
            <section id="external-links" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. External Links
              </h2>
              <p className="text-foreground/80">
                This website may contain links to third-party websites. We are
                not responsible for the content, accuracy, or privacy practices
                of those sites.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section id="limitation-of-liability" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-foreground/80">
                To the maximum extent permitted by law, Krrisp Pty Ltd and its
                directors, employees, and agents are not liable for any loss or
                damage arising from reliance on information presented in the
                Klaris platform or on this website.
              </p>
            </section>

            {/* 6. Australian Consumer Law */}
            <section id="australian-consumer-law" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Australian Consumer Law
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-700">
                  Nothing in this disclaimer limits your rights under the
                  Australian Consumer Law.
                </p>
              </div>
            </section>

            {/* 7. Contact */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Contact
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about this disclaimer, please contact us:
              </p>
              <div className="bg-secondary/20 rounded-lg p-6">
                <p className="text-foreground/80 mb-1">
                  <strong>Entity:</strong> Krrisp Pty Ltd
                </p>
                <p className="text-foreground/80 mb-1">
                  <strong>ABN:</strong> 38 609 221 570 |{" "}
                  <strong>ACN:</strong> 609 221 570
                </p>
                <p className="text-foreground/80 mb-1">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@klaris.com.au"
                    className="text-accent hover:underline"
                  >
                    info@klaris.com.au
                  </a>
                </p>
                <p className="text-foreground/80 mb-1">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+61483966111"
                    className="text-accent hover:underline"
                  >
                    +61 483 966 111
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
                Have Questions?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any questions about this disclaimer or need
                clarification, our team is here to help.
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
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
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

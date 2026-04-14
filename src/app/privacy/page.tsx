import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KLARIS_EMAIL, KLARIS_SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How our wealth planning software Australia protects your financial structure data.",
  alternates: {
    canonical: "https://klaris.com.au/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Klaris",
    description:
      "How our wealth planning software Australia protects your financial structure data.",
    url: "https://klaris.com.au/privacy",
  },
};

const sections = [
  { id: "about", label: "1. About This Policy" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "data-storage", label: "4. Data Storage and Security" },
  { id: "data-sharing", label: "5. Data Sharing and Third Parties" },
  { id: "data-retention", label: "6. Data Retention and Deletion" },
  { id: "your-rights", label: "7. Your Rights Under Australian Privacy Law" },
  { id: "cookies", label: "8. Cookies and Tracking" },
  { id: "international-transfers", label: "9. International Data Transfers" },
  { id: "childrens-privacy", label: "10. Children's Privacy" },
  { id: "data-breach", label: "11. Data Breach Notification" },
  { id: "changes", label: "12. Changes to Privacy Policy" },
  { id: "complaints", label: "13. Complaints and Disputes" },
  { id: "contact", label: "14. Contact Information" },
];

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "How our wealth planning software Australia protects your financial structure data.",
            url: `${KLARIS_SITE_URL}/privacy`,
            publisher: {
              "@type": "Organization",
              name: "Klaris AI",
              url: KLARIS_SITE_URL,
            },
            datePublished: "2024-12-16",
            dateModified: "2025-01-21",
            inLanguage: "en-AU",
          }),
        }}
      />

      <main className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: December 16, 2024 | Last Updated: January 21,
              2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <nav className="bg-secondary/30 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Table of Contents
              </h2>
              <ol className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-accent hover:text-primary hover:underline transition-colors"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* 1. About This Policy */}
            <section id="about" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. About This Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                This Privacy Policy describes how Krrisp Pty Ltd (ACN: 609 221
                570), trading as Klaris AI (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;), collects, uses, stores, and protects your
                information when you use our wealth planning software platform
                (&quot;Klaris&quot; or the &quot;Platform&quot;).
              </p>
              <p className="text-foreground/80 mb-4">
                We are committed to protecting your privacy in accordance with
                the Australian Privacy Principles (APPs) under the Privacy Act
                1988 (Cth).
              </p>
              <p className="text-foreground/80">
                By using our Platform, you agree to the collection, use, and
                storage of your information as described in this policy. If you
                do not agree, please do not use the Platform.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-we-collect" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Account Information
              </h3>
              <p className="text-foreground/80 mb-4">
                When you create an account, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>
                  Password (stored in hashed form - we never store plain
                  text passwords)
                </li>
                <li>Account type (Client or Advisor)</li>
                <li>
                  Subscription and payment information (processed by Stripe)
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Financial Structure Data
              </h3>
              <p className="text-foreground/80 mb-4">
                When you use the Platform, you may enter:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  Entity information (trusts, companies, SMSFs, partnerships)
                </li>
                <li>Asset details and ownership structures</li>
                <li>Beneficiary and trustee information</li>
                <li>Financial relationships and connections between entities</li>
                <li>Notes and documents related to your structures</li>
              </ul>

              {/* TFN Notice Callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-amber-800 mb-2">
                  TFN Notice
                </h4>
                <p className="text-amber-700">
                  We do not require, request, or store Tax File Numbers (TFNs).
                  Please do not enter your TFN or any other tax identification
                  numbers into the Platform. If you accidentally enter a TFN, we
                  recommend removing it immediately and contacting us so we can
                  assist with data deletion.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Usage Information
              </h3>
              <p className="text-foreground/80 mb-4">
                We automatically collect certain information about how you use
                the Platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Pages visited and features used</li>
                <li>Time spent on the Platform</li>
                <li>Browser type and device information</li>
                <li>IP address (anonymised in analytics)</li>
                <li>Referring website</li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Cookies
              </h3>
              <p className="text-foreground/80">
                We use essential cookies to maintain your session and
                preferences. We also use analytics cookies (Google Analytics) to
                understand how the Platform is used. You can manage cookie
                preferences through your browser settings or our cookie consent
                tool.
              </p>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-foreground/80 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Provide and maintain the Platform and its features.</li>
                <li>
                  Process your subscription payments through Stripe.
                </li>
                <li>
                  Send transactional emails (account verification, password
                  resets, security notifications).
                </li>
                <li>
                  Facilitate advisor-client collaboration when you grant access.
                </li>
                <li>
                  Improve the Platform based on anonymous usage analytics.
                </li>
                <li>
                  Respond to your support requests and communications.
                </li>
                <li>
                  Comply with our legal obligations under Australian law.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Marketing Opt-Out
              </h3>
              <p className="text-foreground/80 mb-6">
                We may occasionally send product updates or newsletters to your
                registered email address. You can opt out of marketing
                communications at any time by clicking the unsubscribe link in
                any marketing email or by contacting us at{" "}
                <a
                  href={`mailto:${KLARIS_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {KLARIS_EMAIL}
                </a>
                . Opting out of marketing does not affect transactional emails
                related to your account.
              </p>

              {/* Important Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  Important
                </h4>
                <p className="text-blue-700">
                  Klaris AI is a wealth structuring and documentation tool. It
                  does not provide financial advice, tax advice, or investment
                  recommendations. The information you enter and the structures
                  you create are for your own documentation and planning
                  purposes only.
                </p>
              </div>
            </section>

            {/* 4. Data Storage and Security */}
            <section id="data-storage" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Data Storage and Security
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Australian Data Residency
              </h3>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                <p className="text-emerald-700">
                  All financial structure data is stored on servers located
                  within Australia (Sydney, ap-southeast-2 region). Your
                  sensitive financial information never leaves Australian
                  jurisdiction.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Security Measures
              </h3>
              <p className="text-foreground/80 mb-4">
                We implement comprehensive security measures to protect your
                data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Encryption in transit</strong> - SSL/TLS
                  encryption with HSTS for all connections.
                </li>
                <li>
                  <strong>Encryption at rest</strong> - AES-256 encryption
                  for all stored data.
                </li>
                <li>
                  <strong>Row Level Security (RLS)</strong> - Database-level
                  isolation ensuring users can only access their own data.
                </li>
                <li>
                  <strong>Secure authentication</strong> - Bcrypt password
                  hashing, email verification, optional 2FA and Google SSO.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Access Controls
              </h3>
              <p className="text-foreground/80">
                Klaris AI staff have zero visibility into user financial
                structure data. Our administrative tools only manage platform
                operations. For full details, please see our{" "}
                <Link
                  href="/security"
                  className="text-accent hover:underline"
                >
                  Data Security Policy
                </Link>
                .
              </p>
            </section>

            {/* 5. Data Sharing and Third Parties */}
            <section id="data-sharing" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Data Sharing and Third Parties
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Third-Party Services
              </h3>
              <p className="text-foreground/80 mb-4">
                We share limited data with the following service providers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Stripe</strong> - Payment processing (PCI-DSS
                  Level 1 certified). Receives your payment information only. We
                  never store card details on our servers.
                </li>
                <li>
                  <strong>SendGrid</strong> - Transactional email delivery
                  (verification, password reset, notifications). Receives your
                  email address and name only. No financial data is included in
                  emails.
                </li>
                <li>
                  <strong>Google Analytics</strong> - Anonymous usage
                  analytics. Receives anonymised browsing data only. IP
                  anonymisation is enabled.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                No Data Selling
              </h3>
              <p className="text-foreground/80 mb-6">
                We do not sell, rent, or trade your personal information or
                financial structure data to any third party. We do not use your
                data for advertising purposes. We do not share your data with
                data brokers.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Advisor Access
              </h3>
              <p className="text-foreground/80">
                If you grant an advisor access to your account, they will be
                able to view your financial structure data as permitted by the
                access level you set. You control advisor access and can revoke
                it at any time. Advisors are bound by their own professional
                obligations regarding client data confidentiality.
              </p>
            </section>

            {/* 6. Data Retention and Deletion */}
            <section id="data-retention" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Data Retention and Deletion
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Active Accounts
              </h3>
              <p className="text-foreground/80 mb-6">
                We retain your data for as long as your account is active and as
                needed to provide you with the Platform services. Account and
                financial structure data is maintained throughout your
                subscription.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                After Account Closure
              </h3>
              <p className="text-foreground/80 mb-4">
                When you close your account:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Your financial structure data will be deleted within 90 days
                  of account closure.
                </li>
                <li>
                  Basic account records may be retained as required by
                  Australian tax and business law (up to 7 years for financial
                  transaction records).
                </li>
                <li>
                  Anonymised usage data may be retained for analytics purposes.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Account Deletion
              </h3>
              <p className="text-foreground/80">
                You can request complete deletion of your account and data by
                contacting us at{" "}
                <a
                  href={`mailto:${KLARIS_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {KLARIS_EMAIL}
                </a>
                . We will process deletion requests within 30 days and confirm
                completion via email.
              </p>
            </section>

            {/* 7. Your Rights Under Australian Privacy Law */}
            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Your Rights Under Australian Privacy Law
              </h2>
              <p className="text-foreground/80 mb-4">
                Under the Australian Privacy Act 1988, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Access</strong> - Request a copy of the personal
                  information we hold about you.
                </li>
                <li>
                  <strong>Correct</strong> - Request correction of any
                  inaccurate or incomplete personal information.
                </li>
                <li>
                  <strong>Delete</strong> - Request deletion of your
                  personal information (subject to legal retention requirements).
                </li>
                <li>
                  <strong>Export</strong> - Request a copy of your
                  financial structure data in a portable format.
                </li>
                <li>
                  <strong>Withdraw Consent</strong> - Withdraw consent for
                  marketing communications at any time.
                </li>
                <li>
                  <strong>Lodge a Complaint</strong> - Lodge a complaint
                  with the Office of the Australian Information Commissioner
                  (OAIC) if you believe we have breached your privacy.
                </li>
              </ul>

              {/* Identity Verification Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  Identity Verification
                </h4>
                <p className="text-blue-700">
                  To protect your privacy, we may need to verify your identity
                  before processing access, correction, or deletion requests.
                  We will respond to all requests within 30 days. There is no
                  charge for making a request, though we may charge a reasonable
                  fee for requests that are manifestly unfounded or excessive.
                </p>
              </div>
            </section>

            {/* 8. Cookies and Tracking */}
            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-foreground/80 mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Essential Cookies</strong> - Required for the
                  Platform to function (session management, authentication).
                  These cannot be disabled.
                </li>
                <li>
                  <strong>Analytics Cookies</strong> - Used to understand
                  how the Platform is used (Google Analytics). These can be
                  disabled through your browser settings or our cookie consent
                  tool.
                </li>
              </ul>
              <p className="text-foreground/80">
                We do not use advertising cookies or tracking pixels. We do not
                participate in ad networks or retargeting programs.
              </p>
            </section>

            {/* 9. International Data Transfers */}
            <section id="international-transfers" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                9. International Data Transfers
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Structure Data Stays in Australia
              </h3>
              <p className="text-foreground/80 mb-6">
                Your financial structure data (entities, assets, ownership
                relationships) is stored exclusively on Australian servers and
                does not leave Australian jurisdiction.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Account Data
              </h3>
              <p className="text-foreground/80 mb-4">
                Limited account-level data may be processed internationally by
                our service providers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Stripe</strong> (USA) - Processes payment
                  information.
                </li>
                <li>
                  <strong>SendGrid</strong> (USA) - Processes email
                  delivery.
                </li>
              </ul>

              {/* Safeguards Callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                  Safeguards
                </h4>
                <p className="text-emerald-700">
                  Where data is transferred internationally, we ensure that the
                  receiving parties maintain security standards comparable to
                  Australian requirements. Both Stripe and SendGrid maintain
                  SOC 2 Type II compliance and other industry-standard security
                  certifications. No financial structure data is included in
                  international transfers.
                </p>
              </div>
            </section>

            {/* 10. Children's Privacy */}
            <section id="childrens-privacy" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-foreground/80">
                The Platform is not intended for use by individuals under the
                age of 18. We do not knowingly collect personal information from
                children. If we become aware that we have collected personal
                information from a person under 18, we will take steps to delete
                that information as soon as possible. If you believe a child has
                provided us with personal information, please contact us at{" "}
                <a
                  href={`mailto:${KLARIS_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {KLARIS_EMAIL}
                </a>
                .
              </p>
            </section>

            {/* 11. Data Breach Notification */}
            <section id="data-breach" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                11. Data Breach Notification
              </h2>
              <p className="text-foreground/80 mb-4">
                In the event of a data breach that is likely to result in
                serious harm, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  Notify affected individuals as soon as practicable.
                </li>
                <li>
                  Notify the Office of the Australian Information Commissioner
                  (OAIC) in accordance with the Notifiable Data Breaches (NDB)
                  scheme.
                </li>
                <li>
                  Provide information about the nature of the breach, the type
                  of information involved, and recommended steps to protect
                  yourself.
                </li>
                <li>
                  Take reasonable steps to contain the breach and prevent future
                  occurrences.
                </li>
              </ul>
            </section>

            {/* 12. Changes to Privacy Policy */}
            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                12. Changes to Privacy Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                We may update this Privacy Policy from time to time. When we
                make changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  We will update the &quot;Last Updated&quot; date at the top of
                  this policy.
                </li>
                <li>
                  For material changes, we will notify you via email or in-app
                  notification.
                </li>
                <li>
                  Continued use of the Platform after changes constitutes
                  acceptance of the updated policy.
                </li>
                <li>
                  We encourage you to review this policy periodically.
                </li>
              </ul>
            </section>

            {/* 13. Complaints and Disputes */}
            <section id="complaints" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                13. Complaints and Disputes
              </h2>
              <p className="text-foreground/80 mb-4">
                If you believe we have breached your privacy or the Australian
                Privacy Principles, you can:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Contact us first</strong> - Email us at{" "}
                  <a
                    href={`mailto:${KLARIS_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {KLARIS_EMAIL}
                  </a>{" "}
                  with details of your complaint. We will investigate and
                  respond within 30 days.
                </li>
                <li>
                  <strong>Escalate to the OAIC</strong> - If you are not
                  satisfied with our response, you can lodge a complaint with
                  the Office of the Australian Information Commissioner:
                </li>
              </ol>
              <div className="bg-secondary/20 rounded-lg p-6">
                <p className="text-foreground/80 mb-1">
                  <strong>Office of the Australian Information Commissioner (OAIC)</strong>
                </p>
                <p className="text-foreground/80 mb-1">
                  Website:{" "}
                  <a
                    href="https://www.oaic.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.oaic.gov.au
                  </a>
                </p>
                <p className="text-foreground/80 mb-1">
                  Phone: 1300 363 992
                </p>
                <p className="text-foreground/80">
                  Email:{" "}
                  <a
                    href="mailto:enquiries@oaic.gov.au"
                    className="text-accent hover:underline"
                  >
                    enquiries@oaic.gov.au
                  </a>
                </p>
              </div>
            </section>

            {/* 14. Contact Information */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                14. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about this Privacy Policy or how we handle
                your data, please contact us:
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
                  <strong>Entity:</strong> Krrisp Pty Ltd (ABN: 38 609 221 570 | ACN: 609 221 570)
                </p>
                <p className="text-foreground/80">
                  <strong>Website:</strong>{" "}
                  <a
                    href={KLARIS_SITE_URL}
                    className="text-accent hover:underline"
                  >
                    klaris.com.au
                  </a>
                </p>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Have Privacy Questions?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any concerns about your privacy or how we handle
                your data, our team is here to help.
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
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
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
              </div>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}

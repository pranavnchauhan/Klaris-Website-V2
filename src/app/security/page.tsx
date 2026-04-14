import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KLARIS_EMAIL, KLARIS_SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data Security",
  description:
    "Klaris AI Data Security Policy. AES-256 encryption, Australian data residency, bank-grade security.",
  alternates: {
    canonical: "https://klaris.com.au/security",
  },
  openGraph: {
    title: "Data Security | Klaris",
    description:
      "Klaris AI Data Security Policy. AES-256 encryption, Australian data residency, bank-grade security.",
    url: "https://klaris.com.au/security",
  },
};

const sections = [
  { id: "about", label: "1. About This Policy" },
  { id: "data-storage", label: "2. Data Storage and Infrastructure" },
  { id: "encryption", label: "3. Encryption" },
  { id: "authentication", label: "4. Authentication and Access Control" },
  { id: "access-controls", label: "5. Access Controls and Permissions" },
  { id: "third-party", label: "6. Third-Party Security" },
  { id: "monitoring", label: "7. Security Monitoring and Incident Response" },
  { id: "user-responsibilities", label: "8. User Responsibilities" },
  { id: "privacy-act", label: "9. Privacy Act Alignment" },
  { id: "limitations", label: "10. Limitations" },
  { id: "changes", label: "11. Changes to This Policy" },
  { id: "contact", label: "12. Contact Information" },
];

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Data Security Policy",
            description:
              "Klaris AI Data Security Policy. AES-256 encryption, Australian data residency, bank-grade security.",
            url: `${KLARIS_SITE_URL}/security`,
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
              Data Security Policy
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
                This Data Security Policy describes the security measures
                implemented by Krrisp Pty Ltd (ACN: 609 221 570), trading as
                Klaris AI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), to
                protect information processed through our wealth planning
                software platform (&quot;Klaris&quot; or the
                &quot;Platform&quot;).
              </p>
              <p className="text-foreground/80 mb-4">
                This policy applies to all users of the Platform, including
                individual clients and financial advisors who access the
                Platform.
              </p>
              <p className="text-foreground/80">
                Our commitment is to protect your financial structure data with
                industry-standard security practices while maintaining
                transparency about how we safeguard your information.
              </p>
            </section>

            {/* 2. Data Storage and Infrastructure */}
            <section id="data-storage" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Data Storage and Infrastructure
              </h2>

              {/* Australian Data Residency Callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                  Australian Data Residency
                </h3>
                <p className="text-emerald-700">
                  All financial structure data is stored on servers located
                  within Australia. We use Supabase with an Australian region
                  (Sydney, ap-southeast-2) to ensure your sensitive financial
                  information never leaves Australian jurisdiction.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Infrastructure Provider
              </h3>
              <p className="text-foreground/80 mb-4">
                Our platform infrastructure is hosted on Supabase, which uses
                Amazon Web Services (AWS) data centres. Our database is
                provisioned in the Sydney (ap-southeast-2) region.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Data Segregation
              </h3>
              <p className="text-foreground/80 mb-4">
                Each user&apos;s data is logically segregated at the database
                level using Row Level Security (RLS) policies. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  Each user can only access their own financial structure data.
                </li>
                <li>
                  Advisors can only access data for clients who have explicitly
                  granted them access.
                </li>
                <li>
                  Database queries are automatically filtered to prevent
                  cross-user data access.
                </li>
                <li>
                  Administrative access does not include visibility into user
                  financial data.
                </li>
              </ul>
            </section>

            {/* 3. Encryption */}
            <section id="encryption" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Encryption
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Data in Transit
              </h3>
              <p className="text-foreground/80 mb-4">
                All data transmitted between your browser and our servers is
                encrypted using:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>SSL/TLS encryption</strong> - All connections
                  use HTTPS with TLS 1.2 or higher.
                </li>
                <li>
                  <strong>HSTS (HTTP Strict Transport Security)</strong> -
                  Browsers are instructed to only connect via HTTPS, preventing
                  downgrade attacks.
                </li>
                <li>
                  API calls between our frontend and backend services are
                  encrypted end-to-end.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Data at Rest
              </h3>
              <p className="text-foreground/80 mb-4">
                All data stored in our database is encrypted at rest using:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  <strong>AES-256 encryption</strong> - Industry-standard
                  encryption used by financial institutions worldwide.
                </li>
                <li>
                  Database backups are also encrypted using the same standard.
                </li>
                <li>
                  Encryption keys are managed by AWS Key Management Service
                  (KMS) and are rotated regularly.
                </li>
              </ul>
            </section>

            {/* 4. Authentication and Access Control */}
            <section id="authentication" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Authentication and Access Control
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Password Requirements
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Minimum 12 characters with complexity requirements (uppercase,
                  lowercase, numbers, and special characters).
                </li>
                <li>Passwords are hashed using bcrypt before storage.</li>
                <li>We never store passwords in plain text.</li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Email Verification
              </h3>
              <p className="text-foreground/80 mb-6">
                All accounts require email verification before accessing the
                Platform. A verification link is sent to the registered email
                address and must be confirmed before the account becomes active.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Two-Factor Authentication (2FA) and Google SSO
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Two-factor authentication is available and recommended for all
                  accounts.
                </li>
                <li>
                  Google Single Sign-On (SSO) is available as an alternative
                  authentication method, leveraging Google&apos;s security
                  infrastructure.
                </li>
                <li>
                  Advisor accounts are strongly encouraged to enable 2FA due to
                  the elevated access they may have to client data.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Session Management
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  Sessions are managed using secure, HTTP-only tokens.
                </li>
                <li>
                  Sessions expire after a period of inactivity to reduce the
                  risk of unauthorised access.
                </li>
                <li>
                  Users can manually sign out to terminate their session at any
                  time.
                </li>
              </ul>
            </section>

            {/* 5. Access Controls and Permissions */}
            <section id="access-controls" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Access Controls and Permissions
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Client Access
              </h3>
              <p className="text-foreground/80 mb-6">
                Clients have full control over their own financial structure
                data. Clients can view, create, edit, and delete their own
                structures. Clients can grant or revoke advisor access at any
                time.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Advisor Access
              </h3>
              <p className="text-foreground/80 mb-4">
                Advisors can only access client data when explicitly invited by
                the client:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Advisors receive read-only or edit access as determined by the
                  client.
                </li>
                <li>
                  Access can be revoked by the client at any time, effective
                  immediately.
                </li>
                <li>
                  Advisors cannot share client data with other advisors or third
                  parties.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Advisor Collaboration Limits
              </h3>
              <p className="text-foreground/80 mb-6">
                Each client account can have a maximum of 2 advisors connected
                at any time. This limit exists to maintain data security and
                minimise the risk of unauthorised access. Clients must remove an
                existing advisor before adding a new one if the limit is
                reached.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Internal Access
              </h3>
              <p className="text-foreground/80">
                Our systems are designed so that Klaris staff do not have
                routine access to user financial structure data. Administrative
                tools manage platform operations (account status, subscription
                management, technical support) without exposing financial data
                entered by users. When support requires data access, this is
                strictly opt-in by the user and fully audit-logged. In the event
                of a technical incident, our response team may access the minimum
                data necessary to resolve the issue. Database access is restricted
                to essential maintenance operations and is logged.
              </p>
            </section>

            {/* 6. Third-Party Security */}
            <section id="third-party" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Third-Party Security
              </h2>
              <p className="text-foreground/80 mb-4">
                We use a limited number of third-party services, each selected
                for their security standards:
              </p>

              <div className="space-y-4">
                <div className="bg-secondary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2">
                    Stripe (Payment Processing)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                    <li>
                      PCI-DSS Level 1 certified - the highest level of
                      payment security certification.
                    </li>
                    <li>
                      We never store, process, or transmit credit card numbers
                      on our servers.
                    </li>
                    <li>
                      All payment data is handled directly by Stripe&apos;s
                      secure infrastructure.
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2">
                    SendGrid (Email Communications)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                    <li>
                      Used for transactional emails (verification, password
                      reset, notifications).
                    </li>
                    <li>
                      Emails are sent over encrypted connections.
                    </li>
                    <li>
                      No financial structure data is included in emails.
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2">
                    Google Analytics
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                    <li>
                      Used for anonymous website usage analytics only.
                    </li>
                    <li>
                      No personal financial data is sent to Google Analytics.
                    </li>
                    <li>IP anonymisation is enabled.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Security Monitoring and Incident Response */}
            <section id="monitoring" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Security Monitoring and Incident Response
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Monitoring
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  We monitor for unusual access patterns and potential security
                  threats.
                </li>
                <li>
                  Failed login attempts are tracked and accounts may be
                  temporarily locked after repeated failures.
                </li>
                <li>
                  System logs are maintained for security audit purposes.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Incident Response
              </h3>
              <p className="text-foreground/80 mb-4">
                In the event of a security incident:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  We will investigate and contain the incident as quickly as
                  possible.
                </li>
                <li>
                  Affected users will be notified in accordance with the
                  Notifiable Data Breaches (NDB) scheme under the Privacy Act
                  1988.
                </li>
                <li>
                  We will notify the Office of the Australian Information
                  Commissioner (OAIC) if the breach is likely to result in
                  serious harm.
                </li>
                <li>
                  We will provide affected users with information about the
                  breach and recommended steps to protect their accounts.
                </li>
              </ul>
            </section>

            {/* 8. User Responsibilities */}
            <section id="user-responsibilities" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                8. User Responsibilities
              </h2>
              <p className="text-foreground/80 mb-4">
                While we implement robust security measures, account security is
                a shared responsibility. We recommend that all users:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Use a strong, unique password for your Klaris account.</li>
                <li>Enable two-factor authentication (2FA).</li>
                <li>
                  Do not share your login credentials with anyone.
                </li>
                <li>
                  Sign out of your account when using shared or public devices.
                </li>
                <li>
                  Keep your email address up to date for security notifications.
                </li>
                <li>
                  Review advisor access permissions regularly and revoke access
                  that is no longer needed.
                </li>
                <li>
                  Report any suspected unauthorised access immediately to{" "}
                  <a
                    href={`mailto:${KLARIS_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {KLARIS_EMAIL}
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* 9. Privacy Act Alignment */}
            <section id="privacy-act" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                9. Privacy Act Alignment
              </h2>
              <p className="text-foreground/80 mb-4">
                Our security practices are designed to align with the Australian
                Privacy Principles (APPs) under the Privacy Act 1988 (Cth),
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  <strong>APP 11 (Security of Personal Information)</strong>{" "}
                  - We take reasonable steps to protect personal
                  information from misuse, interference, loss, and unauthorised
                  access, modification, or disclosure.
                </li>
                <li>
                  <strong>APP 8 (Cross-border Disclosure)</strong> -
                  Financial structure data remains within Australian
                  jurisdiction. Where account-level data is processed
                  internationally (e.g., payment processing via Stripe), we
                  ensure appropriate safeguards are in place.
                </li>
                <li>
                  <strong>Notifiable Data Breaches Scheme</strong> - We
                  comply with the NDB scheme and will notify affected
                  individuals and the OAIC of eligible data breaches.
                </li>
              </ul>
            </section>

            {/* 10. Limitations */}
            <section id="limitations" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                10. Limitations
              </h2>
              <p className="text-foreground/80 mb-4">
                While we implement industry-standard security measures, no
                system can guarantee absolute security. We cannot be held liable
                for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  Unauthorised access resulting from user actions (e.g., sharing
                  credentials, weak passwords, compromised devices).
                </li>
                <li>
                  Security breaches at third-party providers despite their own
                  security certifications.
                </li>
                <li>
                  Force majeure events or circumstances beyond our reasonable
                  control.
                </li>
              </ul>
            </section>

            {/* 11. Changes to This Policy */}
            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                We may update this Data Security Policy from time to time to
                reflect changes in our security practices, technology, or legal
                requirements. When we make material changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  We will update the &quot;Last Updated&quot; date at the top of
                  this policy.
                </li>
                <li>
                  For significant changes, we will notify users via email or an
                  in-app notification.
                </li>
                <li>
                  Continued use of the Platform after changes constitutes
                  acceptance of the updated policy.
                </li>
              </ul>
            </section>

            {/* 12. Contact Information */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                12. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about our security practices or wish to
                report a security concern, please contact us:
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
                Have Security Questions?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any concerns about data security or want to learn
                more about how we protect your information, get in touch with
                our team.
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
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
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

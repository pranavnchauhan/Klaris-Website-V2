import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Legal terms for using Australia's trusted wealth planning software.",
  alternates: {
    canonical: "https://klaris.com.au/terms",
  },
  openGraph: {
    title: "Terms of Service | Klaris",
    description:
      "Legal terms for using Australia's trusted wealth planning software.",
    url: "https://klaris.com.au/terms",
  },
};

const sections = [
  { id: "agreement", label: "1. Agreement to Terms" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "service-description", label: "3. Service Description" },
  { id: "account-types", label: "4. Account Types" },
  { id: "registration", label: "5. Registration and Account Security" },
  { id: "pricing", label: "6. Pricing and Payment" },
  { id: "user-responsibilities", label: "7. User Responsibilities" },
  { id: "data-ownership", label: "8. Data Ownership and Export" },
  { id: "intellectual-property", label: "9. Intellectual Property" },
  { id: "service-availability", label: "10. Service Availability and Modifications" },
  { id: "limitation-liability", label: "11. Limitation of Liability" },
  { id: "indemnification", label: "12. Indemnification" },
  { id: "advisor-liability", label: "13. Advisor Liability and Indemnification" },
  { id: "termination", label: "14. Termination" },
  { id: "dispute-resolution", label: "15. Dispute Resolution" },
  { id: "changes", label: "16. Changes to These Terms" },
  { id: "contact", label: "17. Contact Information" },
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            description:
              "Legal terms for using Australia's trusted wealth planning software.",
            url: "https://klaris.com.au/terms",
            publisher: {
              "@type": "Organization",
              name: "Klaris AI",
              url: "https://klaris.com.au",
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: December 16, 2024 | Last Updated: January 21,
              2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* NO FINANCIAL ADVICE DISCLAIMER */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-xl font-bold text-destructive mb-3">
                Important: No Financial Advice Disclaimer
              </h2>
              <p className="text-destructive/90 mb-3">
                Klaris AI is a wealth structuring and documentation tool. It
                does not provide financial advice, tax advice, legal advice, or
                investment recommendations. The Platform is designed to help you
                document and visualise your existing financial structures.
              </p>
              <p className="text-destructive/90">
                You should always consult a qualified financial advisor,
                accountant, or legal professional before making any financial
                decisions. Klaris AI and Krrisp Pty Ltd accept no liability for
                any financial decisions made based on information displayed in
                the Platform.
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

            {/* 1. Agreement to Terms */}
            <section id="agreement" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-foreground/80 mb-4">
                These Terms of Service (&quot;Terms&quot;) constitute a legally
                binding agreement between you and Krrisp Pty Ltd (ACN: 609 221
                570), trading as Klaris AI (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;), governing your use of the Klaris wealth
                planning software platform (&quot;Platform&quot;).
              </p>
              <p className="text-foreground/80 mb-4">
                By creating an account, accessing, or using the Platform, you
                agree to be bound by these Terms. If you do not agree to these
                Terms, do not use the Platform.
              </p>
              <p className="text-foreground/80">
                These Terms should be read in conjunction with our{" "}
                <Link
                  href="/privacy"
                  className="text-accent hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/security"
                  className="text-accent hover:underline"
                >
                  Data Security Policy
                </Link>
                .
              </p>
            </section>

            {/* 2. Eligibility */}
            <section id="eligibility" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Eligibility
              </h2>
              <p className="text-foreground/80 mb-4">
                To use the Platform, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Be at least 18 years of age.</li>
                <li>
                  Have the legal capacity to enter into a binding agreement.
                </li>
                <li>
                  Provide accurate and complete registration information.
                </li>
                <li>
                  If registering as an advisor, hold appropriate professional
                  qualifications and registrations as required by Australian law.
                </li>
              </ul>
            </section>

            {/* 3. Service Description */}
            <section id="service-description" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Service Description
              </h2>
              <p className="text-foreground/80 mb-4">
                Klaris AI is a wealth structuring and documentation platform
                that enables users to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Document and visualise complex ownership structures (trusts,
                  companies, SMSFs, partnerships).
                </li>
                <li>Track assets and their ownership relationships.</li>
                <li>Record beneficiary and trustee information.</li>
                <li>
                  Collaborate with financial advisors on structural planning.
                </li>
                <li>
                  Generate reports and exports of financial structures.
                </li>
              </ul>

              {/* Not Financial Advice Callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-amber-800 mb-2">
                  Important
                </h4>
                <p className="text-amber-700">
                  The Platform is a documentation and visualisation tool only.
                  It does not provide financial advice, tax advice, legal advice,
                  or investment recommendations. It does not verify the accuracy
                  of information you enter. You are responsible for ensuring all
                  information is accurate and up to date.
                </p>
              </div>
            </section>

            {/* 4. Account Types */}
            <section id="account-types" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Account Types
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Client Accounts
              </h3>
              <p className="text-foreground/80 mb-4">
                Client accounts are for individuals and families who wish to
                document their financial structures. Client account holders:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Have full ownership and control of their financial structure
                  data.
                </li>
                <li>
                  Can create, edit, and delete their structures and entities.
                </li>
                <li>
                  Can invite up to 2 advisors to collaborate on their
                  structures.
                </li>
                <li>
                  Can export their data at any time.
                </li>
                <li>
                  Can revoke advisor access at any time.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Advisor Accounts
              </h3>
              <p className="text-foreground/80 mb-4">
                Advisor accounts are for qualified financial advisors,
                accountants, and professionals who wish to collaborate with
                clients. Advisor account holders:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Can access client structures only when explicitly invited by
                  the client.
                </li>
                <li>
                  Receive read-only or edit access as determined by the client.
                </li>
                <li>
                  Must maintain appropriate professional qualifications.
                </li>
                <li>
                  Are responsible for their own professional obligations
                  regarding client data.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Collaboration Limits
              </h3>
              <p className="text-foreground/80">
                Each client account can have a maximum of 2 advisors connected
                at any time. This limit exists to maintain data security and
                manage access complexity. Clients must remove an existing
                advisor before adding a new one if the limit has been reached.
              </p>
            </section>

            {/* 5. Registration and Account Security */}
            <section id="registration" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Registration and Account Security
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Email Verification
              </h3>
              <p className="text-foreground/80 mb-6">
                All accounts require email verification before access is
                granted. You must use a valid email address that you have access
                to. We may send security-related notifications to this email
                address.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Password Requirements
              </h3>
              <p className="text-foreground/80 mb-6">
                Passwords must be at least 12 characters long and include a mix
                of uppercase letters, lowercase letters, numbers, and special
                characters. You are responsible for maintaining the security of
                your password and must not share it with anyone.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Two-Factor Authentication (2FA)
              </h3>
              <p className="text-foreground/80 mb-6">
                Two-factor authentication is available and recommended for all
                accounts. Advisor accounts are strongly encouraged to enable 2FA
                due to the elevated access they may have to client data. Google
                Single Sign-On (SSO) is also available as an alternative
                authentication method.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Session Management
              </h3>
              <p className="text-foreground/80">
                Sessions expire after a period of inactivity. You should sign
                out when using shared devices. You are responsible for all
                activity that occurs under your account.
              </p>
            </section>

            {/* 6. Pricing and Payment */}
            <section id="pricing" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Pricing and Payment
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Plans
              </h3>
              <p className="text-foreground/80 mb-6">
                The Platform offers various subscription plans with different
                features and limits. Current pricing is displayed on our website
                and within the Platform. All prices are in Australian Dollars
                (AUD) and include GST where applicable.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                No Processing Guarantee
              </h3>
              <p className="text-foreground/80 mb-6">
                Klaris is a data management and visualisation platform. You input
                your financial structure data and Klaris organises and displays it.
                We do not process your data to produce new financial insights or
                recommendations. As such, no satisfaction or outcome guarantee
                applies to the use of the Platform.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Payment Processing
              </h3>
              <p className="text-foreground/80 mb-6">
                All payments are processed securely by Stripe, a PCI-DSS Level
                1 certified payment processor. We do not store, process, or have
                access to your full credit card or payment details. Your payment
                information is handled entirely by Stripe&apos;s secure
                infrastructure.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Failed Payments
              </h3>
              <p className="text-foreground/80 mb-6">
                If a subscription payment fails, we will attempt to process the
                payment again. If payment cannot be collected after multiple
                attempts, your account may be downgraded or suspended until
                payment is resolved. We will notify you via email before any
                account changes due to payment issues.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Refund Policy
              </h3>
              <p className="text-foreground/80 mb-6">
                Refunds are handled on a case-by-case basis. We do not provide
                refunds for partial months of subscription. If you believe a
                charge was made in error, contact us within 14 days. Refunds
                may be considered at our discretion. To request a refund, contact us
                at{" "}
                <a
                  href="mailto:info@klaris.com.au"
                  className="text-accent hover:underline"
                >
                  info@klaris.com.au
                </a>
                .
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Price Changes
              </h3>
              <p className="text-foreground/80 mb-6">
                We may change our pricing from time to time. Existing
                subscribers will be given at least 30 days&apos; notice of any
                price increase. Price changes will take effect at the start of
                the next billing cycle following the notice period. If you do
                not agree to a price change, you may cancel your subscription
                before the change takes effect.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Advisory Firm Licensing
              </h3>
              <p className="text-foreground/80">
                Advisory firms requiring multiple advisor accounts should
                contact us for firm licensing arrangements. Firm licenses
                provide centralised billing and account management for advisory
                practices.
              </p>
            </section>

            {/* 7. User Responsibilities */}
            <section id="user-responsibilities" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. User Responsibilities
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Accurate Information
              </h3>
              <p className="text-foreground/80 mb-6">
                You are responsible for ensuring that all information you enter
                into the Platform is accurate and up to date. The Platform does
                not verify the accuracy of financial structure data. Incorrect
                data may lead to inaccurate visualisations and reports.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Advisor Access Management
              </h3>
              <p className="text-foreground/80 mb-6">
                If you are a client, you are responsible for managing advisor
                access to your account. This includes granting appropriate
                access levels, reviewing access regularly, and revoking access
                when it is no longer needed. We are not responsible for actions
                taken by advisors you have granted access to.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Prohibited Uses
              </h3>
              <p className="text-foreground/80 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Use the Platform for any unlawful purpose or in violation of
                  any applicable laws.
                </li>
                <li>
                  Attempt to access another user&apos;s account or data without
                  authorisation.
                </li>
                <li>
                  Use automated tools (bots, scrapers) to access the Platform.
                </li>
                <li>
                  Attempt to circumvent security measures or access controls.
                </li>
                <li>
                  Upload malicious code, viruses, or harmful content.
                </li>
                <li>
                  Use the Platform to store illegal or fraudulent financial
                  information.
                </li>
                <li>
                  Resell, sublicense, or redistribute access to the Platform
                  without our written consent.
                </li>
                <li>
                  Interfere with the operation of the Platform or its
                  infrastructure.
                </li>
              </ul>

              {/* Legal Action Callout */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-destructive mb-2">
                  Legal Action
                </h4>
                <p className="text-destructive/90">
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms, and to pursue legal action for serious
                  violations including unauthorised access attempts, data
                  theft, or fraudulent use of the Platform.
                </p>
              </div>
            </section>

            {/* 8. Data Ownership and Export */}
            <section id="data-ownership" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                8. Data Ownership and Export
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Your Data
              </h3>
              <p className="text-foreground/80 mb-6">
                You retain full ownership of all financial structure data you
                enter into the Platform. We do not claim any ownership rights
                over your data. We use your data solely to provide the Platform
                services to you as described in our{" "}
                <Link
                  href="/privacy"
                  className="text-accent hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              {/* Australian Data Residency Callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                  Australian Data Residency
                </h4>
                <p className="text-emerald-700">
                  All financial structure data is stored on servers located
                  within Australia (Sydney region). Your sensitive financial
                  information never leaves Australian jurisdiction.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Export
              </h3>
              <p className="text-foreground/80 mb-6">
                You can export your financial structure data at any time through
                the Platform&apos;s export features. We provide data in standard
                formats to ensure portability.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Deletion
              </h3>
              <p className="text-foreground/80">
                You can request complete deletion of your data by contacting us
                at{" "}
                <a
                  href="mailto:info@klaris.com.au"
                  className="text-accent hover:underline"
                >
                  info@klaris.com.au
                </a>
                . Upon account closure, financial structure data will be deleted
                within 90 days. Certain records may be retained as required by
                Australian law.
              </p>
            </section>

            {/* 9. Intellectual Property */}
            <section id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-foreground/80 mb-4">
                The Platform, including its design, code, features, content,
                logos, and trademarks, is the intellectual property of Krrisp Pty
                Ltd. You are granted a limited, non-exclusive, non-transferable
                licence to use the Platform for its intended purpose during your
                subscription.
              </p>
              <p className="text-foreground/80">
                You may not copy, modify, distribute, reverse engineer, or
                create derivative works based on the Platform or any part of it
                without our written consent.
              </p>
            </section>

            {/* 10. Service Availability and Modifications */}
            <section id="service-availability" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                10. Service Availability and Modifications
              </h2>
              <p className="text-foreground/80 mb-4">
                We aim to provide the Platform with high availability but do not
                guarantee uninterrupted access. The Platform may be temporarily
                unavailable due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Scheduled maintenance (we will provide advance notice where possible).</li>
                <li>Unscheduled maintenance or emergency fixes.</li>
                <li>Circumstances beyond our reasonable control (force majeure).</li>
              </ul>
              <p className="text-foreground/80">
                We may modify, update, or discontinue features of the Platform
                from time to time. For significant changes that materially
                affect your use, we will provide reasonable notice. If we
                discontinue the Platform entirely, we will provide at least 90
                days&apos; notice and an opportunity to export your data.
              </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section id="limitation-liability" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-foreground/80 mb-4">
                To the maximum extent permitted by law, Krrisp Pty Ltd, its
                directors, employees, and agents shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Any indirect, incidental, special, consequential, or punitive
                  damages arising from your use of the Platform.
                </li>
                <li>
                  Loss of profits, revenue, data, or business opportunities.
                </li>
                <li>
                  Decisions made based on information displayed in the Platform.
                </li>
                <li>
                  Actions or omissions of advisors you have granted access to.
                </li>
                <li>
                  Service interruptions, data loss, or security breaches
                  despite our reasonable security measures.
                </li>
              </ul>
              <p className="text-foreground/80 mb-6">
                Our total liability for any claim arising from or related to the
                Platform shall not exceed the total amount you have paid to us
                in the 12 months preceding the claim.
              </p>

              {/* Financial Advice Disclaimer */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-destructive mb-2">
                  Financial Advice Disclaimer
                </h4>
                <p className="text-destructive/90">
                  The Platform does not provide financial, tax, legal, or
                  investment advice. We are not a financial services provider,
                  licensed advisor, or registered tax agent. Any information
                  displayed in the Platform is based solely on data you have
                  entered and should not be relied upon for financial decisions
                  without independent professional advice.
                </p>
              </div>

              {/* Australian Consumer Law Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  Australian Consumer Law
                </h4>
                <p className="text-blue-700">
                  Nothing in these Terms is intended to exclude, restrict, or
                  modify any rights you may have under the Australian Consumer
                  Law (Schedule 2 of the Competition and Consumer Act 2010) or
                  any other applicable consumer protection laws that cannot be
                  excluded by agreement.
                </p>
              </div>
            </section>

            {/* 12. Indemnification */}
            <section id="indemnification" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                12. Indemnification
              </h2>
              <p className="text-foreground/80">
                You agree to indemnify and hold harmless Krrisp Pty Ltd, its
                directors, employees, and agents from any claims, damages,
                losses, liabilities, and expenses (including legal fees) arising
                from: your use of the Platform; your breach of these Terms;
                your violation of any applicable law; information you enter into
                the Platform; or any dispute between you and an advisor
                connected to your account.
              </p>
            </section>

            {/* 13. Advisor Liability and Indemnification */}
            <section id="advisor-liability" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                13. Advisor Liability and Indemnification
              </h2>

              {/* Full Control Advisor IMPORTANT Callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-amber-800 mb-2">
                  Important: Full Control Advisors
                </h4>
                <p className="text-amber-700">
                  If a client grants an advisor &quot;Full Control&quot; access,
                  the advisor can create, edit, and delete structures on behalf
                  of the client. The advisor accepts full responsibility for any
                  changes made under Full Control access. Klaris AI is not
                  liable for any data changes, losses, or consequences resulting
                  from advisor actions under Full Control access.
                </p>
              </div>

              <p className="text-foreground/80 mb-4">
                If you are an advisor using the Platform, you additionally agree
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>
                  Maintain appropriate professional qualifications and
                  registrations.
                </li>
                <li>
                  Comply with all applicable professional conduct standards and
                  regulations.
                </li>
                <li>
                  Only access client data for legitimate professional purposes.
                </li>
                <li>
                  Not share or disclose client data to any unauthorised party.
                </li>
                <li>
                  Indemnify Krrisp Pty Ltd against any claims arising from your
                  professional advice or actions taken in relation to client
                  data accessed through the Platform.
                </li>
              </ul>

              {/* Notice Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  Notice
                </h4>
                <p className="text-blue-700">
                  Klaris AI does not verify advisor qualifications, professional
                  registrations, or the quality of advice provided by advisors.
                  The relationship between a client and their advisor is
                  independent of Klaris AI. We are not a party to any
                  advisor-client engagement and accept no liability for
                  professional advice or services provided by advisors.
                </p>
              </div>
            </section>

            {/* 14. Termination */}
            <section id="termination" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                14. Termination
              </h2>

              <h3 className="text-lg font-semibold text-primary mb-3">
                By You
              </h3>
              <p className="text-foreground/80 mb-6">
                You may cancel your subscription and close your account at any
                time. Upon cancellation, you will retain access until the end of
                your current billing period. You can export your data before
                account closure.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                By Us
              </h3>
              <p className="text-foreground/80 mb-4">
                We may suspend or terminate your account if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>You breach these Terms.</li>
                <li>
                  You engage in prohibited uses as outlined in Section 7.
                </li>
                <li>
                  Your subscription payment cannot be collected after
                  reasonable attempts.
                </li>
                <li>
                  We are required to do so by law or regulatory order.
                </li>
                <li>
                  We reasonably believe your account poses a security risk.
                </li>
              </ul>
              <p className="text-foreground/80 mb-6">
                We will provide reasonable notice before termination where
                possible, except in cases of serious violations or security
                risks.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                Effect of Termination
              </h3>
              <p className="text-foreground/80">
                Upon termination, your right to access the Platform ceases
                immediately (or at the end of the billing period for voluntary
                cancellation). We will retain your data for 90 days to allow
                recovery if the termination was unintentional. After 90 days,
                financial structure data will be permanently deleted in
                accordance with our{" "}
                <Link
                  href="/privacy"
                  className="text-accent hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* 15. Dispute Resolution */}
            <section id="dispute-resolution" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                15. Dispute Resolution
              </h2>
              <p className="text-foreground/80 mb-4">
                These Terms are governed by and construed in accordance with the
                laws of New South Wales, Australia. Any dispute arising from
                these Terms or your use of the Platform will be subject to the
                exclusive jurisdiction of the courts of New South Wales.
              </p>
              <p className="text-foreground/80 mb-4">
                Before commencing legal proceedings, we encourage you to contact
                us to attempt to resolve the dispute informally. Please email us
                at{" "}
                <a
                  href="mailto:info@klaris.com.au"
                  className="text-accent hover:underline"
                >
                  info@klaris.com.au
                </a>{" "}
                with a detailed description of the issue. We will make a genuine
                effort to resolve disputes within 30 days.
              </p>
              <p className="text-foreground/80">
                If informal resolution is unsuccessful, either party may pursue
                formal dispute resolution through the courts of New South Wales.
              </p>
            </section>

            {/* 16. Changes to These Terms */}
            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                16. Changes to These Terms
              </h2>
              <p className="text-foreground/80 mb-4">
                We may update these Terms from time to time. When we make
                changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>
                  We will update the &quot;Last Updated&quot; date at the top of
                  these Terms.
                </li>
                <li>
                  For material changes, we will notify you via email or in-app
                  notification at least 30 days before the changes take effect.
                </li>
                <li>
                  Continued use of the Platform after changes take effect
                  constitutes acceptance of the updated Terms.
                </li>
                <li>
                  If you do not agree to the updated Terms, you may cancel your
                  subscription before the changes take effect.
                </li>
              </ul>
            </section>

            {/* 17. Contact Information */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                17. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about these Terms or need to contact us
                for any reason:
              </p>
              <div className="bg-secondary/20 rounded-lg p-6">
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
                  <strong>Entity:</strong> Krrisp Pty Ltd (ABN: 38 609 221 570 | ACN: 609 221 570)
                </p>
                <p className="text-foreground/80">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://klaris.com.au"
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
                Have Questions About Our Terms?
              </h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                If you have any questions about these Terms of Service or need
                clarification on any provision, our team is happy to help.
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
                  className="text-accent hover:text-primary hover:underline transition-colors font-semibold"
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

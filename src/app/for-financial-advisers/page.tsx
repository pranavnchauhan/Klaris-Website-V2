import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Eye,
  Users,
  RefreshCw,
  Shield,
  Server,
  Lock,
  Scale,
  Layers,
} from "lucide-react";
import GlowingIcon from "@/components/landing/GlowingIcon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute:
      "Klaris for Financial Advisers | Wealth Structure Visualisation Software Australia",
  },
  description:
    "Klaris helps Australian financial advisers visualise client wealth structures, trusts, SMSFs, and entity relationships for clearer advice and better client conversations.",
  alternates: { canonical: "https://klaris.com.au/for-financial-advisers" },
  openGraph: {
    title:
      "Klaris for Financial Advisers | Wealth Structure Visualisation Software Australia",
    description:
      "Klaris helps Australian financial advisers visualise client wealth structures, trusts, SMSFs, and entity relationships for clearer advice and better client conversations.",
    url: "https://klaris.com.au/for-financial-advisers",
  },
};

const BOOKING_URL = "https://cal.com/kd-pc/klaris-partnership-discussion";

interface FaqItem {
  question: string;
  answer: string[];
}

const faqItems: FaqItem[] = [
  {
    question:
      "Does Klaris replace my financial planning or portfolio management software?",
    answer: [
      "No. Klaris is a structure visualisation layer, not a replacement for your planning, portfolio, or compliance tools.",
      "You keep using your existing platforms for modelling, implementation, and reporting. Klaris gives you and your clients a shared visual map of how entities, trusts, SMSFs, and assets connect, so your advice conversations start with the full picture.",
    ],
  },
  {
    question:
      "How does Klaris work alongside a client's accountant?",
    answer: [
      "Klaris is designed for multi-advisor collaboration. You and the client's accountant can both work from the same wealth structure view, with role-based permissions controlling what each party sees.",
      "This means you can align on entity structures, succession plans, and risk areas without relying on email chains or separate spreadsheets. The client stays at the centre, and you each see what is relevant to your role.",
    ],
  },
  {
    question: "What does the one-month trial involve?",
    answer: [
      "For qualified financial advisory firms, we offer a free one-month trial so you can see Klaris with real client structures before you commit.",
      "You select a small set of representative client groups, we help you apply the KRSP Framework to build their structure maps, and your team can see how Klaris fits into reviews, strategy sessions, and client presentations.",
    ],
  },
];

function answerToText(paragraphs: string[]): string {
  return paragraphs.join("\n\n");
}

export default function ForFinancialAdvisersPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerToText(item.answer),
      },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Klaris for Financial Advisers",
    description:
      "Klaris helps Australian financial advisers visualise client wealth structures, trusts, SMSFs, and entity relationships for clearer advice and better client conversations.",
    url: "https://klaris.com.au/for-financial-advisers",
    publisher: {
      "@type": "Organization",
      name: "Klaris",
      url: "https://klaris.com.au",
    },
    inLanguage: "en-AU",
    audience: {
      "@type": "Audience",
      audienceType:
        "Australian financial advisers and advisory firms serving high net worth clients",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://klaris.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "For Financial Advisers",
          item: "https://klaris.com.au/for-financial-advisers",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="py-10 md:py-14 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Klaris for Financial Advisers
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Show your clients how their wealth is structured, not just how it is
            performing.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a free 1-month trial for your firm
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            The problem: advising on structures you cannot fully see
          </h2>
          <p className="text-muted-foreground mb-6">
            If you advise high net worth clients in Australia, you are often
            working with structures that span multiple trusts, companies, SMSFs,
            and personal holdings. But the full picture of how those entities
            connect is rarely in one place.
          </p>
          <p className="text-muted-foreground mb-4">
            In practice, this means:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              Relying on the client or their accountant to explain entity
              relationships before you can advise
            </li>
            <li>
              Discovering structures, loans, or beneficiary arrangements
              mid-review that change the advice
            </li>
            <li>
              Spending time in strategy meetings explaining what you think the
              structure looks like, when no one in the room has a single source
              of truth
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Without a shared, visual view of the client group, advice
            conversations start from incomplete information, and risk and
            succession discussions lack the clarity they need.
          </p>
          <p className="text-foreground font-medium">
            Klaris gives you and your clients a single, visual map of their
            wealth structures, built for Australian entity types and trust
            rules, so you can advise with the full picture in front of you.
          </p>
        </div>
      </section>

      {/* Solution / Platform Section */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-4 text-center">
              A structure visualisation layer for your advisory practice
            </h2>
            <p className="text-muted-foreground mb-4 text-center">
              Klaris is wealth structure visualisation software for Australian
              financial advisers who serve high net worth clients and complex
              family groups. You remain the primary adviser; Klaris gives you
              and your clients a shared, visual view of entities, relationships,
              and flows.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Built for Australian financial advisers
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  Focused on Australian structures: discretionary and unit
                  trusts, companies, SMSFs, inter-entity loans, testamentary
                  trusts, beneficiaries, and controllers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  Designed for advisory workflows: strategy meetings, annual
                  reviews, and client presentations all anchored around a living
                  structure map.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  B2B2C by design: your practice licenses Klaris, you bring it
                  to your high net worth clients as part of your service, not
                  the other way around.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Klaris Helps Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            How Klaris helps your advisory practice
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Eye} color="teal" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Advise with the full picture
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Every client group gets a single, visual map that shows:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    All entities, trusts, and SMSFs in the group
                  </li>
                  <li>
                    Ownership chains, trust interests, and inter-entity
                    relationships
                  </li>
                  <li>
                    Where control and economic benefit sit today, and where the
                    client intends them to go
                  </li>
                </ul>
                <p>
                  You walk into every meeting knowing how the structure works,
                  not guessing from memory or scattered documents.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={RefreshCw} color="blue" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Stronger annual reviews
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  When you can see what has changed in a client group since the
                  last review, the conversation shifts from reconstruction to
                  strategy.
                </p>
                <p>
                  You spend less time asking the client to re-explain their
                  structure and more time discussing risk, opportunity, and
                  next steps.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Users} color="emerald" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Align with the client's other advisers
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  High net worth clients typically have an accountant, a
                  solicitor, and sometimes multiple advisers. Klaris gives
                  everyone a shared view of the structure, with role-based
                  permissions controlling who sees what.
                </p>
                <p>
                  This means fewer misalignments, fewer surprises, and a
                  stronger advisory relationship for the client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-4 text-center">
            Security and compliance your practice can rely on
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-center">
            Your clients trust you with sensitive financial and personal
            information. Klaris is built to meet that standard.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Server} color="teal" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Australian hosting and data residency
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Production data is hosted in Australian data centres so client
                information remains within Australian jurisdiction. This
                supports your obligations under the Australian Privacy Act and
                your licensee requirements.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Lock} color="blue" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Encryption as standard
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                All connections to Klaris are encrypted in transit with modern
                TLS. Data at rest is encrypted using AES-256 encryption, the
                industry standard for protecting sensitive information.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Scale} color="emerald" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Privacy Act and APPs aligned
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Klaris is designed with the Australian Privacy Principles in
                mind. Our{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                explains how personal information is collected, stored, used,
                and deleted, and we support response processes consistent with
                the Notifiable Data Breaches scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            Key features for advisory practices
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Feature 1 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                1. One visual map for each client group
              </h3>
              <p className="text-muted-foreground mb-3">
                Each client group gets a living structure map that shows
                entities, ownership, control, and flows in one place.
              </p>
              <p className="text-muted-foreground">
                You can see trusts, companies, SMSFs, loans, and key parties at
                a glance, and the model stays current as the structure evolves
                over time.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                2. Built for multi-advisor collaboration
              </h3>
              <p className="text-muted-foreground mb-3">
                Klaris supports collaboration between financial advisers,
                accountants, lawyers, and the family where appropriate.
              </p>
              <p className="text-muted-foreground">
                You control who is invited into each structure and what they can
                see, so you can coordinate with other professionals without
                losing control of the client relationship.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                3. A better tool for succession and risk conversations
              </h3>
              <p className="text-muted-foreground mb-3">
                When you can show a client where control sits, where value
                flows, and what happens if a key person is no longer involved,
                succession conversations become concrete instead of abstract.
              </p>
              <p className="text-muted-foreground">
                Klaris helps you move from explaining what might happen to
                showing what the structure actually says today.
              </p>
            </div>

            {/* Feature 4 - KRSP */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                4. KRSP: a consistent framework for documenting structures
              </h3>
              <p className="text-muted-foreground mb-4">
                Klaris is built around the KRSP Framework: Know, Record,
                Structure, Protect.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Know
                  </span>
                  <span className="text-muted-foreground">
                    Identify every entity, trust, SMSF, and key party in the
                    client group.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Record
                  </span>
                  <span className="text-muted-foreground">
                    Capture details and relationships in one consistent place.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Structure
                  </span>
                  <span className="text-muted-foreground">
                    Map ownership, control, and flows clearly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Protect
                  </span>
                  <span className="text-muted-foreground">
                    Make sure the structure supports the succession and risk
                    outcomes your clients are aiming for.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Short FAQ Section */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-8 text-center">
            Common questions from advisory firms
          </h2>
          <div className="divide-y">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer text-left text-base font-medium text-foreground hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <svg
                    className="h-4 w-4 shrink-0 ml-3 text-muted-foreground transition-transform group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-3 space-y-3">
                  {item.answer.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-primary underline underline-offset-4 hover:text-accent transition-colors text-sm font-medium"
            >
              View all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 md:py-14 section-cta">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4 text-center">
            Give your clients a clearer way to understand their structures
          </h2>
          <div className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            <p className="mb-4 text-center">
              If your advice conversations would be stronger with a shared,
              visual view of the client group, Klaris is designed for you.
            </p>
            <ul className="text-left space-y-2 max-w-xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Start with a small set of high net worth client groups.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Build structure maps that stay current across reviews,
                  instead of rebuilding the picture each year.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Use those maps to make risk, succession, and strategy
                  conversations clearer for everyone involved.
                </span>
              </li>
            </ul>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a free 1-month trial for your firm
            </a>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/60 max-w-xl mx-auto text-center">
            See how Klaris fits into your advisory workflows using real client
            structures, with no obligation and no need to change your existing
            systems on day one.
          </p>
        </div>
      </section>
    </>
  );
}

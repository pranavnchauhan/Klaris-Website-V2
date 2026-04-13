import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Eye,
  Users,
  ClipboardCheck,
  Layers,
  Shield,
  Server,
  Lock,
  Scale,
} from "lucide-react";
import GlowingIcon from "@/components/landing/GlowingIcon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute:
      "Klaris for Accountants | Wealth Structure Visualisation Software Australia",
  },
  description:
    "Klaris is trust structure mapping software for Australian accountants. Visualise client trusts, SMSFs, companies, and inter-entity loans in one view. Built for high net worth client workflows.",
  alternates: { canonical: "https://klaris.com.au/for-accountants" },
  openGraph: {
    title:
      "Klaris for Accountants | Wealth Structure Visualisation Software Australia",
    description:
      "Klaris is trust structure mapping software for Australian accountants. Visualise client trusts, SMSFs, companies, and inter-entity loans in one view. Built for high net worth client workflows.",
    url: "https://klaris.com.au/for-accountants",
  },
  twitter: {
    title:
      "Klaris for Accountants | Wealth Structure Visualisation Software",
    description:
      "Give your firm and clients a clear, shared view of every trust, company, and SMSF. Built for Australian accountants serving high net worth clients.",
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
      "Is Klaris going to replace our practice management or tax software?",
    answer: [
      "No. Klaris sits alongside your existing systems.",
      "You continue to use your practice management, tax, and document tools for compliance and lodgement. Klaris sits on top as a structure visualisation layer that gives you and your clients clarity.",
    ],
  },
  {
    question:
      "How does Klaris fit into our engagements with high net worth clients?",
    answer: [
      "You use Klaris as part of your service.",
      "For a given client group, you and your team build the structure map from the documents and information you already hold, then you use that map in reviews, planning sessions, and succession discussions. Clients and other advisers can be invited in where it makes sense, but you stay at the centre of the relationship.",
    ],
  },
  {
    question: "What does the one-month trial involve?",
    answer: [
      "For qualified accounting and advisory firms, we offer a free one-month trial so you can see Klaris with real client structures before you commit.",
      "You select a small set of representative client groups, we help you apply the KRSP Framework to build their structure maps, and you can see how much time and friction that removes from your next round of reviews.",
    ],
  },
];

function answerToText(paragraphs: string[]): string {
  return paragraphs.join("\n\n");
}

export default function ForAccountantsPage() {
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
    name: "Klaris for Accountants",
    description:
      "Klaris is trust structure mapping software for Australian accountants. Visualise client trusts, SMSFs, companies, and inter-entity loans in one view. Built for high net worth client workflows.",
    url: "https://klaris.com.au/for-accountants",
    publisher: {
      "@type": "Organization",
      name: "Klaris",
      url: "https://klaris.com.au",
    },
    inLanguage: "en-AU",
    audience: {
      "@type": "Audience",
      audienceType:
        "Australian accountants and accounting firms serving high net worth clients",
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
          name: "For Accountants",
          item: "https://klaris.com.au/for-accountants",
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
            Klaris for Accountants
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Give your firm a single trust structure mapping tool for every
            client group. Built for Australian accountants serving high net
            worth clients.
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
            The problem: fragmented client wealth and hidden gaps
          </h2>
          <p className="text-muted-foreground mb-6">
            If you work with high net worth client groups in Australia, you
            already know the problem. Client structures live in too many places:
            trust deeds in shared drives, ASIC extracts in a different folder,
            SMSF details in another system, and working spreadsheets on
            individual desktops.
          </p>
          <p className="text-muted-foreground mb-4">
            Every year you piece the picture back together:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              Rebuilding structure diagrams from memory and old notes
            </li>
            <li>
              Chasing missing documents across email threads and filing
              cabinets
            </li>
            <li>
              Trying to explain a complex web of entities to clients who see
              only disconnected reports
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            This fragmentation wastes partner time, makes reviews harder than
            they need to be, and creates real succession risk if a key person
            leaves or retires.
          </p>
          <p className="text-foreground font-medium">
            Klaris gives your firm and your clients a single, visual map of
            their wealth structures, built for Australian tax and trust rules,
            so you can focus on advice instead of reconstruction.
          </p>
        </div>
      </section>

      {/* Solution / Platform Section */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-4 text-center">
              A structure visualisation layer for your entire client group
            </h2>
            <p className="text-muted-foreground mb-4 text-center">
              Klaris is wealth structure visualisation software for Australian
              accountants and financial advisers who serve high net worth
              clients and complex family groups. You remain the primary adviser;
              Klaris gives you and your clients a shared, visual view of
              entities, relationships, and flows.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Built for Australian accountants
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
                  Designed for firm workflows: partner review, manager
                  preparation, and client meetings all anchored around the same
                  living structure map.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  B2B2C by design: your firm licenses Klaris, you bring it to
                  your high net worth clients as part of your service, not the
                  other way around.
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
            How Klaris helps your firm
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Eye} color="teal" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                See the full picture before you advise
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Every group you look after gets a single, visual map that
                  shows:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    All entities in the group, with their roles and attributes
                  </li>
                  <li>
                    Shareholdings, trust interests, and inter-entity loans
                  </li>
                  <li>
                    Where control and economic benefit sit today, and where they
                    are intended to go
                  </li>
                </ul>
                <p>
                  You and your team can see the structure in minutes, not hours,
                  and you start every piece of work with the right picture in
                  front of you.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={ClipboardCheck} color="blue" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Reduce discovery time and rework
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Review season becomes cleaner when everyone works from the
                  same model instead of different versions of spreadsheets.
                </p>
                <p>
                  You spend less time asking clients to resend the same
                  documents and more time focusing on issues that matter.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Users} color="emerald" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Make complex conversations simpler for clients
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Clients often see your work through a tax return or a set of
                  financials. Klaris lets you show them their structures in a
                  way that is easy to understand: they can see entities, links,
                  and outcomes, not just line items.
                </p>
                <p>
                  That makes risk and opportunity conversations easier: what
                  happens if a controller dies, where loans sit, whether the
                  intended succession path is actually reflected in the
                  structure today.
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
            Security and compliance your partners can stand behind
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-center">
            Your clients trust you with their most sensitive information. Klaris
            is built to meet that standard.
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
                your own internal data residency policies.
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
            Key features for accounting firms
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Feature 1 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                1. One visual map for each client group
              </h3>
              <p className="text-muted-foreground mb-3">
                Instead of scattered documents, each client group gets a living
                structure map that your whole team can understand.
              </p>
              <p className="text-muted-foreground">
                You can see trusts, companies, SMSFs, loans, and key parties in
                one place, and you can update the model as the structure changes
                over time.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                2. Built for multi-advisor collaboration
              </h3>
              <p className="text-muted-foreground mb-3">
                Klaris supports collaboration between accountants, financial
                advisers, lawyers, and the family where appropriate.
              </p>
              <p className="text-muted-foreground">
                You control who is invited into each structure and what they can
                see, so you can bring other professionals into the picture
                without losing control of the relationship.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                3. A better review and succession tool for partners
              </h3>
              <p className="text-muted-foreground mb-3">
                Partners can open a single view and quickly understand how a
                client group is structured, where risks sit, and what has
                changed since the last review.
              </p>
              <p className="text-muted-foreground">
                When you begin planning succession within your own firm, Klaris
                helps new partners and senior managers understand client groups
                without starting from a blank page.
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
                    group.
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
            Common questions from accounting firms
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
            Give your partners and clients a clearer way to see their structures
          </h2>
          <div className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            <p className="mb-4 text-center">
              If you are spending too much time rebuilding client structure
              diagrams, or you worry about what would happen if a key partner
              left, Klaris is designed for you.
            </p>
            <ul className="text-left space-y-2 max-w-xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Bring a small set of high net worth client groups into Klaris.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Build structure maps once, then keep them current instead of
                  starting from scratch each year.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Use those maps to make reviews, advice, and succession
                  planning simpler and safer for everyone involved.
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
            See how Klaris fits into your current workflows using real client
            structures, with no obligation and no need to change your existing
            systems on day one.
          </p>
        </div>
      </section>
    </>
  );
}

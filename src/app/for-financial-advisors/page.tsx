import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Eye,
  RefreshCw,
  Search,
  Layers,
  Users,
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
      "Klaris for Financial Advisors | Wealth Structure Visualisation Software Australia",
  },
  description:
    "Klaris helps Australian financial advisors present a coherent wealth picture across SMSFs, discretionary trusts, testamentary trusts, and companies for clearer reviews and better advice.",
  alternates: { canonical: "https://klaris.com.au/for-financial-advisors" },
  openGraph: {
    title:
      "Klaris for Financial Advisors | Wealth Structure Visualisation Software Australia",
    description:
      "Klaris helps Australian financial advisors present a coherent wealth picture across SMSFs, discretionary trusts, testamentary trusts, and companies for clearer reviews and better advice.",
    url: "https://klaris.com.au/for-financial-advisors",
  },
  twitter: {
    title:
      "Klaris for Financial Advisors | Wealth Structure Visualisation Software",
    description:
      "Map every client structure in one visual view. Built for Australian financial advisors working with SMSFs, trusts, and complex family groups.",
  },
};

const BOOKING_URL = "https://cal.com/kd-pc/klaris-partnership-discussion";

interface FaqItem {
  question: string;
  answer: string[];
}

const faqItems: FaqItem[] = [
  {
    question: "Is Klaris a replacement for our planning or CRM software?",
    answer: [
      "No. Klaris does not replace your planning tools or CRM.",
      "It sits alongside them as a structure visualisation layer so you and your clients can see how SMSFs, trusts, companies, and personal entities fit together before you run numbers or scenarios.",
    ],
  },
  {
    question:
      "How does Klaris fit into our reviews with high net worth clients?",
    answer: [
      "You use Klaris as the starting point for reviews and strategy sessions.",
      "Before each meeting, you open the client's structure map, update any changes, and use that map to guide conversation about current strategy, risks, and future planning. Reports and projections that you produce from your other tools then sit on top of this shared understanding.",
    ],
  },
  {
    question:
      "What does the free one-month trial involve for our practice?",
    answer: [
      "For qualified advisory practices, Klaris offers a free one-month trial so you can see it in use with real client structures.",
      "You choose a small set of representative high net worth clients, we help you build their structure maps using the KRSP Framework, and you can see how that changes review preparation and client conversations before you make any long-term commitment.",
    ],
  },
];

function answerToText(paragraphs: string[]): string {
  return paragraphs.join("\n\n");
}

export default function ForFinancialAdvisorsPage() {
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
    name: "Klaris for Financial Advisors",
    description:
      "Klaris helps Australian financial advisors present a coherent wealth picture across SMSFs, discretionary trusts, testamentary trusts, and companies for clearer reviews and better advice.",
    url: "https://klaris.com.au/for-financial-advisors",
    publisher: {
      "@type": "Organization",
      name: "Klaris",
      url: "https://klaris.com.au",
    },
    inLanguage: "en-AU",
    audience: {
      "@type": "Audience",
      audienceType:
        "Australian financial advisors and advisory practices serving high net worth clients",
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
          name: "For Financial Advisors",
          item: "https://klaris.com.au/for-financial-advisors",
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
            Klaris for Financial Advisors
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Give clients a clear, accurate view of their wealth structures.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a free 1-month trial for your practice
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            The reality: you cannot advise on what you cannot see clearly
          </h2>
          <p className="text-muted-foreground mb-6">
            If you advise Australian high net worth clients, you know how hard
            it is to present a coherent picture of their affairs. Client
            information lives in multiple systems and folders: SMSF reports in
            one place, discretionary trust deeds in another, company registers
            somewhere else, and personal assets often only in your notes.
          </p>
          <p className="text-muted-foreground mb-4">
            The result is predictable:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              Annual reviews take longer than they should because you are
              rebuilding the big picture from fragments
            </li>
            <li>
              Conversations about strategy are harder when clients cannot see
              how everything connects
            </li>
            <li>
              Entities get missed in planning, which can lead to advice gaps
              and unintended risk
            </li>
          </ul>
          <p className="text-foreground font-medium">
            Klaris gives you and your clients a single, visual map of their
            wealth structures so you can spend more time advising and less time
            reconstructing.
          </p>
        </div>
      </section>

      {/* Solution / Platform Section */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-4 text-center">
              A structure visualisation platform for Australian advisory
              practices
            </h2>
            <p className="text-muted-foreground mb-4 text-center">
              Klaris is wealth structure visualisation software built in
              Australia for financial advisors and advisory practices who work
              with SMSFs, discretionary trusts, testamentary trusts, and complex
              corporate structures. You remain the advice provider; Klaris helps
              you show clients what their world actually looks like.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Built for the way advisors think and talk
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  Works with the structures you use daily: SMSFs, discretionary
                  trusts, unit trusts, testamentary trusts, companies, and
                  personal entities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  Designed for planning and review conversations, not just
                  compliance reporting.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">
                  B2B2C by design: your practice licenses Klaris, you use it
                  with your high net worth clients as part of your review and
                  strategy process.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Klaris Supports Better Advice */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            How Klaris supports better advice
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Eye} color="teal" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Present a coherent wealth picture at every review
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Instead of jumping between reports and account summaries, you
                  open one visual map that shows the client's structure:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Where the SMSF sits in relation to family trusts and
                    companies
                  </li>
                  <li>
                    Which entities hold which assets and liabilities
                  </li>
                  <li>
                    Who controls what, and where beneficiaries and successors
                    are intended to benefit
                  </li>
                </ul>
                <p>
                  Clients can see the whole picture at once, which makes it much
                  easier to explain why you are recommending particular
                  strategies or changes.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={RefreshCw} color="blue" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Reduce the time and cognitive load of annual reviews
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Annual reviews often start with rebuilding the structure in
                  your head before you can address current strategy. With
                  Klaris, the structure is already documented and visual, so you
                  focus on what has changed, what is planned, and where risks or
                  opportunities have emerged.
                </p>
                <p>
                  That shortens review prep time and makes the meetings
                  themselves more focused and productive.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Search} color="emerald" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Catch missed entities before they become advice gaps
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  When you can see every entity and relationship in one place,
                  it becomes easier to identify missing pieces.
                </p>
                <p>
                  You can spot structures that are not reflected in existing
                  documentation, find entities that lack clear roles in the
                  current plan, and raise those issues before they turn into
                  problems for the client or their estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            Features advisors can rely on
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Feature 1 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                1. Visual maps for SMSFs and related entities
              </h3>
              <p className="text-muted-foreground mb-3">
                Klaris lets you place the SMSF in context so it is not viewed in
                isolation.
              </p>
              <p className="text-muted-foreground">
                You can show how the SMSF interacts with related companies and
                trusts, where contributions and distributions flow, and how that
                supports the client's long-term objectives.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                2. Support for discretionary and testamentary trust planning
              </h3>
              <p className="text-muted-foreground mb-3">
                For clients with discretionary and testamentary trusts, Klaris
                helps you make the structure tangible.
              </p>
              <p className="text-muted-foreground">
                You can map trustees, appointors, beneficiaries, and key control
                mechanisms so that discussions about family protection,
                flexibility, and succession are based on a clear picture rather
                than abstract descriptions.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                3. Multi-advisor collaboration without losing control
              </h3>
              <p className="text-muted-foreground mb-3">
                Where appropriate, Klaris supports collaboration between the
                advisor, the client's accountant, their lawyer, and the family.
              </p>
              <p className="text-muted-foreground">
                You decide who is invited into each structure and what they can
                see, so everyone works from the same map while you retain
                oversight of the advice relationship.
              </p>
            </div>

            {/* Feature 4 - KRSP */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                4. KRSP: a framework for documenting client structures
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
                    Identify every relevant entity, trust, SMSF, and
                    individual.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Record
                  </span>
                  <span className="text-muted-foreground">
                    Capture the details and relationships accurately in one
                    place.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Structure
                  </span>
                  <span className="text-muted-foreground">
                    Show ownership, control, and flows clearly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary shrink-0 w-20">
                    Protect
                  </span>
                  <span className="text-muted-foreground">
                    Ensure that structures support the intended succession and
                    protection outcomes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Short FAQ Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-8 text-center">
            Common questions from advisory practices
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
            Help clients see what you already know about their structures
          </h2>
          <div className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            <p className="mb-4 text-center">
              Your clients trust you with their SMSFs, their family trusts,
              their testamentary arrangements, and their personal wealth. Klaris
              helps you show them the structures you already understand in a way
              that is clear, accurate, and practical for decision making.
            </p>
            <ul className="text-left space-y-2 max-w-xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Bring a selected group of high net worth clients into Klaris.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Build complete structure maps once, then maintain them instead
                  of starting from scattered documents each year.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0">-</span>
                <span>
                  Use those maps to conduct shorter, clearer, and more focused
                  reviews that highlight your value as an advisor.
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
              Book a free 1-month trial for your practice
            </a>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/60 max-w-xl mx-auto text-center">
            See how Klaris fits into your existing review and advice process
            using real client structures, with no need to change your core
            systems on day one.
          </p>
        </div>
      </section>
    </>
  );
}

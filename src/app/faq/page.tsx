import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute:
      "FAQ | Klaris - Wealth Structure Visualisation Software Australia",
  },
  description:
    "Find answers about Klaris, the Australian wealth structure visualisation platform for accountants and financial advisers working with high net worth clients.",
  alternates: { canonical: "https://klaris.com.au/faq" },
  openGraph: {
    title: "FAQ | Klaris - Wealth Structure Visualisation Software Australia",
    description:
      "Find answers about Klaris, the Australian wealth structure visualisation platform for accountants and financial advisers working with high net worth clients.",
    url: "https://klaris.com.au/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Klaris - Wealth Structure Visualisation Software Australia",
    description:
      "Find answers about Klaris, the Australian wealth structure visualisation platform for accountants and financial advisers working with high net worth clients.",
    images: ["https://klaris.com.au/og-image.png"],
  },
};

interface FaqItem {
  question: string;
  answer: string[];
}

interface FaqSection {
  sectionTitle: string;
  items: FaqItem[];
}

const faqSections: FaqSection[] = [
  {
    sectionTitle: "About Klaris",
    items: [
      {
        question: "What is Klaris?",
        answer: [
          "Klaris is wealth structure visualisation software built in Australia to give a single, visual source of truth for trusts, companies, SMSFs, and personal assets. It maps how entities connect, who controls what, and where value ultimately flows, so complex client structures become easy to understand.",
          "Klaris is built around the KRSP Framework - Know, Record, Structure, Protect - so every entity and relationship is captured, mapped, and safeguarded in a consistent way.",
        ],
      },
      {
        question: "Is Klaris wealth structuring or advice software?",
        answer: [
          "No. Klaris does not create structures, execute transactions, or give financial, tax, or legal advice. It is a wealth structure mapping platform that helps you and your clients see the existing arrangements clearly so you can give better, more informed advice.",
        ],
      },
      {
        question: "Who is Klaris designed for?",
        answer: [
          "Klaris is designed for Australian accountants and financial advisers who serve high net worth clients and complex family groups. It is a B2B2C model: you use Klaris inside your firm and roll it out to your high net worth clients as part of your service.",
        ],
      },
      {
        question:
          "How is Klaris different from spreadsheets, CRMs, or document folders?",
        answer: [
          "Spreadsheets, CRMs, and folders hold pieces of information, but they do not show the whole structure in one place. Klaris acts as a wealth structure visualisation layer across your existing systems, so you can see entities, trusts, SMSFs, loans, and relationships in a single, living diagram instead of a collection of files.",
        ],
      },
      {
        question:
          "Does Klaris replace our practice management, tax, or planning software?",
        answer: [
          "No. Klaris sits alongside your existing practice management, tax, and financial planning tools. You keep using those systems for compliance and implementation; Klaris gives you wealth visibility and structure diagrams that make your work and client conversations easier.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Klaris for accountants and advisers",
    items: [
      {
        question: "How does Klaris help accountants and advisers in practice?",
        answer: [
          "Klaris pulls together all of a client group's entities, trusts, SMSFs, and key assets into one visual wealth map. This reduces discovery time, surfaces gaps earlier, and makes strategy and risk conversations with high net worth clients clearer and more concrete.",
        ],
      },
      {
        question: "What types of structures can I visualise with Klaris?",
        answer: [
          "You can map Australian discretionary and unit trusts, companies, SMSFs, individual holdings, inter-entity loans, and key estate-planning components such as testamentary trusts and backup beneficiaries. The platform is built around Australian tax and trust concepts, not generic global templates.",
        ],
      },
      {
        question:
          "Can multiple advisers and firms collaborate on the same client structures?",
        answer: [
          "Yes. Klaris is designed for multi-advisor collaboration, so accountants, financial advisers, lawyers, and the family can all work from the same wealth structure view where appropriate. You control access through roles and permissions, so each party only sees what they should.",
        ],
      },
      {
        question:
          "How long does it typically take to get a client group set up?",
        answer: [
          "Once core documents are available, most firms can build an initial structure map for a typical high net worth family within hours, not weeks. Because Klaris acts as a wealth structure visualisation tool, you update a living model at each review instead of rebuilding the picture from scratch.",
        ],
      },
      {
        question:
          "Will Klaris force us to change our advice or review process?",
        answer: [
          "No. Klaris is intentionally lightweight on process and heavy on clarity. You keep your own review cadence, advice documents, and internal workflows; Klaris gives you a clean, shared wealth structure map to anchor those conversations.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Security, privacy, and compliance",
    items: [
      {
        question: "Where is Klaris hosted and where is data stored?",
        answer: [
          "Klaris production data is hosted in Australian data centres, so client information remains within Australian jurisdiction. This aligns with expectations around data residency for professional services firms working under Australian law.",
        ],
      },
      {
        question:
          "How does Klaris secure sensitive financial and personal information?",
        answer: [
          "All connections to Klaris are encrypted in transit with modern TLS, and data is encrypted at rest using industry-standard algorithms. Access is protected with strong authentication and role-based permissions so only authorised users inside your firm and client group can see structures.",
        ],
      },
      {
        question:
          "Is Klaris aligned with the Australian Privacy Act and the APPs?",
        answer: [
          "Klaris has been designed with the Australian Privacy Principles in mind, and our Privacy Policy sets out how personal information is collected, stored, used, and deleted. We also support incident response in line with the Notifiable Data Breaches scheme.",
        ],
      },
      {
        question: "Who operates Klaris legally?",
        answer: [
          "Klaris is operated by Krrisp Pty Ltd (ABN 38 609 221 570, ACN 609 221 570), an Australian company trading as Klaris AI. Your contractual relationship, governing law, and rights are described in our Terms of Service and Privacy Policy.",
        ],
      },
      {
        question:
          "Can we export client structure data if we leave Klaris?",
        answer: [
          "Yes. You can request exports of structure data so you retain a record of entities, relationships, and key attributes for your files. Data retention and deletion are handled under our Privacy Policy and Terms, including minimum retention periods for financial records.",
        ],
      },
      {
        question:
          "Does Klaris or Krrisp Pty Ltd provide financial, legal, or tax advice?",
        answer: [
          "No. Klaris is wealth visibility software only and does not provide financial, legal, or tax advice. Any decisions based on information in Klaris should be made by you and your clients in consultation with appropriately licensed or qualified professionals.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Your high net worth clients",
    items: [
      {
        question:
          "How do high net worth clients actually experience Klaris?",
        answer: [
          "Your high net worth clients see a clean, visual map of their wealth structures instead of a collection of reports and spreadsheets. This makes it easier for them to understand where everything sits, why they have certain entities, and what your advice is aiming to protect.",
        ],
      },
      {
        question: "Do high net worth clients sign up directly with Klaris?",
        answer: [
          "Today Klaris is offered through professional firms, not as a direct-to-consumer subscription. You bring Klaris to your clients as part of your service, and we support you in designing how it fits into your engagements.",
        ],
      },
      {
        question: "Can families and successors get their own logins?",
        answer: [
          "Yes. You can invite selected family members into Klaris with appropriate access levels so successors and decision-makers can understand the structure ahead of major events. That reduces confusion and stress when those events occur.",
        ],
      },
      {
        question:
          "What problems does Klaris solve for high net worth families?",
        answer: [
          "For families, Klaris reduces the fog around structures by replacing scattered documents with a single, visual wealth map. That clarity supports better estate planning, smoother handovers, and more confident decision-making with their advisers.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Pricing and partnerships",
    items: [
      {
        question: "How does Klaris pricing work for firms?",
        answer: [
          "Klaris uses custom pricing based on how many client structures you onboard and how complex those structures are. This means a firm with a small number of very complex groups and a firm with many simpler groups can both have pricing that reflects their real usage.",
        ],
      },
      {
        question:
          "Do you have special pricing for accountants and advisers?",
        answer: [
          "Yes. Klaris is built to be delivered through accountants and financial advisers, so we offer partnership-oriented pricing for firms that roll Klaris out to their high net worth client base. Qualified accounting and advisory firms can also access a one-month free trial so you can see Klaris with real client structures before committing.",
        ],
      },
      {
        question:
          "What is the business case for adopting Klaris in our firm?",
        answer: [
          "Firms typically see value in hours saved on discovery and annual reviews, fewer missed entities or relationships, and more compelling conversations with high net worth clients about risk and legacy. Klaris is a wealth structure visibility layer that supports better service, clearer documentation, and a stronger perception of your firm's thoroughness.",
        ],
      },
      {
        question: "How do we discuss pricing and next steps?",
        answer: [
          "The best way to discuss pricing is to book a short session where we look at the number and complexity of client groups you might onboard. We then propose structure-based pricing that reflects the time and risk reduction Klaris can create in your practice.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Getting started",
    items: [
      {
        question: "What do you need from us to start a pilot?",
        answer: [
          "For a pilot, we usually start with a small number of representative high net worth client groups and their core documents: trust deeds, company constitutions, SMSF details, and a high-level entity list. Together we build initial wealth structure maps, applying the KRSP Framework so your team can see exactly how Klaris would sit inside your existing workflows.",
        ],
      },
      {
        question: "How can we see Klaris in action before committing?",
        answer: [
          "You can book a personalised demo using anonymised examples or high-level versions of your own client structures. During your one-month trial, we help you apply the KRSP Framework across a small set of client groups so your team can feel the difference in clarity and review time.",
        ],
      },
    ],
  },
];

function flattenFaqItems(sections: FaqSection[]): FaqItem[] {
  return sections.flatMap((s) => s.items);
}

function answerToText(paragraphs: string[]): string {
  return paragraphs.join("\n\n");
}

export default function FaqPage() {
  const allItems = flattenFaqItems(faqSections);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerToText(item.answer),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="py-10 md:py-14 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Find answers about Klaris, the Australian wealth structure
            visualisation platform for accountants and financial advisers
            working with high net worth clients.
          </p>
        </div>
      </section>

      {/* Reviewed-by byline */}
      <section className="py-6 border-b">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-sm text-muted-foreground text-center">
            Reviewed by{" "}
            <span className="font-medium text-primary">Pranav Chauhan</span>,
            Founder of Klaris AI, updated April 2026
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-5">
          {faqSections.map((section, sIdx) => (
            <div key={sIdx} className={sIdx > 0 ? "mt-12" : ""}>
              <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
                {section.sectionTitle}
              </h2>
              <div className="divide-y">
                {section.items.map((item, iIdx) => (
                  <details
                    key={`${sIdx}-${iIdx}`}
                    className="group py-4"
                  >
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
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-14 section-cta">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4 text-center">
            Ready to bring clarity to your client structures?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-center">
            Book a personalised demo and see how Klaris helps accountants and
            advisers visualise complex wealth structures.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://cal.com/kd-pc/klaris-partnership-discussion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Demo
            </a>
          </Button>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2 text-center">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4 text-center">
            We are here to help. Reach out and we will get back to you within
            24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">Learn About Klaris</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

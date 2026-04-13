import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Layers,
  GitBranch,
  Shield,
  Users,
  Eye,
  MapPin,
} from "lucide-react";
import GlowingIcon from "@/components/landing/GlowingIcon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute:
      "For Families | Klaris - Wealth Structure Visualisation for High Net Worth Families",
  },
  description:
    "Klaris gives high net worth families a single, visual map of their trusts, companies, SMSFs, and assets. Understand your family wealth structure and work more confidently with your advisers.",
  alternates: { canonical: "https://klaris.com.au/for-families" },
  openGraph: {
    title:
      "For Families | Klaris - Wealth Structure Visualisation for High Net Worth Families",
    description:
      "Klaris gives high net worth families a single, visual map of their trusts, companies, SMSFs, and assets. Understand your family wealth structure and work more confidently with your advisers.",
    url: "https://klaris.com.au/for-families",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "For Families | Klaris - Wealth Structure Visualisation for High Net Worth Families",
    description:
      "Klaris gives high net worth families a single, visual map of their trusts, companies, SMSFs, and assets. Understand your family wealth structure and work more confidently with your advisers.",
  },
};

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How does my family get access to Klaris?",
    answer:
      "Klaris is introduced to families through their accountant or financial adviser. Your adviser sets up the wealth structure map and invites family members with appropriate access. If your adviser does not yet use Klaris, contact us and we can discuss the best way to get started.",
  },
  {
    question:
      "Can I see everything in my family's structure, or only certain parts?",
    answer:
      "Your accountant or adviser controls access levels. Each family member sees what is appropriate for their role - a successor might see the full structure, while a younger family member might see a summary view. Access is managed through roles and permissions.",
  },
  {
    question: "Does Klaris give financial or legal advice?",
    answer:
      "No. Klaris is wealth structure visualisation software only. It shows you what your family holds and how it is structured. Any decisions based on that information should be made with your accountant, financial adviser, or solicitor.",
  },
  {
    question: "Is our family's financial information secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, stored in Australian data centres, and protected with role-based access controls. Klaris is designed with the Australian Privacy Act and the Australian Privacy Principles in mind.",
  },
  {
    question: "What if our accountant or adviser doesn't use Klaris yet?",
    answer:
      "You can share the Klaris website with your adviser or contact us directly. We work with accounting and advisory firms across Australia and can discuss how Klaris would fit into their existing practice.",
  },
];

export default function ForFamiliesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Klaris for Families",
    description:
      "Klaris gives high net worth families a single, visual map of their trusts, companies, SMSFs, and assets.",
    url: "https://klaris.com.au/for-families",
    publisher: {
      "@type": "Organization",
      name: "Klaris",
      url: "https://klaris.com.au",
    },
    inLanguage: "en-AU",
    audience: {
      "@type": "Audience",
      audienceType:
        "High net worth Australian families, successors, and family decision-makers",
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
          name: "For Families",
          item: "https://klaris.com.au/for-families",
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
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Your Family Wealth, Mapped in One Place
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Complex structures with trusts, companies, and SMSFs can be
            difficult to understand - even for the families who own them. Klaris
            gives you a single, clear visual map of everything your family
            holds, so you always know where things stand.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book a personalised demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            Most families manage their wealth across scattered documents
          </h2>
          <p className="text-muted-foreground mb-6">
            When your family holds assets through multiple trusts, a
            self-managed super fund, and several companies, keeping track of
            everything becomes genuinely difficult. Documents live in different
            places. Different advisers hold different pieces. Successors and
            younger family members often have little visibility into how it all
            connects.
          </p>
          <p className="text-muted-foreground">
            When something significant happens - a health event, an estate
            matter, or a major financial decision - families are left scrambling
            to understand what they own and how it is structured. That confusion
            creates stress and delay at exactly the wrong moment.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            One visual map of your entire family wealth structure
          </h2>
          <p className="text-muted-foreground mb-6">
            Klaris is introduced to your family through your accountant or
            financial adviser. Together, you build a clear, visual map of your
            family wealth structure - every trust, company, SMSF, individual
            holding, and key relationship shown in one place.
          </p>
          <p className="text-muted-foreground">
            You can see who controls what, who the beneficiaries are, how
            entities connect, and where value flows. When your adviser updates
            the map at your annual review, you have a living record rather than
            a pile of documents that goes out of date the moment it is printed.
          </p>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            What your family can see in Klaris
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="flex justify-center">
                <GlowingIcon icon={Layers} color="teal" size="sm" />
              </div>
              <h3 className="text-base font-semibold text-primary text-center">
                Every entity in one place
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Discretionary trusts, unit trusts, companies, SMSFs, and
                individual holdings all on one map.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <GlowingIcon icon={GitBranch} color="blue" size="sm" />
              </div>
              <h3 className="text-base font-semibold text-primary text-center">
                Connections between entities
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                See exactly how your trusts, companies, and super funds relate
                to each other.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <GlowingIcon icon={Eye} color="emerald" size="sm" />
              </div>
              <h3 className="text-base font-semibold text-primary text-center">
                Who controls what
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Directors, trustees, appointors, and beneficial owners shown
                clearly.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <GlowingIcon icon={Users} color="amber" size="sm" />
              </div>
              <h3 className="text-base font-semibold text-primary text-center">
                Beneficiaries and succession
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Who benefits from each trust and what happens when
                circumstances change.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <GlowingIcon icon={Shield} color="violet" size="sm" />
              </div>
              <h3 className="text-base font-semibold text-primary text-center">
                Estate planning components
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Testamentary trusts, backup beneficiaries, and other estate
                planning elements included.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <GlowingIcon icon={Users} color="rose" size="sm" />
              </div>
              <h3 className="text-base font-semibold text-primary text-center">
                Shared access for the whole family
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Invite successors and relevant family members with appropriate
                access levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Successors Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            Clarity for successors before they need it
          </h2>
          <p className="text-muted-foreground mb-6">
            One of the most common challenges in family wealth is that
            successors and adult children have little understanding of the
            structure they will one day steward. They know the family has trusts
            and a super fund, but they do not know how it all fits together or
            why decisions were made.
          </p>
          <p className="text-muted-foreground mb-6">
            Klaris gives successors a clear picture of the family wealth
            structure before a major event forces the conversation. That
            preparation reduces confusion, builds confidence, and makes
            transitions far smoother for everyone involved.
          </p>
          <p className="text-muted-foreground">
            Your accountant or adviser controls what each family member can see,
            so access is always appropriate to the situation.
          </p>
        </div>
      </section>

      {/* Working with Advisers Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            A shared view for your family and your advisers
          </h2>
          <p className="text-muted-foreground mb-6">
            Klaris is designed to sit alongside your existing advisory
            relationships. Your accountant, financial adviser, and solicitor can
            all work from the same wealth structure map where appropriate, so
            everyone is working from the same information.
          </p>
          <p className="text-muted-foreground mb-6">
            This reduces the risk of gaps - situations where one adviser does
            not know about an entity or arrangement that another one manages. It
            also makes your annual reviews more productive, because the map is
            already up to date before the meeting starts.
          </p>
          <p className="text-muted-foreground">
            Klaris is introduced and managed through your professional firm. If
            your accountant or adviser does not yet use Klaris, you can{" "}
            <Link
              href="/for-accountants"
              className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              share this page with them
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              contact us directly
            </Link>{" "}
            to discuss.
          </p>
        </div>
      </section>

      {/* Built for Australia Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-6 text-center">
            Built specifically for Australian trust law and SMSF
          </h2>
          <p className="text-muted-foreground mb-6">
            Klaris is built in Australia for Australian trust structures. The
            platform understands Australian discretionary trusts, unit trusts,
            self-managed super funds, and the estate planning concepts that
            matter under Australian law - not generic global templates adapted
            for the Australian market.
          </p>
          <p className="text-muted-foreground">
            Your data is stored in Australian data centres and managed under the
            Australian Privacy Act. Klaris is operated by Krrisp Pty Ltd (ABN
            38 609 221 570), an Australian company.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-8 text-center">
            Common questions from families
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
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 section-cta">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4 text-center">
            Ready to see your family wealth structure clearly?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-center">
            Talk to us about how Klaris can give your family a single, clear map
            of everything you hold. We work through your existing accounting or
            advisory firm, or we can connect you with a firm that uses Klaris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book a demo
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/faq">Read the FAQ</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Are you an accountant or adviser?{" "}
            <Link
              href="/for-accountants"
              className="underline underline-offset-4 hover:text-primary-foreground/80 transition-colors"
            >
              See how Klaris works for accounting firms
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

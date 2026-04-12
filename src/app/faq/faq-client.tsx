"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

const categories: FaqCategory[] = [
  {
    id: "visualization",
    label: "Wealth Visualization & KRSP",
    items: [
      {
        question: "What is KRSP and how does the wealth visualization work?",
        answer:
          "KRSP (Klaris Risk & Structure Profile) is our proprietary framework that analyses your entire financial structure, including trusts, companies, SMSFs, and personal assets. It then generates an interactive graph showing how everything connects. You can see ownership chains, beneficial interests, and potential gaps at a glance.",
      },
      {
        question: "Can Klaris handle complex multi-entity structures?",
        answer:
          "Absolutely. Klaris is designed for complexity. Whether you have a family trust distributing to a bucket company, an SMSF with related-party investments, or a corporate group with cross-holdings, Klaris maps it all in one interactive view. There is no limit to the number of entities you can add.",
      },
      {
        question: "How does the KRSP score help me?",
        answer:
          "Your KRSP score is a health check for your financial structure. It highlights gaps in documentation, missing estate plans, outdated beneficiary nominations, and structural risks. Think of it as a credit score, but for how well your wealth is organised and protected.",
      },
    ],
  },
  {
    id: "collaboration",
    label: "Advisor Collaboration & Sharing",
    items: [
      {
        question: "Can my accountant and financial advisor both access Klaris?",
        answer:
          "Yes. Klaris supports multi-advisor collaboration with role-based access. You can invite your accountant, financial planner, solicitor, and family members, each with tailored permissions. Advisors only see what you authorise them to see.",
      },
      {
        question: "How does sharing work between family members?",
        answer:
          "You control who sees what. Family members can be invited with view-only access, edit access, or full admin rights. This is particularly useful for estate planning. You can share the structure with your adult children or power of attorney without giving them access to sensitive financial details.",
      },
      {
        question: "Can advisors use Klaris for multiple clients?",
        answer:
          "Yes. We offer advisor dashboards with volume licensing for accountants, financial planners, and solicitors who want to use Klaris across their entire client base. Each client gets their own secure workspace. Contact us for advisor pricing.",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Australian Compliance",
    items: [
      {
        question: "Where is my data stored?",
        answer:
          "All data is stored in Australian data centres. We use bank-grade AES-256 encryption at rest and TLS 1.3 in transit. Your financial data never leaves Australia and is never used to train AI models.",
      },
      {
        question: "Is Klaris compliant with Australian privacy laws?",
        answer:
          "Yes. Klaris is fully compliant with the Australian Privacy Act 1988, the Australian Privacy Principles (APPs), and we follow the OAIC guidelines for handling sensitive financial information. We also comply with the Notifiable Data Breaches scheme.",
      },
      {
        question: "What happens if I cancel my account?",
        answer:
          "Your data remains encrypted and accessible to you for 90 days after cancellation. After that, it is permanently and irreversibly deleted from our servers. You can export all your data at any time in standard formats (PDF, CSV, JSON).",
      },
    ],
  },
  {
    id: "tax-estate",
    label: "Tax & Estate Planning",
    items: [
      {
        question: "Can Klaris help with tax planning?",
        answer:
          "Klaris is a visibility and documentation tool. It helps you and your advisors see your full structure, which is the essential first step for effective tax planning. While Klaris does not provide tax advice, it gives your accountant the complete picture they need to identify opportunities and risks.",
      },
      {
        question: "How does Klaris support estate planning?",
        answer:
          "Klaris maps your entire estate structure: wills, powers of attorney, beneficiary nominations, trust deeds, and succession plans. It highlights gaps (like a missing binding death benefit nomination on your SMSF) and ensures every entity has a clear succession path.",
      },
      {
        question:
          "Can I track beneficiary nominations across all my entities?",
        answer:
          "Yes. One of the most common blind spots in Australian wealth structures is outdated or missing beneficiary nominations, especially across super funds and insurance policies. Klaris tracks all nominations in one place and alerts you when they need updating.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Getting Started",
    items: [
      {
        question: "How much does Klaris cost?",
        answer:
          "We offer flexible pricing based on complexity. Book a demo to discuss your needs and we will provide a tailored quote. We offer plans for individuals, families, and advisors with volume licensing.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "We offer a personalised demo where we walk you through the platform using your type of structure. This gives you a much better sense of the value than a generic free trial. Book a demo and we will show you exactly how Klaris works for your situation.",
      },
      {
        question: "Do I need technical knowledge to use Klaris?",
        answer:
          "Not at all. Klaris is designed for everyday Australians, not technologists. If you can use online banking, you can use Klaris. Our onboarding team walks you through the setup, and the interface is intuitive and visual. No spreadsheets, no jargon.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Book a demo using the button below. We will walk you through the platform, discuss your structure, and set up your account. Most clients are up and running within a week.",
      },
      {
        question: "Can I import my existing financial data?",
        answer:
          "Yes. You can import data from spreadsheets (CSV/Excel), and our onboarding team can help you migrate information from your existing records. We also integrate with common accounting and financial planning platforms.",
      },
      {
        question: "What support do you offer?",
        answer:
          "All plans include email support with a response time of under 24 hours. Premium plans include priority phone support and a dedicated account manager. We also provide comprehensive help documentation and video tutorials.",
      },
      {
        question:
          "Is Klaris suitable for self-managed super funds (SMSFs)?",
        answer:
          "Klaris is ideal for SMSFs. You can map fund members, investment strategies, beneficiary nominations, insurance within super, pension streams, and compliance requirements, all in one visual structure that your SMSF auditor and advisor can access.",
      },
    ],
  },
];

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState("visualization");

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center">
            Everything You Need to Know
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Find answers about Klaris AI wealth planning software: security,
            compliance, advisor collaboration, estate planning, and getting started.
          </p>
        </div>
      </section>

      {/* Expert Review Byline */}
      <section className="py-6 border-b">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-sm text-muted-foreground text-center">
            Reviewed by{" "}
            <span className="font-medium text-primary">Pranav Chauhan</span>,
            Founder &amp; CEO of Klaris AI, updated March 2026
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          {currentCategory && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-primary mb-6 text-center">
                {currentCategory.label}
              </h2>
              <div className="w-full divide-y">
                {currentCategory.items.map((item, index) => (
                  <details
                    key={`${currentCategory.id}-${index}`}
                    className="group py-4"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-left text-base font-medium text-foreground hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <ChevronDown className="h-4 w-4 shrink-0 ml-2 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 section-cta">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4 text-center">
            Ready to See Your Full Financial Picture?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-center">
            Book a personalised demo and discover how Klaris brings clarity to
            your wealth structure.
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
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2 text-center">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4 text-center">
            We&rsquo;re here to help. Reach out and we&rsquo;ll get back to you
            within 24 hours.
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

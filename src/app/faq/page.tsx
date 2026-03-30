import type { Metadata } from "next";
import FaqClient from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ - Klaris AI | Wealth Planning Software Australia Questions",
  description:
    "Answers about Klaris AI wealth planning software — pricing, security, Australian compliance, estate planning, advisor collaboration, and getting started.",
  alternates: { canonical: "https://klaris.com.au/faq" },
};

const faqItems = [
  {
    question: "What is KRSP and how does the wealth visualization work?",
    answer:
      "KRSP (Klaris Risk & Structure Profile) is our proprietary framework that analyses your entire financial structure — trusts, companies, SMSFs, and personal assets — then generates an interactive graph showing how everything connects. You can see ownership chains, beneficial interests, and potential gaps at a glance.",
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
  {
    question: "Can my accountant and financial advisor both access Klaris?",
    answer:
      "Yes. Klaris supports multi-advisor collaboration with role-based access. You can invite your accountant, financial planner, solicitor, and family members — each with tailored permissions. Advisors only see what you authorise them to see.",
  },
  {
    question: "How does sharing work between family members?",
    answer:
      "You control who sees what. Family members can be invited with view-only access, edit access, or full admin rights. This is particularly useful for estate planning — you can share the structure with your adult children or power of attorney without giving them access to sensitive financial details.",
  },
  {
    question: "Can advisors use Klaris for multiple clients?",
    answer:
      "Yes. We offer advisor dashboards with volume licensing for accountants, financial planners, and solicitors who want to use Klaris across their entire client base. Each client gets their own secure workspace. Contact us for advisor pricing.",
  },
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
  {
    question: "Can Klaris help with tax planning?",
    answer:
      "Klaris is a visibility and documentation tool — it helps you and your advisors see your full structure, which is the essential first step for effective tax planning. While Klaris does not provide tax advice, it gives your accountant the complete picture they need to identify opportunities and risks.",
  },
  {
    question: "How does Klaris support estate planning?",
    answer:
      "Klaris maps your entire estate structure: wills, powers of attorney, beneficiary nominations, trust deeds, and succession plans. It highlights gaps (like a missing binding death benefit nomination on your SMSF) and ensures every entity has a clear succession path.",
  },
  {
    question: "Can I track beneficiary nominations across all my entities?",
    answer:
      "Yes. One of the most common blind spots in Australian wealth structures is outdated or missing beneficiary nominations — especially across super funds and insurance policies. Klaris tracks all nominations in one place and alerts you when they need updating.",
  },
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
      "Not at all. Klaris is designed for everyday Australians, not technologists. If you can use online banking, you can use Klaris. Our onboarding team walks you through the setup, and the interface is intuitive and visual — no spreadsheets, no jargon.",
  },
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
    question: "Is Klaris suitable for self-managed super funds (SMSFs)?",
    answer:
      "Klaris is ideal for SMSFs. You can map fund members, investment strategies, beneficiary nominations, insurance within super, pension streams, and compliance requirements — all in one visual structure that your SMSF auditor and advisor can access.",
  },
];

export default function FaqPage() {
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </main>
  );
}

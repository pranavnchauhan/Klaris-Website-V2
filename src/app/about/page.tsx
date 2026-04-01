import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Shield, Eye, Calendar, ArrowRight } from "lucide-react";
import GlowingIcon from "@/components/landing/GlowingIcon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About - Klaris AI | Wealth Planning Software Australia",
  description:
    "Klaris AI is Australia's trusted wealth planning software and financial structure visualizer. Founded by Pranav Chauhan.",
  keywords: [
    "klaris AI",
    "wealth planning software Australia",
    "financial structure visualizer",
  ],
  alternates: { canonical: "https://klaris.com.au/about" },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Klaris AI",
    url: "https://klaris.com.au",
    logo: "https://klaris.com.au/klaris-logo.webp",
    description:
      "Australia's trusted wealth planning software and financial structure visualizer.",
    founder: {
      "@type": "Person",
      name: "Pranav Chauhan",
      jobTitle: "Founder & CEO",
      url: "https://www.linkedin.com/in/pranav-chauhan-kd/",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Krrisp Digital",
      url: "https://krrispdigital.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    sameAs: [
      "https://www.linkedin.com/company/klaris-au",
      "https://x.com/klaris_au",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-section-hero">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl text-center">
            Klaris AI — The End of Financial Blind Spots.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            We believe every Australian family deserves complete visibility over their
            financial world — trusts, entities, assets, and estate plans — all in one
            secure, intelligent platform.
          </p>
        </div>
      </section>

      {/* Krrisp Digital Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-4 text-center">
              A Krrisp Digital Product.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 text-center">
              Klaris AI is proudly built by{" "}
              <a
                href="https://krrispdigital.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
              >
                Krrisp Digital
              </a>
              , an Australian digital agency specialising in AI-powered solutions for
              complex business problems.
            </p>
            <blockquote className="border-l-4 border-primary/30 pl-6 italic text-muted-foreground text-base">
              &ldquo;We don&rsquo;t just build software — we solve problems that keep
              business owners and families up at night. Klaris is the answer to a gap
              we saw in the Australian wealth management landscape.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="/pranav-chauhan.png"
              alt="Pranav Chauhan — Founder and CEO of Klaris AI"
              width={112}
              height={112}
              className="rounded-full mx-auto mb-6 border-4 border-primary/10"
            />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-1 text-center">
              Pranav Chauhan
            </h2>
            <p className="text-accent font-medium mb-4 text-center">
              Founder &amp; CEO, Klaris
            </p>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-6 text-center">
              Pranav founded Klaris after years of working with high-net-worth
              families, accountants, and financial advisors who all faced the same
              problem: no single place to see the full picture. Structures were
              scattered across spreadsheets, filing cabinets, and different advisors —
              leaving critical gaps that only surfaced during audits, disputes, or
              estate transitions.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Financial Architecture
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Wealth Governance
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Digital Transformation
              </span>
            </div>

            <a
              href="https://www.linkedin.com/in/pranav-chauhan-kd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl italic text-primary/90 leading-relaxed text-center">
                &ldquo;I built Klaris because too many families discover gaps in their
                financial picture when it&rsquo;s already too late — during a dispute,
                an audit, or after losing someone. Klaris makes the invisible visible,
                before it becomes a crisis.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted-foreground text-center">
                — Pranav Chauhan, Founder &amp; CEO
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Klaris Exists */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            Why Klaris Exists
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                The Problem
              </h3>
              <p className="text-muted-foreground">
                Australian families with trusts, companies, SMSFs, and property
                portfolios have no single view of how it all connects. Information
                lives in spreadsheets, accountant files, legal docs, and memory. When
                something changes — a death, a divorce, a restructure — the gaps
                become painfully obvious.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                The Klaris Solution
              </h3>
              <p className="text-muted-foreground">
                Klaris maps your entire financial structure in one intelligent,
                interactive graph. Trusts, entities, ownership chains, assets, and
                estate plans — all visible, all connected, all secure. Advisors and
                family members collaborate in real time, with role-based access that
                keeps sensitive information protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-10 text-center">
            Core Pillars
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={MapPin} color="teal" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Local Context
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Built for Australian tax law, trust structures, SMSF rules, and estate
                planning requirements. Not a US product adapted for AU — Klaris is
                Australian from the ground up.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Shield} color="blue" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Security First
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Bank-grade encryption, role-based access controls, and Australian data
                residency. Your financial data never leaves the country and is never
                used to train AI models.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <GlowingIcon icon={Eye} color="emerald" />
              </div>
              <h3 className="text-lg font-semibold text-primary text-center">
                Complete Visibility
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                See every trust, entity, ownership chain, and asset in one interactive
                graph. Klaris connects the dots that spreadsheets and filing cabinets
                never could.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 section-cta">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4 text-center">
            See Klaris in Action
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-center">
            Book a personalised demo and discover how Klaris can bring clarity to your
            wealth structure.
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

      {/* Footer Note */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <p className="text-sm text-muted-foreground text-center">
            Klaris AI is part of the{" "}
            <a
              href="https://krrispdigital.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              Krrisp Digital
            </a>{" "}
            portfolio — Australian-built technology for modern business.
          </p>
        </div>
      </section>
    </main>
  );
}

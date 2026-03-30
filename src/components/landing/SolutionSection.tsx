"use client";

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DashboardMockup from "@/components/landing/DashboardMockup";
import { useInView } from "@/hooks/use-in-view";

const features = [
  {
    title: "Record & Organize",
    description:
      "Add every trust, company, SMSF, and asset into one structured vault. No more scattered spreadsheets.",
  },
  {
    title: "Visualize Connections",
    description:
      "See how entities, assets, and liabilities connect with an interactive wealth structure map.",
  },
  {
    title: "Maintain Records",
    description:
      "Keep documents, valuations, and key dates up to date with built-in reminders and version history.",
  },
  {
    title: "Export & Share Anytime",
    description:
      "Generate reports for your accountant, advisor, or family — beautifully formatted and always current.",
  },
];

export default function SolutionSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-background py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            The Solution
          </p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl text-center">
            Your Entire Wealth Structure in One Place
          </h2>
        </div>

        {/* KRSP Highlight Box */}
        <div
          className={`rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-2">
              The KRSP Framework
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Know. Record. Structure. Protect.
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-center">
              Klaris is built on a simple principle: you can&apos;t protect what you can&apos;t see.
              Our KRSP framework ensures every entity, asset, and connection is captured,
              structured, and ready when you need it.
            </p>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <DashboardMockup />
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group border bg-card transition-all duration-500 hover:shadow-md ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <CardContent className="p-6 pt-6 flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

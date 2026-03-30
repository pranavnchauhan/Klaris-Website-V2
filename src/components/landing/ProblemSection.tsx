"use client";

import { Building2, FileStack, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";
import { useInView } from "@/hooks/use-in-view";

const problems: { icon: typeof Building2; title: string; description: string; color: IconColor }[] = [
  {
    icon: Building2,
    title: "Fragmented Ownership",
    description:
      "Trusts, companies, and assets scattered across spreadsheets, emails, and filing cabinets — with no single source of truth.",
    color: "rose",
  },
  {
    icon: FileStack,
    title: "Scattered Information",
    description:
      "Critical documents live in different places. Deeds, constitutions, and financials are never in one spot when you need them.",
    color: "amber",
  },
  {
    icon: Clock,
    title: "Wasted Time",
    description:
      "Hours spent every quarter chasing down details, re-explaining structures to advisors, and manually updating records.",
    color: "violet",
  },
  {
    icon: Users,
    title: "Family Uncertainty",
    description:
      "If something happens to you, could your family find and understand every entity, asset, and obligation you hold?",
    color: "blue",
  },
];

export default function ProblemSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="problem" className="section-problem py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-3">
            The Problem
          </p>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-center">
            Wealth Without Structure Is a Liability
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className={`group border-0 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:shadow-lg ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 pt-6 flex flex-col items-center text-center gap-4">
                <GlowingIcon icon={problem.icon} color={problem.color} />
                <h3 className="text-lg font-semibold text-primary">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <blockquote className="text-lg md:text-xl font-medium text-primary-foreground/90 italic max-w-2xl mx-auto">
            &ldquo;This lack of clarity creates risk, inefficiency, and stress.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}

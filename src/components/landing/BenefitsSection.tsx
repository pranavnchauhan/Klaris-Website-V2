"use client";

import { Eye, Clock, Heart, ShieldCheck, Sparkles, Share2 } from "lucide-react";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";
import { useInView } from "@/hooks/use-in-view";

const benefits: { icon: typeof Eye; title: string; description: string; color: IconColor }[] = [
  {
    icon: Eye,
    title: "Immediate Visibility",
    description:
      "See every trust, company, SMSF, and asset in one dashboard. No more guessing or digging through files.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description:
      "Cut hours of manual tracking down to minutes. Updates flow through your entire structure automatically.",
    color: "teal",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Know that your family can find and understand everything if they ever need to — without relying on your memory.",
    color: "rose",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Risk",
    description:
      "Spot gaps in ownership, missing documents, and expiring registrations before they become problems.",
    color: "emerald",
  },
  {
    icon: Sparkles,
    title: "Easy to Maintain",
    description:
      "Built for real people, not accountants. Add, update, and organize your structure with an intuitive interface.",
    color: "amber",
  },
  {
    icon: Share2,
    title: "Export & Share",
    description:
      "Generate professional reports for your advisor, accountant, or family at any time — always current, always accurate.",
    color: "violet",
  },
];

export default function BenefitsSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-background py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Benefits
          </p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl text-center">
            Why Families and Advisors Choose Klaris
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group flex items-start gap-5 rounded-xl bg-secondary p-5 transition-all duration-500 hover:bg-muted ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="shrink-0">
                <GlowingIcon icon={benefit.icon} color={benefit.color} size="sm" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

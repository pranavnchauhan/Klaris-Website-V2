"use client";

import { CreditCard, LogIn, GitBranch } from "lucide-react";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";
import { useInView } from "@/hooks/use-in-view";

const steps: { icon: typeof CreditCard; title: string; description: string; color: IconColor; step: number }[] = [
  {
    icon: CreditCard,
    title: "Book a Demo",
    description:
      "Schedule a free walkthrough to see how Klaris maps your wealth structure. No commitment required.",
    color: "amber",
    step: 1,
  },
  {
    icon: LogIn,
    title: "Access Your Vault",
    description:
      "Log in to your secure vault and start adding your trusts, companies, SMSFs, and assets.",
    color: "teal",
    step: 2,
  },
  {
    icon: GitBranch,
    title: "Map Your Wealth",
    description:
      "See your entire wealth structure visualised as a clear map: every entity, connection, and asset in one place. Klaris is wealth structure software built for Australian tax and trust rules.",
    color: "blue",
    step: 3,
  },
];

export default function HowItWorksSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl text-center">
            Three Steps to Clarity
          </h2>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connector lines on desktop */}
          <div className="absolute top-14 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] hidden md:block">
            <div className="h-0.5 w-full bg-gradient-to-r from-amber-300 via-teal-300 to-blue-300 opacity-40" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex flex-col items-center text-center gap-4 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-2 -right-2 md:relative md:top-auto md:right-auto md:mb-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md">
                  {step.step}
                </div>
              </div>

              <GlowingIcon icon={step.icon} color={step.color} />

              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

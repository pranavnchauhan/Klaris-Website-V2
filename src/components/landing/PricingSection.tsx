"use client";

import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const benefits = [
  "Full wealth structure mapping",
  "Unlimited entities and assets",
  "Interactive visual dashboard",
  "Secure document storage",
  "Export-ready reports",
  "Priority support",
];

export default function PricingSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-background py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4 text-center">
            Ready to See Klaris in Action?
          </h2>
          <p className="text-muted-foreground mb-10 text-center">
            Book a personalised demo to see how Klaris can map your wealth structure.
            Pricing is tailored to your needs.
          </p>
        </div>

        <div
          className={`max-w-lg mx-auto rounded-2xl border bg-card p-8 md:p-10 shadow-sm transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ul className="space-y-4 mb-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full" asChild>
            <a
              href="https://cal.com/kd-pc/klaris-partnership-discussion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Your Demo
            </a>
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Volume licensing available for accounting firms and advisory practices.
          </p>
        </div>
      </div>
    </section>
  );
}

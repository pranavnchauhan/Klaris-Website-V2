"use client";

import { useState, useEffect } from "react";
import { User, Calculator, Briefcase, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";
import { useInView } from "@/hooks/use-in-view";

const audiences: { icon: typeof User; title: string; description: string; color: IconColor }[] = [
  {
    icon: User,
    title: "Individuals & Families",
    description:
      "See your full wealth picture — every trust, company, and asset — in one secure dashboard. Finally know exactly where you stand.",
    color: "blue",
  },
  {
    icon: Calculator,
    title: "Accountants",
    description:
      "Stop chasing clients for structure details. Klaris gives you instant visibility into their entities, assets, and connections.",
    color: "emerald",
  },
  {
    icon: Briefcase,
    title: "Financial Advisors",
    description:
      "Understand your client's complete financial architecture before making recommendations. Better data, better advice.",
    color: "amber",
  },
  {
    icon: Home,
    title: "Families Planning Ahead",
    description:
      "Ensure the next generation can find, understand, and manage everything you've built. Your legacy, protected.",
    color: "teal",
  },
];

export default function AudienceSection() {
  const [scrollY, setScrollY] = useState(0);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden section-audience py-16 md:py-24">
      {/* Parallax blobs */}
      <div
        className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div
        className="absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-white/5 blur-3xl hidden md:block"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-3">
            Who It&apos;s For
          </p>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-center">
            Built for Everyone Who Manages Wealth
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <Card
              key={audience.title}
              className={`group border-0 bg-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/15 hover:shadow-lg ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 pt-6 flex flex-col items-center text-center gap-4">
                <GlowingIcon icon={audience.icon} color={audience.color} />
                <h3 className="text-lg font-semibold text-primary-foreground">
                  {audience.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Shield, Key, MapPin, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";
import { useInView } from "@/hooks/use-in-view";

const securityFeatures: { icon: typeof Shield; title: string; description: string; color: IconColor }[] = [
  {
    icon: Shield,
    title: "AES-256 Encryption",
    description:
      "Your data is encrypted at rest and in transit using AES-256, the same standard used by banks and government agencies.",
    color: "blue",
  },
  {
    icon: Key,
    title: "Privacy Act Compliant",
    description:
      "Klaris is built to comply with the Australian Privacy Act and Australian Privacy Principles (APPs). Your data stays yours.",
    color: "amber",
  },
  {
    icon: MapPin,
    title: "Australian Data Residency",
    description:
      "All data is stored on Australian servers. Your financial information never leaves the country.",
    color: "emerald",
  },
];

export default function SecurityTrustSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-background py-16 md:py-24">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Security & Trust
          </p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl text-center">
            Your Data Is Safe with Klaris
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {securityFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group border bg-card transition-all duration-500 hover:shadow-md ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 pt-6 flex flex-col items-center text-center gap-4">
                <GlowingIcon icon={feature.icon} color={feature.color} />
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Zero Visibility Guarantee */}
        <div
          className={`mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-10 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-7 w-7 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-3 text-center">
            Zero Routine Staff Visibility
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-center">
            Our systems are designed so that Klaris staff do not have routine access to your wealth
            structures. When you request support that requires data access, this is strictly opt-in
            and fully audit-logged. In the event of a technical incident, our response team may access
            the minimum data necessary to resolve the issue, subject to our Data Breach Notification procedures.
          </p>
        </div>
      </div>
    </section>
  );
}

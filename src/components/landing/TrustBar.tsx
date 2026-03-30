import { Users, Landmark, Building, Briefcase, TrendingUp } from "lucide-react";
import GlowingIcon, { type IconColor } from "@/components/landing/GlowingIcon";

const entities: { icon: typeof Users; label: string; color: IconColor }[] = [
  { icon: Users, label: "Family Trusts", color: "blue" },
  { icon: Landmark, label: "SMSFs", color: "teal" },
  { icon: Building, label: "Bucket Companies", color: "emerald" },
  { icon: Briefcase, label: "Unit Trusts", color: "amber" },
  { icon: TrendingUp, label: "Investment Portfolios", color: "violet" },
];

export default function TrustBar() {
  return (
    <section className="bg-muted/30 border-y py-10 md:py-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          One platform for every entity type
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {entities.map((entity) => (
            <div key={entity.label} className="flex flex-col items-center gap-3 group">
              <GlowingIcon icon={entity.icon} color={entity.color} size="sm" />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {entity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

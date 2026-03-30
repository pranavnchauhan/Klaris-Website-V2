import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconColor = "blue" | "teal" | "emerald" | "amber" | "rose" | "violet";

interface GlowingIconProps {
  icon: LucideIcon;
  color?: IconColor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorStyles: Record<IconColor, { bg: string; icon: string; glow: string }> = {
  blue: {
    bg: "group-hover:bg-[hsl(210_100%_60%/0.15)]",
    icon: "group-hover:text-[hsl(210_100%_65%)]",
    glow: "group-hover:shadow-[0_0_20px_hsl(210_100%_60%/0.4),0_0_40px_hsl(210_100%_60%/0.2)]",
  },
  teal: {
    bg: "group-hover:bg-[hsl(172_66%_50%/0.15)]",
    icon: "group-hover:text-[hsl(172_66%_55%)]",
    glow: "group-hover:shadow-[0_0_20px_hsl(172_66%_50%/0.4),0_0_40px_hsl(172_66%_50%/0.2)]",
  },
  emerald: {
    bg: "group-hover:bg-[hsl(160_84%_39%/0.15)]",
    icon: "group-hover:text-[hsl(160_84%_45%)]",
    glow: "group-hover:shadow-[0_0_20px_hsl(160_84%_39%/0.4),0_0_40px_hsl(160_84%_39%/0.2)]",
  },
  amber: {
    bg: "group-hover:bg-[hsl(38_92%_50%/0.15)]",
    icon: "group-hover:text-[hsl(38_92%_55%)]",
    glow: "group-hover:shadow-[0_0_20px_hsl(38_92%_50%/0.4),0_0_40px_hsl(38_92%_50%/0.2)]",
  },
  rose: {
    bg: "group-hover:bg-[hsl(350_89%_60%/0.15)]",
    icon: "group-hover:text-[hsl(350_89%_65%)]",
    glow: "group-hover:shadow-[0_0_20px_hsl(350_89%_60%/0.4),0_0_40px_hsl(350_89%_60%/0.2)]",
  },
  violet: {
    bg: "group-hover:bg-[hsl(262_83%_58%/0.15)]",
    icon: "group-hover:text-[hsl(262_83%_65%)]",
    glow: "group-hover:shadow-[0_0_20px_hsl(262_83%_58%/0.4),0_0_40px_hsl(262_83%_58%/0.2)]",
  },
};

const sizeStyles = {
  sm: { container: "h-10 w-10", icon: "h-5 w-5" },
  md: { container: "h-14 w-14 md:h-16 md:w-16", icon: "h-7 w-7 md:h-8 md:w-8" },
  lg: { container: "h-20 w-20", icon: "h-10 w-10" },
};

export default function GlowingIcon({ icon: Icon, color = "blue", size = "md", className }: GlowingIconProps) {
  const colorStyle = colorStyles[color];
  const sizeStyle = sizeStyles[size];

  return (
    <div className="group">
      <div
        className={cn(
          "flex items-center justify-center rounded-xl transition-all duration-300",
          "bg-muted/50 shadow-none",
          colorStyle.bg,
          colorStyle.glow,
          "group-hover:scale-110 group-hover:brightness-125",
          sizeStyle.container,
          className
        )}
      >
        <Icon
          className={cn(sizeStyle.icon, "text-muted-foreground transition-all duration-300", colorStyle.icon)}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}

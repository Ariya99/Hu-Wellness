import { ReactNode } from "react";
import { WellnessCard } from "./WellnessCard";
import { ProgressRing } from "./ProgressRing";
import { cn } from "@/lib/utils";

interface JourneyCardProps {
  icon: ReactNode;
  title: string;
  value?: string | number;
  progress?: number;
  subtitle?: string;
  gradient?: "warm" | "sage" | "lavender" | "sky" | "peach" | "none";
  onClick?: () => void;
  colorScheme?: "sage" | "peach" | "blue" | "lavender" | "pink";
}

const colorSchemes = {
  sage: "#7FA37C",
  peach: "#F4B183",
  blue: "#A8D8EA",
  lavender: "#B8A9D9",
  pink: "#F6C6C6",
};

export function JourneyCard({
  icon,
  title,
  value,
  progress,
  subtitle,
  gradient = "none",
  onClick,
  colorScheme = "sage",
}: JourneyCardProps) {
  return (
    <WellnessCard
      gradient={gradient}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between gap-4",
        gradient !== "none" && "border border-white/30"
      )}
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          {value && <p className="text-2xl font-bold text-foreground">{value}</p>}
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {progress !== undefined && (
        <div className="flex-shrink-0">
          <ProgressRing
            progress={progress}
            size={80}
            color={colorSchemes[colorScheme]}
          />
        </div>
      )}
    </WellnessCard>
  );
}

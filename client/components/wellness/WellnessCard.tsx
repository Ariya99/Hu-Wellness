import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WellnessCardProps {
  children: ReactNode;
  className?: string;
  gradient?: "warm" | "sage" | "lavender" | "sky" | "peach" | "none";
  onClick?: () => void;
}

const gradients = {
  warm: "bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100",
  sage: "bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100",
  lavender: "bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100",
  sky: "bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100",
  peach: "bg-gradient-to-br from-orange-100 via-pink-50 to-rose-100",
  none: "bg-white",
};

export function WellnessCard({
  children,
  className,
  gradient = "none",
  onClick,
}: WellnessCardProps) {
  const baseClasses = cn(
    "rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
    gradients[gradient],
    onClick && "cursor-pointer hover:shadow-lg active:scale-95",
    className
  );

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}

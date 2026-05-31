import { motion } from "framer-motion";

interface CapybaraProps {
  mood?: "happy" | "calm" | "excited" | "sleepy";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

export function Capybara({ mood = "calm", size = "md" }: CapybaraProps) {
  const moodAnimations = {
    happy: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity },
    },
    calm: {
      y: [0, 8, 0],
      transition: { duration: 3, repeat: Infinity },
    },
    excited: {
      scale: [1, 1.1, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
    sleepy: {
      rotate: [0, 2, 0],
      transition: { duration: 3.5, repeat: Infinity },
    },
  };

  return (
    <motion.div
      className={cn(sizes[size], "flex items-center justify-center")}
      animate={moodAnimations[mood]}
    >
      <svg
        viewBox="0 0 200 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <ellipse cx="100" cy="110" rx="55" ry="50" fill="#C9A876" />

        {/* Head */}
        <circle cx="100" cy="70" r="42" fill="#C9A876" />

        {/* Ears */}
        <circle cx="75" cy="40" r="14" fill="#C9A876" />
        <circle cx="125" cy="40" r="14" fill="#C9A876" />
        <circle cx="75" cy="42" r="8" fill="#E8D4B8" />
        <circle cx="125" cy="42" r="8" fill="#E8D4B8" />

        {/* Face markings */}
        <circle cx="85" cy="70" r="12" fill="#E8D4B8" />
        <circle cx="115" cy="70" r="12" fill="#E8D4B8" />

        {/* Eyes */}
        {mood === "sleepy" ? (
          <>
            <line x1="82" y1="68" x2="88" y2="68" stroke="#333" strokeWidth="2" />
            <line x1="112" y1="68" x2="118" y2="68" stroke="#333" strokeWidth="2" />
          </>
        ) : (
          <>
            <circle cx="85" cy="70" r="4" fill="#333" />
            <circle cx="115" cy="70" r="4" fill="#333" />
            <circle cx="87" cy="68" r="2" fill="white" />
            <circle cx="117" cy="68" r="2" fill="white" />
          </>
        )}

        {/* Nose */}
        <circle cx="100" cy="80" r="4" fill="#333" />

        {/* Mouth */}
        <path
          d={
            mood === "happy"
              ? "M 95 88 Q 100 92 105 88"
              : "M 95 88 Q 100 90 105 88"
          }
          stroke="#333"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Front legs */}
        <rect x="75" y="150" width="10" height="25" rx="5" fill="#C9A876" />
        <rect x="115" y="150" width="10" height="25" rx="5" fill="#C9A876" />

        {/* Back legs (partially visible) */}
        <ellipse cx="60" cy="135" rx="12" ry="20" fill="#C9A876" opacity="0.7" />
        <ellipse cx="140" cy="135" rx="12" ry="20" fill="#C9A876" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

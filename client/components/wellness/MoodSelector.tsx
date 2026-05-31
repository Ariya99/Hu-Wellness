import { motion } from "framer-motion";
import { useState } from "react";
import { WellnessCard } from "./WellnessCard";

interface MoodOption {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

const moods: MoodOption[] = [
  { id: "amazing", label: "Amazing", emoji: "☀️", color: "from-yellow-100" },
  { id: "good", label: "Good", emoji: "🌤️", color: "from-orange-100" },
  { id: "calm", label: "Calm", emoji: "☁️", color: "from-sky-100" },
  { id: "tired", label: "Tired", emoji: "🌧️", color: "from-slate-100" },
  { id: "reflective", label: "Reflective", emoji: "🌙", color: "from-purple-100" },
];

interface MoodSelectorProps {
  onSelect?: (mood: string) => void;
  selected?: string;
}

export function MoodSelector({ onSelect, selected }: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<string | undefined>(selected);

  const handleSelect = (moodId: string) => {
    setSelectedMood(moodId);
    onSelect?.(moodId);
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {moods.map((mood) => (
        <motion.button
          key={mood.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelect(mood.id)}
          className={`
            rounded-2xl p-4 flex flex-col items-center justify-center gap-2
            transition-all duration-300 border-2
            ${
              selectedMood === mood.id
                ? "border-primary bg-primary/10 shadow-md"
                : "border-border bg-white hover:bg-muted"
            }
          `}
        >
          <div className="text-3xl">{mood.emoji}</div>
          <span className="text-xs font-medium text-foreground text-center">
            {mood.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}

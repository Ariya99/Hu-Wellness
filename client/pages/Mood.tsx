import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WellnessCard } from "@/components/wellness/WellnessCard";
import { MoodSelector } from "@/components/wellness/MoodSelector";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Mood() {
  const location = useLocation();
  const [selectedMood, setSelectedMood] = useState<string>();
  const [entry, setEntry] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-24">
      <Navigation />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto px-4 py-8 md:py-12"
      >
        <motion.div variants={item} className="mb-8">
          <h1 className="text-heading-lg text-foreground">Mood Journal 📝</h1>
          <p className="text-muted-foreground">
            Check in with your emotions and track your mental wellness
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-8">
          <WellnessCard gradient="lavender" className="p-8">
            <h2 className="text-heading-sm text-foreground mb-6">
              How are you feeling today?
            </h2>
            <MoodSelector onSelect={setSelectedMood} selected={selectedMood} />
          </WellnessCard>
        </motion.div>

        <motion.div variants={item} className="mb-8">
          <WellnessCard gradient="sage">
            <h2 className="text-heading-sm text-foreground mb-4">
              Write your thoughts
            </h2>
            <Textarea
              placeholder="What's on your mind today? How do you feel? What are you grateful for?"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              className="min-h-32 rounded-2xl border-border"
            />
            <Button
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
              size="lg"
            >
              Save Entry
            </Button>
          </WellnessCard>
        </motion.div>

        <motion.div variants={item} className="mb-8">
          <h2 className="text-heading-sm text-foreground mb-6">
            Your Journal Timeline
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <WellnessCard
                key={i}
                gradient={i % 2 === 0 ? "warm" : "sky"}
                className="border-l-4 border-l-primary"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                    </p>
                    <p className="text-2xl font-bold text-foreground mt-1">
                      {["Amazing", "Good", "Calm"][i - 1]} {"☀️🌤️☁️"[i - 1]}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Had a productive day and feeling accomplished...
                    </p>
                  </div>
                  <div className="text-4xl">{["☀️", "🌤️", "☁️"][i - 1]}</div>
                </div>
              </WellnessCard>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}

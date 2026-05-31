import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { WellnessCard } from "./wellness/WellnessCard";
import { Capybara } from "./wellness/Capybara";

interface PlaceholderPageProps {
  title: string;
  emoji: string;
  description: string;
}

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

export function PlaceholderPage({
  title,
  emoji,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-24">
      <Navigation />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]"
      >
        <motion.div variants={item} className="text-center mb-8">
          <Capybara mood="calm" size="lg" />
        </motion.div>

        <motion.div variants={item} className="mb-8">
          <h1 className="text-heading-lg text-foreground mb-2">
            {emoji} {title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-md">
            {description}
          </p>
        </motion.div>

        <motion.div variants={item} className="w-full max-w-md">
          <WellnessCard gradient="warm" className="text-center p-8">
            <p className="text-sm text-muted-foreground mb-2">
              This feature is coming soon!
            </p>
            <p className="text-foreground font-semibold">
              Keep exploring your wellness journey. Ask us to build this feature!
            </p>
          </WellnessCard>
        </motion.div>
      </motion.main>
    </div>
  );
}

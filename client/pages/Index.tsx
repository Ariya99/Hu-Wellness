import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { WellnessCard } from "@/components/wellness/WellnessCard";
import { JourneyCard } from "@/components/wellness/JourneyCard";
import { Capybara } from "@/components/wellness/Capybara";
import { Navigation } from "@/components/Navigation";
import { AIChatHero } from "@/components/AIChatHero";


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

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-24">
      <Navigation />

      {/* Main Content */}
      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto px-4 py-8 md:py-12"
      >
        {/* Minimal Header */}
        <motion.div variants={item} className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-heading-md text-foreground">
              Good Morning, Ariya ☀️
            </h1>
            <p className="text-sm text-muted-foreground">
              Wellness Score: 78 • Status: Great
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <Capybara mood="happy" size="md" />
          </div>
        </motion.div>

        {/* AI Chat Hero - Main Focus */}
        <motion.div variants={item} className="mb-12">
          <AIChatHero />
        </motion.div>

        {/* Quick Stats Above Cards */}
        <motion.div variants={item} className="mb-10">
          <div className="grid grid-cols-3 gap-3">
            <WellnessCard className="text-center p-4">
              <div className="text-3xl mb-1">📈</div>
              <p className="text-xs text-muted-foreground">Trend</p>
              <p className="text-lg font-bold text-primary mt-0.5">+12%</p>
            </WellnessCard>

            <WellnessCard className="text-center p-4">
              <div className="text-3xl mb-1">🔥</div>
              <p className="text-xs text-muted-foreground">Streak</p>
              <p className="text-lg font-bold text-accent mt-0.5">7 days</p>
            </WellnessCard>

            <WellnessCard className="text-center p-4">
              <div className="text-3xl mb-1">⭐</div>
              <p className="text-xs text-muted-foreground">Achievements</p>
              <p className="text-lg font-bold text-secondary mt-0.5">3 earned</p>
            </WellnessCard>
          </div>
        </motion.div>

        {/* Today's Wellness Metrics */}
        <motion.div variants={item} className="mb-12">
          <h2 className="text-heading-sm text-foreground mb-5 text-muted-foreground uppercase tracking-wide">Today&apos;s Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <JourneyCard
              icon="😴"
              title="Sleep Quality"
              value="7h 24m"
              progress={93}
              subtitle="Excellent rest"
              gradient="peach"
              colorScheme="peach"
            />

            <JourneyCard
              icon="💧"
              title="Water Intake"
              value="6 / 8 glasses"
              progress={75}
              subtitle="Keep hydrated"
              gradient="sky"
              colorScheme="blue"
            />

            <JourneyCard
              icon="🚶"
              title="Daily Activity"
              value="4,230 steps"
              progress={65}
              subtitle="Almost there!"
              gradient="warm"
              colorScheme="sage"
            />

            <JourneyCard
              icon="🍎"
              title="Nutrition"
              value="1,850 kcal"
              progress={82}
              subtitle="Balanced meals"
              gradient="lavender"
              colorScheme="lavender"
            />
          </div>
        </motion.div>

        {/* AI Wellness Suggestions - Compact */}
        <motion.div variants={item}>
          <h2 className="text-heading-sm text-foreground mb-5 text-muted-foreground uppercase tracking-wide">AI Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WellnessCard gradient="warm" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🚶</span>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm">
                    Time for a walk?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    770 steps away from your goal
                  </p>
                </div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="sky" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">💧</span>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm">
                    Hydration hint
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Drink 2 more glasses today
                  </p>
                </div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="lavender" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🧘</span>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm">
                    Mindfulness moment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    5-min breathing break suggested
                  </p>
                </div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="peach" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🌙</span>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm">
                    Sleep on track
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your sleep improved this week
                  </p>
                </div>
              </div>
            </WellnessCard>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}

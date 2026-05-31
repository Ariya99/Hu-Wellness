import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { WellnessCard } from "@/components/wellness/WellnessCard";
import { JourneyCard } from "@/components/wellness/JourneyCard";
import { Capybara } from "@/components/wellness/Capybara";
import { Navigation } from "@/components/Navigation";
import { Zap, Flame, Smile } from "lucide-react";

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
        {/* Welcome Hero Section */}
        <motion.div variants={item} className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div>
              <h1 className="text-heading-lg text-foreground mb-2">
                Good Morning, Ariya ☀️
              </h1>
              <p className="text-muted-foreground text-lg">
                Today is full of wellness opportunities
              </p>
            </div>
            <div className="flex-shrink-0">
              <Capybara mood="happy" size="lg" />
            </div>
          </div>

          {/* Wellness Score & Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WellnessCard gradient="warm" className="md:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Wellness Score
                  </p>
                  <p className="text-4xl font-bold text-foreground">78</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Keep it up! 🚀
                  </p>
                </div>
                <div className="text-4xl">✨</div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="lavender" className="md:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Current Mood
                  </p>
                  <p className="text-4xl font-bold text-foreground">Good</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Feeling balanced
                  </p>
                </div>
                <div className="text-4xl">🌤️</div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="sky" className="md:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Companion Says
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    You're doing great!
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    🌱 Keep growing
                  </p>
                </div>
              </div>
            </WellnessCard>
          </div>
        </motion.div>

        {/* Today's Journey Section */}
        <motion.div variants={item} className="mb-12">
          <h2 className="text-heading-md text-foreground mb-6">Today's Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              icon="😴"
              title="Sleep Quality"
              value="7h 24m"
              progress={93}
              subtitle="Excellent rest"
              gradient="peach"
              colorScheme="peach"
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

        {/* Daily Mission Section */}
        <motion.div variants={item} className="mb-12">
          <h2 className="text-heading-md text-foreground mb-6">Today's Mission</h2>

          <div className="space-y-3">
            <WellnessCard gradient="sage" className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🌱</span>
                <div>
                  <p className="font-semibold text-foreground">Drink 8 glasses of water</p>
                  <p className="text-sm text-muted-foreground">6 / 8 completed</p>
                </div>
              </div>
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </WellnessCard>

            <WellnessCard gradient="warm" className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🚶</span>
                <div>
                  <p className="font-semibold text-foreground">Walk 5000 steps</p>
                  <p className="text-sm text-muted-foreground">4,230 / 5,000 steps</p>
                </div>
              </div>
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </WellnessCard>

            <WellnessCard gradient="lavender" className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <span className="text-3xl">😴</span>
                <div>
                  <p className="font-semibold text-foreground">Sleep before 11 PM</p>
                  <p className="text-sm text-muted-foreground">
                    Last night: 10:45 PM ✓
                  </p>
                </div>
              </div>
              <div className="text-2xl">✅</div>
            </WellnessCard>
          </div>
        </motion.div>

        {/* AI Wellness Suggestions */}
        <motion.div variants={item} className="mb-12">
          <h2 className="text-heading-md text-foreground mb-6">
            Wellness Suggestions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WellnessCard gradient="warm" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0">🚶</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Time for a walk?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You're 770 steps away from your daily goal. A short walk could
                    boost your energy.
                  </p>
                </div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="sky" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0">💧</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Hydration hint
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your water intake is slightly lower than usual. Drink 2 more
                    glasses today!
                  </p>
                </div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="lavender" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0">🧘</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Mindfulness moment
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Take a 5-minute breathing break. Your stress levels improved
                    this week!
                  </p>
                </div>
              </div>
            </WellnessCard>

            <WellnessCard gradient="peach" className="border border-white/40">
              <div className="flex gap-4">
                <span className="text-3xl flex-shrink-0">🌙</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Sleep on track
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your sleep quality improved this week. Keep up your
                    consistent bedtime!
                  </p>
                </div>
              </div>
            </WellnessCard>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={item} className="mb-8">
          <h2 className="text-heading-md text-foreground mb-6">This Week</h2>

          <div className="grid grid-cols-3 gap-4">
            <WellnessCard className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-sm text-muted-foreground">Wellness Trend</p>
              <p className="text-2xl font-bold text-primary mt-1">+12%</p>
            </WellnessCard>

            <WellnessCard className="text-center">
              <div className="text-4xl mb-2">🔥</div>
              <p className="text-sm text-muted-foreground">Streak</p>
              <p className="text-2xl font-bold text-accent mt-1">7 days</p>
            </WellnessCard>

            <WellnessCard className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-sm text-muted-foreground">Achievements</p>
              <p className="text-2xl font-bold text-secondary mt-1">3 earned</p>
            </WellnessCard>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}

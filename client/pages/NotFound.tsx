import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WellnessCard } from "@/components/wellness/WellnessCard";
import { Capybara } from "@/components/wellness/Capybara";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-24">
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <Capybara mood="calm" size="lg" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mb-8"
        >
          <WellnessCard gradient="warm" className="text-center p-8">
            <p className="text-lg text-foreground font-semibold mb-2">
              Oops! Page not found
            </p>
            <p className="text-muted-foreground mb-6">
              This wellness path hasn't been discovered yet. Let's get you back
              on track!
            </p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                Return to Home
              </Button>
            </Link>
          </WellnessCard>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default NotFound;

import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Activity,
  Droplet,
  Moon,
  Utensils,
  CheckSquare,
  Flower2,
  BookOpen,
  MessageCircle,
  Bot,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/mood", label: "Mood", icon: MessageCircle },
  { path: "/water", label: "Water", icon: Droplet },
  { path: "/sleep", label: "Sleep", icon: Moon },
  { path: "/fitness", label: "Fitness", icon: Activity },
  { path: "/nutrition", label: "Nutrition", icon: Utensils },
  { path: "/habits", label: "Habits", icon: CheckSquare },
  { path: "/garden", label: "Garden", icon: Flower2 },
  { path: "/blog", label: "Blog", icon: BookOpen },
];

const specialItems = [
  { path: "/profile", label: "Profile", icon: User, special: true },
  { path: "/ai-chat", label: "AI Coach", icon: Bot, special: true, highlight: true },
];

export function Navigation() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
        <div className="flex justify-around items-center h-20">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-2 rounded-lg transition-colors duration-200",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={24} />
              </Link>
            );
          })}

          {/* Separator */}
          <div className="w-px h-8 bg-border" />

          {/* Special Items */}
          {specialItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-2 rounded-lg transition-all duration-200",
                  item.highlight
                    ? isActive
                      ? "text-white bg-gradient-to-br from-primary to-accent shadow-lg"
                      : "text-accent bg-accent/10 hover:bg-accent/20"
                    : isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-24 bg-white border-r border-border flex flex-col items-center py-8 gap-2 z-50">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
            <Link
              to={item.path}
              title={item.label}
              className={cn(
                "relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={28} />
              {isActive && (
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                />
              )}
            </Link>
          </motion.div>
        );
      })}

      {/* Divider */}
      <div className="w-12 h-px bg-border my-2" />

      {/* Special Items */}
      {specialItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
            <Link
              to={item.path}
              title={item.label}
              className={cn(
                "relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200",
                item.highlight
                  ? isActive
                    ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg"
                    : "bg-accent/10 text-accent hover:bg-accent/20"
                  : isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={28} />
              {isActive && !item.highlight && (
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </aside>
  );
}

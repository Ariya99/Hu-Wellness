import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WellnessCard } from "@/components/wellness/WellnessCard";
import { Capybara } from "@/components/wellness/Capybara";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
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

const suggestedQuestions = [
  "How can I improve my sleep?",
  "What's a good workout routine?",
  "How do I stay hydrated?",
  "Tips for better nutrition?",
  "How to build healthy habits?",
  "What's my wellness score?",
];

export default function AIChat() {
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello! I'm your wellness coach. I'm here to help you achieve your health and wellness goals. What would you like to know today? 🌿",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: getAIResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    const responses: { [key: string]: string } = {
      sleep:
        "Great question! Here are my top tips for better sleep:\n\n• Keep a consistent bedtime routine\n• Avoid screens 1 hour before bed\n• Keep your room cool and dark\n• Try relaxation techniques like deep breathing\n• Exercise daily but not before bed\n\nYou've been doing great with this! 😴",
      workout:
        "Here's a balanced routine I recommend:\n\n• 3-4 days strength training\n• 2-3 days cardio (walking, cycling)\n• 1-2 days rest or light yoga\n• Start with 30-minute sessions\n• Gradually increase intensity\n\nConsistency matters more than intensity! 💪",
      hydration:
        "Staying hydrated is key to wellness! Here's how:\n\n• Drink 8 glasses of water daily\n• Start your day with a glass of water\n• Drink before, during, and after exercise\n• Carry a water bottle everywhere\n• Set reminders if needed\n\nYour current intake looks good! 💧",
      nutrition:
        "For optimal nutrition:\n\n• Eat balanced meals with protein, carbs, and healthy fats\n• Include plenty of vegetables and fruits\n• Stay hydrated\n• Limit processed foods\n• Plan meals ahead\n\nKeep up the great food choices! 🍎",
      habits:
        "Building habits takes time! Here's my approach:\n\n• Start small (5-10 minutes)\n• Pick one habit at a time\n• Track your progress\n• Celebrate small wins\n• Be patient with yourself\n\nYou're already on a 7-day streak! Keep it up! 🌱",
      score:
        "Your wellness score is 78 - excellent work! Here's what's contributing:\n\n✓ Great sleep quality (93%)\n✓ Good water intake (75%)\n✓ Consistent activity (65%)\n✓ Balanced nutrition (82%)\n\nFocus on increasing your daily steps to boost your overall score! 📈",
    };

    const lowerQuestion = question.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response;
      }
    }

    return `That's a great question! Based on your wellness journey, I'd recommend:\n\n• Continue tracking your metrics\n• Stay consistent with your habits\n• Listen to your body\n• Celebrate your progress\n\nRemember, wellness is a journey, not a destination. You're doing amazing! 🌟`;
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-24">
      <Navigation />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col h-[calc(100vh-200px)]"
      >
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center gap-4">
            <Capybara mood="happy" size="md" />
            <div>
              <h1 className="text-heading-lg text-foreground">AI Wellness Coach</h1>
              <p className="text-muted-foreground">
                Your personal wellness assistant
              </p>
            </div>
          </div>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          variants={item}
          className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2"
        >
          {messages.length === 1 && (
            <motion.div variants={item} className="mb-8">
              <p className="text-center text-muted-foreground mb-6">
                Ask me anything about your wellness journey!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestedQuestions.map((question, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSendMessage(question)}
                    className="text-left p-4 rounded-2xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {question}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex",
                msg.type === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.type === "ai" && (
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 text-lg">
                  🤖
                </div>
              )}
              <div
                className={cn(
                  "max-w-xs md:max-w-md px-4 py-3 rounded-2xl",
                  msg.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
              {msg.type === "user" && (
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center ml-3 flex-shrink-0 text-lg">
                  👤
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Input Area */}
        <motion.div variants={item} className="flex gap-3">
          <Input
            type="text"
            placeholder="Ask me anything about wellness..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage(inputValue);
              }
            }}
            className="flex-1 rounded-2xl border-border"
          />
          <Button
            onClick={() => handleSendMessage(inputValue)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl"
          >
            <Send size={20} />
          </Button>
        </motion.div>
      </motion.main>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

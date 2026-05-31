import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestedQuestions = [
  "How was my sleep?",
  "Plan my day",
  "Wellness tips",
  "How's my mood?",
];

interface AIChatHeroProps {
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
}

export function AIChatHero({ onSendMessage, isLoading = false }: AIChatHeroProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (onSendMessage) {
      onSendMessage(suggestion);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="ai-hero-glow ai-hero-breathing w-full"
    >
      <div className="ai-hero-container">
        {/* Hero Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-sky-blue flex items-center justify-center text-2xl shadow-md">
              ✨
            </div>
            <div>
              <h2 className="text-heading-md text-foreground">Your AI Wellness Coach</h2>
              <p className="text-sm text-muted-foreground">Always here to support your journey</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="mb-6">
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Ask me anything about your wellness..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !isLoading) {
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
              className="ai-input-focus flex-1 rounded-full border-primary/30 bg-background placeholder:text-muted-foreground text-foreground text-lg py-3 px-6"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-auto py-3 shadow-md hover:shadow-lg transition-shadow"
            >
              <Send size={20} />
            </Button>
          </div>
        </div>

        {/* Quick Suggestions */}
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((question, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSuggestionClick(question)}
              disabled={isLoading}
              className="ai-suggestion-button hover:shadow-md transition-shadow"
            >
              {question}
            </motion.button>
          ))}
        </div>

        {/* Subtle Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
      </div>
    </motion.div>
  );
}

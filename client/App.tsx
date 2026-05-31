import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Mood from "./pages/Mood";
import Water from "./pages/Water";
import Sleep from "./pages/Sleep";
import Fitness from "./pages/Fitness";
import Nutrition from "./pages/Nutrition";
import Habits from "./pages/Habits";
import Garden from "./pages/Garden";
import Blog from "./pages/Blog";
import AIChat from "./pages/AIChat";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/water" element={<Water />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasChildNodes()) {
  createRoot(rootElement).render(<App />);
}

export default App;

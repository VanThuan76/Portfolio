"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ModeAIAssistant from "./mode-ai-assistant";

const NavigationExtApple = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    if (typeof window !== "undefined") {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);
  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="absolute top-1 right-3 flex items-center space-x-1 text-black dark:text-white font-semibold">
      <ModeAIAssistant />
      <div className="relative min-w-[70px] h-[35px] rounded-lg hidden md:flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute top-0 left-0 h-full flex items-center"
        >
          <div className="text-sm">
            {time.toLocaleTimeString("en-US", { hour12: false })}
          </div>
        </motion.div>
      </div>
      <div className="hidden md:block text-sm">{formattedDate}</div>
    </div>
  );
};

export default NavigationExtApple;

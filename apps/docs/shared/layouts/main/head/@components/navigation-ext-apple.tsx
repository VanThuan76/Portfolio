"use client";

import { useEffect, useState } from "react";
import { Wifi } from "lucide-react";

import ModeAIAssistant from "./expand-ai-assistant";

const NavigationExtApple = () => {
  const [time, setTime] = useState(new Date());

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="relative flex items-center justify-end space-x-1 text-black dark:text-white font-semibold">
      <ModeAIAssistant />
      <Wifi className="w-[18px] h-[18px]" />
      <div className="relative min-w-[70px] h-[35px] rounded-lg flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 h-full flex items-center">
          <div className="text-sm">
            {time.toLocaleTimeString("en-US", { hour12: false })}
          </div>
        </div>
      </div>
      <div className="text-sm">{formattedDate}</div>
    </div>
  );
};

export default NavigationExtApple;

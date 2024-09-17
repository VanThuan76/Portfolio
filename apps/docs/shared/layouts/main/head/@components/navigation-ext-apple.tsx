"use client";

import { useEffect, useState } from "react";
import { Wifi } from "lucide-react";

// import ModeAIAssistant from "./expand-ai-assistant";

function NavigationExtApple() {
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
        <div className="relative flex items-center justify-end space-x-1 font-semibold text-black dark:text-white">
            {/* <ModeAIAssistant /> */}
            <Wifi className="w-[16px] h-[16px]" />
            <div className="relative min-w-[70px] h-full rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 flex items-center h-full">
                    <div className="text-sm">
                        {time.toLocaleTimeString("en-US", { hour12: false })}
                    </div>
                </div>
            </div>
            <div className="text-sm">{formattedDate}</div>
        </div>
    );
}

export default NavigationExtApple;

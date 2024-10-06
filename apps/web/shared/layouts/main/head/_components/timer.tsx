"use client";

import { useEffect, useState } from "react";

function Timer() {
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
    <>
      <div className="relative flex items-center justify-center w-auto h-full overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 flex items-center h-full">
          <div className="text-sm">
            {time.toLocaleTimeString("en-US", { hour12: false })}
          </div>
        </div>
      </div>
      <div className="text-sm">{formattedDate}</div>
    </>
  );
}

export default Timer;

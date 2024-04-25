"use client";
import { cn } from "@/lib/tw";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import NavigationApple from "./navigation-apple";
const NavigationExtApple = dynamic(() => import("./navigation-ext-apple"), {
  ssr: false,
});
type Props = {
  className?: string;
};
const HeadLayout = ({ className }: Props) => {
  const [osName, setOsName] = useState(null);
  useEffect(() => {
    const handleAcceptCookie = () => {
      const ua = navigator.userAgent;
      const osRegex = /(Mac OS X|Windows|Linux)/;
      const match = ua.match(osRegex);
      if (match) {
        // @ts-ignore
        setOsName(match[0]);
      }
    };
    const isCookieAccepted = true;
    if (isCookieAccepted) {
      handleAcceptCookie();
    }
  }, []);
  return (
    <div
      className={cn(
        "sticky bg-white dark:bg-[#030712] shadow-md w-full h-full top-0 left-0 grid grid-cols-3 justify-center items-center px-4 z-50",
        className,
      )}
    >
      <NavigationApple />
      <div className="text-sm text-center">🖐🏻{osName}</div>
      <NavigationExtApple />
    </div>
  );
};

export default HeadLayout;

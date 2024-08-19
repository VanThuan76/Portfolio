"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { cn } from "@utils/tw";

import NavigationApple from "./@components/navigation-apple";
const NavigationExtApple = dynamic(
  () => import("./@components/navigation-ext-apple"),
  {
    ssr: false,
  },
);

type Props = {
  className?: string;
};
const HeadMain = ({ className }: Props) => {
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
        "hidden sticky bg-white dark:bg-[#030712] shadow-md w-full top-0 left-0 md:grid grid-cols-3 justify-center items-center px-4 z-50",
        className,
      )}
    >
      <NavigationApple />
      <div className="text-sm text-center">🖐🏻{osName}</div>
      <NavigationExtApple />
    </div>
  );
};

export default HeadMain;

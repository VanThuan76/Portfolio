"use client";
import { cn } from "@/lib/tw";
import { IAuthSupabase } from "@/server/data/types/supabase";
import { useAppSelector } from "@/store";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import NavigationApple from "./navigation-apple";
const NavigationExtApple = dynamic(() => import("./navigation-ext-apple"), {
  ssr: false,
});
interface Props {
  children: React.ReactNode;
  className?: string;
}
const FrameScreen = ({ children, className }: Props) => {
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
  const { hasFullScreen } = useAppSelector((state) => state.app);
  const styleScreen = hasFullScreen
    ? "w-full h-full"
    : "relative w-full h-full bg-[#F6F6F6] dark:bg-[#060606] rounded-xl overflow-hidden p-2 md:p-5 lg:p-10";
  return (
    <div className={cn(styleScreen, className, "pt-10")}>
      <div className="absolute flex top-3 right-1/2 translate-x-1/2 text-sm">
        🖐🏻 {osName}
      </div>
      <NavigationApple />
      <NavigationExtApple />
      {children}
    </div>
  );
};

export default FrameScreen;

"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { RootState, useAppSelector } from "@store/index";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

const NavigationMobile = React.memo(() => {
  const [isClose, setIsClose] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const blogs = useAppSelector((state: RootState) => state.app.blogs);
  const shouldShowNavigation = /^\/(blog|project)\/.+/.test(pathname);

  if (pathname === "/") {
    return;
  }

  const handleXClick = () => {
    setIsClose(true);

    setTimeout(() => {
      router.back();
    }, 1000);
  };

  function handleSwitch() {
    if (pathname.startsWith("/blog")) {
      const currentSlug = pathname.split("/").pop() || "";
      const availableSlugs = blogs
        .filter((blog) => blog.slug !== currentSlug)
        .map((blog) => blog.slug);

      const currentIndex = availableSlugs.indexOf(currentSlug);
      let nextIndex = (currentIndex + 1) % availableSlugs.length;

      if (currentIndex === -1) {
        nextIndex = 0;
      }

      const nextSlug = availableSlugs[nextIndex];
      router.push(`/blog/${nextSlug}`);
    } else if (pathname.startsWith("/project")) {
    }
  }
  return (
    <div className="relative z-[100] flex items-center justify-between w-full">
      <MotionContainer
        delay={0.3}
        isClose={isClose}
        type="scale"
        className="absolute left-5 bottom-5 group h-[50px] w-[50px] focus:outline-none transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
        onClick={handleXClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          color="#fff"
          className="rotate-90"
        >
          <path
            fill="currentColor"
            d="M19.155 49.992H44.5a5.5 5.5 0 0 0 5.5-5.5V19.176c0-2.868-1.14-5.618-3.17-7.64L38.455 3.16A10.8 10.8 0 0 0 30.816 0H5.5A5.5 5.5 0 0 0 0 5.5v25.41a10.82 10.82 0 0 0 3.198 7.677l8.347 8.273a10.8 10.8 0 0 0 7.61 3.132"
          ></path>
        </svg>
        <X className="absolute top-1/3 left-1/3 transform -translate-x-[35%] translate-y-[5%] w-[24px] h-[24px] text-rose-500 z-10" />
      </MotionContainer>
      {shouldShowNavigation && (
        <div className="flex items-center justify-center gap-4">
          <MotionContainer
            delay={0.5}
            type="scale"
            className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
            onClick={handleSwitch}
          >
            <ArrowLeft className="w-[16px] h-[16px] text-white" />
          </MotionContainer>
          <MotionContainer
            delay={0.5}
            type="scale"
            className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
            onClick={handleSwitch}
          >
            <ArrowRight className="w-[16px] h-[16px] text-white" />
          </MotionContainer>
        </div>
      )}
    </div>
  );
});

export default NavigationMobile;

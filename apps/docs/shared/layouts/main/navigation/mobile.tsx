"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import { useAppSelector } from "@store/index";

const NavigationMobile = React.memo(() => {
    const { blogs } = useAppSelector((state) => state.app);

    const router = useTransitionRouter();
    const pathname = usePathname();
    const shouldShowNavigation = /^\/(blog|project)\/.+/.test(pathname);

    if (pathname === "/") {
        return;
    }

    const handleXClick = () => {
        router.push("/");
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
            // Handle project navigation logic here if needed
        }
    }

    return (
        <div className="fixed flex items-center justify-between w-full px-2 bottom-5">
            <MotionContainer
                delay={2}
                type="scale"
                className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#bb4855] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
                onClick={handleXClick}
            >
                <X className="w-[16px] h-[16px] text-white" />
            </MotionContainer>
            {shouldShowNavigation && (
                <div className="flex items-center justify-center gap-4">
                    <MotionContainer
                        delay={2}
                        type="scale"
                        className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
                        onClick={handleSwitch}
                    >
                        <ArrowLeft className="w-[16px] h-[16px] text-white" />
                    </MotionContainer>
                    <MotionContainer
                        delay={2}
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

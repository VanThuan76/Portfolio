"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@utils/tw";

import { useAppSelector } from "@store/index";

import FadeWrapper from "@ui/molecules/frame/fade-wrapper";
import HeadMain from "@shared/layouts/main/head";
import NavigationApple from "@shared/layouts/main/head/@components/navigation-apple";

import { BottomBarMenu } from "@shared/layouts/main/navigation";
import { usePathname } from "next/navigation";
interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    const { initProgress, initBackground, hasFullScreen, pageCached } = useAppSelector(
        (state) => state.app,
    );

    const pathName = usePathname()

    return (
        <main
            id="container-app"
            className={cn(
                "relative mx-auto w-screen h-screen hidden z-[2000]",
                initProgress === 100 && "block"
            )}
        >
            {!hasFullScreen && <HeadMain />}
            <div
                className={cn(
                    "relative flex flex-col items-center justify-center w-full z-50 transition-all ease-linear duration-300",
                    hasFullScreen ? "h-full" : "h-full md:h-[90vh] md:mt-4 md:px-12",
                )}
            >
                <FadeWrapper
                    className={cn(
                        "relative w-full h-full m-auto border-none overflow-hidden",
                        hasFullScreen ? "rounded-none" : "rounded-none md:rounded-lg",
                    )}
                    isActive={!pageCached.includes(pathName)}
                >
                    <NavigationApple />
                    {children}
                </FadeWrapper>
            </div>
            {initBackground !== "" && (
                <Image
                    width={1280}
                    height={1280}
                    alt="bg-container"
                    src={initBackground}
                    className="absolute top-0 left-0 z-10 hidden object-cover object-center w-full h-full md:block"
                    priority={true}
                />
            )}
            <BottomBarMenu />
        </main>
    );
};

export default React.memo(MainLayout);

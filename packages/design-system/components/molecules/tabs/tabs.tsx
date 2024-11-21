"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import { memo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@repo/design-system/utils/tw";
import {
    Avatar,
    AvatarImage,
} from "@repo/design-system/components/molecules/ui-elements/avatar";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { TextShimmer } from "@repo/design-system/components/molecules/effects/text-shimmer";
import { Separator } from "@repo/design-system/components/molecules/other-utils/separator";

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

const LoadingSkeleton = () => {
    const t = useTranslations("pages.blog");

    return (
        <div className="flex flex-col items-start justify-start w-full gap-2">
            <Skeleton className="w-[50%] h-[50px] flex justify-start items-center border-none rounded-lg px-4 gap-2">
                <Skeleton className="w-[25px] h-[25px] bg-white rounded-full"></Skeleton>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} className="w-10 h-1 bg-white rounded-full" />
                ))}
            </Skeleton>
            <Skeleton className="w-full h-[300px] flex justify-center items-center rounded-lg">
                <TextShimmer className="text-lg text-center md:text-xl" duration={1}>
                    {t("loading_blog")}
                </TextShimmer>
            </Skeleton>
        </div>
    );
};

export const Tabs = memo(
    ({
        tabs: propTabs,
        containerClassName,
        activeTabClassName,
        tabClassName,
        contentClassName,
    }: {
        tabs: Tab[];
        containerClassName?: string;
        activeTabClassName?: string;
        tabClassName?: string;
        contentClassName?: string;
    }) => {
        const tabsRef = useRef<HTMLDivElement | null>(null);
        const hoverRef = useRef(false);
        const [currentIndex, setCurrentIndex] = useState(0);
        const [active, setActive] = useState<Tab>(propTabs[0]!);
        const [tabs, setTabs] = useState<Tab[]>(propTabs || [propTabs[0]!]);

        const currentTabActive = active || propTabs[0];
        const currentTabs = (tabs.length > 0 && tabs) || propTabs;
        const isLoading = propTabs.length === 0;

        const moveSelectedTabToTop = (idx: number) => {
            const newTabs: any = [...propTabs];
            const selectedTab: any = newTabs.splice(idx, 1);
            newTabs.unshift(selectedTab[0]);
            setTabs(newTabs);
            setActive(newTabs[0]);
            setCurrentIndex(idx);
        };

        const scrollToTab = (direction: "left" | "right") => {
            if (tabsRef.current) {
                const scrollAmount = 200;
                tabsRef.current.scrollBy({
                    left: direction === "left" ? -scrollAmount : scrollAmount,
                    behavior: "smooth",
                });
            }
        };

        return (
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <m.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <LoadingSkeleton />
                    </m.div>
                ) : (
                    <m.div
                        key="tabs-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                    >
                        <div
                            ref={tabsRef}
                            className={cn(
                                "flex flex-row items-center justify-start [perspective:1000px] sticky top-0 bg-white rounded-sm py-1 md:py-0 md:bg-transparent z-[999] flex-nowrap no-visible-scrollbar max-w-full w-full pl-1 overflow-x-auto gap-1",
                                containerClassName,
                            )}
                        >
                            {/* //More */}
                            <Avatar className="mr-2 transition-all duration-75 ease-in-out">
                                <m.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    <AvatarImage
                                        src={`/images/blog/status_${currentIndex}.png`}
                                        alt="@status"
                                        className="transition-opacity duration-75 ease-in-out"
                                    />
                                </m.div>
                            </Avatar>
                            {propTabs.map((tab, idx) => (
                                <m.button
                                    key={idx}
                                    onMouseEnter={() => hoverRef.current === true}
                                    onMouseLeave={() => hoverRef.current === false}
                                    onClick={() => {
                                        moveSelectedTabToTop(idx);
                                    }}
                                    className={cn(
                                        "relative px-4 py-1 rounded-md flex-shrink-0",
                                        tabClassName,
                                    )}
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {currentTabActive?.value === tab.value && (
                                        <m.div
                                            layoutId={`clickedbutton_${tab.value}`}
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                bounce: 0.3,
                                                duration: 0.6,
                                            }}
                                            className={cn(
                                                "absolute inset-0 bg-black/20 shadow-md rounded-md",
                                                activeTabClassName,
                                            )}
                                        />
                                    )}
                                    <m.p
                                        className={cn(
                                            "relative block text-slate-800 text-sm",
                                            currentTabActive?.value === tab.value && "text-black",
                                        )}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {tab.title}
                                    </m.p>
                                </m.button>
                            ))}
                        </div>

                        <div
                            className="fixed right-0 top-3 w-5 md:w-8 h-12 md:h-10 bg-gradient-to-t from-white via-white opacity-80 rounded-r-md z-[1000] flex items-center justify-center cursor-pointer"
                            onClick={() => scrollToTab("right")}
                        >
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
                        </div>
                        <div
                            className="fixed left-0 top-3 w-5 md:w-8 h-12 md:h-10 bg-gradient-to-t from-white via-white opacity-80 rounded-l-md z-[1000] flex items-center justify-center cursor-pointer"
                            onClick={() => scrollToTab("left")}
                        >
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
                        </div>

                        <Separator className="w-full h-[1px] bg-black/10 md:bg-black mt-2 md:mt-4 mx-auto md:mx-3" />

                        <FadeInDiv
                            tabs={currentTabs}
                            active={currentTabActive}
                            key={currentTabActive?.value}
                            hovering={hoverRef.current}
                            className={cn("mt-2", contentClassName)}
                        />
                    </m.div>
                )}
            </AnimatePresence>
        );
    },
);

export const FadeInDiv = ({
    className,
    tabs,
    hovering,
}: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0]?.value;
    };

    return (
        <AnimatePresence mode="popLayout">
            <div className="relative w-full h-full">
                {tabs.map((tab, idx) => {
                    return (
                        <m.div
                            key={tab.value}
                            layoutId={tab.value}
                        >
                            {isActive(tab) && (
                                <m.div
                                    style={{
                                        scale: 1 - idx * 0.1,
                                        top: hovering ? idx * -40 : 0,
                                        zIndex: tabs.length - idx,
                                        willChange: "transform, opacity",
                                    }}
                                    animate={{
                                        y: isActive(tab) ? 0 : hovering ? idx * -10 : 20,
                                        scale: isActive(tab) ? 1 : 0.95,
                                        opacity: isActive(tab) ? 1 : 0,
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeInOut",
                                        },
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        y: 20,
                                        transition: { duration: 0.3 },
                                    }}
                                    className={cn(
                                        "w-full h-full",
                                        isActive(tab)
                                            ? "touch-auto pointer-events-auto"
                                            : "touch-none pointer-events-none",
                                        className,
                                    )}
                                >
                                    {tab.content}
                                </m.div>
                            )}
                        </m.div>
                    )
                })}
            </div>
        </AnimatePresence>
    );
};

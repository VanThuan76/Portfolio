"use client";

import { memo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import { useBreakpoint, useOpenScreen } from "@repo/hooks";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

import { DATA_MENUS } from "@shared/constants";

import MenuIcon from "../icons/menu-icon";
import { useTranslations } from "next-intl";

export const perspectiveMenuItemVariants = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.5,
            delay: 0.5 * i,
            ease: "easeOut",
        },
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

const fadeVariants = {
    initial: {
        opacity: 0,
        translateX: -100,
    },
    animate: {
        opacity: 1,
        translateX: 0,
        transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        opacity: 0,
        translateX: -100,
        transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] },
    },
};

const Menu = () => {
    const breakpoint = useBreakpoint();
    const tMenu = useTranslations("menu");

    const isSmallScreen = new Set(["xs", "sm"]).has(breakpoint);

    const [isOpen, setIsOpen] = useState(false);

    const { handleOpenScreen } = useOpenScreen();

    const menuVariants = {
        open: {
            width: "100vw",
            top: isSmallScreen ? "-15px" : "0px",
            right: isSmallScreen ? "-15px" : "0px",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255)",
            transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                backgroundColor: { duration: 0.75 },
            },
        },
        closed: {
            width: "100px",
            height: "40px",
            top: isSmallScreen ? "-10px" : "0",
            right: isSmallScreen ? "-15px" : "-5px",
            backgroundColor: "rgba(255, 255, 255, 0)",
            transition: {
                duration: 0.75,
                delay: 0.35,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                backgroundColor: { duration: 0.75 },
            },
        },
    };

    const containerMenuVariants = {
        open: {
            right: isSmallScreen ? "15px" : "0px",
            top: isSmallScreen ? "15px" : "0px",
            borderRadius: "20px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
            right: "20px",
            top: "20px",
            borderRadius: "0px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
        },
    };

    return (
        <>
            <m.div
                variants={containerMenuVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
                className="absolute z-[999999999] pointer-events-auto"
            >
                <m.div
                    className="relative w-full h-full"
                    variants={menuVariants}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence mode="wait" onExitComplete={() => setIsOpen(false)}>
                        {isOpen && (
                            <m.div
                                className="relative flex flex-col justify-between h-full px-10 pt-24 pb-12 overflow-hidden"
                                initial="initial"
                                animate={isOpen ? "animate" : "exit"}
                                variants={fadeVariants}
                            >
                                <div className="fixed z-20 flex flex-col gap-4 top-60 md:top-52">
                                    {DATA_MENUS.map((item, i) => {
                                        const nameFix = (item.name).toLowerCase().replace(/(?:^\w|[A-Z]|\b\w|\s+|[^\w\s])+/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '')
                                        return (
                                            <div
                                                key={`menu_${i}`}
                                                style={{
                                                    perspective: "120px",
                                                    perspectiveOrigin: "bottom",
                                                }}
                                            >
                                                <m.div
                                                    custom={i}
                                                    variants={perspectiveMenuItemVariants}
                                                    initial="initial"
                                                    animate="enter"
                                                    exit="exit"
                                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                                        setIsOpen(!isOpen);
                                                        handleOpenScreen(e, item.href);
                                                    }}
                                                >
                                                    <p className="text-3xl text-[#1e1e1e] cursor-pointer">
                                                        {tMenu(`${nameFix}`)}
                                                    </p>
                                                </m.div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <LoaderImage
                                    isLoader={false}
                                    alt="@background"
                                    src="/bg_menu.webp"
                                    width={1280}
                                    height={1080}
                                    className="absolute bottom-0 left-[-50%] object-contain w-full h-full z-10"
                                />
                            </m.div>
                        )}
                    </AnimatePresence>
                    <m.div
                        animate={{
                            scale: isOpen ? 1.1 : 1,
                        }}
                        transition={{
                            duration: 0.75,
                            type: "tween",
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] z-50 absolute !top-0 !right-0"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <m.div
                            className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                            animate={{
                                rotate: isOpen ? 45 : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                type: "tween",
                                ease: [0.76, 0, 0.24, 1],
                            }}
                        >
                            <MenuIcon className="w-full h-full" />
                        </m.div>
                    </m.div>
                </m.div>
            </m.div>
        </>
    );
};

export default memo(Menu);

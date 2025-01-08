"use client";

import React, { useEffect, useState, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { cn } from "@repo/design-system/utils/tw";
import { Button } from "@repo/design-system/components/atoms/button";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const [visible, setVisible] = useState(false);
    const lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            console.log(currentScroll)

            if (currentScroll < 50) {
                setVisible(false);
            } else {
                if (currentScroll > lastScroll.current) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            }

            lastScroll.current = currentScroll;  // Update ref value
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            <m.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "hidden xl:block max-w-[1920px] w-1920:max-w-[2560px] px-6 md:px-12 lg:px-24 py-2.5 md:py-5 sticky top-24 mx-auto transition-all duration-500 bg-transparent z-[5000]",
                    className
                )}
            >
                <div className="rounded-full border border-black/50 inset-x-0 w-full flex items-center justify-between px-2.5 md:px-3 py-2.5 max-h-[62px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <div></div>
                    <nav className="flex-wrap items-center justify-center hidden gap-12 font-semibold text-black md:flex dark:text-white">
                        {navItems.map((navItem: any, idx: number) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative dark:text-neutral-50 items-center flex space-x-1 text-black hover:text-gray-500"
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className="hidden text-sm sm:block">{navItem.name}</span>
                            </Link>
                        ))}
                    </nav>
                    <Button className="relative px-4 py-2 text-sm font-medium text-white border rounded-full border-neutral-200">
                        <span>Get in touch</span>
                        <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </Button>
                </div>
            </m.div>
        </AnimatePresence>
    );
};

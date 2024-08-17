"use client";

import { useRef, useState } from "react";
import {
    AnimatePresence,
    m,
    useInView,
    UseInViewOptions,
    Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: MarginType;
    blur?: string;
}

export default function BlurFade({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    inViewMargin = "-50px",
    blur = "6px",
}: BlurFadeProps) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
    const isInView = !inView || inViewResult;
    const [isClicked, setIsClicked] = useState(false);

    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
        clicked: { scale: [1, 1.1, 1.0, 0.9] }, // Thêm hiệu ứng scale khi click
    };

    const combinedVariants = variant || defaultVariants;

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), duration * 1000);
    };

    return (
        <AnimatePresence>
            <m.div
                ref={ref}
                initial="hidden"
                animate={isClicked ? "clicked" : isInView ? "visible" : "hidden"}
                exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: "easeOut",
                }}
                className={className}
                onClick={handleClick}
                onTap={handleClick}
            >
                {children}
            </m.div>
        </AnimatePresence>
    );
}
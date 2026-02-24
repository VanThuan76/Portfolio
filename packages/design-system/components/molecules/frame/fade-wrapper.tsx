"use client";

import { AnimatePresence, m } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 16,
        filter: "blur(4px)",
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            // Split per-property: spring for position/opacity, tween for filter
            // to prevent spring overshoot producing invalid blur(-Xpx) values
            y: { type: "spring", stiffness: 150, damping: 25, mass: 1.2 },
            opacity: { type: "spring", stiffness: 150, damping: 25, mass: 1.2 },
            filter: { type: "tween", ease: "easeOut", duration: 0.4 },
        },
    },
};

function Container({ children, className }: React.HTMLProps<HTMLDivElement>) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            <m.div
                variants={container}
                initial="hidden"
                animate="show"
                className={className}
            >
                {children}
            </m.div>
        </AnimatePresence>
    );
}

function Item({
    className,
    children,
}: {
    className: string;
    children: React.ReactNode;
}) {
    return (
        <m.div className={className} variants={item}>
            {children}
        </m.div>
    );
}

export { Container, Item };

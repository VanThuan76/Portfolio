import React, { memo, useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { throttle } from "lodash";
import { cn } from "@utils/tw";

import { SparklingGrid } from "@ui/molecules/frame/sparkling-grid";

export const StickyScroll = memo(
  ({
    content,
    contentClassName,
  }: {
    content: {
      title: string;
      description: string;
      content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
  }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
      container: ref,
      offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    const handleScroll = throttle((latest) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          return distance < Math.abs(latest - cardsBreakpoints[acc]!)
            ? index
            : acc;
        },
        0,
      );
      setActiveCard(closestBreakpointIndex);
    }, 200);

    useMotionValueEvent(scrollYProgress, "change", handleScroll);

    const backgroundColors = [
      "var(--slate-900)",
      "var(--black)",
      "var(--neutral-900)",
    ];
    const linearGradients = [
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
      linearGradients[0],
    );

    useEffect(() => {
      setBackgroundGradient(
        linearGradients[activeCard % linearGradients.length],
      );
    }, [activeCard]);

    return (
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] md:h-[18rem] w-full overflow-y-auto flex justify-end gap-4 items-start relative space-x-10 rounded-md"
        ref={ref}
        style={{
          scrollSnapType: "y mandatory",
        }}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky overflow-hidden",
            content[0] ? "top-0" : "top-10",
            contentClassName,
          )}
        >
          {content[activeCard]?.content ?? null}
        </motion.div>
        <div className="relative flex items-start justify-start div bg-black/50 md:bg-transparent">
          <div className="w-full max-w-2xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className={
                  index !== 0
                    ? "my-8 scroll-snap-align-start"
                    : "my-auto scroll-snap-align-start"
                }
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={cn(
                    "text-2xl font-bold",
                    activeCard === index ? "text-white" : "text-neutral-400",
                  )}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="max-w-sm mt-3 text-neutral-200 text-kg"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
            <SparklingGrid />
          </div>
        </div>
      </motion.div>
    );
  },
);

const styles = `
  ::-webkit-scrollbar {
      width: 0;
  }
  ::-webkit-scrollbar-thumb {
      background: transparent;
  }
  ::-webkit-scrollbar-track {
      background: transparent;
  }w
`;

export default StickyScroll;

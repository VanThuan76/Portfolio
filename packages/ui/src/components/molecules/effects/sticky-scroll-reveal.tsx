import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { m, useMotionValueEvent, useScroll } from "framer-motion";
import throttle from "lodash.throttle";
import { cn } from "@utils/tw";

export const StickyScroll = memo(
  ({
    content,
    contentClassName,
  }: {
    content: {
      title: string;
      description: React.ReactNode | string;
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

    const handleScroll = useCallback(
      throttle((latest) => {
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
        if (closestBreakpointIndex !== activeCard) {
          setActiveCard(closestBreakpointIndex);
        }
      }, 200),
      [activeCard, cardLength, content],
    );

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
      <m.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="austin-scroll h-[30rem] md:h-[20rem] w-full overflow-x-hidden overflow-y-auto flex flex-col md:flex-row items-center justify-start md:justify-center gap-4 md:items-start relative space-x-10 rounded-md"
        ref={ref}
      >
        <m.div
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden md:block order-2 md:order-1 h-full rounded-md bg-white sticky overflow-hidden",
            content[0] ? "top-0" : "top-10",
            contentClassName,
          )}
        >
          {content[activeCard]?.content ?? null}
        </m.div>
        <div className="relative flex items-start justify-start order-1 bg-transparent md:order-2 w-full md:w-auto !ml-4 md:m-auto">
          <div className="w-full max-w-4xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className={
                  index !== 0
                    ? "my-8 scroll-snap-align-start"
                    : "my-auto scroll-snap-align-start"
                }
              >
                <m.h2
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
                </m.h2>
                <m.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={cn(
                    "max-w-xl mt-3 md:max-w-md text-kg",
                    activeCard === index ? "text-white" : "text-neutral-200",
                  )}
                >
                  {item.description}
                </m.p>
                <m.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{ background: backgroundGradient }}
                  className={cn(
                    "block md:hidden h-full rounded-md overflow-hidden",
                    content[0] ? "top-0" : "top-10",
                    contentClassName,
                  )}
                >
                  {content[activeCard]?.content ?? null}
                </m.div>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
      </m.div>
    );
  },
);

export default StickyScroll;

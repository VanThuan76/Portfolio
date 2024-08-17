"use client";

import { m } from "framer-motion";
import { useState } from "react";
import { PartyPopper } from "lucide-react";

import { cn } from "@utils/tw";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
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
  const [active, setActive] = useState<Tab>(
    propTabs[0] || { title: "", value: "", content: "" },
  );
  const [tabs, setTabs] = useState<Tab[]>(
    propTabs || [{ title: "", value: "", content: "" }],
  );

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs: any = [...propTabs];
    const selectedTab: any = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName,
        )}
      >
        <PartyPopper className="mr-2" />
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <m.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-400 md:bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName,
                )}
              />
            )}
            <TypographyP
              title={tab.title}
              className="text-xs md:text-sm relative block text-black dark:text-white"
            />
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-4", contentClassName)}
      />
    </>
  );
};

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
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <m.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
            opacity: isActive(tab) ? 1 : 0,
            transition: {
              duration: 0.7,
            },
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </m.div>
      ))}
    </div>
  );
};

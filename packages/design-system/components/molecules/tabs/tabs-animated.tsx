"use client";

import { cn } from "@repo/design-system/utils/tw";
import { AnimatePresence, m } from "framer-motion";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  isValidElement,
} from "react";

interface TabContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  wobbly: boolean;
  hover: boolean;
  defaultValue: string;
  prevIndex: number;
  setPrevIndex: (value: number) => void;
  tabsOrder: string[];
}
const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};

interface TabsProviderProps {
  children: ReactNode;
  defaultValue: string;
  wobbly?: boolean;
  hover?: boolean;
}

export const TabsProvider = ({
  children,
  defaultValue,
  wobbly = true,
  hover = false,
}: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [prevIndex, setPrevIndex] = useState(0);
  const [tabsOrder, setTabsOrder] = useState<string[]>([]);

  useEffect(() => {
    const order: string[] = [];
    React.Children.toArray(children).forEach((child) => {
      if (isValidElement(child) && child.type === TabsContent) {
        order.push(child.props.value);
      }
    });
    setTabsOrder(order);
  }, [children]);

  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
        wobbly,
        hover,
        defaultValue,
        setPrevIndex,
        prevIndex,
        tabsOrder,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const TabsBtn = React.memo(
  ({ children, className, value, onSuccess }: any) => {
    const {
      activeTab,
      setPrevIndex,
      setActiveTab,
      defaultValue,
      hover,
      wobbly,
      tabsOrder,
    } = useTabs();

    const handleClick = () => {
      setPrevIndex(tabsOrder.indexOf(activeTab));
      setActiveTab(value);
      onSuccess(value);
    };

    return (
      <>
        <>
          <m.div
            className={cn(
              `cursor-pointer p-1 px-2 rounded-md relative`,
              className,
            )}
            onFocus={() => {
              hover && handleClick();
            }}
            onMouseEnter={() => {
              hover && handleClick();
            }}
            onClick={handleClick}
          >
            {children}

            {activeTab === value && (
              <AnimatePresence mode="wait">
                <m.div
                  transition={{
                    layout: {
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                  layoutId={defaultValue}
                  className="absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md z-[1]"
                />
              </AnimatePresence>
            )}

            {wobbly ? (
              <>
                {activeTab === value && (
                  <AnimatePresence mode="wait">
                    <m.div
                      transition={{
                        layout: {
                          duration: 0.4,
                          ease: "easeInOut",
                          delay: 0.04,
                        },
                      }}
                      layoutId={defaultValue}
                      className="absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md z-[1] tab-shadow"
                    />
                  </AnimatePresence>
                )}
                {activeTab === value && (
                  <AnimatePresence mode="wait">
                    <m.div
                      transition={{
                        layout: {
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.2,
                        },
                      }}
                      layoutId={`${defaultValue}b`}
                      className="absolute w-full h-full left-0 top-0 dark:bg-base-dark bg-white rounded-md  z-[1] tab-shadow"
                    />
                  </AnimatePresence>
                )}
              </>
            ) : (
              <></>
            )}
          </m.div>
        </>
      </>
    );
  },
);

export const TabsContent = React.memo(({ children, className, value }: any) => {
  const { activeTab } = useTabs();

  return (
    <>
      <AnimatePresence mode="wait">
        {activeTab === value ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className={cn("rounded-md relative w-full", className)}
          >
            {activeTab === value ? children : null}
          </m.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </>
  );
});

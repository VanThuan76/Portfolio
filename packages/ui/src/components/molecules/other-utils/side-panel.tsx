"use client";

import React, { ReactNode, forwardRef } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { cn } from "@utils/tw";
import useMeasure from "react-use-measure";

type PanelContainerProps = {
  panelOpen: boolean;
  handlePanelOpen: () => void;
  className?: string;
  videoUrl?: string;
  renderButton?: (handleToggle: () => void) => ReactNode;
  children: ReactNode;
};

const sectionVariants = {
  open: {
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const sharedTransition = { duration: 0.6, ease: "easeInOut" };

const SidePanel = forwardRef<HTMLDivElement, PanelContainerProps>(
  ({ panelOpen, handlePanelOpen, className, renderButton, children }, ref) => {
    const [measureRef, bounds] = useMeasure();

    return (
      <ResizablePanel>
        <motion.div
          className={cn(className)}
          animate={panelOpen ? "open" : "closed"}
          variants={sectionVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ height: bounds.height > 0 ? bounds.height : 0.1 }}
            className="h-auto"
            transition={{ type: "spring", bounce: 0.02, duration: 0.65 }}
          >
            <div ref={measureRef}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={{
                    ...sharedTransition,
                    duration: sharedTransition.duration / 2,
                  }}
                  key="form"
                >
                  <div className={cn("flex items-end w-full justify-start")}>
                    {renderButton && renderButton(handlePanelOpen)}
                  </div>

                  {panelOpen && (
                    <motion.div
                      exit={{ opacity: 0 }}
                      transition={sharedTransition}
                    >
                      {children}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </ResizablePanel>
    );
  },
);

SidePanel.displayName = "SidePanel";

export default SidePanel;

type ResizablePanelProps = {
  children: React.ReactNode;
};

const ResizablePanel = React.forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ children }, ref) => {
    const transition = { type: "ease", ease: "easeInOut", duration: 0.4 };

    return (
      <MotionConfig transition={transition}>
        <div className="absolute flex flex-col items-start w-full right-5 top-5">
          <div className="w-full mx-auto">
            <div
              ref={ref}
              className={cn(
                children ? "rounded-r-none" : "rounded-sm",
                "relative w-full flex justify-end items-end overflow-hidden",
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </MotionConfig>
    );
  },
);

ResizablePanel.displayName = "ResizablePanel";

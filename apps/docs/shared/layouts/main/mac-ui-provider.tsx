"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "@store/index";
import useBreakpoint from "@shared/hooks/use-break-point";

import MacStartupScreen from "@ui/organisms/mac-startup";

const MacUiProvider = React.memo(({ progress }: { progress: number }) => {
  const breakpoint = useBreakpoint();
  const hasVisited = useAppSelector((state) => state.app.hasVisited);

  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    if (progress === 100 && hasVisited) {
      setTimeout(() => {
        setShowStartup(false);
      }, 3000);
    }
  }, [progress]);

  return (
    <>
      <MacStartupScreen
        size={breakpoint === "xs" ? "small" : "large"}
        logo="/logo.png"
        progress={progress}
        isActive={showStartup}
      />
    </>
  );
});

export default MacUiProvider;

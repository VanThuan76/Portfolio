"use client";

import React from "react";

import { RootState, useAppSelector } from "@repo/management-system";
import { Database } from "@repo/supabase/utils/types";

import { MultiStepLoader } from "@repo/design-system/components/molecules/effects/multi-step-loader";
import StairsTransition from "@shared/layouts/transitions/stairs";

export default function Page() {
  const informations = useAppSelector(
    (state: RootState) => state.app.informations,
  );

  return (
    <StairsTransition>
      <div className="relative w-full h-full overflow-hidden bg-black/50">
        <div className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('/images/about-me/noise_bg.gif')] opacity-[0.1]" />
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t dark:to-gray-800 dark:from-gray-950 to-[#1e1e1e] from-[#2e2e2e] flex flex-col items-center justify-center dark:text-white text-black overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <MultiStepLoader
            loadingStates={informations.map(
              (infor: Database["public"]["Tables"]["information"]["Row"]) => ({
                text: infor.content as string,
              }),
            )}
            loading={true}
            duration={1500}
          />
        </div>
      </div>
    </StairsTransition>
  );
}

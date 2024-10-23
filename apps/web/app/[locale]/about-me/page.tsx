"use client";

import React from "react";

import { MultiStepLoader } from "@ui/molecules/effects/multi-step-loader";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { RootState, useAppSelector } from "@store/index";
import { Database } from "@shared/utils/supabase/types";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

export default function Page() {
  const informations = useAppSelector(
    (state: RootState) => state.app.informations,
  );

  return (
    <div className="relative w-full h-full m-auto overflow-hidden bg-black/50">
      <div
        className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('/images/about-me/noise_bg.gif')]"
        style={{ opacity: "0.1" }}
      ></div>
      <div className="w-full h-full bg-gradient-to-t dark:to-gray-800 dark:from-gray-950 to-[#1e1e1e] from-[#2e2e2e] flex flex-col items-center justify-center dark:text-white text-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <MultiStepLoader
          loadingStates={informations.map(
            (infor: Database["public"]["Tables"]["information"]["Row"]) => ({
              text: infor.content as string,
            }),
          )}
          loading={true}
          duration={2000}
        />
      </div>

      {/* <div className="absolute z-50 w-[300px] md:w-[500px] h-full md:bottom-0 left-3">
        <LoaderImage
          isLoader={false}
          width={1280}
          height={900}
          alt="@character"
          src="/images/about-me/character.png"
          className="object-contain object-center w-full h-full"
        />
      </div>
      <MotionContainer
        type="blur"
        className="absolute bottom-0 left-0 z-40 w-[400px] md:w-[600px]"
      >
        <LoaderImage
          isLoader={false}
          width={1980}
          height={1280}
          alt="@background"
          src="/images/about-me/left-bg.png"
          className="object-contain object-center w-full h-full"
        />
      </MotionContainer>
      <MotionContainer
        type="blur"
        className="absolute top-0 right-0 z-40 w-[400px] md:w-[600px]"
      >
        <LoaderImage
          isLoader={false}
          width={1980}
          height={1280}
          alt="@background"
          src="/images/about-me/right-bg.png"
          className="object-contain object-center w-full h-full"
        />
      </MotionContainer> */}
    </div>
  );
}

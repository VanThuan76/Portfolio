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
    <div className="relative grid w-full h-full m-auto overflow-hidden place-items-center bg-black/50 backdrop-blur-sm">
      <MultiStepLoader
        loadingStates={informations.map(
          (infor: Database["public"]["Tables"]["information"]["Row"]) => ({
            text: infor.content as string,
          }),
        )}
        loading={true}
        duration={2000}
      />

      <div className="absolute z-50 w-[300px] md:w-[500px] h-full md:bottom-0 left-3">
        <LoaderImage
          isLoader={false}
          width={1280}
          height={900}
          alt="@character"
          src="/images/about-me/character.png"
          className="object-contain object-center w-full h-full"
        />
      </div>
      <MotionContainer type="blur" className="absolute bottom-0 left-0 z-40 w-[400px] md:w-[600px]">
        <LoaderImage
          isLoader={false}
          width={1980}
          height={1280}
          alt="@background"
          src="/images/about-me/left-bg.png"
          className="object-contain object-center w-full h-full"
        />
      </MotionContainer>
      <MotionContainer type="blur" className="absolute top-0 right-0 z-40 w-[400px] md:w-[600px]">
        <LoaderImage
          isLoader={false}
          width={1980}
          height={1280}
          alt="@background"
          src="/images/about-me/right-bg.png"
          className="object-contain object-center w-full h-full"
        />
      </MotionContainer>
    </div>
  );
}

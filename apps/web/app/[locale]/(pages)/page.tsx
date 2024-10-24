"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cn } from "@utils/tw";
import { fontHome } from "@shared/utils/font";
import FlickeringGrid from "@ui/molecules/frame/flickering-grid";
import StairsTransition from "@shared/layouts/transitions/stairs";

const Model = dynamic(
  () => import("@three/model.tsx").then((mod) => mod.Model),
  { ssr: false },
);
const View = dynamic(() => import("@three/view.tsx").then((mod) => mod.View), {
  ssr: false,
});
const Common = dynamic(
  () => import("@three/view.tsx").then((mod) => mod.Common),
  { ssr: false },
);
const EffectComposerHandler = dynamic(
  () => import("@three/view.tsx").then((mod) => mod.EffectComposerHandler),
  { ssr: false },
);
const CameraRigHandler = dynamic(
  () => import("@three/view.tsx").then((mod) => mod.CameraRigHandler),
  { ssr: false },
);

const Page = () => {
  return (
    <StairsTransition>
      <div
        className={cn(
          "relative grid items-center justify-between w-full h-full grid-cols-2 mx-auto overflow-hidden",
          fontHome.className,
        )}
      >
        <div className="absolute z-10 text-6xl italic font-black leading-none tracking-widest translate-x-1/2 md:text-9xl bottom-1/2 right-1/4">
          <span className="text-white underline">AUSTIN</span>
          <span className="block text-right">VU</span>
        </div>

        <View className="absolute top-0 right-0 z-20 flex flex-col items-center justify-center w-screen h-screen">
          <Suspense fallback={null}>
            <Common />
            <Model position={[-30, 30, -150]} scale={[10, 10, 10]} />
            <EffectComposerHandler />
            <CameraRigHandler />
          </Suspense>
        </View>

        <FlickeringGrid
          className="absolute inset-0 z-0 w-full h-full"
          squareSize={2}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
          height={1280}
          width={1980}
        />
      </div>
    </StairsTransition>
  );
};

export default Page;

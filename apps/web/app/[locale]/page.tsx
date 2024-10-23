"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cn } from "@utils/tw";
import { fontHome } from "@shared/utils/font";
import FlickeringGrid from "@ui/molecules/frame/flickering-grid";

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
    <div
      className={cn(
        "relative grid items-center justify-between w-full h-full grid-cols-2 mx-auto overflow-hidden",
        fontHome.className,
      )}
    >
      {/* <div className='absolute top-0 left-0 z-50 w-[100px] h-[100px] bg-[#1e1e1e]'>
                <p className='w-full uppercase'>Next + React Three Fiber</p>
                <h1 className='my-4 text-5xl font-bold leading-tight'>Next 3D Starter</h1>
                <p className='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
            </div> */}

      <div className="absolute z-10 text-6xl font-black leading-none tracking-widest translate-x-1/2 md:text-9xl bottom-1/2 right-1/2">
        AUSTINVU
      </div>

      <View className="absolute top-0 right-0 z-20 flex flex-col items-center justify-center w-screen h-screen">
        <Suspense fallback={null}>
          <Common />
          <Model position={[0, 15, -200]} scale={[10, 10, 10]} />
          <EffectComposerHandler />
          <CameraRigHandler />
        </Suspense>
      </View>

      <FlickeringGrid
        className="absolute inset-0 z-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={1280}
        width={1980}
      />
    </div>
  );
};

export default Page;

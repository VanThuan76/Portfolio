"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import useBreakpoint from "@shared/hooks/use-break-point";

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
const CameraHandler = dynamic(
  () => import("@three/view.tsx").then((mod) => mod.CameraHandler),
  { ssr: false },
);

const Scene = () => {
  const breakpoint = useBreakpoint();

  return (
    <View
      id="background-app"
      orbit={true}
      className="fixed inset-0 z-30 flex flex-col items-center justify-center w-full h-screen overflow-hidden pointer-events-none"
    >
      <Suspense fallback={null}>
        <Common />
        <Model />
        <EffectComposerHandler />
      </Suspense>
    </View>
  );
};

export default Scene;

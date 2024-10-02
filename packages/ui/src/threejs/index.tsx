"use client";

import { lazy, useEffect, memo } from "react";
import { Canvas } from "@react-three/offscreen";

// @ts-ignore
const Scene = lazy(() => import("@three/scene.tsx"));
// @ts-ignore
const worker = new Worker(new URL("@three/worker.tsx", import.meta.url), {
  type: "module",
});

const App = memo(function App({
  breakpoint,
  positions,
  onProgress,
}: {
  breakpoint: any;
  positions: any;
  onProgress: any;
}) {
  useEffect(() => {
    if (
      breakpoint &&
      positions.cameraPosition &&
      positions.positionModelMain &&
      positions.positionModelCastle &&
      positions.positionModelMountain &&
      positions.positionModelCity &&
      positions.positionModelSchool
    ) {
      worker.postMessage(breakpoint, positions);
    }
  }, [positions, breakpoint]);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 200], fov: 100 }}
      eventPrefix="client"
      className="w-screen h-screen"
      worker={worker}
      fallback={
        <Scene
          breakpoint={breakpoint}
          positions={positions}
          onProgress={onProgress}
        />
      }
    />
  );
});

export default App;

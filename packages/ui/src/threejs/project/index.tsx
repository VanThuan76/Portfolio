"use client";

import { lazy, useEffect, memo } from "react";
import { Canvas } from "@react-three/offscreen";

// @ts-ignore
const Scene = lazy(() => import("@three/project/scene.tsx"));
//@ts-ignore
const worker = new Worker(
  new URL("@three/project/worker.tsx", import.meta.url),
  { type: "module" },
);

const App = memo(function App({
  isFly,
  position,
  scale,
}: {
  isFly: boolean;
  position: any;
  scale: any;
}) {
  useEffect(() => {
    if (position && scale) {
      worker.postMessage({ position, scale, isFly });
    }
  }, [position, scale, isFly]);

  return (
    <Canvas
      flat
      shadows
      camera={{ position: [0, 15, 100], fov: 50 }}
      eventPrefix="client"
      worker={worker}
      className="w-full h-full"
      fallback={<Scene position={position} scale={scale} isFly={isFly} />}
    />
  );
});

export default App;

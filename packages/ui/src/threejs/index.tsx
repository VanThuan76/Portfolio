import * as THREE from "three";
import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Stats } from "@react-three/drei";
const Experience = lazy(() =>
  import("./experience.tsx").then((module) => ({ default: module.Experience })),
);

export const App = ({ ...props }) => {
  const isMobileOrIpad = ["xs", "sm"].includes(props.breakpoint);

  return (
    <Canvas
      shadows
      dpr={isMobileOrIpad ? 1 : [1, 1.5]}
      camera={{ near: 1, fov: 100 }}
      eventPrefix="client"
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NoToneMapping;
      }}
      performance={{ min: isMobileOrIpad ? 0.1 : 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
      {...props}
    >
      <Preload all />
      <Suspense fallback={null}>
        <Experience positions={props.positions} breakpoint={props.breakpoint} />
      </Suspense>
      <Stats showPanel={0} />
    </Canvas>
  );
};

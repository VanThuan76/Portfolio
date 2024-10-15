"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "@utils/r3f";

export default function App({ ...props }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ near: 1, fov: 100 }}
      eventPrefix="client"
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NoToneMapping;
      }}
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
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}

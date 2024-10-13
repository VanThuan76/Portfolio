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
      {...props}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}

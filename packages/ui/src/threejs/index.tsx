"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "@utils/r3f";
import * as THREE from "three";

export default function App({ ...props }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 200], fov: 100 }}
      eventPrefix="client"
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
      {...props}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}

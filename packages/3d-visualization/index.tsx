import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "@repo/3d-visualization/utils/r3f";

export const App = ({ ...props }) => {
  return (
    <Canvas
      {...props}
      shadows
      dpr={1}
      camera={{ near: 1, fov: 50, position: [0, -5, 30] }}
      eventPrefix="client"
      gl={{ antialias: true }}
      onCreated={(state) => {
        state.gl.toneMapping = THREE.ACESFilmicToneMapping;
        state.gl.toneMappingExposure = 1.5;
      }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
};

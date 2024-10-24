import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "@utils/r3f";

export const App = ({ ...props }) => {
  const isMobileOrIpad = ["xs", "sm"].includes(props.breakpoint);

  return (
    <Canvas
      {...props}
      shadows
      dpr={isMobileOrIpad ? 1 : [1, 1.5]}
      camera={{ near: 1, fov: 50, position: [0, -5, 30] }}
      eventPrefix="client"
      gl={{ antialias: true }}
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
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

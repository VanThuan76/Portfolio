import { memo, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Background = memo(() => {
  const { scene } = useThree();
  const texture = useTexture("/images/home/bg_new_3.png");

  useEffect(() => {
    if (texture) {
      scene.background = texture;

      return () => {
        scene.background = null;
      };
    }
  }, [scene, texture]);

  return null;
});

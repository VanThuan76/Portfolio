import { memo } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { EquirectangularReflectionMapping, WebGLCubeRenderTarget } from "three";

const Background = () => {
  const { gl, scene } = useThree();

  const texture = useTexture("/art.jpg");

  if (texture) {
    texture.mapping = EquirectangularReflectionMapping;
    const formatted = new WebGLCubeRenderTarget(
      texture.image.height,
    ).fromEquirectangularTexture(gl, texture);

    scene.background = formatted.texture;
  }

  return null;
};

export default memo(Background);

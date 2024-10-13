import * as THREE from "three";
import { memo } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Background = () => {
  const { gl, scene } = useThree();

  const texture = useTexture("/art.jpg");

  if (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter,
    }).fromEquirectangularTexture(gl, texture);

    scene.background = formatted.texture;
  }

  return null;
};

export default memo(Background);

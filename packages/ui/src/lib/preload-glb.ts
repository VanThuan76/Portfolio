import { useGLTF } from "@react-three/drei";

export const preloadModels = () => {
  useGLTF.preload("/mysterious.glb");
  return null;
};

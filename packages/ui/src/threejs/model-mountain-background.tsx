import * as THREE from "three";
import { useRef, memo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface ModelMountainBackgroundProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}

function ModelMountainBackground({
  position,
  scale,
  ...props
}: ModelMountainBackgroundProps) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/optimized_mountain.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
      );
      loader.setDRACOLoader(dracoLoader);
    },
  );

  const ref = useRef<THREE.Group>(null);
  const targetPosition = useRef(new THREE.Vector3(...position));
  const targetScale = useRef(new THREE.Vector3(...scale));

  useFrame((_, delta) => {
    if (ref.current) {
      targetPosition.current.set(...position);
      ref.current.position.lerp(targetPosition.current, delta);
      ref.current.updateMatrix();

      targetScale.current.set(...scale);
      ref.current.scale.lerp(targetScale.current, delta);
      ref.current.updateMatrix();
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[140, 0, -105.118]} scale={918.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Mountain_A_0?.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Mountain_B_0?.geometry}
            material={materials.material_1}
          />
        </group>
      </group>
    </group>
  );
}

export default memo(ModelMountainBackground);

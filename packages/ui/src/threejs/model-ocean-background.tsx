import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function ModelOceanBackground({
  position,
  ...props
}: {
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/ocean.glb");

  const currentPosition = useRef(new THREE.Vector3(...position));

  useFrame(() => {
    if (ref.current) {
      const targetPosition = new THREE.Vector3(...position);
      currentPosition.current.lerp(targetPosition, 0.1);

      ref.current.position.copy(currentPosition.current);
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.spray_droplet_0.geometry}
          material={materials.droplet}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ocean_reduced_ocean_bake_0.geometry}
          material={materials.ocean_bake}
          position={[0, 405.523, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2573.304}
        />
      </group>
    </group>
  );
}

export default ModelOceanBackground;

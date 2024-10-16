import * as THREE from "three";
import { useRef, memo, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// @ts-ignore
import { KTX2Loader } from 'three-stdlib'

interface ModelFarmBackgroundProps {
  position: [number, number, number];
  [key: string]: any;
}

function ModelFarmBackground({ position, ...props }: ModelFarmBackgroundProps) {
  const { gl } = useThree()
  const { nodes, materials } = useMemo(() => useGLTF(
    "/models/optimized_farm.glb",
    false,
    false,
    (loader) => {
      const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`
      const ktx2Loader = new KTX2Loader().setTranscoderPath(`${THREE_PATH}/examples/jsm/libs/basis/`)
      loader.setKTX2Loader(ktx2Loader.detectSupport(gl))
    }
  ), []);

  const ref = useRef<THREE.Group>(null);
  const currentPosition = useRef(new THREE.Vector3(...position));

  useFrame(() => {
    if (ref.current) {
      const targetPosition = new THREE.Vector3(...position);
      currentPosition.current.x = THREE.MathUtils.lerp(
        currentPosition.current.x,
        targetPosition.x,
        0.1,
      );
      currentPosition.current.y = THREE.MathUtils.lerp(
        currentPosition.current.y,
        targetPosition.y,
        0.1,
      );
      currentPosition.current.z = THREE.MathUtils.lerp(
        currentPosition.current.z,
        targetPosition.z,
        0.1,
      );

      ref.current.position.copy(currentPosition.current);
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        position={[-0.145, 115.564, 46.517]}
        rotation={[Math.PI / 2, 0, 0.006]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.mesh_out_node_texture_material_0?.geometry}
          material={materials.texture_material}
          rotation={[-Math.PI, 0, 0]}
        />
      </group>
    </group>
  );
}

export default memo(ModelFarmBackground);

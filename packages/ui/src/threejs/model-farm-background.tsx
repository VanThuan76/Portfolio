import * as THREE from "three";
import { useRef, memo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { dispose, useFrame, useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface ModelFarmBackgroundProps {
  position: [number, number, number];
  [key: string]: any;
}

function ModelFarmBackground({ position, ...props }: ModelFarmBackgroundProps) {
  const { scene, nodes, materials } = useLoader(
    GLTFLoader,
    "/models/optimized_farm.glb",
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

  useFrame(() => {
    if (ref.current) {
      targetPosition.current.set(...position);
      ref.current.position.lerp(targetPosition.current, 0.1);
    }
  });

  useEffect(() => {
    return () => {
      dispose(scene);
      useGLTF.clear("/models/optimized_farm.glb");
    };
  }, [scene]);

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

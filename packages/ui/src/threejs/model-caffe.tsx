import * as THREE from "three";
import { useRef, memo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface ModelCaffeProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}

function ModelCaffe({ position, scale, ...props }: ModelCaffeProps) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/optimized_caffe.glb",
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
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Outside_Outside_0?.geometry}
        material={materials.Outside}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Outside_Glass_0?.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Outside_Outside_E_0?.geometry}
        material={materials.Outside_E}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Inside_Inside_0?.geometry}
        material={materials.Inside}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Inside_Glass_0?.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Inside_Inside_E_0?.geometry}
        material={materials.Inside_E}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Inside_Aeropress_0?.geometry}
        material={materials.Aeropress}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Stuff_Stuff_0?.geometry}
        material={materials.Stuff}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}
export default memo(ModelCaffe);

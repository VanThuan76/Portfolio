import * as THREE from "three";
import { useRef, memo, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// @ts-ignore
import { KTX2Loader } from "three-stdlib";
interface ModelCaffeProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}

function ModelCaffe({ position, scale, ...props }: ModelCaffeProps) {
  const { gl } = useThree();
  const { nodes, materials } = useMemo(
    () =>
      useGLTF("/models/optimized_caffe.glb", false, false, (loader) => {
        const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
        const ktx2Loader = new KTX2Loader().setTranscoderPath(
          `${THREE_PATH}/examples/jsm/libs/basis/`,
        );
        loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
      }),
    [gl],
  );

  const ref = useRef<THREE.Group>(null);
  const currentPosition = useRef(new THREE.Vector3(...position));
  const currentScale = useRef(new THREE.Vector3(...scale));

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

      const targetScale = new THREE.Vector3(...scale);
      currentScale.current.x = THREE.MathUtils.lerp(
        currentScale.current.x,
        targetScale.x,
        0.1,
      );
      currentScale.current.y = THREE.MathUtils.lerp(
        currentScale.current.y,
        targetScale.y,
        0.1,
      );
      currentScale.current.z = THREE.MathUtils.lerp(
        currentScale.current.z,
        targetScale.z,
        0.1,
      );

      ref.current.position.copy(currentPosition.current);
      ref.current.scale.copy(currentScale.current);
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

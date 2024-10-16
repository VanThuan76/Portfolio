import * as THREE from "three";
import { useRef, memo, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// @ts-ignore
import { KTX2Loader } from "three-stdlib";

interface ModelDepartmentProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}

function ModelDepartment({ position, scale, ...props }: ModelDepartmentProps) {
  const { gl } = useThree();
  const { nodes, materials } = useMemo(
    () =>
      useGLTF("/models/optimized_department.glb", false, false, (loader) => {
        const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
        const ktx2Loader = new KTX2Loader().setTranscoderPath(
          `${THREE_PATH}/examples/jsm/libs/basis/`,
        );
        loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
      }),
    [],
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
        geometry={(nodes as any)?.Object_0?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_4?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_5?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_8?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_10?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_12?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_14?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_29?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_48?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_50?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_51?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_58?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_68?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_69?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_89?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_90?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_101?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_102?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_103?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_105?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_107?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_109?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_111?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_113?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_115?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_117?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_188?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_189?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_190?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_191?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_192?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_215?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_216?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_220?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_223?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_289?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_293?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_297?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_303?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_309?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_315?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_316?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_317?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_318?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_319?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_322?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_335?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_384?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_385?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_386?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_387?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_388?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_389?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_397?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_401?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_403?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_405?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_408?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_412?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_417?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_419?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_423?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_424?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_457?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_458?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_459?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_460?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1027?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1031?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1035?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1052?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1053?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1080?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1081?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1084?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1085?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1124?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1165?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1166?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1169?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1175?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1178?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1179?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1203?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1204?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1270?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1272?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_16?.geometry}
        material={materials.floor}
        position={[-0.108, -0.218, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_362?.geometry}
        material={materials.building}
        position={[0.572, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_367?.geometry}
        material={materials.glass}
        position={[0.572, 0, 0]}
      />
    </group>
  );
}

export default memo(ModelDepartment);

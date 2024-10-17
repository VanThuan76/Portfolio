import * as THREE from "three";
import { memo, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// @ts-ignore
import { KTX2Loader } from "three-stdlib";

function ModelSchoolPark(props: any) {
  const { gl } = useThree();
  const { nodes, materials } = useMemo(
    () =>
      useGLTF("/models/optimized_school_park.glb", false, false, (loader) => {
        const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
        const ktx2Loader = new KTX2Loader().setTranscoderPath(
          `${THREE_PATH}/examples/jsm/libs/basis/`,
        );
        loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
      }),
    [gl],
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_4?.geometry}
        material={materials.Pavement}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_6?.geometry}
        material={materials.Ground}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_8?.geometry}
        material={materials.Curbs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_10?.geometry}
        material={materials.Sakura_Tree_Bark}
        position={[6, 0, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_11?.geometry}
        material={materials.Tree_Branch_2}
        position={[6, 0, -12]}
      />
    </group>
  );
}

export default memo(ModelSchoolPark);

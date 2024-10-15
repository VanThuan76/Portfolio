import { memo } from "react";
import { useGLTF } from "@react-three/drei";

function ModelSchoolPark(props: any) {
  const { nodes, materials } = useGLTF("/models/compressed_school_park.glb");
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

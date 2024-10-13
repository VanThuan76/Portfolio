import { memo } from "react";
import { useGLTF } from "@react-three/drei";

function ModelSchoolPark(props: any) {
  const { nodes, materials } = useGLTF("/models/school_park_new.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[6, 0, -12]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_10?.geometry}
          material={materials.Sakura_Tree_Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_11?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_12?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_13?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_14?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_15?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_16?.geometry}
          material={materials.Tree_Branch_2}
        />
      </group>
      <group position={[6, 0, 12]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_18?.geometry}
          material={materials.Sakura_Tree_Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_19?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_20?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_21?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_22?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_23?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_24?.geometry}
          material={materials.Tree_Branch_2}
        />
      </group>
      <group position={[-6, 0, 0]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_26?.geometry}
          material={materials.Sakura_Tree_Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_27?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_28?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_29?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_30?.geometry}
          material={materials.Tree_Branch_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_31?.geometry}
          material={materials.Tree_Branch_2}
        />
      </group>
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
    </group>
  );
}
export default memo(ModelSchoolPark);

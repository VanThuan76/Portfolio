import { useGLTF } from "@react-three/drei";

function ModelCastle(props: any) {
  const { nodes, materials } = useGLTF("/models/castle.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[-6.268, 20.938, -5.025]} rotation={[0, -0.782, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_42?.geometry}
          material={materials.LADY_ELF_BODY_MATERIAL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_43?.geometry}
          material={materials.LADY_ELF_CLOTH_MATERIAL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_44?.geometry}
          material={materials.LADY_ELF_CLOTH_BLEND_MATERIAL}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_4?.geometry}
        material={materials.CASTLE_STONE_BASE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_5?.geometry}
        material={materials.MAIN_CASTLE_WALLS}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_6?.geometry}
        material={materials.DOORS_GATES_AND_SLOPE_FENCE_BANNER}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_7?.geometry}
        material={materials.FIRST_FLOOR_WALLS_AND_STAIR_CASES}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_8?.geometry}
        material={materials.ROOFTOPS}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_9?.geometry}
        material={materials.FIRST_FLOOR_INTERIOR}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_10?.geometry}
        material={materials.OUTWALL_ROOFTOPS}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_12?.geometry}
        material={materials.FURNITURE}
        position={[-9.081, 21.925, 3.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_14?.geometry}
        material={materials.FURNITURE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_16?.geometry}
        material={materials.FURNITURE}
        position={[-3.257, 22.296, -10.943]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_18?.geometry}
        material={materials.FURNITURE}
        position={[-3.257, 22.296, 4.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_20?.geometry}
        material={materials.FURNITURE}
        position={[-11.934, 22.296, 4.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_22?.geometry}
        material={materials.FURNITURE}
        position={[-7.229, 22.296, -10.633]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_24?.geometry}
        material={materials.FURNITURE}
        position={[9.582, 13.855, -6.591]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_26?.geometry}
        material={materials.FURNITURE}
        position={[9.568, 13.855, -0.192]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_28?.geometry}
        material={materials.FURNITURE}
        position={[-10.756, 21.967, -0.081]}
        rotation={[0, 1.449, 0]}
        scale={[1.289, 1, 1.289]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_30?.geometry}
        material={materials.FURNITURE}
        position={[-10.957, 21.908, -5.799]}
        rotation={[0, -0.213, 0]}
        scale={[1.289, 1, 1.289]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_32?.geometry}
        material={materials.FURNITURE}
        position={[1.05, 19.562, -0.042]}
        scale={0.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_34?.geometry}
        material={materials.FURNITURE}
        position={[1.05, 19.562, -6.748]}
        scale={0.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_36?.geometry}
        material={materials.FURNITURE}
        position={[15.801, 13.254, 10.654]}
        scale={0.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_38?.geometry}
        material={materials.FURNITURE}
        position={[-0.449, 0, -0.948]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_40?.geometry}
        material={materials.FURNITURE}
        position={[-8.075, 20.957, -3.004]}
        scale={3.76}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_46?.geometry}
        material={materials.FURNITURE}
        position={[-11.835, 21.212, -3.004]}
        scale={[0.839, 0.284, 0.839]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_48?.geometry}
        material={materials.YOROI_DISPLAY}
        position={[-11.588, 22.362, -3.004]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.391}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_50?.geometry}
        material={materials.BANNER_MATERIAL}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_52?.geometry}
        material={materials.BANNER_MATERIAL}
        position={[15.793, 22.664, 6.78]}
        rotation={[0, -0.214, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_54?.geometry}
        material={materials.BANNER_MATERIAL}
        position={[15.793, 22.664, 1.183]}
        rotation={[0, -0.214, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_56?.geometry}
        material={materials.BANNER_MATERIAL}
        position={[15.793, 22.664, -5.148]}
        rotation={[0, -0.214, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_58?.geometry}
        material={materials.BANNER_MATERIAL}
        position={[15.793, 22.664, -11.51]}
        rotation={[0, -0.214, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_60?.geometry}
        material={materials.Material}
        position={[16.44, 12.333, 10.637]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_62?.geometry}
        material={materials.Material}
        position={[17.553, 12.333, 12.808]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_64?.geometry}
        material={materials.Material}
        position={[15.731, 12.333, 13.273]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_66?.geometry}
        material={materials.rock_material}
        position={[14.975, 13.052, 17.047]}
        scale={[0.679, 0.376, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_68?.geometry}
        material={materials.rock_material}
        position={[16.98, 13.052, 17.682]}
        scale={[0.657, 0.363, 0.783]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_70?.geometry}
        material={materials.rock_material}
        position={[15.507, 13.052, 18.995]}
        rotation={[0, 1.116, 0]}
        scale={[0.511, 0.283, 0.609]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_72?.geometry}
        material={materials.SMALL_TREE_MATERIAL}
        position={[16.251, 12.535, 24.839]}
      />
    </group>
  );
}

export default ModelCastle;

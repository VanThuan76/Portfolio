import { useGLTF } from "@react-three/drei";

export function ModelFarmBackground(props: any) {
  const { nodes, materials } = useGLTF("/farm.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.145, 115.564, 46.517]}
        rotation={[Math.PI / 2, 0, 0.006]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.mesh_out_node_texture_material_0.geometry}
          material={materials.texture_material}
          rotation={[-Math.PI, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/farm.glb");

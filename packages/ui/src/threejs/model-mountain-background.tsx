import { useGLTF } from "@react-three/drei";

function ModelMountainBackground(props: any) {
  const { nodes, materials } = useGLTF("/models/mountain.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[140, 0, -105.118]} scale={918.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Mountain_A_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Mountain_B_0.geometry}
            material={materials.material_1}
          />
        </group>
      </group>
    </group>
  );
}

export default ModelMountainBackground;

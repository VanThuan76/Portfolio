import { useGLTF } from "@react-three/drei";

function ModelOceanBackground(props: any) {
  const { nodes, materials } = useGLTF("/models/ocean.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.spray_droplet_0.geometry}
          material={materials.droplet}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ocean_reduced_ocean_bake_0.geometry}
          material={materials.ocean_bake}
          position={[0, 405.523, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2573.304}
        />
      </group>
    </group>
  );
}

export default ModelOceanBackground;

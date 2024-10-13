import { useGLTF } from "@react-three/drei";

function ModelSchoolHallway(props: any) {
  const { nodes, materials } = useGLTF("/models/school_hallway.glb");

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes as any)?.The_Japanese_school_corridor_Windows_0?.geometry
            }
            material={materials.Windows}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes as any)?.The_Japanese_school_corridor_Wall_0?.geometry
            }
            material={materials.Wall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes as any)?.The_Japanese_school_corridor_Floor_0?.geometry
            }
            material={materials.Floor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes as any)?.The_Japanese_school_corridor_Roof_0?.geometry
            }
            material={materials.Roof}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes as any)?.The_Japanese_school_corridor_Ladder_0?.geometry
            }
            material={materials.Ladder}
          />
        </group>
      </group>
    </group>
  );
}
export default ModelSchoolHallway;

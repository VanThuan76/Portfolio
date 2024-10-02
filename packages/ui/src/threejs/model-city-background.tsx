import { memo } from "react";
import { useGLTF } from "@react-three/drei";

function ModelCityBackground(props: any) {
  const { nodes, materials } = useGLTF("/city.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[3.135, 1.248, 1.094]} rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Curbs_Curbs_mat_0.geometry}
            material={materials.RoofPlane_6_mat_10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Curbs_Curbs_mat_0_1.geometry}
            material={materials.RoofPlane_6_mat_10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes as any)?.Curbs_Curbs_mat_0_2.geometry}
            material={materials.RoofPlane_6_mat_10}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_6_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_42_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_0}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_8_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_23_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_12_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_0}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_5_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_18_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_1}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_19_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_4_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_1}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_26_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_15_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_2}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_27_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_13_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_22_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_13_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_3}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_41_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_7_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_2}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_7_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_5_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_2_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_4}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_34_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_9_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_29_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.FacadeTexture_FacadeTexture_mat_0.geometry}
          material={materials.FacadeTexture_5_mat_5}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_40_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_30_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_6_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_3}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_3_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_20_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_16_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_1_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_4}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_3_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_5}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_24_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_6}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_28_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_15_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_27_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_12_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_19_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_7}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_5_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_6}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_8_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_7}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_5_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_3_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_8}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_46_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_25_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_21_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_9}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_44_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_4_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_2_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_48_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_2_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_8}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_24_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_10_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_21_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_14_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_17_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_29_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_4_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_4_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_13_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_8_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_10}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_8_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FlatRoofTexture_FlatRoofTexture_9_mat_0.geometry
          }
          material={materials.RoofPlane_6_mat_9}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_18_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_26_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_10_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_38_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_14_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_36_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_31_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_27_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_11}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_19_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_20_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_12}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_6_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_7_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_13}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_2_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_1_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_23_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_14}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_15_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_8_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_16_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_15}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_50_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_28_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_11_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_16}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_9_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_3_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_51_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_24_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_12_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_16_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_21_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_11_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_23_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_3_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_2_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_6_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_12_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_5_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_17}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_26_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_18}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_45_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_22_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_52_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_1_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_19}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_17_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_20}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_32_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_39_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_22_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_21}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_37_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_43_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_14_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_22}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_11_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_18_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_47_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_25_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_6_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_9_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_23}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_20_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_25_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_24}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_49_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_23_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_9_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_1_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_7_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_35_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_53_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_4_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_25}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_28_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_26}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_13_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_33_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            (nodes as any)?.FacadeTexture_FacadeTexture_10_mat_0.geometry
          }
          material={materials.FacadeTexture_5_mat_27}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_21_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_32_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.RoofPlane_RoofPlane_17_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_7_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_19_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_15_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_35_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_14_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_16_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_34_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_10_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_22_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_29_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_1_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_24_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_25_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_20_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_18_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_11_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_33_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_30_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Pavement_Pavement_mat_0.geometry}
          material={materials.RoofPlane_6_mat_11}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Street_Street_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Concrete_Concrete_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_27_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_17_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.YardGround_YardGround_31_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_28_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.ParkingLot_ParkingLot_26_mat_0.geometry}
          material={materials.RoofPlane_6_mat}
          position={[-3.135, 1.094, -1.248]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes["Plane001_02_-_Default_0"].geometry}
        material={materials["02_-_Default"]}
        position={[0.021, -0.066, 0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.974, 0.974, 0.963]}
      />
    </group>
  );
}

useGLTF.preload("/city.glb");

export default memo(ModelCityBackground);

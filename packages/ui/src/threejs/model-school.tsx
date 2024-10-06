import { useGLTF } from "@react-three/drei";

function ModelSchool(props: any) {
  const { nodes, materials } = useGLTF("/models/school.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <primitive object={(nodes as any)?._rootJoint} />
        <skinnedMesh
          geometry={(nodes as any)?.Object_5.geometry}
          material={materials.SCHFront2}
          skeleton={(nodes as any)?.Object_5.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_6.geometry}
          material={materials.SCHInterior1}
          skeleton={(nodes as any)?.Object_6.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_7.geometry}
          material={materials.SCHWinMetal1}
          skeleton={(nodes as any)?.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_8.geometry}
          material={materials.SCHGlass1}
          skeleton={(nodes as any)?.Object_8.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_9.geometry}
          material={materials.SCHInterior3}
          skeleton={(nodes as any)?.Object_9.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_10.geometry}
          material={materials.SCHInterior2}
          skeleton={(nodes as any)?.Object_10.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_11.geometry}
          material={materials.SCHBack1}
          skeleton={(nodes as any)?.Object_11.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_12.geometry}
          material={materials.SCHBack2}
          skeleton={(nodes as any)?.Object_12.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_13.geometry}
          material={materials.SCHSide1}
          skeleton={(nodes as any)?.Object_13.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_14.geometry}
          material={materials.SCHSide2}
          skeleton={(nodes as any)?.Object_14.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_15.geometry}
          material={materials.SCHDoors}
          skeleton={(nodes as any)?.Object_15.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_16.geometry}
          material={materials.SCHFront1}
          skeleton={(nodes as any)?.Object_16.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_17.geometry}
          material={materials.SCHRoof}
          skeleton={(nodes as any)?.Object_17.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_18.geometry}
          material={materials.SCHFloor3}
          skeleton={(nodes as any)?.Object_18.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_19.geometry}
          material={materials.SCHFloor2}
          skeleton={(nodes as any)?.Object_19.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_20.geometry}
          material={materials.SCHFloor1}
          skeleton={(nodes as any)?.Object_20.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_21.geometry}
          material={materials.SCHGlass2}
          skeleton={(nodes as any)?.Object_21.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_22.geometry}
          material={materials.SCHWinMetal2}
          skeleton={(nodes as any)?.Object_22.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_23.geometry}
          material={materials.SCHGlass3}
          skeleton={(nodes as any)?.Object_23.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_24.geometry}
          material={materials.SCHWinMetal3}
          skeleton={(nodes as any)?.Object_24.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_25.geometry}
          material={materials.SCHWinMetal4}
          skeleton={(nodes as any)?.Object_25.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_26.geometry}
          material={materials.SCHAircon}
          skeleton={(nodes as any)?.Object_26.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_27.geometry}
          material={materials.SCHBase1}
          skeleton={(nodes as any)?.Object_27.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_28.geometry}
          material={materials.SCHBase2}
          skeleton={(nodes as any)?.Object_28.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_29.geometry}
          material={materials.SCHRoofDoor}
          skeleton={(nodes as any)?.Object_29.skeleton}
        />
        <skinnedMesh
          geometry={(nodes as any)?.Object_30.geometry}
          material={materials.SCHVent}
          skeleton={(nodes as any)?.Object_30.skeleton}
        />
      </group>
    </group>
  );
}

export default ModelSchool;

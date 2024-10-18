import * as THREE from "three";
import { useRef, memo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface ModelSchoolProps {
    position: [number, number, number];
    scale: [number, number, number];
    [key: string]: any;
}

function ModelSchool({ position, scale, ...props }: ModelSchoolProps) {
    const { nodes, materials } = useLoader(
        GLTFLoader,
        "/models/optimized_school.glb",
        (loader) => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath(
                "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
            );
            loader.setDRACOLoader(dracoLoader);
        },
    );

    const ref = useRef<THREE.Group>(null);
    const targetPosition = useRef(new THREE.Vector3(...position));
    const targetScale = useRef(new THREE.Vector3(...scale));

    useFrame((_,delta) => {
        if (ref.current) {
            targetPosition.current.set(...position);
            ref.current.position.lerp(targetPosition.current, delta);
            ref.current.updateMatrix();

            targetScale.current.set(...scale);
            ref.current.scale.lerp(targetScale.current, delta);
            ref.current.updateMatrix();
        }
    });

    return (
        <group ref={ref} {...props} dispose={null}>
            <primitive object={(nodes as any)?._rootJoint} />
            <skinnedMesh
                geometry={(nodes as any)?.Object_5?.geometry}
                material={materials.SCHFront2}
                skeleton={(nodes as any)?.Object_5.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_6?.geometry}
                material={materials.SCHInterior1}
                skeleton={(nodes as any)?.Object_6.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_7?.geometry}
                material={materials.SCHWinMetal1}
                skeleton={(nodes as any)?.Object_7.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_8?.geometry}
                material={materials.PaletteMaterial001}
                skeleton={(nodes as any)?.Object_8.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_9?.geometry}
                material={materials.SCHInterior3}
                skeleton={(nodes as any)?.Object_9.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_10?.geometry}
                material={materials.SCHInterior2}
                skeleton={(nodes as any)?.Object_10.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_11?.geometry}
                material={materials.SCHFront2}
                skeleton={(nodes as any)?.Object_11.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_12?.geometry}
                material={materials.SCHFront2}
                skeleton={(nodes as any)?.Object_12.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_13?.geometry}
                material={materials.SCHSide1}
                skeleton={(nodes as any)?.Object_13.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_14?.geometry}
                material={materials.SCHFront2}
                skeleton={(nodes as any)?.Object_14.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_15?.geometry}
                material={materials.SCHDoors}
                skeleton={(nodes as any)?.Object_15.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_16?.geometry}
                material={materials.SCHFront2}
                skeleton={(nodes as any)?.Object_16.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_17?.geometry}
                material={materials.SCHRoof}
                skeleton={(nodes as any)?.Object_17.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_18?.geometry}
                material={materials.SCHFloor3}
                skeleton={(nodes as any)?.Object_18.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_19?.geometry}
                material={materials.SCHFloor3}
                skeleton={(nodes as any)?.Object_19.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_20?.geometry}
                material={materials.SCHFloor3}
                skeleton={(nodes as any)?.Object_20.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_21?.geometry}
                material={materials.PaletteMaterial001}
                skeleton={(nodes as any)?.Object_21.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_22?.geometry}
                material={materials.SCHWinMetal1}
                skeleton={(nodes as any)?.Object_22.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_23?.geometry}
                material={materials.PaletteMaterial001}
                skeleton={(nodes as any)?.Object_23.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_24?.geometry}
                material={materials.SCHWinMetal3}
                skeleton={(nodes as any)?.Object_24.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_25?.geometry}
                material={materials.SCHWinMetal1}
                skeleton={(nodes as any)?.Object_25.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_26?.geometry}
                material={materials.SCHAircon}
                skeleton={(nodes as any)?.Object_26.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_27?.geometry}
                material={materials.SCHBase1}
                skeleton={(nodes as any)?.Object_27.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_28?.geometry}
                material={materials.SCHBase2}
                skeleton={(nodes as any)?.Object_28.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_29?.geometry}
                material={materials.SCHRoofDoor}
                skeleton={(nodes as any)?.Object_29.skeleton}
                scale={0.01}
            />
            <skinnedMesh
                geometry={(nodes as any)?.Object_30?.geometry}
                material={materials.SCHVent}
                skeleton={(nodes as any)?.Object_30.skeleton}
                scale={0.01}
            />
        </group>
    );
}
export default memo(ModelSchool);

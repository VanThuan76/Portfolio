import * as THREE from "three";
import { useRef, memo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface ModelCityBackgroundProps {
    position: [number, number, number];
    scale: [number, number, number];
    [key: string]: any;
}

function ModelCityBackground({
    position,
    scale,
    ...props
}: ModelCityBackgroundProps) {
    const { nodes, materials } = useLoader(
        GLTFLoader,
        "/models/optimized_city.glb",
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
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes["Plane001_02_-_Default_0"] as THREE.Mesh).geometry}
                material={materials["02_-_Default"]}
                position={[0.021, -0.066, 0.04]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.974, 0.974, 0.963]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_6_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.RoofPlane_RoofPlane_42_mat_0?.geometry}
                material={materials.RoofPlane_6_mat}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_0}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_12_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_0}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_18_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_1}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_4_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_1}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_15_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_2}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_13_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_3}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_7_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_2}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_2_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_4}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_5}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_6_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_3}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_1_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_4}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_3_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_5}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_24_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_6}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_19_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_7}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_5_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_6}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_8_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_7}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_3_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_8}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_21_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_9}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_2_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_8}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_8_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_10}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FlatRoofTexture_FlatRoofTexture_9_mat_0?.geometry
                }
                material={materials.RoofPlane_6_mat_9}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_27_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_11}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_20_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_12}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_7_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_13}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_23_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_14}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_16_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_15}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_11_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_16}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_5_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_17}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_26_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_18}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_1_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_19}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_17_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_20}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_22_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_21}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_14_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_22}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_9_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_23}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_25_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_24}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.FacadeTexture_FacadeTexture_4_mat_0?.geometry}
                material={materials.FacadeTexture_5_mat_25}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_28_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_26}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={
                    (nodes as any)?.FacadeTexture_FacadeTexture_10_mat_0?.geometry
                }
                material={materials.FacadeTexture_5_mat_27}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.Curbs_Curbs_mat_0?.geometry}
                material={materials.RoofPlane_6_mat_10}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes as any)?.Pavement_Pavement_mat_0?.geometry}
                material={materials.RoofPlane_6_mat_11}
                scale={0.01}
            />
        </group>
    );
}

export default memo(ModelCityBackground);

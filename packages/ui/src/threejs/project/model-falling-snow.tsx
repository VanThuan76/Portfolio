import * as THREE from "three";
import { useRef, memo, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { dispose, useFrame, useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface ModelFallingSnowProps {
  position: [number, number, number];
  [key: string]: any;
}

function ModelFallingSnow({ position, ...props }: ModelFallingSnowProps) {
  const group = useRef<THREE.Group>(null);
  const targetPosition = useRef(new THREE.Vector3(...position));

  const { scene, nodes, materials, animations } = useLoader(
    GLTFLoader,
    "/models/optimized_falling_snow.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
      );
      loader.setDRACOLoader(dracoLoader);
    },
  );

  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      targetPosition.current.set(...position);
      group.current.position.lerp(targetPosition.current, 0.1);
    }
  });

  useEffect(() => {
    if (actions && animations) {
      const animationName = animations[0]?.name;
      if (animationName && actions[animationName])
        actions[animationName].play();

      return () => {
        if (animationName && actions[animationName]) {
            actions[animationName].stop();
        }
      };
    }
  }, [actions, animations]);

  useEffect(() => {
    return () => {
      dispose(scene);
      useGLTF.clear("/models/optimized_falling_snow.glb");
    };
  }, [scene]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="particle000_1"
                position={[1.176, 0.172, 2.957]}
                rotation={[-0.914, 0.534, 1.359]}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_4?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle001_2"
                position={[-4.554, -0.029, -1.623]}
                rotation={[1.557, 0.84, 1.546]}
              >
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_6?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle002_3"
                position={[-5.176, 0.301, -2.922]}
                rotation={[-1.502, -0.323, 0.394]}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_8?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle003_4"
                position={[4.743, -0.029, -2.312]}
                rotation={[0.794, -0.601, 0.306]}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_10?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle004_5"
                position={[-5.418, -0.029, -1.229]}
                rotation={[-1.109, 0.659, 1.998]}
                scale={0.425}
              >
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_12?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle005_6"
                position={[-4.292, 3.687, -4.908]}
                rotation={[-2.705, 0.133, -2.691]}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_14?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle006_7"
                position={[4.32, -0.029, -7.624]}
                rotation={[-0.757, 0.245, -2.564]}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_16?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle007_8"
                position={[-3.993, -0.029, -0.076]}
                rotation={[-3.043, 0.721, 0.92]}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_18?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle008_9"
                position={[-5.606, -0.029, -1.263]}
                rotation={[-0.329, -0.78, 0.82]}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_20?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle009_10"
                position={[-3.515, 4.568, 3.719]}
                rotation={[2.361, 0.239, -2.12]}
                scale={0.236}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_22?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle010_11"
                position={[-2.502, 5.479, 3.591]}
                rotation={[1.247, 0.03, -2.24]}
                scale={0.114}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_24?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle011_12"
                position={[4.258, -0.029, 3.801]}
                rotation={[2.2, -1.184, -0.435]}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_26?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle012_13"
                position={[1.252, -0.029, 2.608]}
                rotation={[1.252, 0.134, 0.127]}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_28?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle013_14"
                position={[-0.774, -0.029, 0.536]}
                rotation={[-2.443, -1.328, -2.329]}
                scale={0.718}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_30?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle014_15"
                position={[-2.582, 0.282, 3.948]}
                rotation={[-1.535, -0.103, -2.984]}
              >
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_32?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle015_16"
                position={[-4.283, -0.029, -4.139]}
                rotation={[1.898, 1.088, 1.79]}
                scale={0.718}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_34?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle016_17"
                position={[2.384, -0.029, 2.433]}
                rotation={[-1.501, -0.944, 0.083]}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_36?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle017_18"
                position={[0.368, 5.213, 0.339]}
                rotation={[0.695, -1.177, -0.445]}
                scale={0.969}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_38?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle018_19"
                position={[-3.979, -0.029, 0.005]}
                rotation={[0.623, 1.051, 1.333]}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_40?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle019_20"
                position={[-3.195, -0.029, -3.849]}
                rotation={[-2.298, 0.959, 0.922]}
                scale={0.216}
              >
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_42?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle020_21"
                position={[-1.628, -0.029, -2.665]}
                rotation={[0.114, -0.862, 1.433]}
              >
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_44?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle021_22"
                position={[1.737, -0.029, 1.4]}
                rotation={[2.023, -0.554, -1.104]}
              >
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_46?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle022_23"
                position={[3.721, -0.029, -1.514]}
                rotation={[1.984, -1.383, 1.054]}
              >
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_48?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle023_24"
                position={[0.582, 2.842, -0.644]}
                rotation={[0.847, 0.211, 1.95]}
              >
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_50?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle024_25"
                position={[4.583, 3.692, -5.66]}
                rotation={[-2.534, 0.114, 1.847]}
              >
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_52?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle025_26"
                position={[3.917, -0.029, 0.974]}
                rotation={[-1.179, 0.872, 2.487]}
                scale={0.844}
              >
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_54?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle026_27"
                position={[3.77, 2.398, 3.641]}
                rotation={[2.432, 0.589, 2.331]}
              >
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_56?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle027_28"
                position={[-1.068, 3.31, -4.817]}
                rotation={[-0.901, -0.431, 1.896]}
              >
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_58?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle028_29"
                position={[-0.62, -0.029, -2.514]}
                rotation={[2.708, 0.806, -1.142]}
              >
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_60?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle029_30"
                position={[-1.434, 2.038, -0.171]}
                rotation={[-1.213, -0.546, -1.713]}
              >
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_62?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle030_31"
                position={[4.64, 3.225, 0.194]}
                rotation={[1.957, 1.077, 2.351]}
              >
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_64?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle031_32"
                position={[1.23, 0.761, 2.4]}
                rotation={[-1.213, -0.867, 0.965]}
              >
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_66?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle032_33"
                position={[0.836, -0.029, -0.458]}
                rotation={[1.481, -0.319, 0.08]}
              >
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_68?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle033_34"
                position={[2.587, 5.365, -0.686]}
                rotation={[-0.883, 1.455, 1.225]}
              >
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_70?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle034_35"
                position={[-5.332, 4.626, 3.588]}
                rotation={[-1.283, 0.178, -2.76]}
              >
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_72?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle035_36"
                position={[-3.064, 5.188, -4.922]}
                rotation={[-2.217, 0.388, -1.771]}
                scale={0.886}
              >
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_74?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle036_37"
                position={[-5.299, -0.029, -2.992]}
                rotation={[-1.204, 0.046, -1.544]}
                scale={0.718}
              >
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_76?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle037_38"
                position={[3.966, 0.444, 2.01]}
                rotation={[2.965, 1.036, 1.971]}
              >
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_78?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle038_39"
                position={[-1.55, 0.726, -0.308]}
                rotation={[0.73, -1.081, 2.321]}
              >
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_80?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle039_40"
                position={[4.881, -0.029, -4.058]}
                rotation={[1.879, -0.46, -1.335]}
              >
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_82?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle040_41"
                position={[-4.04, -0.029, -6.289]}
                rotation={[1.564, 0.39, -1.383]}
              >
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_84?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle041_42"
                position={[-2.655, -0.029, -0.93]}
                rotation={[-1.557, -1.187, -2.95]}
              >
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_86?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle042_43"
                position={[0.325, 2.058, 4.76]}
                rotation={[0.908, 1.199, 1.489]}
              >
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_88?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle043_44"
                position={[-0.786, -0.029, -1.228]}
                rotation={[-1.682, 0.348, -0.024]}
              >
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_90?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle044_45"
                position={[5.82, 0.785, 0.984]}
                rotation={[-0.435, 0.357, 0.368]}
              >
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_92?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle045_46"
                position={[0.087, 2.247, -5.751]}
                rotation={[-1.475, 1.248, 2.894]}
              >
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_94?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle046_47"
                position={[1.417, 0.984, 0.882]}
                rotation={[2.696, 0.411, 2.747]}
              >
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_96?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle047_48"
                position={[-0.858, -0.029, 0.908]}
                rotation={[1.097, -0.591, 3.021]}
                scale={0.425}
              >
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_98?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle048_49"
                position={[-0.866, 2.184, -3.663]}
                rotation={[2.9, -1.156, 0.437]}
              >
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_100?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle049_50"
                position={[6.036, 4.038, -0.56]}
                rotation={[1.755, 1.251, -0.836]}
              >
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_102?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle050_51"
                position={[0.182, -0.029, -3.546]}
                rotation={[1.426, 0.914, -2.721]}
                scale={0.104}
              >
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_104?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle051_52"
                position={[-5.832, -0.029, -1.916]}
                rotation={[-1.944, -0.345, 2.028]}
              >
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_106?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle052_53"
                position={[-0.691, -0.029, 0.008]}
                rotation={[-0.699, 1.452, 2.417]}
              >
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_108?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle053_54"
                position={[2.802, 2.724, 1.468]}
                rotation={[-1.941, 1.384, 0.256]}
              >
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_110?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle054_55"
                position={[-2.052, 4.622, 1.436]}
                rotation={[-0.938, -0.914, 0.8]}
              >
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_112?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle055_56"
                position={[-0.027, -0.029, 2.027]}
                rotation={[1.472, -0.111, -0.641]}
              >
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_114?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle056_57"
                position={[4.66, 0.383, 0.078]}
                rotation={[1.929, 0.95, -1.795]}
              >
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_116?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle057_58"
                position={[5.767, -0.029, 2.9]}
                rotation={[1, -0.05, -2.452]}
              >
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_118?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle058_59"
                position={[-0.886, 2.286, -0.136]}
                rotation={[2.913, -1.006, 0.37]}
              >
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_120?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle059_60"
                position={[-1.027, 1.512, -3.084]}
                rotation={[0.93, 0.3, 0.345]}
              >
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_122?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle060_61"
                position={[-0.248, 1.987, 4.796]}
                rotation={[-2.375, -0.983, -2.091]}
              >
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_124?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle061_62"
                position={[3.878, 5.412, 2.332]}
                rotation={[1.494, 0.396, -2.883]}
                scale={0.307}
              >
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_126?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle062_63"
                position={[3.97, 1.325, -1.072]}
                rotation={[-1.756, -1.16, 1.637]}
              >
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_128?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle063_64"
                position={[1.304, 3.977, 3.924]}
                rotation={[2.014, 1.019, -0.806]}
              >
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_130?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle064_65"
                position={[0.269, 3.211, 1.924]}
                rotation={[-1.286, -0.482, -1.85]}
              >
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_132?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle065_66"
                position={[-0.909, 3.55, -2.286]}
                rotation={[1.873, 1.221, 2.279]}
              >
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_134?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle066_67"
                position={[2.487, -0.029, -5.589]}
                rotation={[-1.4, -0.522, 0.886]}
                scale={0.896}
              >
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_136?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle067_68"
                position={[4.189, -0.029, 1.53]}
                rotation={[2.413, 1.046, -1.701]}
              >
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_138?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle068_69"
                position={[3.559, -0.029, -1.529]}
                rotation={[-1.52, -0.408, -2.522]}
                scale={0.844}
              >
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_140?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle069_70"
                position={[1.691, -0.029, 2.554]}
                rotation={[-1.853, 0.719, -2.022]}
                scale={0.939}
              >
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_142?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle070_71"
                position={[3.023, 1.632, 0.106]}
                rotation={[-1.515, 0.18, -1.301]}
              >
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_144?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle071_72"
                position={[1.485, 0.238, 3.457]}
                rotation={[-1.86, 1.381, 0.563]}
              >
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_146?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle072_73"
                position={[-0.052, -0.029, 1.642]}
                rotation={[-1.375, 0.082, 1.735]}
              >
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_148?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle073_74"
                position={[4.766, -0.029, -2.187]}
                rotation={[1.385, 1.013, 0.973]}
              >
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_150?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle074_75"
                position={[0.546, 5.368, -5.523]}
                rotation={[-1.767, -0.616, -0.945]}
                scale={0.969}
              >
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_152?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle075_76"
                position={[2.333, 1.273, 2.388]}
                rotation={[-1.189, -0.687, -1.931]}
              >
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_154?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle076_77"
                position={[4.566, -0.029, -0.1]}
                rotation={[2.094, 0.684, 2.273]}
                scale={0.352}
              >
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_156?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle077_78"
                position={[-1.709, -0.029, -4.86]}
                rotation={[-1.157, -0.552, 1.501]}
              >
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_158?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle078_79"
                position={[-3.939, -0.029, -5.937]}
                rotation={[1.725, 0.17, 0.484]}
              >
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_160?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle079_80"
                position={[-4.618, 2.697, 1.438]}
                rotation={[-0.677, -1.239, -0.153]}
              >
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_162?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle080_81"
                position={[-2.776, 3.166, 2.014]}
                rotation={[-1.535, -0.609, -2.966]}
                scale={0.992}
              >
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_164?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle081_82"
                position={[0.571, -0.029, -5.245]}
                rotation={[-2.225, 0.743, -2.259]}
              >
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_166?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle082_83"
                position={[1.892, 4.912, 3.875]}
                rotation={[-0.755, 0.881, -1.51]}
                scale={0.886}
              >
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_168?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle083_84"
                position={[0.828, 2.27, -2.879]}
                rotation={[-1.871, 0.061, 0.316]}
              >
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_170?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle084_85"
                position={[5.064, -0.029, -3.721]}
                rotation={[0.962, -1.228, 1.066]}
              >
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_172?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle085_86"
                position={[2.86, 4.259, -5.592]}
                rotation={[-0.434, -0.372, 2.85]}
                scale={0.886}
              >
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_174?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle086_87"
                position={[-6.592, 0.672, -5.072]}
                rotation={[2.691, 0.356, 0.105]}
              >
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_176?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle087_88"
                position={[-6.104, -0.029, -0.394]}
                rotation={[-1.068, -1.338, -0.852]}
              >
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_178?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle088_89"
                position={[1.197, 4.045, 1.479]}
                rotation={[-0.642, -0.154, -2.761]}
              >
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_180?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle089_90"
                position={[1.526, -0.029, 0.681]}
                rotation={[2.772, 0.367, 1.503]}
              >
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_182?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle090_91"
                position={[-0.814, 2.345, -0.85]}
                rotation={[-1.488, 0.566, 1.957]}
              >
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_184?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle091_92"
                position={[0.171, 3.948, -3.773]}
                rotation={[1.512, 0.547, 2.052]}
                scale={0.648}
              >
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_186?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle092_93"
                position={[-4.205, 1.976, -2.754]}
                rotation={[-1.946, 0.071, 1.577]}
              >
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_188?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle093_94"
                position={[-6.76, 0.447, -0.486]}
                rotation={[-0.759, 1.273, 2.199]}
              >
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_190?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle094_95"
                position={[2.345, -0.029, 0.856]}
                rotation={[-1.511, 0.637, -1.331]}
              >
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_192?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle095_96"
                position={[-6.521, -0.029, 5.371]}
                rotation={[-1.943, -0.536, -1.421]}
              >
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_194?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle096_97"
                position={[-4.211, 3.537, 0.948]}
                rotation={[0.167, 0.683, -1.851]}
                scale={0.236}
              >
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_196?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle097_98"
                position={[3.94, -0.029, -1.995]}
                rotation={[-2.589, -0.707, -0.078]}
              >
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_198?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle098_99"
                position={[-0.103, 0.703, -6.024]}
                rotation={[0.692, -0.777, 0.006]}
              >
                <mesh
                  name="Object_200"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_200?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle099_100"
                position={[1.487, 1.933, -4.794]}
                rotation={[-2.149, 0.811, 3.043]}
              >
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_202?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle100_101"
                position={[-1.661, -0.029, 0.111]}
                rotation={[-1.821, 0.221, -2.499]}
              >
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_204?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle101_102"
                position={[-4.653, 5.3, -0.407]}
                rotation={[-1.611, 0.428, -1.882]}
                scale={0.539}
              >
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_206?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle102_103"
                position={[4.102, 3.446, -1.127]}
                rotation={[-1.431, 0.609, -0.937]}
              >
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_208?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle103_104"
                position={[4.794, -0.029, 0.043]}
                rotation={[-2.044, 1.013, 1.231]}
              >
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_210?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle104_105"
                position={[-2.667, 3.465, -3.882]}
                rotation={[1.144, -0.713, 2.355]}
              >
                <mesh
                  name="Object_212"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_212?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle105_106"
                position={[5.559, -0.029, -5.709]}
                rotation={[-2.215, -0.846, 1.937]}
              >
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_214?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle106_107"
                position={[3.433, 3.336, -5.628]}
                rotation={[1.258, 0.25, 1.313]}
                scale={0.307}
              >
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_216?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle107_108"
                position={[-5.283, -0.029, -0.666]}
                rotation={[-2.354, -1.174, -1.055]}
              >
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_218?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle108_109"
                position={[0.247, -0.029, -5.72]}
                rotation={[-0.699, -1.144, -2.054]}
              >
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_220?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle109_110"
                position={[0.508, -0.029, -3.197]}
                rotation={[1.89, 1.396, 0.398]}
              >
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_222?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle110_111"
                position={[3.995, -0.029, 3.866]}
                rotation={[-1.755, 1.056, 0.532]}
              >
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_224?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle111_112"
                position={[-6.7, 1.313, 0.832]}
                rotation={[-0.889, 0.118, 1.49]}
              >
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_226?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle112_113"
                position={[-2.704, -0.029, -7.603]}
                rotation={[-2.956, 0.88, -1.795]}
              >
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_228?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle113_114"
                position={[-1.918, 1.433, -5.939]}
                rotation={[0.468, 1.075, -1.99]}
              >
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_230?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle114_115"
                position={[-2.603, -0.029, 3.924]}
                rotation={[-2.377, -1.234, -0.197]}
              >
                <mesh
                  name="Object_232"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_232?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle115_116"
                position={[-3.856, 4.759, 1.678]}
                rotation={[1.157, -0.144, -0.658]}
              >
                <mesh
                  name="Object_234"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_234?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle116_117"
                position={[2.247, -0.029, 2.395]}
                rotation={[1.094, 0.185, -0.552]}
                scale={0.425}
              >
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_236?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle117_118"
                position={[5.246, -0.029, 0.306]}
                rotation={[-2.235, -1.455, -2.995]}
              >
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_238?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle118_119"
                position={[2.287, 2.204, 0.047]}
                rotation={[2.386, -0.124, 2.781]}
              >
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_240?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle119_120"
                position={[-1.057, 3.975, 1.94]}
                rotation={[-0.529, -0.628, 2.655]}
              >
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_242?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle120_121"
                position={[-1.52, 0.81, -2.011]}
                rotation={[2.572, -0.177, 1.491]}
              >
                <mesh
                  name="Object_244"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_244?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle121_122"
                position={[-0.98, 1.577, -5.531]}
                rotation={[-0.701, 0.306, 1.656]}
              >
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_246?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle122_123"
                position={[4.728, 3.71, -1.192]}
                rotation={[2.88, 0.998, -0.213]}
                scale={0.236}
              >
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_248?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle123_124"
                position={[-1.548, -0.029, 7.441]}
                rotation={[-1.816, 1.233, 1.117]}
              >
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_250?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle124_125"
                position={[-3.413, 2.513, -5.891]}
                rotation={[1.25, -0.692, 2.637]}
              >
                <mesh
                  name="Object_252"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_252?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle125_126"
                position={[3.59, 1.007, 3.837]}
                rotation={[-2.353, -1.282, 1.44]}
              >
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_254?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle126_127"
                position={[1.41, 2.293, -4.627]}
                rotation={[2.27, 1.221, -1.129]}
              >
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_256?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle127_128"
                position={[-3.743, 3.72, -5.283]}
                rotation={[-0.57, 0.343, -1.658]}
              >
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_258?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle128_129"
                position={[-0.62, -0.029, -2.514]}
                rotation={[-2.437, -0.166, -1.034]}
              >
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_260?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle129_130"
                position={[-0.555, -0.029, -1.027]}
                rotation={[-0.904, -0.721, -1.457]}
              >
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_262?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle130_131"
                position={[4.714, -0.029, -2.186]}
                rotation={[-1.497, 0.935, -1.901]}
              >
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_264?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle131_132"
                position={[1.372, 2.077, -4.607]}
                rotation={[-1.917, 0.982, 0.395]}
              >
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_266?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle132_133"
                position={[3.343, -0.029, 0.043]}
                rotation={[-0.743, -0.105, 1.072]}
              >
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_268?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle133_134"
                position={[0.109, 3.587, 4.032]}
                rotation={[2.413, -0.392, 1.763]}
              >
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_270?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle134_135"
                position={[-5.518, 1.687, -3.468]}
                rotation={[-0.464, -0.074, 1.897]}
              >
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_272?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle135_136"
                position={[-3.548, 1.205, 2.192]}
                rotation={[2.754, -0.015, 1.664]}
              >
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_274?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle136_137"
                position={[4.216, -0.029, -6.069]}
                rotation={[0.632, -0.76, 1.927]}
              >
                <mesh
                  name="Object_276"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_276?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle137_138"
                position={[3.845, -0.029, 2.09]}
                rotation={[-2.888, -1.12, 0.955]}
              >
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_278?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle138_139"
                position={[-3.767, 3.142, -2.237]}
                rotation={[1.984, -0.671, 1.776]}
              >
                <mesh
                  name="Object_280"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_280?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle139_140"
                position={[4.881, -0.029, -4.058]}
                rotation={[1.296, -0.786, 2.833]}
              >
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_282?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle140_141"
                position={[1.435, -0.029, 2.16]}
                rotation={[1.988, -0.455, -1.764]}
              >
                <mesh
                  name="Object_284"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_284?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle141_142"
                position={[-2.718, 3.639, 1.667]}
                rotation={[0.614, -1.399, -0.944]}
              >
                <mesh
                  name="Object_286"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_286?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle142_143"
                position={[-1.837, 5.095, 3.179]}
                rotation={[1.695, -0.084, 1.572]}
                scale={0.969}
              >
                <mesh
                  name="Object_288"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_288?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle143_144"
                position={[-3.507, -0.029, -0.914]}
                rotation={[-1.117, -0.374, 1.411]}
              >
                <mesh
                  name="Object_290"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_290?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle144_145"
                position={[-5.699, -0.029, -2.157]}
                rotation={[1.851, -0.131, 0.997]}
              >
                <mesh
                  name="Object_292"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_292?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle145_146"
                position={[3.23, 5.257, 0.036]}
                rotation={[-0.405, -0.503, 0.991]}
              >
                <mesh
                  name="Object_294"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_294?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle146_147"
                position={[-0.771, 1.595, -2.846]}
                rotation={[2.369, 0.297, -1.507]}
              >
                <mesh
                  name="Object_296"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_296?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle147_148"
                position={[-0.858, -0.029, 0.908]}
                rotation={[0.577, 0.086, -1.654]}
              >
                <mesh
                  name="Object_298"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_298?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle148_149"
                position={[1.836, -0.029, 0.813]}
                rotation={[2.5, -0.336, -0.998]}
              >
                <mesh
                  name="Object_300"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_300?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle149_150"
                position={[-4.096, -0.029, -0.122]}
                rotation={[-2.606, -1.141, 3.064]}
              >
                <mesh
                  name="Object_302"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_302?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle150_151"
                position={[0.753, 0.224, 1.417]}
                rotation={[-1.641, 0.492, -3.041]}
              >
                <mesh
                  name="Object_304"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_304?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle151_152"
                position={[-5.832, -0.029, -1.916]}
                rotation={[-1.155, 1.371, -1.602]}
              >
                <mesh
                  name="Object_306"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_306?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle152_153"
                position={[0.397, 1.35, -3.318]}
                rotation={[-2.162, -0.809, -1.159]}
              >
                <mesh
                  name="Object_308"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_308?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle153_154"
                position={[-0.47, -0.029, 1.921]}
                rotation={[-0.924, -0.758, -1.999]}
              >
                <mesh
                  name="Object_310"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_310?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle154_155"
                position={[-2.005, 2.71, -0.243]}
                rotation={[2.072, 1.237, 1.181]}
              >
                <mesh
                  name="Object_312"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_312?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle155_156"
                position={[6.832, 0.763, -5.992]}
                rotation={[-1.744, 0.551, 1.033]}
              >
                <mesh
                  name="Object_314"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_314?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle156_157"
                position={[5.746, -0.029, -0.665]}
                rotation={[0.055, 0.42, 1.488]}
              >
                <mesh
                  name="Object_316"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_316?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle157_158"
                position={[-3.514, -0.029, -1.549]}
                rotation={[-2.94, 0.498, 0.987]}
              >
                <mesh
                  name="Object_318"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_318?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle158_159"
                position={[-0.301, 1.353, -2.716]}
                rotation={[1.773, -1.21, 2.445]}
              >
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_320?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle159_160"
                position={[0.371, 1.924, -3.518]}
                rotation={[0.77, -0.692, -2.522]}
              >
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_322?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle160_161"
                position={[-3.042, 3.317, -0.1]}
                rotation={[2.281, -0.562, 0.056]}
                scale={0.764}
              >
                <mesh
                  name="Object_324"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_324?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle161_162"
                position={[3.253, 4.643, 5.028]}
                rotation={[0.682, -0.531, 0.511]}
              >
                <mesh
                  name="Object_326"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_326?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle162_163"
                position={[-0.872, -0.029, -1.239]}
                rotation={[-1.686, 0.333, 2.193]}
                scale={0.939}
              >
                <mesh
                  name="Object_328"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_328?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle163_164"
                position={[1.91, 4.316, -0.484]}
                rotation={[-1.889, 0.926, -2.585]}
              >
                <mesh
                  name="Object_330"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_330?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle164_165"
                position={[0.275, 3.03, 1.981]}
                rotation={[2.374, 1.054, 2.462]}
              >
                <mesh
                  name="Object_332"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_332?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle165_166"
                position={[-0.105, -0.029, 1.819]}
                rotation={[-0.159, -1.126, 1.901]}
              >
                <mesh
                  name="Object_334"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_334?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle166_167"
                position={[4.698, 1.34, -3.711]}
                rotation={[2.646, -0.933, 1.22]}
              >
                <mesh
                  name="Object_336"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_336?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle167_168"
                position={[-2.286, 1.922, 0.729]}
                rotation={[0.497, 0.223, 1.417]}
              >
                <mesh
                  name="Object_338"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_338?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle168_169"
                position={[3.783, -0.029, -3.398]}
                rotation={[-2.42, -0.31, -0.199]}
              >
                <mesh
                  name="Object_340"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_340?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle169_170"
                position={[-1.23, -0.029, -4.453]}
                rotation={[0.136, -0.731, -0.264]}
              >
                <mesh
                  name="Object_342"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_342?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle170_171"
                position={[3.849, 1.54, -1.732]}
                rotation={[-2.659, 0.202, -2.975]}
              >
                <mesh
                  name="Object_344"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_344?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle171_172"
                position={[-4.041, -0.029, -1.721]}
                rotation={[0.297, 0.518, -3.005]}
              >
                <mesh
                  name="Object_346"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_346?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle172_173"
                position={[-2.42, -0.029, -3.228]}
                rotation={[-2.627, -0.309, 0.098]}
                scale={0.5}
              >
                <mesh
                  name="Object_348"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_348?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle173_174"
                position={[-1.596, 0.944, 2.029]}
                rotation={[0.963, -1.325, 0.791]}
              >
                <mesh
                  name="Object_350"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_350?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle174_175"
                position={[0.64, 3.004, 3.111]}
                rotation={[0.705, -0.144, 2.805]}
              >
                <mesh
                  name="Object_352"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_352?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle175_176"
                position={[1.247, 2.563, 2.203]}
                rotation={[-2.76, -0.367, 1.66]}
              >
                <mesh
                  name="Object_354"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_354?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle176_177"
                position={[3.245, -0.029, -1.08]}
                rotation={[-1.358, 1.068, 2.479]}
              >
                <mesh
                  name="Object_356"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_356?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle177_178"
                position={[-4.783, 4.68, 0.62]}
                rotation={[-1.342, 0.851, -1.849]}
                scale={0.307}
              >
                <mesh
                  name="Object_358"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_358?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle178_179"
                position={[-3.939, -0.029, -5.937]}
                rotation={[-1.848, 0.8, 0.21]}
              >
                <mesh
                  name="Object_360"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_360?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle179_180"
                position={[-2.265, 1.822, -5.22]}
                rotation={[-0.674, -0.019, 0.822]}
              >
                <mesh
                  name="Object_362"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_362?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle180_181"
                position={[-0.179, -0.029, -5.327]}
                rotation={[1.813, -0.066, 0.852]}
              >
                <mesh
                  name="Object_364"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_364?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle181_182"
                position={[1.563, 4.963, 1.92]}
                rotation={[2.181, -1.338, 2.88]}
                scale={0.886}
              >
                <mesh
                  name="Object_366"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_366?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle182_183"
                position={[2.07, -0.029, -2.287]}
                rotation={[1.973, 0.004, -2.628]}
              >
                <mesh
                  name="Object_368"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_368?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle183_184"
                position={[0.9, 0.112, -3.273]}
                rotation={[1.369, -0.592, -2.143]}
              >
                <mesh
                  name="Object_370"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_370?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle184_185"
                position={[2.731, 2.134, 2.562]}
                rotation={[1.982, 0.009, -1.441]}
              >
                <mesh
                  name="Object_372"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_372?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle185_186"
                position={[4.327, -0.029, 2.866]}
                rotation={[1.31, 0.252, -1.641]}
              >
                <mesh
                  name="Object_374"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_374?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle186_187"
                position={[2.379, 3.692, -4.645]}
                rotation={[1.705, -0.26, -1.671]}
              >
                <mesh
                  name="Object_376"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_376?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle187_188"
                position={[5.819, -0.029, -0.445]}
                rotation={[1.82, 0.233, -1.743]}
                scale={0.648}
              >
                <mesh
                  name="Object_378"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_378?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle188_189"
                position={[1.722, 0.644, 0.54]}
                rotation={[1.286, -0.144, -1.816]}
              >
                <mesh
                  name="Object_380"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_380?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle189_190"
                position={[1.243, 3.951, -2.031]}
                rotation={[2.429, -1.25, 0.565]}
              >
                <mesh
                  name="Object_382"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_382?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle190_191"
                position={[-1.251, -0.029, -1.773]}
                rotation={[1.792, 1.517, -0.65]}
              >
                <mesh
                  name="Object_384"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_384?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle191_192"
                position={[0.09, -0.029, 1.87]}
                rotation={[1.321, 1.183, -2.91]}
                scale={0.104}
              >
                <mesh
                  name="Object_386"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_386?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle192_193"
                position={[-4.724, 1.838, -2.87]}
                rotation={[-1.401, -0.97, 1.111]}
              >
                <mesh
                  name="Object_388"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_388?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle193_194"
                position={[-0.718, 1.488, -2.026]}
                rotation={[1.826, -0.71, 0.888]}
              >
                <mesh
                  name="Object_390"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_390?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle194_195"
                position={[4.515, -0.029, 0.501]}
                rotation={[0.369, -0.382, 1.518]}
              >
                <mesh
                  name="Object_392"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_392?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle195_196"
                position={[-6.521, -0.029, 5.371]}
                rotation={[2.836, -0.665, -0.858]}
              >
                <mesh
                  name="Object_394"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_394?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle196_197"
                position={[-5.303, -0.029, -0.797]}
                rotation={[-2.847, -1.365, 2.752]}
              >
                <mesh
                  name="Object_396"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_396?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle197_198"
                position={[0.345, 1.164, 1.899]}
                rotation={[-1.308, 0.676, 3.038]}
              >
                <mesh
                  name="Object_398"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_398?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle198_199"
                position={[1.119, 4.28, 3.772]}
                rotation={[2.515, 1.057, 1.769]}
                scale={0.933}
              >
                <mesh
                  name="Object_400"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_400?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle199_200"
                position={[0.041, 3.879, 3.98]}
                rotation={[-0.521, -1.407, 0.95]}
              >
                <mesh
                  name="Object_402"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_402?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle200_201"
                position={[-1.661, -0.029, 0.111]}
                rotation={[1.026, -1.366, -0.723]}
              >
                <mesh
                  name="Object_404"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_404?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle201_202"
                position={[-3.959, -0.029, -0.13]}
                rotation={[1.388, 0.264, 0.988]}
                scale={0.844}
              >
                <mesh
                  name="Object_406"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_406?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle202_203"
                position={[-3.341, 3.499, -0.734]}
                rotation={[-2.145, -1.251, -1.178]}
                scale={0.031}
              >
                <mesh
                  name="Object_408"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_408?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle203_204"
                position={[4.794, -0.029, 0.043]}
                rotation={[-1.416, -0.911, -2.721]}
              >
                <mesh
                  name="Object_410"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_410?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle204_205"
                position={[-2.945, 2.815, 1.7]}
                rotation={[1.4, 1.06, 1.605]}
                scale={0.969}
              >
                <mesh
                  name="Object_412"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_412?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle205_206"
                position={[5.559, -0.029, -5.709]}
                rotation={[-1.834, -0.732, -0.537]}
                scale={0.216}
              >
                <mesh
                  name="Object_414"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_414?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle206_207"
                position={[0.9, 1.945, 3.137]}
                rotation={[-0.923, -1.145, -1.728]}
              >
                <mesh
                  name="Object_416"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_416?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle207_208"
                position={[-5.285, -0.004, -0.671]}
                rotation={[1.719, 0.423, 2.239]}
              >
                <mesh
                  name="Object_418"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_418?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle208_209"
                position={[-5.606, -0.029, -1.263]}
                rotation={[-1.248, -1.159, 0.992]}
              >
                <mesh
                  name="Object_420"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_420?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle209_210"
                position={[2.824, -0.029, 2.356]}
                rotation={[2.404, -1.005, 1.432]}
              >
                <mesh
                  name="Object_422"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_422?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle210_211"
                position={[-2.993, -0.029, 4.956]}
                rotation={[-0.128, 0.474, 1.882]}
              >
                <mesh
                  name="Object_424"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_424?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle211_212"
                position={[4.258, -0.029, 3.801]}
                rotation={[-2.721, 0.03, -1.641]}
              >
                <mesh
                  name="Object_426"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_426?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle212_213"
                position={[-2.704, -0.029, -7.603]}
                rotation={[-0.126, 0.337, -1.613]}
              >
                <mesh
                  name="Object_428"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_428?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle213_214"
                position={[-2.416, -0.029, -5.989]}
                rotation={[-2.793, 0.114, 1.444]}
                scale={0.718}
              >
                <mesh
                  name="Object_430"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_430?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle214_215"
                position={[-4.288, 1.809, -6.535]}
                rotation={[0.098, 0.111, 1.459]}
              >
                <mesh
                  name="Object_432"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_432?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle215_216"
                position={[-4.121, 1.178, -4.6]}
                rotation={[-3.036, 0.123, 1.495]}
              >
                <mesh
                  name="Object_434"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_434?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle216_217"
                position={[4.515, 4.532, -5.978]}
                rotation={[0.047, -0.078, 1.503]}
                scale={0.307}
              >
                <mesh
                  name="Object_436"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_436?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle217_218"
                position={[5.246, -0.029, 0.306]}
                rotation={[-3.095, -0.092, 1.361]}
              >
                <mesh
                  name="Object_438"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_438?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle218_219"
                position={[3.03, 4.85, -2.69]}
                rotation={[1.186, -0.787, 1.904]}
              >
                <mesh
                  name="Object_440"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_440?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle219_220"
                position={[-1.049, 3.939, 1.932]}
                rotation={[-1.657, -0.821, 2.123]}
              >
                <mesh
                  name="Object_442"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_442?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle220_221"
                position={[-2.354, 3.304, -0.725]}
                rotation={[1.772, -0.012, 1.379]}
                scale={0.539}
              >
                <mesh
                  name="Object_444"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_444?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle221_222"
                position={[-0.748, 1.42, -1.033]}
                rotation={[0.883, -1.44, 2.175]}
              >
                <mesh
                  name="Object_446"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_446?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle222_223"
                position={[-5.646, -0.029, -1.456]}
                rotation={[-2.109, -1.126, 2.652]}
              >
                <mesh
                  name="Object_448"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_448?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle223_224"
                position={[-6.147, -0.029, 0.076]}
                rotation={[1.008, 0.77, 1.524]}
              >
                <mesh
                  name="Object_450"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_450?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle224_225"
                position={[-5.721, 2.637, 6.038]}
                rotation={[-1.815, -0.299, -0.124]}
              >
                <mesh
                  name="Object_452"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_452?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle225_226"
                position={[0.508, -0.029, -5.222]}
                rotation={[0.472, 0.852, -0.576]}
              >
                <mesh
                  name="Object_454"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_454?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle226_227"
                position={[2.798, -0.029, -5.703]}
                rotation={[2.166, 0.011, -2.763]}
              >
                <mesh
                  name="Object_456"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_456?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle227_228"
                position={[-0.835, 5.319, -4.316]}
                rotation={[-1.037, -0.915, 2.966]}
                scale={0.539}
              >
                <mesh
                  name="Object_458"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_458?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle228_229"
                position={[0.658, 1.619, 1.791]}
                rotation={[2.504, 1.054, -0.568]}
              >
                <mesh
                  name="Object_460"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_460?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle229_230"
                position={[-1.618, 1.466, -5.701]}
                rotation={[-1.547, -0.611, -1.545]}
              >
                <mesh
                  name="Object_462"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_462?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle230_231"
                position={[-3.867, 0.406, 0.018]}
                rotation={[-0.797, 0.544, -1.936]}
              >
                <mesh
                  name="Object_464"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_464?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle231_232"
                position={[2.238, 3.471, 2.303]}
                rotation={[-2.307, 0.59, 0.435]}
                scale={0.307}
              >
                <mesh
                  name="Object_466"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_466?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle232_233"
                position={[3.343, -0.029, 0.043]}
                rotation={[-1.43, 0.998, 1.587]}
              >
                <mesh
                  name="Object_468"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_468?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle233_234"
                position={[1.955, 4.09, -0.953]}
                rotation={[1.693, 0.118, 2.575]}
              >
                <mesh
                  name="Object_470"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_470?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle234_235"
                position={[-3.929, 4.637, 1.875]}
                rotation={[-1.791, -0.442, 1.924]}
              >
                <mesh
                  name="Object_472"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_472?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle235_236"
                position={[-3.367, 3.142, 2.679]}
                rotation={[1.385, 0.374, 1.256]}
                scale={0.969}
              >
                <mesh
                  name="Object_474"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_474?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle236_237"
                position={[3.183, 2.183, -5.216]}
                rotation={[-1.449, -0.083, 0.734]}
              >
                <mesh
                  name="Object_476"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_476?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle237_238"
                position={[3.33, 4.442, -3.949]}
                rotation={[1.06, 1.344, -0.232]}
              >
                <mesh
                  name="Object_478"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_478?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle238_239"
                position={[-0.662, 2.67, 3.178]}
                rotation={[-1.355, -0.066, -2.157]}
              >
                <mesh
                  name="Object_480"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_480?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle239_240"
                position={[4.881, -0.029, -4.058]}
                rotation={[2.643, 1.269, 1.57]}
              >
                <mesh
                  name="Object_482"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_482?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle240_241"
                position={[3.29, 4.894, -4.241]}
                rotation={[-1.258, -1.321, 0.17]}
              >
                <mesh
                  name="Object_484"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_484?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle241_242"
                position={[-2.971, 2.534, 1.774]}
                rotation={[-2.126, -1.405, 2.838]}
              >
                <mesh
                  name="Object_486"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_486?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle242_243"
                position={[-1.107, -0.029, -6.527]}
                rotation={[1.837, -0.1, 2.088]}
              >
                <mesh
                  name="Object_488"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_488?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle243_244"
                position={[8.864, -0.029, -0.506]}
                rotation={[-1.467, -0.288, 1.905]}
                scale={0.939}
              >
                <mesh
                  name="Object_490"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_490?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle244_245"
                position={[-4.194, -0.029, 0.286]}
                rotation={[1.82, 1.235, 0.106]}
                scale={0.216}
              >
                <mesh
                  name="Object_492"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_492?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle245_246"
                position={[5.172, 2.874, -0.57]}
                rotation={[-1.15, 1.038, -0.195]}
              >
                <mesh
                  name="Object_494"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_494?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle246_247"
                position={[1.723, 4.877, -3.272]}
                rotation={[-1.278, 0.131, 1.347]}
              >
                <mesh
                  name="Object_496"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_496?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle247_248"
                position={[-0.066, 0.062, 1.851]}
                rotation={[1.324, 0.519, 1.115]}
              >
                <mesh
                  name="Object_498"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_498?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle248_249"
                position={[1.533, 5.479, -2.85]}
                rotation={[-1.593, 0.348, 0.813]}
                scale={0.114}
              >
                <mesh
                  name="Object_500"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_500?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle249_250"
                position={[5.009, 0.313, -2.22]}
                rotation={[0.421, 0.156, 1.12]}
              >
                <mesh
                  name="Object_502"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_502?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle250_251"
                position={[0.757, 0.275, 1.429]}
                rotation={[-3.074, -0.322, -2.313]}
              >
                <mesh
                  name="Object_504"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_504?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle251_252"
                position={[-4.012, 2.829, -2.824]}
                rotation={[-1.56, -0.444, -2.763]}
              >
                <mesh
                  name="Object_506"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_506?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle252_253"
                position={[-0.691, -0.029, 0.008]}
                rotation={[0.785, 1.464, 2.359]}
              >
                <mesh
                  name="Object_508"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_508?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle253_254"
                position={[4.905, -0.029, -3.881]}
                rotation={[-1.981, 0.613, 0.98]}
              >
                <mesh
                  name="Object_510"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_510?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle254_255"
                position={[-2.174, 3.538, 0.035]}
                rotation={[-0.438, 0.543, 1.513]}
              >
                <mesh
                  name="Object_512"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_512?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle255_256"
                position={[-0.784, 1.164, -5.388]}
                rotation={[2.602, 0.647, 1.543]}
              >
                <mesh
                  name="Object_514"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_514?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle256_257"
                position={[-3.681, -0.029, 0.956]}
                rotation={[-0.095, -1.155, 1.297]}
                scale={0.575}
              >
                <mesh
                  name="Object_516"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_516?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle257_258"
                position={[-3.514, -0.029, -1.549]}
                rotation={[1.543, -1.076, -0.648]}
                scale={0.425}
              >
                <mesh
                  name="Object_518"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_518?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle258_259"
                position={[-0.671, 2.494, 0.263]}
                rotation={[1.299, 0.166, 0.327]}
              >
                <mesh
                  name="Object_520"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_520?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle259_260"
                position={[5.212, 3.668, 0.111]}
                rotation={[-2.942, -1.038, -2.684]}
              >
                <mesh
                  name="Object_522"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_522?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle260_261"
                position={[-2.976, 3.509, 0.434]}
                rotation={[0.671, 0.05, -2.816]}
                scale={0.031}
              >
                <mesh
                  name="Object_524"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_524?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle261_262"
                position={[3.692, 1.417, 1.968]}
                rotation={[-3.067, -0.668, 0.395]}
              >
                <mesh
                  name="Object_526"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_526?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle262_263"
                position={[-0.831, -0.029, -0.452]}
                rotation={[0.634, 0.355, 0.251]}
              >
                <mesh
                  name="Object_528"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_528?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle263_264"
                position={[1.09, 0.824, -0.682]}
                rotation={[2.993, 0.571, 2.887]}
              >
                <mesh
                  name="Object_530"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_530?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle264_265"
                position={[0.465, -0.029, -5.639]}
                rotation={[-1.582, 0.039, 2.883]}
                scale={0.425}
              >
                <mesh
                  name="Object_532"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_532?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle265_266"
                position={[5.393, -0.029, -4.128]}
                rotation={[1.702, 1.044, 1.761]}
              >
                <mesh
                  name="Object_534"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_534?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle266_267"
                position={[2.474, 1.155, 2.459]}
                rotation={[-1.526, -0.179, 0.656]}
              >
                <mesh
                  name="Object_536"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_536?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle267_268"
                position={[-4.478, 0.085, 4.193]}
                rotation={[1.666, 1.379, -1.005]}
              >
                <mesh
                  name="Object_538"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_538?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle268_269"
                position={[3.559, -0.029, -1.529]}
                rotation={[-0.323, 0.345, -2.235]}
              >
                <mesh
                  name="Object_540"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_540?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle269_270"
                position={[-1.23, -0.029, -4.453]}
                rotation={[-3.011, 0.304, 1.742]}
                scale={0.939}
              >
                <mesh
                  name="Object_542"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_542?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle270_271"
                position={[3.675, -0.029, -0.267]}
                rotation={[0.167, -0.259, 1.784]}
                scale={0.575}
              >
                <mesh
                  name="Object_544"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_544?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle271_272"
                position={[1.842, -0.029, 0.517]}
                rotation={[2.885, -0.249, -0.96]}
              >
                <mesh
                  name="Object_546"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_546?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle272_273"
                position={[-1.563, 5.46, -5.293]}
                rotation={[1.438, 0.917, -1.743]}
                scale={0.171}
              >
                <mesh
                  name="Object_548"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_548?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle273_274"
                position={[-3.792, 0.919, -5.56]}
                rotation={[1.288, -0.473, -2.412]}
              >
                <mesh
                  name="Object_550"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_550?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle274_275"
                position={[0.446, 3.543, 3.652]}
                rotation={[2.118, -0.103, -1.608]}
                scale={0.236}
              >
                <mesh
                  name="Object_552"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_552?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle275_276"
                position={[2.967, 2.782, -6.058]}
                rotation={[1.269, 0.15, -1.661]}
              >
                <mesh
                  name="Object_554"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_554?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle276_277"
                position={[3.245, -0.029, -1.08]}
                rotation={[1.575, -1.263, -0.598]}
              >
                <mesh
                  name="Object_556"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_556?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle277_278"
                position={[-0.599, -0.029, -2.182]}
                rotation={[1.35, 0.584, 0.189]}
              >
                <mesh
                  name="Object_558"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_558?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle278_279"
                position={[-2.733, 1.892, 4.932]}
                rotation={[-1.104, -0.645, -0.937]}
              >
                <mesh
                  name="Object_560"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_560?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle279_280"
                position={[-5.513, -0.029, 2.12]}
                rotation={[-2.063, -0.327, -2.468]}
                scale={0.784}
              >
                <mesh
                  name="Object_562"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_562?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle280_281"
                position={[-2.466, 3.305, 2.172]}
                rotation={[-1.098, 0.572, -2.309]}
                scale={0.693}
              >
                <mesh
                  name="Object_564"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_564?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle281_282"
                position={[4.657, -0.029, -7.201]}
                rotation={[-2.013, 0.361, -0.85]}
              >
                <mesh
                  name="Object_566"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_566?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle282_283"
                position={[2.07, -0.029, -2.287]}
                rotation={[-1.544, -0.813, -1.414]}
              >
                <mesh
                  name="Object_568"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_568?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle283_284"
                position={[0.853, 2.927, -2.827]}
                rotation={[-1.096, 0.076, -2.201]}
                scale={0.764}
              >
                <mesh
                  name="Object_570"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_570?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle284_285"
                position={[1.39, -0.029, 2.258]}
                rotation={[-2.942, 1.095, 0.74]}
              >
                <mesh
                  name="Object_572"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_572?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle285_286"
                position={[-2.072, 4.594, 1.289]}
                rotation={[-1.074, 0.035, 0.883]}
              >
                <mesh
                  name="Object_574"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_574?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle286_287"
                position={[-4.669, 4.519, 3.73]}
                rotation={[2.239, -0.579, 2.044]}
              >
                <mesh
                  name="Object_576"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_576?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle287_288"
                position={[-5.99, 0.856, -0.802]}
                rotation={[1.485, -0.68, 2.958]}
              >
                <mesh
                  name="Object_578"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_578?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle288_289"
                position={[1.725, 3.412, -3.664]}
                rotation={[-2.063, -1.24, 1.948]}
                scale={0.307}
              >
                <mesh
                  name="Object_580"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_580?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle289_290"
                position={[1.526, -0.029, 0.681]}
                rotation={[1.333, 0.775, 0.52]}
              >
                <mesh
                  name="Object_582"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_582?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle290_291"
                position={[1.374, 2.571, 4.422]}
                rotation={[-2.077, 1.184, 1.265]}
              >
                <mesh
                  name="Object_584"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_584?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle291_292"
                position={[-4.724, 4.69, 3.719]}
                rotation={[-1.303, 0.315, 2.26]}
              >
                <mesh
                  name="Object_586"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_586?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle292_293"
                position={[-3.851, 2.133, -2.656]}
                rotation={[2.075, 0.473, 1.897]}
              >
                <mesh
                  name="Object_588"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_588?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle293_294"
                position={[0.67, -0.029, 3.304]}
                rotation={[-1.289, -0.178, 1.48]}
              >
                <mesh
                  name="Object_590"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_590?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle294_295"
                position={[2.094, 0.697, 0.707]}
                rotation={[1.742, -0.014, 1.26]}
              >
                <mesh
                  name="Object_592"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_592?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle295_296"
                position={[-5.423, 1.922, -4.762]}
                rotation={[-0.937, -0.242, 1.148]}
              >
                <mesh
                  name="Object_594"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_594?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle296_297"
                position={[-4.035, 2.107, 0.014]}
                rotation={[2.473, 0.939, -1.264]}
              >
                <mesh
                  name="Object_596"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_596?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle297_298"
                position={[-0.261, -0.029, 2.056]}
                rotation={[-0.302, 0.263, -1.573]}
                scale={0.575}
              >
                <mesh
                  name="Object_598"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_598?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle298_299"
                position={[-2.919, -0.029, 0.441]}
                rotation={[-2.63, 0.15, 0.417]}
              >
                <mesh
                  name="Object_600"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_600?.geometry}
                  material={materials.Snowflake}
                />
              </group>
              <group
                name="particle299_300"
                position={[-0.708, 1.59, 3.689]}
                rotation={[-0.009, -0.134, 0.455]}
              >
                <mesh
                  name="Object_602"
                  castShadow
                  receiveShadow
                  geometry={(nodes as any)?.Object_602?.geometry}
                  material={materials.Snowflake}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
export default memo(ModelFallingSnow);

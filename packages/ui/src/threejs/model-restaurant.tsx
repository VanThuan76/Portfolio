import * as THREE from "three";
import { useRef, memo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface ModelRestaurantProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}

function ModelRestaurant({ position, scale, ...props }: ModelRestaurantProps) {
  const ref = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/restaurant.glb");

  const currentPosition = useRef(new THREE.Vector3(...position));
  const currentScale = useRef(new THREE.Vector3(...scale));

  useFrame(() => {
    if (ref.current) {
      const targetPosition = new THREE.Vector3(...position);
      currentPosition.current.x = THREE.MathUtils.lerp(
        currentPosition.current.x,
        targetPosition.x,
        0.1,
      );
      currentPosition.current.y = THREE.MathUtils.lerp(
        currentPosition.current.y,
        targetPosition.y,
        0.1,
      );
      currentPosition.current.z = THREE.MathUtils.lerp(
        currentPosition.current.z,
        targetPosition.z,
        0.1,
      );

      const targetScale = new THREE.Vector3(...scale);
      currentScale.current.x = THREE.MathUtils.lerp(
        currentScale.current.x,
        targetScale.x,
        0.1,
      );
      currentScale.current.y = THREE.MathUtils.lerp(
        currentScale.current.y,
        targetScale.y,
        0.1,
      );
      currentScale.current.z = THREE.MathUtils.lerp(
        currentScale.current.z,
        targetScale.z,
        0.1,
      );

      ref.current.position.copy(currentPosition.current);
      ref.current.scale.copy(currentScale.current);
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface113_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0, 0, -1.551]}
      />
      <group position={[0, 0.265, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface513_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface514_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface515_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface516_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface517_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface518_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface519_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface520_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface521_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface522_lambert40_0.geometry}
          material={materials.lambert40}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface523_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface524_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface525_lambert32_0.geometry}
          material={materials.lambert32}
        />
      </group>
      <group position={[8.522, 0, -11.334]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface526_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface527_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface528_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface529_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface530_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface531_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface532_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface533_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface534_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface535_lambert40_0.geometry}
          material={materials.lambert40}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface536_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface537_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface538_lambert32_0.geometry}
          material={materials.lambert32}
        />
      </group>
      <group position={[-0.022, 0, -6.308]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface652_lambert4_0.geometry}
          material={materials.lambert4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface653_phong6_0.geometry}
          material={materials.phong6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface654_phong6_0.geometry}
          material={materials.phong6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface655_lambert4_0.geometry}
          material={materials.lambert4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface656_lambert4_0.geometry}
          material={materials.lambert4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface657_phong6_0.geometry}
          material={materials.phong6}
        />
      </group>
      <group position={[-0.071, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface99_lambert4_0.geometry}
          material={materials.lambert4}
          position={[-0.052, -0.015, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface100_lambert12_0.geometry}
          material={materials.lambert12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface101_lambert4_0.geometry}
          material={materials.lambert4}
          position={[0.071, -0.022, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface102_lambert12_0.geometry}
          material={materials.lambert12}
        />
      </group>
      <group
        position={[1.653, 8.537, 2.48]}
        rotation={[1.449, 0, Math.PI / 2]}
        scale={[0.589, 1.274, 2.295]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube140_lambert32_0.geometry}
          material={materials.lambert32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube140_lambert33_0.geometry}
          material={materials.lambert33}
        />
      </group>
      <group
        position={[0.123, 8.564, 2.586]}
        rotation={[-0.122, 0, 0]}
        scale={[4.644, 1.779, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube154_lambert11_0.geometry}
          material={materials.lambert11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube154_lambert10_0.geometry}
          material={materials.lambert10}
        />
      </group>
      <group position={[-6.976, 8.494, 3.528]} scale={[0.039, 0.893, 1.051]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube155_lambert14_0.geometry}
          material={materials.lambert14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube155_lambert15_0.geometry}
          material={materials.lambert15}
        />
      </group>
      <group
        position={[-1.644, 3.381, 2.533]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.223, 1, 1.192]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube159_lambert12_0.geometry}
          material={materials.lambert12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube159_lambert13_0.geometry}
          material={materials.lambert13}
        />
      </group>
      <group position={[-0.008, 0.921, 0.025]} rotation={[0.057, 0.002, 0.099]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface260_lambert16_0.geometry}
          material={materials.lambert16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface260_lambert17_0.geometry}
          material={materials.lambert17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface261_lambert16_0.geometry}
          material={materials.lambert16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface262_lambert16_0.geometry}
          material={materials.lambert16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface263_lambert16_0.geometry}
          material={materials.lambert16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface264_lambert36_0.geometry}
          material={materials.lambert36}
        />
      </group>
      <group position={[0, 0, -0.198]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface255_lambert7_0.geometry}
          material={materials.lambert7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface255_phong1_0.geometry}
          material={materials.phong1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface255_lambert6_0.geometry}
          material={materials.lambert6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface255_lambert5_0.geometry}
          material={materials.lambert5}
        />
      </group>
      <group position={[0, 0, -0.037]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface259_lambert7_0.geometry}
          material={materials.lambert7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface259_phong1_0.geometry}
          material={materials.phong1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface259_lambert6_0.geometry}
          material={materials.lambert6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface259_lambert5_0.geometry}
          material={materials.lambert5}
        />
      </group>
      <group
        position={[-7.344, 8.494, 3.528]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.039, 0.893, 1.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube205_lambert14_0.geometry}
          material={materials.lambert14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube205_lambert15_0.geometry}
          material={materials.lambert15}
        />
      </group>
      <group position={[0, 0, -0.26]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface497_lambert36_0.geometry}
          material={materials.lambert36}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface498_lambert8_0.geometry}
          material={materials.lambert8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface498_lambert9_0.geometry}
          material={materials.lambert9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface499_lambert9_0.geometry}
          material={materials.lambert9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface500_lambert9_0.geometry}
          material={materials.lambert9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface501_lambert9_0.geometry}
          material={materials.lambert9}
        />
      </group>
      <group
        position={[2.108, -0.018, 11.635]}
        rotation={[-0.499, 1.311, 0.391]}
        scale={[0.599, 0.603, 0.599]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface434_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface435_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface436_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface437_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface438_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface439_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface440_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface441_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface442_lambert19_0.geometry}
          material={materials.lambert19}
        />
      </group>
      <group
        position={[4.117, 0.502, 11.771]}
        rotation={[-0.099, 1.419, -0.04]}
        scale={[0.599, 0.587, 0.599]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface395_lambert18_0.geometry}
          material={materials.lambert18}
          position={[-6.358, -3.189, -2.231]}
          scale={1.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface396_lambert18_0.geometry}
          material={materials.lambert18}
          position={[-6.298, -3.181, -2.138]}
          scale={1.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface397_lambert18_0.geometry}
          material={materials.lambert18}
          position={[-6.438, -3.206, -2.303]}
          scale={1.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface398_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface399_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface400_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface401_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface402_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface403_lambert19_0.geometry}
          material={materials.lambert19}
        />
      </group>
      <group
        position={[11.987, -0.521, 9.439]}
        rotation={[-3.119, 0.271, 3.104]}
        scale={[0.599, 0.61, 0.599]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface425_lambert18_0.geometry}
          material={materials.lambert18}
          position={[-4.61, -2.312, -1.618]}
          scale={1.433}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface426_lambert18_0.geometry}
          material={materials.lambert18}
          position={[-4.567, -2.306, -1.55]}
          scale={1.433}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface427_lambert18_0.geometry}
          material={materials.lambert18}
          position={[-4.669, -2.324, -1.67]}
          scale={1.433}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface428_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface429_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface430_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface431_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface432_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface433_lambert19_0.geometry}
          material={materials.lambert19}
        />
      </group>
      <group
        position={[5.297, -0.716, -1.302]}
        rotation={[-0.342, -0.967, -0.297]}
        scale={0.647}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface404_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface405_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface406_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface407_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface408_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface409_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface410_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface411_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface412_lambert19_0.geometry}
          material={materials.lambert19}
        />
      </group>
      <group position={[-13.12, 0, 11.151]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface339_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface340_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface341_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface342_lambert18_0.geometry}
          material={materials.lambert18}
          position={[2.238, -1.089, -1.947]}
          scale={1.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface343_lambert18_0.geometry}
          material={materials.lambert18}
          position={[2.216, -1.084, -1.916]}
          scale={1.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface344_lambert18_0.geometry}
          material={materials.lambert18}
          position={[2.25, -1.097, -1.986]}
          scale={1.355}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface345_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface346_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface347_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface348_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface349_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface350_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface351_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface352_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface353_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface354_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface355_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface356_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface357_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface358_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface359_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface360_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface361_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface362_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface363_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface364_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface365_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface366_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface367_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface368_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface369_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface370_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface371_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface372_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface373_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface374_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface375_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface376_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface377_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface378_lambert18_0.geometry}
          material={materials.lambert18}
          position={[6.146, -2.324, -4.528]}
          scale={1.816}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface379_lambert18_0.geometry}
          material={materials.lambert18}
          position={[6.227, -2.312, -4.561]}
          scale={1.816}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface380_lambert18_0.geometry}
          material={materials.lambert18}
          position={[6.126, -2.338, -4.471]}
          scale={1.816}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface381_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface382_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface383_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface384_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface385_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface386_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface387_lambert20_0.geometry}
          material={materials.lambert20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface387_lambert21_0.geometry}
          material={materials.lambert21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface388_lambert19_0.geometry}
          material={materials.lambert19}
          position={[0.377, 2.246, -0.212]}
        />
      </group>
      <group position={[-15.441, 0, 7.362]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface286_lambert18_0.geometry}
          material={materials.lambert18}
          position={[4.897, -2.471, -2.794]}
          scale={1.65}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface287_lambert18_0.geometry}
          material={materials.lambert18}
          position={[4.856, -2.483, -2.757]}
          scale={1.65}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface288_lambert18_0.geometry}
          material={materials.lambert18}
          position={[4.799, -2.492, -2.699]}
          scale={1.65}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface289_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface290_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface291_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface292_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface293_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface294_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface295_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface296_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface297_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface298_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface299_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface300_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface301_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface302_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface303_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface304_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface305_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface306_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface307_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface308_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface309_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface310_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface311_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface312_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface313_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface314_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface315_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface316_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface317_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface318_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface319_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface320_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface321_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface322_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface323_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface324_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface325_lambert18_0.geometry}
          material={materials.lambert18}
          position={[4.43, -1.649, -1.551]}
          scale={1.579}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface326_lambert18_0.geometry}
          material={materials.lambert18}
          position={[4.453, -1.64, -1.494]}
          scale={1.579}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface327_lambert18_0.geometry}
          material={materials.lambert18}
          position={[4.389, -1.658, -1.601]}
          scale={1.579}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface328_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface329_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface330_lambert18_0.geometry}
          material={materials.lambert18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface331_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface332_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface333_lambert19_0.geometry}
          material={materials.lambert19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface334_lambert20_0.geometry}
          material={materials.lambert20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface334_lambert21_0.geometry}
          material={materials.lambert21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface335_lambert19_0.geometry}
          material={materials.lambert19}
          position={[0.107, 2.289, 0.126]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface336_lambert19_0.geometry}
          material={materials.lambert19}
          position={[0.107, 2.289, 0.126]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface337_lambert19_0.geometry}
          material={materials.lambert19}
          position={[-0.03, 2.159, -0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface338_lambert19_0.geometry}
          material={materials.lambert19}
          position={[0.08, 0.842, 0.144]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface389_lambert18_0.geometry}
          material={materials.lambert18}
          position={[1.129, 2.432, 3.721]}
          rotation={[0, -0.436, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface390_lambert18_0.geometry}
          material={materials.lambert18}
          position={[1.129, 2.432, 3.721]}
          rotation={[0, -0.436, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface391_lambert18_0.geometry}
          material={materials.lambert18}
          position={[1.129, 2.432, 3.721]}
          rotation={[0, -0.436, 0]}
        />
      </group>
      <group
        position={[5.392, 2.871, 0.934]}
        rotation={[0.227, 0, 0]}
        scale={[0.506, 0.506, 0.576]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube236_lambert23_0.geometry}
          material={materials.lambert23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube236_lambert25_0.geometry}
          material={materials.lambert25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube236_lambert24_0.geometry}
          material={materials.lambert24}
        />
      </group>
      <group
        position={[4.622, 2.82, 1.154]}
        rotation={[0.227, 0, 0]}
        scale={[0.506, 0.506, 0.576]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube237_lambert23_0.geometry}
          material={materials.lambert23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube237_lambert25_0.geometry}
          material={materials.lambert25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube237_lambert24_0.geometry}
          material={materials.lambert24}
        />
      </group>
      <group
        position={[3.757, 2.82, 1.154]}
        rotation={[0.227, 0, 0]}
        scale={[0.506, 0.506, 0.576]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube238_lambert23_0.geometry}
          material={materials.lambert23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube238_lambert25_0.geometry}
          material={materials.lambert25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube238_lambert24_0.geometry}
          material={materials.lambert24}
        />
      </group>
      <group
        position={[2.99, 2.856, 0.999]}
        rotation={[0.227, 0, 0]}
        scale={[0.506, 0.506, 0.576]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube239_lambert23_0.geometry}
          material={materials.lambert23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube239_lambert25_0.geometry}
          material={materials.lambert25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube239_lambert24_0.geometry}
          material={materials.lambert24}
        />
      </group>
      <group
        position={[2.302, 2.794, 1.267]}
        rotation={[0.227, 0, 0]}
        scale={[0.506, 0.506, 0.576]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube240_lambert23_0.geometry}
          material={materials.lambert23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube240_lambert25_0.geometry}
          material={materials.lambert25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube240_lambert24_0.geometry}
          material={materials.lambert24}
        />
      </group>
      <group
        position={[-0.186, 3.933, -2.843]}
        rotation={[0.244, 0, 0]}
        scale={0.558}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube244_lambert26_0.geometry}
          material={materials.lambert26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube244_lambert27_0.geometry}
          material={materials.lambert27}
        />
      </group>
      <group
        position={[-1.578, 3.935, -2.826]}
        rotation={[0.244, 0.122, 0]}
        scale={[0.578, 0.558, 0.578]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube245_lambert26_0.geometry}
          material={materials.lambert26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube245_lambert27_0.geometry}
          material={materials.lambert27}
        />
      </group>
      <group
        position={[-1.311, 4.287, -4.272]}
        rotation={[0.244, 0.07, 0]}
        scale={[0.618, 0.558, 0.618]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube246_lambert26_0.geometry}
          material={materials.lambert26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube246_lambert27_0.geometry}
          material={materials.lambert27}
        />
      </group>
      <group
        position={[0.467, 4.011, -3.163]}
        rotation={[0.244, -0.157, 0]}
        scale={[0.489, 0.558, 0.489]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube247_lambert26_0.geometry}
          material={materials.lambert26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube247_lambert27_0.geometry}
          material={materials.lambert27}
        />
      </group>
      <group
        position={[-0.515, 4.388, -3.226]}
        rotation={[0.244, 0, 0]}
        scale={0.558}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube248_lambert26_0.geometry}
          material={materials.lambert26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.pCube248_lambert27_0.geometry}
          material={materials.lambert27}
        />
      </group>
      <group position={[0, 0.017, -0.125]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface473_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface474_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface475_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface476_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface477_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface478_lambert30_0.geometry}
          material={materials.lambert30}
        />
      </group>
      <group position={[0.307, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface467_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface468_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface469_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface470_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface471_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface472_lambert29_0.geometry}
          material={materials.lambert29}
        />
      </group>
      <group position={[0.68, 0.016, -0.244]} rotation={[0, -0.087, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface461_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface462_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface463_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface464_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface465_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface466_lambert30_0.geometry}
          material={materials.lambert30}
        />
      </group>
      <group position={[-0.319, 0.017, -0.044]} rotation={[0, 0.07, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface485_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface486_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface487_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface488_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface489_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface490_lambert29_0.geometry}
          material={materials.lambert29}
        />
      </group>
      <group position={[-0.217, 0.105, 0.2]} rotation={[0, 0.087, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface479_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface480_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface481_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface482_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface483_lambert29_0.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface484_lambert29_0.geometry}
          material={materials.lambert29}
        />
      </group>
      <group position={[0.268, 0.09, -0.152]} rotation={[0, -0.07, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface455_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface456_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface457_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface458_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface459_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface460_lambert30_0.geometry}
          material={materials.lambert30}
        />
      </group>
      <group position={[-0.372, 0.016, -0.009]} rotation={[0, -0.017, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface491_lambert28_0.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface492_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface493_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface494_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface495_lambert30_0.geometry}
          material={materials.lambert30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.polySurface496_lambert30_0.geometry}
          material={materials.lambert30}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube1_lambert35_0.geometry}
        material={materials.lambert35}
        position={[0, 0, -0.601]}
        scale={[10.357, 0.328, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube3_lambert12_0.geometry}
        material={materials.lambert12}
        position={[0, 8.077, -0.657]}
        rotation={[0.384, 0, 0]}
        scale={[12.076, 0.011, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder1_phong6_0.geometry}
        material={materials.phong6}
        position={[0, 11.797, -3.159]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.203, 0.221, 0.203]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube5_lambert12_0.geometry}
        material={materials.lambert12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube4_lambert31_0.geometry}
        material={materials.lambert31}
        position={[0, 7.131, -3.191]}
        scale={[9.128, 1, 3.918]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube121_lambert12_0.geometry}
        material={materials.lambert12}
        position={[0, 0, -6.403]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder13_phong6_0.geometry}
        material={materials.phong6}
        position={[-7.199, 11.763, 3.555]}
        rotation={[Math.PI, 1.518, Math.PI / 2]}
        scale={[0.186, 0.05, 0.186]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube19_lambert33_0.geometry}
        material={materials.lambert33}
        position={[-0.087, -0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube42_lambert31_0.geometry}
        material={materials.lambert31}
        position={[-1.937, 0.642, -1.441]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube44_lambert32_0.geometry}
        material={materials.lambert32}
        position={[2.147, 0.287, 1.949]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube45_lambert34_0.geometry}
        material={materials.lambert34}
        position={[2.147, 2.239, 2.242]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube47_lambert33_0.geometry}
        material={materials.lambert33}
        position={[0.375, 3.221, 2.05]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[10.311, 1, 15.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube48_lambert3_0.geometry}
        material={materials.lambert3}
        position={[-1.255, 3.221, 2.156]}
        rotation={[0, -0.017, -Math.PI / 2]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube49_lambert44_0.geometry}
        material={materials.lambert44}
        position={[3.094, 2.475, 2.021]}
        rotation={[-1.344, Math.PI / 2, 0]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube50_lambert32_0.geometry}
        material={materials.lambert32}
        position={[-0.629, 2.479, 2.021]}
        rotation={[-1.344, Math.PI / 2, 0]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder7_lambert36_0.geometry}
        material={materials.lambert36}
        position={[-7.135, 1.07, 3.543]}
        scale={0.113}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube51_lambert32_0.geometry}
        material={materials.lambert32}
        position={[-7.163, 8.362, 3.528]}
        scale={[1, 1, 1.322]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube52_lambert31_0.geometry}
        material={materials.lambert31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube53_lambert31_0.geometry}
        material={materials.lambert31}
        position={[0, 6.921, -0.601]}
        scale={[10.357, 0.328, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube83_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube62_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube10_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube84_lambert32_0.geometry}
        material={materials.lambert32}
        position={[5.596, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube85_lambert33_0.geometry}
        material={materials.lambert33}
        position={[5.51, -0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube87_lambert33_0.geometry}
        material={materials.lambert33}
        position={[-5.577, 6.906, 2.633]}
        scale={[0.228, 0.076, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube88_lambert33_0.geometry}
        material={materials.lambert33}
        position={[4.565, 6.807, 1.719]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.228, 0.123, 22.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube89_lambert33_0.geometry}
        material={materials.lambert33}
        position={[4.565, 6.807, 0.764]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.228, 0.123, 22.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube90_lambert33_0.geometry}
        material={materials.lambert33}
        position={[4.565, 6.807, -0.066]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.228, 0.123, 22.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube91_lambert33_0.geometry}
        material={materials.lambert33}
        position={[-2.468, 6.906, 2.909]}
        scale={[0.228, 0.076, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube92_lambert33_0.geometry}
        material={materials.lambert33}
        position={[0.486, 6.906, 2.813]}
        scale={[0.228, 0.076, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube93_lambert33_0.geometry}
        material={materials.lambert33}
        position={[5.648, 6.906, 2.861]}
        scale={[0.228, 0.076, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube94_lambert33_0.geometry}
        material={materials.lambert33}
        position={[3.123, 6.906, 2.733]}
        scale={[0.228, 0.076, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube95_lambert33_0.geometry}
        material={materials.lambert33}
        position={[0.466, 8.386, -1.844]}
        rotation={[0.384, 0, 0]}
        scale={[0.172, 0.014, 9.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube96_lambert33_0.geometry}
        material={materials.lambert33}
        position={[3.139, 8.386, -1.844]}
        rotation={[0.384, 0, 0]}
        scale={[0.172, 0.014, 9.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube97_lambert33_0.geometry}
        material={materials.lambert33}
        position={[5.668, 8.386, -1.844]}
        rotation={[0.384, 0, 0]}
        scale={[0.172, 0.014, 9.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube98_lambert33_0.geometry}
        material={materials.lambert33}
        position={[-2.456, 8.386, -1.844]}
        rotation={[0.384, 0, 0]}
        scale={[0.172, 0.014, 9.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube99_lambert33_0.geometry}
        material={materials.lambert33}
        position={[-5.596, 8.386, -1.844]}
        rotation={[0.384, 0, 0]}
        scale={[0.172, 0.014, 9.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube106_lambert33_0.geometry}
        material={materials.lambert33}
        position={[4.565, 6.807, -1.076]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.228, 0.123, 22.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube111_lambert33_0.geometry}
        material={materials.lambert33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube112_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface53_lambert33_0.geometry}
        material={materials.lambert33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface64_phong6_0.geometry}
        material={materials.phong6}
        position={[-0.287, -0.303, -3.095]}
        rotation={[Math.PI / 10, 0, 0]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface65_lambert4_0.geometry}
        material={materials.lambert4}
        position={[-6.256, -0.467, -2.59]}
        rotation={[Math.PI / 10, 0, 0]}
        scale={[1.009, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface77_phong6_0.geometry}
        material={materials.phong6}
        position={[-12.107, -0.421, -2.732]}
        rotation={[Math.PI / 10, 0, 0]}
        scale={[1, 1, 1.084]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface78_lambert4_0.geometry}
        material={materials.lambert4}
        position={[-0.287, -0.681, -2.819]}
        rotation={[0.157, 0, 0]}
        scale={[1, 1, 1.142]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface79_phong6_0.geometry}
        material={materials.phong6}
        position={[-6.256, -0.361, -3.551]}
        rotation={[0.227, 0, 0]}
        scale={[1.009, 1, 1.347]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface80_lambert4_0.geometry}
        material={materials.lambert4}
        position={[-12.107, -0.761, -2.318]}
        rotation={[0.157, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface81_lambert4_0.geometry}
        material={materials.lambert4}
        position={[-0.287, -0.603, -2.602]}
        rotation={[0.157, 0, 0]}
        scale={[1, 1, 0.699]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface82_phong6_0.geometry}
        material={materials.phong6}
        position={[-6.256, -0.603, -3.027]}
        rotation={[0.14, 0, 0]}
        scale={[1.009, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface83_phong6_0.geometry}
        material={materials.phong6}
        position={[-12.107, -0.387, -3.349]}
        rotation={[0.209, 0, 0]}
        scale={[1, 1, 0.812]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface84_phong6_0.geometry}
        material={materials.phong6}
        position={[-0.287, 0.228, -4.886]}
        rotation={[0.297, 0, 0]}
        scale={[1, 1, 0.819]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface85_lambert4_0.geometry}
        material={materials.lambert4}
        position={[-6.256, 0.264, -5.006]}
        rotation={[0.297, 0, 0]}
        scale={[1.009, 1, 0.928]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface86_lambert4_0.geometry}
        material={materials.lambert4}
        position={[-12.107, 0.255, -4.974]}
        rotation={[0.297, 0, 0]}
        scale={[1, 1, 0.819]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface646_phong6_0.geometry}
        material={materials.phong6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface647_lambert4_0.geometry}
        material={materials.lambert4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface648_phong6_0.geometry}
        material={materials.phong6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface649_lambert4_0.geometry}
        material={materials.lambert4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface650_phong6_0.geometry}
        material={materials.phong6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface651_lambert4_0.geometry}
        material={materials.lambert4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder14_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-7.142, 11.63, 4.12]}
        scale={[0.035, 0.005, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder15_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-7.142, 11.63, 2.976]}
        scale={[0.035, 0.005, 0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube141_lambert12_0.geometry}
        material={materials.lambert12}
        position={[2.004, 8.366, 1.606]}
        rotation={[0.925, 0, 0]}
        scale={[0.379, 1.878, 0.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube142_lambert12_0.geometry}
        material={materials.lambert12}
        position={[-1.66, 8.366, 1.606]}
        rotation={[0.925, 0, 0]}
        scale={[0.379, 1.878, 0.188]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube143_lambert37_0.geometry}
        material={materials.lambert37}
        position={[-4.08, 6.264, 1.319]}
        scale={[3.614, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface502_lambert40_0.geometry}
        material={materials.lambert40}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface503_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface504_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface505_phong5_0.geometry}
        material={materials.phong5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface506_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface507_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface508_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface509_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface510_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface511_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface512_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube153_lambert38_0.geometry}
        material={materials.lambert38}
        position={[0, 1.357, -0.06]}
        scale={[1, 0.802, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface539_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface540_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface541_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface542_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface543_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface544_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface545_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface546_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface547_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface548_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface549_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface550_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface551_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface552_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface553_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface554_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface555_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface556_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface557_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface558_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface559_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface560_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface561_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface562_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface563_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface564_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface565_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface566_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface567_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface568_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface569_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface570_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface571_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface572_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface573_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface574_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface575_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface576_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface577_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface578_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface579_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface580_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface581_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface582_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface583_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface584_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface585_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface586_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface587_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface588_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface589_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface590_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface591_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface592_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface593_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface594_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface595_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface596_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface597_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface598_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface599_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface600_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface601_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface602_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface603_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface604_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface605_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface606_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface607_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface608_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface609_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface610_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface611_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface612_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface613_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface614_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface615_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface616_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface617_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface618_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface619_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface620_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface621_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface622_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface623_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface624_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface625_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface626_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface627_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface628_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface629_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface630_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface631_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface632_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface633_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface634_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface635_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface636_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface637_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface638_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface639_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface640_lambert42_0.geometry}
        material={materials.lambert42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface641_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface642_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface643_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface644_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface645_lambert41_0.geometry}
        material={materials.lambert41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube204_lambert12_0.geometry}
        material={materials.lambert12}
        position={[2.459, 0, -0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface240_phong4_0.geometry}
        material={materials.phong4}
        position={[0.433, 3.075, -2.839]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface241_phong4_0.geometry}
        material={materials.phong4}
        position={[-0.676, 3.159, 8.122]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface242_phong4_0.geometry}
        material={materials.phong4}
        position={[-0.64, 3.075, 2.288]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface243_phong4_0.geometry}
        material={materials.phong4}
        position={[-0.676, 3.075, -3.559]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface244_phong4_0.geometry}
        material={materials.phong4}
        position={[-12.799, 3.24, -2.839]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface245_phong4_0.geometry}
        material={materials.phong4}
        position={[0.555, 3.173, -4.119]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface246_phong4_0.geometry}
        material={materials.phong4}
        position={[0.591, 3.075, 1.728]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface247_phong4_0.geometry}
        material={materials.phong4}
        position={[0.591, 3.075, -9.952]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface248_phong4_0.geometry}
        material={materials.phong4}
        position={[-0.483, 3.105, 1.066]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface249_phong4_0.geometry}
        material={materials.phong4}
        position={[5.322, 3.075, 1.066]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface250_phong4_0.geometry}
        material={materials.phong4}
        position={[11.159, 3.107, 1.066]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1, 1, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder39_phong1_0.geometry}
        material={materials.phong1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder39_lambert6_0.geometry}
        material={materials.lambert6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder39_lambert5_0.geometry}
        material={materials.lambert5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder39_lambert7_0.geometry}
        material={materials.lambert7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface257_lambert7_0.geometry}
        material={materials.lambert7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface257_phong1_0.geometry}
        material={materials.phong1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface257_lambert6_0.geometry}
        material={materials.lambert6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface257_lambert5_0.geometry}
        material={materials.lambert5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface258_lambert7_0.geometry}
        material={materials.lambert7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface258_phong1_0.geometry}
        material={materials.phong1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface258_lambert6_0.geometry}
        material={materials.lambert6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface258_lambert5_0.geometry}
        material={materials.lambert5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pDisc1_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube214_lambert20_0.geometry}
        material={materials.lambert20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube214_lambert21_0.geometry}
        material={materials.lambert21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface413_lambert18_0.geometry}
        material={materials.lambert18}
        position={[-3.909, -2.096, -3.022]}
        scale={1.551}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface414_lambert18_0.geometry}
        material={materials.lambert18}
        position={[-3.878, -2.107, -2.964]}
        scale={1.551}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface415_lambert18_0.geometry}
        material={materials.lambert18}
        position={[-3.828, -2.114, -2.915]}
        scale={1.551}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface416_lambert18_0.geometry}
        material={materials.lambert18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface417_lambert18_0.geometry}
        material={materials.lambert18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface418_lambert18_0.geometry}
        material={materials.lambert18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface419_lambert19_0.geometry}
        material={materials.lambert19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface420_lambert19_0.geometry}
        material={materials.lambert19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface421_lambert19_0.geometry}
        material={materials.lambert19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface422_lambert18_0.geometry}
        material={materials.lambert18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface423_lambert18_0.geometry}
        material={materials.lambert18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface424_lambert18_0.geometry}
        material={materials.lambert18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface284_lambert19_0.geometry}
        material={materials.lambert19}
        position={[0.207, 3.354, -0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface393_lambert18_0.geometry}
        material={materials.lambert18}
        position={[6.807, -3.84, -4.846]}
        scale={1.831}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube230_lambert22_0.geometry}
        material={materials.lambert22}
        position={[5.979, 6.295, 4.945]}
        rotation={[1.918, -0.304, -0.239]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder46_phong2_0.geometry}
        material={materials.phong2}
        position={[8.134, 3.128, 1.269]}
        rotation={[0, 0, -0.035]}
        scale={0.461}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder49_lambert18_0.geometry}
        material={materials.lambert18}
        position={[7.044, 6.76, 2.399]}
        rotation={[-0.627, -1.254, -0.765]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCylinder50_lambert18_0.geometry}
        material={materials.lambert18}
        position={[6.854, 6.975, 2.432]}
        rotation={[-0.053, -0.871, -0.121]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube231_lambert22_0.geometry}
        material={materials.lambert22}
        position={[7.404, 7.468, 3.345]}
        rotation={[-0.599, -1.27, -1.94]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube232_lambert39_0.geometry}
        material={materials.lambert39}
        position={[5.598, 6.457, 4.715]}
        rotation={[1.521, -0.188, -0.337]}
        scale={0.146}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube233_lambert22_0.geometry}
        material={materials.lambert22}
        position={[6.713, 7.478, 3.757]}
        rotation={[0.915, -0.5, -0.802]}
        scale={0.105}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube234_lambert39_0.geometry}
        material={materials.lambert39}
        position={[5.879, 6.654, 4.003]}
        rotation={[1.073, 0.165, -0.61]}
        scale={0.136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube235_lambert32_0.geometry}
        material={materials.lambert32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube249_phong3_0.geometry}
        material={materials.phong3}
        position={[1.98, 9.236, -1.205]}
        scale={[1.371, 1, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube250_phong3_0.geometry}
        material={materials.phong3}
        position={[3.665, 9.236, -1.205]}
        scale={[1.371, 1, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube251_phong3_0.geometry}
        material={materials.phong3}
        position={[-1.942, 9.236, -1.205]}
        scale={[1.371, 1, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube252_phong3_0.geometry}
        material={materials.phong3}
        position={[-3.627, 9.236, -1.205]}
        scale={[1.371, 1, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          (nodes as any)?.pasted__polySurface1549_pasted__phong17_0.geometry
        }
        material={materials.pasted__phong17}
        position={[-2.036, -2.657, -1.584]}
        rotation={[0, -0.279, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube253_lambert43_0.geometry}
        material={materials.lambert43}
        position={[-0.772, -3.156, 0.733]}
        scale={[1, 0.802, 1]}
      />
    </group>
  );
}

export default memo(ModelRestaurant);

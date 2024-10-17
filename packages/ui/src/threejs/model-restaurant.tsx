import * as THREE from "three";
import { useRef, memo, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// @ts-ignore
import { KTX2Loader } from "three-stdlib";

interface ModelRestaurantProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}

function ModelRestaurant({ position, scale, ...props }: ModelRestaurantProps) {
  const { gl } = useThree();
  const { nodes, materials } = useMemo(
    () =>
      useGLTF("/models/optimized_restaurant.glb", false, false, (loader) => {
        const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
        const ktx2Loader = new KTX2Loader().setTranscoderPath(
          `${THREE_PATH}/examples/jsm/libs/basis/`,
        );
        loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
      }),
    [gl],
  );

  const ref = useRef<THREE.Group>(null);

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
        geometry={(nodes as any)?.pCube19_lambert33_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube10_lambert32_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube89_lambert33_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube91_lambert33_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface513_lambert32_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface514_lambert32_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface516_lambert32_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface517_lambert32_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface524_lambert32_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface64_phong6_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface65_lambert4_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface77_phong6_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface80_lambert4_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface648_phong6_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface649_lambert4_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube155_lambert14_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube155_lambert15_0?.geometry}
        material={materials.lambert15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface242_phong4_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface243_phong4_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface434_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface435_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface436_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface437_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface438_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface439_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface440_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface441_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface442_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface421_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface358_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface289_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface290_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface291_lambert18_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface292_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface293_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface306_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface323_lambert19_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube231_lambert22_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube232_lambert39_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube244_lambert26_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube244_lambert27_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube250_phong3_0?.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface473_lambert28_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface474_lambert30_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface475_lambert30_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface476_lambert30_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface477_lambert30_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface478_lambert30_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface468_lambert29_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface469_lambert29_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface470_lambert29_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface471_lambert29_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface472_lambert29_0?.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube1_lambert35_0?.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0, -0.601]}
        scale={[10.357, 0.328, 10.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube48_lambert3_0?.geometry}
        material={materials.PaletteMaterial002}
        position={[-1.255, 3.221, 2.156]}
        rotation={[0, -0.017, -Math.PI / 2]}
        scale={[10.311, 1, 7.459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube154_lambert11_0?.geometry}
        material={materials.lambert11}
        position={[0.123, 8.564, 2.586]}
        rotation={[-0.122, 0, 0]}
        scale={[4.644, 1.779, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.pCube159_lambert13_0?.geometry}
        material={materials.lambert13}
        position={[-1.644, 3.381, 2.533]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.223, 1, 1.192]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface260_lambert17_0?.geometry}
        material={materials.lambert17}
        position={[-0.008, 0.921, 0.025]}
        rotation={[0.057, 0.002, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface255_lambert5_0?.geometry}
        material={materials.lambert5}
        position={[0, 0, -0.198]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.polySurface498_lambert8_0?.geometry}
        material={materials.lambert8}
        position={[0, 0, -0.26]}
      />
    </group>
  );
}
export default memo(ModelRestaurant);

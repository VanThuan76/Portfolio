import { Suspense, useEffect, useRef, useState } from "react";
import {
  BakeShadows,
  CameraControls,
  Grid,
  ScrollControls,
  useProgress,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Background from "./background";
import ModelCastle from "./model-castle";
import ModelMain from "./model-main";
import ModelCityBackground from "./model-city-background";
import ModelMountainBackground from "./model-mountain-background";
import ModelSchool from "./model-school";
import ModelOceanBackground from "./model-ocean-background";
import { ModelFarmBackground } from "./model-farm-background";
import ModelRestaurant from "./model-restaurant";

const Scene = ({
  breakpoint,
  positions,
  onProgress,
}: {
  breakpoint: any;
  positions: any;
  onProgress?: (progress: number) => void;
}) => {
  const {
    cameraPosition,
    positionModelRestaurant,
    positionModelOcean,
    positionModelMain,
    positionModelSchool,
    positionModelMountain,
    positionModelCity,
    positionModelCastle,
  } = positions;

  let t = 0;
  const cameraControlRef = useRef<CameraControls | null>(null);
  const [introComplete, setIntroComplete] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    onProgress && onProgress(progress);
  }, [progress, onProgress]);

  useEffect(() => {
    if (cameraControlRef.current) {
      const positions = [
        positionModelMain,
        positionModelCastle,
        positionModelRestaurant,
        positionModelSchool,
        positionModelMountain,
      ];

      const targetPosition = positions.find((position) => position.length > 3);

      if (targetPosition && targetPosition.length > 0) {
        const [cameraX, cameraY, cameraZ] = cameraPosition;
        const [modelX, modelY, modelZ] = targetPosition;
        cameraControlRef.current.setLookAt(
          cameraX,
          cameraY,
          cameraZ,
          modelX,
          modelY,
          modelZ,
          true,
        );
      }
    }
  }, [
    cameraPosition,
    positionModelMain,
    positionModelCastle,
    positionModelRestaurant,
    positionModelSchool,
    positionModelMountain,
  ]);

  useFrame((_, delta) => {
    if (cameraControlRef.current && !introComplete) {
      t += delta * 0.2;
      if (t > 1) {
        t = 1;
        setIntroComplete(true);
      }

      const currentX = 0;
      const currentY = 1000 + (100 - 1000) * t;
      const currentZ = 700 + (1000 - 700) * t;

      cameraControlRef.current.setLookAt(
        currentX,
        currentY,
        currentZ,
        0,
        150,
        150,
        true,
      );
    }
  });

  return (
    <>
      {/* Light */}
      <hemisphereLight intensity={0.5} groundColor="white" />
      <spotLight
        decay={0}
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-bias={-0.0004}
        position={[-20, 20, 20]}
      >
        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
      </directionalLight>
      {/* Other */}
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1.5}
        fadeDistance={30}
      />
      <BakeShadows />
      <Background />

      {/* Model */}
      <Suspense fallback={null}>
        <group position={[0, 0, 400]}>
          <ModelCityBackground
            renderOrder={0}
            position={
              positionModelCity.length > 0
                ? positionModelCity.slice(0, 3)
                : [800, 0, 200]
            }
            scale={[20, 20, 20]}
          />
          <ModelOceanBackground
            renderOrder={-1}
            position={
              positionModelOcean.length > 0
                ? positionModelOcean.slice(0, 3)
                : [1500, -75, 0]
            }
            scale={[20, 20, 20]}
          />
          <ModelFarmBackground
            renderOrder={-1}
            position={[-800, -400, -1000]}
            scale={[5, 5, 5]}
            rotation={[0, Math.PI / 4, 0]}
          />
          <ModelMountainBackground
            renderOrder={0}
            position={
              positionModelMountain.length > 0
                ? positionModelMountain.slice(0, 3)
                : [-1500, -50, -100]
            }
            scale={
              positionModelMountain.length > 0
                ? [700, 700, 700]
                : [200, 200, 200]
            }
          />
        </group>
        <group position={breakpoint === "xs" ? [0, -100, 300] : [0, 50, 450]}>
          <ModelCastle
            renderOrder={2}
            position={
              positionModelCastle.length > 0
                ? positionModelCastle.slice(0, 3)
                : [-800, -200, -200]
            }
            scale={positionModelMountain.length > 0 ? [10, 10, 10] : [7, 7, 7]}
          />
          <ModelRestaurant
            renderOrder={2}
            position={
              positionModelRestaurant.length > 0
                ? positionModelRestaurant.slice(0, 3)
                : [-700, -200, 100]
            }
            scale={
              positionModelMountain.length > 0 ? [30, 30, 30] : [20, 20, 20]
            }
            rotation={[0, Math.PI / 2, 0]}
          />
          <ModelMain
            renderOrder={2}
            position={
              positionModelMain.length > 0
                ? positionModelMain.slice(0, 3)
                : [100, 200, -100]
            }
            scale={[2, 2, 2]}
          />
          <ModelSchool
            renderOrder={2}
            position={
              positionModelSchool.length > 0
                ? positionModelSchool.slice(0, 3)
                : [700, -200, 200]
            }
            scale={[10, 10, 10]}
          />
        </group>

        {/* <ScrollControls pages={5}>
                    <ModelMain renderOrder={2} position={positionModelMain.length > 0 ? positionModelMain : [0, 2.5, 0]} scale={[0.02, 0.02, 0.02]} />
                </ScrollControls> */}
      </Suspense>

      <CameraControls
        ref={cameraControlRef}
        dampingFactor={0.2}
        smoothTime={0.3}
      />
    </>
  );
};

export default Scene;

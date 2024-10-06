"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useAppSelector } from "@store/index";
import useBreakpoint from "@shared/hooks/use-break-point";

//Models
const ModelMain = dynamic(
  () => import("@three/model-main").then((mod) => mod.default),
  { ssr: false },
);
const ModelCastle = dynamic(
  () => import("@three/model-castle").then((mod) => mod.default),
  { ssr: false },
);
const ModelSchool = dynamic(
  () => import("@three/model-school").then((mod) => mod.default),
  { ssr: false },
);
const ModelRestaurant = dynamic(
  () => import("@three/model-restaurant").then((mod) => mod.default),
  { ssr: false },
);
const ModelMountainBackground = dynamic(
  () => import("@three/model-mountain-background").then((mod) => mod.default),
  { ssr: false },
);
const ModelCityBackground = dynamic(
  () => import("@three/model-city-background").then((mod) => mod.default),
  { ssr: false },
);
const ModelOceanBackground = dynamic(
  () => import("@three/model-ocean-background").then((mod) => mod.default),
  { ssr: false },
);
const ModelFarmBackground = dynamic(
  () => import("@three/model-farm-background").then((mod) => mod.default),
  { ssr: false },
);

//Config
const CameraHandler = dynamic(
  () => import("@three/view").then((mod) => mod.CameraHandler),
  { ssr: false },
);
const Common = dynamic(() => import("@three/view").then((mod) => mod.Common), {
  ssr: false,
});
const Loading = dynamic(
  () => import("@three/view").then((mod) => mod.Loading),
  { ssr: false },
);
const View = dynamic(() => import("@three/view").then((mod) => mod.View), {
  ssr: false,
});

const Scene = () => {
  const breakpoint = useBreakpoint();
  const positions = useAppSelector((state) => state.app.positions);
  const {
    positionModelRestaurant,
    positionModelOcean,
    positionModelMain,
    positionModelSchool,
    positionModelMountain,
    positionModelCity,
    positionModelCastle,
  } = positions;

  return (
    <View
      id="background-app"
      className="fixed inset-0 z-30 flex flex-col items-center justify-center w-full h-screen overflow-hidden pointer-events-none"
    >
      <Suspense fallback={<Loading />}>
        <Common />
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
        <CameraHandler positions={positions} />
      </Suspense>
    </View>
  );
};

export default Scene;

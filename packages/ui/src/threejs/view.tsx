"use client";

import {
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
  ReactNode,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import {
  BakeShadows,
  CameraControls,
  Html,
  useProgress,
  View as ViewImpl,
} from "@react-three/drei";
import { m } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { Three } from "@utils/threejs";

import Background from "./background";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, ...props }, ref) => {
    const localRef = useRef<any>(null);

    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef}>{children}</ViewImpl>
        </Three>
      </>
    );
  },
);

export const Loading = () => {
  const { progress } = useProgress();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    inactive: {
      opacity: 0,
      height: 0,
      y: "-100vh",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1, type: "spring" } },
  };

  const userNameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
  };

  const progressBarVariants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <Html>
      <m.div
        className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gray-800 text-white z-[9999] overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={progress < 1000 ? "visible" : "inactive"}
      >
        <m.img
          className="logo"
          variants={logoVariants}
          width={150}
          height={150}
          src="/logo.png"
          alt="@logo"
        />
        <m.span className="user-name" variants={userNameVariants}>
          Austin Vu
        </m.span>
        <m.div className="w-64 h-1 overflow-hidden bg-gray-500 rounded-full shadow-inner mt-14">
          <m.div
            className="h-full bg-white rounded-full"
            variants={progressBarVariants}
            initial="initial"
            animate="animate"
          />
        </m.div>
      </m.div>
    </Html>
  );
};

export const Common = () => (
  <Suspense fallback={null}>
    <Background />
    <hemisphereLight intensity={0.3} groundColor="white" />
    <spotLight
      decay={0}
      position={[0, 500, 200]}
      angle={0.5}
      penumbra={0.5}
      intensity={1.5}
      castShadow
      shadow-mapSize={1024}
    />
    <ambientLight intensity={0.2} />
    <directionalLight
      intensity={0.5}
      castShadow
      shadow-bias={-0.0004}
      position={[0, 500, 200]}
    >
      <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
    </directionalLight>
    <BakeShadows />
  </Suspense>
);

export const CameraHandler = ({ positions }: { positions: any }) => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const cameraControlRef = useRef<CameraControls | null>(null);
  let t = 0;

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

  // Intro animation in useFrame
  useFrame((_, delta) => {
    if (!isIntroComplete && cameraControlRef.current) {
      t += delta * 0.2;
      if (t > 1) {
        t = 1;
        setIsIntroComplete(true); // Mark intro as complete
      }

      const currentX = 0;
      const currentY = 700 + (100 - 700) * t;
      const currentZ = 600 + (1000 - 600) * t;

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

  // useEffect for handling new positions after intro
  useEffect(() => {
    if (isIntroComplete && cameraControlRef.current) {
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
    isIntroComplete,
    cameraPosition,
    positionModelMain,
    positionModelCastle,
    positionModelRestaurant,
    positionModelSchool,
    positionModelMountain,
  ]);

  return (
    <CameraControls
      ref={cameraControlRef}
      dampingFactor={0.2}
      smoothTime={0.3}
    />
  );
};

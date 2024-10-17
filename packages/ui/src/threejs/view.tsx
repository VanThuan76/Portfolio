import * as THREE from "three";
import {
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
  ReactNode,
  HTMLAttributes,
  useState,
  memo,
  useEffect,
  useCallback,
} from "react";
import {
  BakeShadows,
  CameraControls,
  OrbitControls,
  useProgress,
  View as ViewImpl,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Three } from "@utils/threejs";

import {
  // @ts-ignore
  EffectComposer,
  // @ts-ignore
  Bloom,
  // @ts-ignore
  DepthOfField,
  // @ts-ignore
} from "@react-three/postprocessing";

import Background from "./background";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  orbit?: boolean;
}

export const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<any>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    );
  },
);

export const LoaderR3f = () => {
  return <Loader />;
};

export const OrbitControlsR3f = () => {
  return <OrbitControls />;
};

export const Common = () => (
  <Suspense fallback={null}>
    <Background />
    <hemisphereLight intensity={0.5} groundColor="white" />
    <spotLight
      decay={2}
      position={[-600, 0, -200]}
      angle={0.5}
      penumbra={0.5}
      intensity={2}
      castShadow
      shadow-mapSize={2048}
    />
    <directionalLight
      intensity={1.8}
      castShadow
      shadow-bias={-0.0001}
      position={[-600, 0, -200]}
    >
      <orthographicCamera
        attach="shadow-camera"
        args={[-100, 100, 100, -100]}
      />
    </directionalLight>
    <ambientLight intensity={0.1} />
    <BakeShadows />
  </Suspense>
);

export const CameraHandler = memo(
  ({ breakpoint, positions }: { breakpoint: any; positions: any }) => {
    const [isIntroComplete, setIsIntroComplete] = useState(false);
    const cameraControlRef = useRef<CameraControls | null>(null);
    let t = 0;

    const {
      cameraPosition,
      positionModelRestaurant,
      positionModelMain,
      positionModelDepartment,
      positionModelSchool,
      positionModelMountain,
      positionModelCaffe,
      positionModelCity,
      positionModelCastle,
    } = positions;

    const handleCameraMovement = useCallback(
      (delta: number) => {
        if (!isIntroComplete && cameraControlRef.current) {
          t += delta * 0.2;
          if (t > 1) {
            t = 1;
            setIsIntroComplete(true);
          }
          const cameraY =
            breakpoint && ["xs", "sm"].includes(breakpoint) ? 500 : 700;
          const currentX = 0;
          const currentY = cameraY + (100 - 700) * t;
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
      },
      [isIntroComplete],
    );

    useFrame((_, delta) => {
      handleCameraMovement(delta);
    });

    useFrame(() => {
      if (isIntroComplete && cameraControlRef.current) {
        const positionsList = [
          positionModelMain,
          positionModelCastle,
          positionModelCity,
          positionModelRestaurant,
          positionModelSchool,
          positionModelDepartment,
          positionModelMountain,
          positionModelCaffe,
        ];

        const targetPosition = positionsList.find(
          (position) => position.length > 3,
        );

        if (targetPosition && targetPosition.length > 0) {
          const [cameraX, cameraY, cameraZ] = cameraPosition;
          const [modelX, modelY, modelZ] = targetPosition;

          const cameraYValidate = breakpoint === "xs" ? cameraY - 50 : cameraY;
          const cameraZValidate = breakpoint === "xs" ? cameraZ - 25 : cameraZ;
          const targetVec = new THREE.Vector3(modelX, modelY, modelZ);
          const cameraVec = new THREE.Vector3(
            cameraX,
            cameraYValidate,
            cameraZValidate,
          );

          cameraVec.lerp(targetVec, 0.05);

          cameraControlRef.current.setLookAt(
            cameraVec.x,
            cameraVec.y,
            cameraVec.z,
            modelX,
            modelY,
            modelZ,
            true,
          );
        }
      }
    });

    return (
      <CameraControls
        makeDefault
        ref={cameraControlRef}
        dampingFactor={0.2}
        smoothTime={0.75}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    );
  },
);

export const EffectComposerHandler = () => {
  return (
    <EffectComposer enableNormalPass multisampling={2}>
      <Bloom
        luminanceThreshold={0.3}
        luminanceSmoothing={0.1}
        intensity={1.0}
      />
      <DepthOfField
        target={[0, 0, 13]}
        focalLength={10}
        bokehScale={10}
        height={480}
      />
    </EffectComposer>
  );
};

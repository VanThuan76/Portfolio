import * as THREE from "three";
import {
  lazy,
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
  ReactNode,
  HTMLAttributes,
  memo,
  useCallback,
} from "react";
import {
  Loader,
  BakeShadows,
  CameraControls,
  OrbitControls,
  View as ViewImpl,
} from "@react-three/drei";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import {
  // @ts-ignore
  EffectComposer,
  // @ts-ignore
  Bloom,
  // @ts-ignore
  DepthOfField,
  // @ts-ignore
} from "@react-three/postprocessing";
import { Three } from "@utils/threejs";

const Background = lazy(() =>
  import("./background.tsx").then((module) => ({ default: module.Background })),
);

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

export const Common = () => (
  <Suspense fallback={null}>
    <Background />
    {/* <color attach="background" args={["#1e1e1e"]} /> */}
    <ambientLight intensity={0.05} />
    <hemisphereLight intensity={0.15} groundColor="black" />
    <spotLight
      decay={0}
      position={[10, 20, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <directionalLight
      intensity={0.1}
      castShadow
      shadow-bias={-0.0001}
      position={[0, 0, 0]}
      shadow-mapSize={[4096, 4096]}
    >
      <orthographicCamera
        attach="shadow-camera"
        args={[-100, 100, 100, -100]}
      />
    </directionalLight>
    <BakeShadows />
  </Suspense>
);

export const CameraHandler = memo(
  ({ breakpoint, positions }: { breakpoint: any; positions: any }) => {
    const isIntroCompleteRef = useRef(false);
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
        if (!isIntroCompleteRef.current && cameraControlRef.current) {
          t += delta * 0.2;
          if (t > 1) {
            t = 1;
            isIntroCompleteRef.current = true; // Update ref instead of state
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
      [breakpoint],
    );

    useFrame((_, delta) => {
      handleCameraMovement(delta);
    });

    useFrame(() => {
      if (isIntroCompleteRef.current && cameraControlRef.current) {
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
    <EffectComposer enableNormalPass>
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={5}
      />
      <DepthOfField
        target={[0, 0, 13]}
        focalLength={0.1}
        bokehScale={1}
        height={700}
      />
    </EffectComposer>
  );
};

export const CameraRigHandler = () => {
  useFrame((state, delta) => {
    const targetX = -1 + (state.pointer.x * state.viewport.width) / 10;
    const targetZ = 20;

    easing.damp3(state.camera.position, [targetX, -5, targetZ], 0.5, delta);

    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

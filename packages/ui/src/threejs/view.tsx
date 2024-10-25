import {
    forwardRef,
    Suspense,
    useImperativeHandle,
    useRef,
    ReactNode,
    HTMLAttributes,
} from "react";
import { Loader, OrbitControls, useDetectGPU, View as ViewImpl } from "@react-three/drei";
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
        <color attach="background" args={["#1e1e1e"]} />
        <ambientLight intensity={0.03} />
        <hemisphereLight intensity={0.1} groundColor="black" />
        <spotLight
            decay={0}
            position={[10, 20, 10]}
            angle={0.12}
            penumbra={1}
            intensity={0.8}
            castShadow
            shadow-mapSize={512}
        />
        <directionalLight
            intensity={0.05}
            castShadow={false}
            shadow-bias={-0.0001}
            position={[0, 0, 0]}
            shadow-mapSize={[1024, 1024]}
        >
            <orthographicCamera
                attach="shadow-camera"
                args={[-100, 100, 100, -100]}
            />
        </directionalLight>
    </Suspense>
);

export const EffectComposerHandler = () => {
    const GpuInfo = useDetectGPU();
    const lowPerformance = GpuInfo?.tier <= 2;

    return (
        <EffectComposer enableNormalPass>
            <Bloom
                luminanceThreshold={0.1}
                mipmapBlur
                luminanceSmoothing={0.5}
                intensity={lowPerformance ? 0.3 : 0.5}
            />
            <DepthOfField
                target={[0, 0, 13]}
                focalLength={lowPerformance ? 0.1 : 0.2}
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

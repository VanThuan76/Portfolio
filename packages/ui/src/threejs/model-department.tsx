import * as THREE from "three";
import { useRef, memo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface ModelDepartmentProps {
  position: [number, number, number];
  scale: [number, number, number];
  [key: string]: any;
}
function ModelDepartment({ position, scale, ...props }: ModelDepartmentProps) {
  // @ts-ignore
  const ref = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/department.glb");
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
      <group position={[0.08, 0.343, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_104?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_106?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.045]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_108?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.104]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_110?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.164]}
        />
      </group>
      <group position={[0.08, 0.343, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_116?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_118?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.045]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_120?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.104]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_122?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.164]}
        />
      </group>
      <group position={[0.08, 0.343, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_128?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_130?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.045]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_132?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.104]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_134?.geometry}
          material={materials.floor}
          position={[0, 0.01, 0.164]}
        />
      </group>
      <group position={[0.08, 0.35, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_140?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_142?.geometry}
          material={materials.floor}
          position={[0, 0, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_144?.geometry}
          material={materials.floor}
          position={[0, 0, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_146?.geometry}
          material={materials.floor}
          position={[0, 0, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_148?.geometry}
          material={materials.floor}
          position={[0, 0, 0.145]}
        />
      </group>
      <group position={[0.08, 0.35, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_154?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_156?.geometry}
          material={materials.floor}
          position={[0, 0, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_158?.geometry}
          material={materials.floor}
          position={[0, 0, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_160?.geometry}
          material={materials.floor}
          position={[0, 0, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_162?.geometry}
          material={materials.floor}
          position={[0, 0, 0.145]}
        />
      </group>
      <group position={[0.08, 0.35, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_168?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_170?.geometry}
          material={materials.floor}
          position={[0, 0, 0.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_172?.geometry}
          material={materials.floor}
          position={[0, 0, 0.065]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_174?.geometry}
          material={materials.floor}
          position={[0, 0, 0.105]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_176?.geometry}
          material={materials.floor}
          position={[0, 0, 0.145]}
        />
      </group>
      <group position={[0.07, 0.353, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_182?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_184?.geometry}
          material={materials.floor}
          position={[0.43, -0.031, 0.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_186?.geometry}
          material={materials.floor}
          position={[0.43, -0.031, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_188?.geometry}
          material={materials.floor}
          position={[0.43, -0.031, 0.13]}
        />
      </group>
      <group position={[0.07, 0.353, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_194?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_196?.geometry}
          material={materials.floor}
          position={[0.43, -0.031, 0.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_198?.geometry}
          material={materials.floor}
          position={[0.43, -0.031, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_200?.geometry}
          material={materials.floor}
          position={[0.43, -0.031, 0.13]}
        />
      </group>
      <group position={[0.325, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_206?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_208?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.292, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_210?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_212?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.115, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_214?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_216?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.88, 0.258, 0.169]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_218?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_220?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.76, 0.258, 0.169]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_222?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_224?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.67, 0.258, 0.169]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_226?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_228?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.37, 0.258, 0.108]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_230?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_232?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.579, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_234?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_236?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.46, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_238?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_240?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.198, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_242?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_244?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.165, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_246?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_248?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.115, 0.258, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_250?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_252?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.286, 0.258, 0.108]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_254?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_256?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.146, 0.258, 0.108]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_258?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_260?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.269, 0.258, 0.108]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_262?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_264?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.325, 0.257, 0.111]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_266?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_268?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.718, 0.257, 0.111]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_270?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_272?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.399, 0.257, 0.111]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_274?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_276?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.5, 0.257, 0.15]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_278?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_280?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.615, 0.257, 0.15]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_282?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_284?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.525, 0.257, 0.15]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_286?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_288?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.673, 0.257, 0.109]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_290?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_292?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.579, 0.257, 0.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_294?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_296?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.46, 0.257, 0.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_298?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_300?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.325, 0.257, 0.111]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_302?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_304?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.5, 0.257, 0.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_306?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_308?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.525, 0.257, 0.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_310?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_312?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.309, 0.257, 0.111]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_314?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_316?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.284, 0.257, 0.111]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_318?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_320?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.64, 0.257, 0.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_322?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_324?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.659, 0.257, 0.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_326?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_328?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.462, 0.201, 0.081]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_330?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_332?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.342, 0.209, 0.081]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_334?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_336?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.226, 0.227, 0.081]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_338?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_340?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.511, 0.202, 0.131]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_342?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_344?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.613, 0.208, 0.129]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_346?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_348?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.523, 0.202, 0.129]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_350?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_352?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.492, 0.203, 0.079]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_354?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_356?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.579, 0.205, 0.13]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_358?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_360?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.572, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_362?.geometry}
          material={materials.building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_363?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_364?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_365?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_366?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_367?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.079, 0.518, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_567?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_568?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.079, 0.518, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_570?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_571?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.138, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_669?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_671?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.128, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_673?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_675?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.116, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_677?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_679?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.249, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_681?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_683?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.223, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_685?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_687?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.191, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_689?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_691?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.159, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_693?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_695?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.066, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_697?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_699?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.099, 0.279, 0.226]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_701?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_703?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.055, 0.279, 0.321]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_707?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_709?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.055, 0.279, 0.296]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_711?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_713?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.055, 0.279, 0.264]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_715?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_717?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.055, 0.278, 0.139]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_719?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_721?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.055, 0.278, 0.172]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_723?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_725?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.278, 0.313]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_729?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_731?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.278, 0.303]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_733?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_735?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.278, 0.291]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_737?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_739?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.279, 0.215]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_741?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_743?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.279, 0.19]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_745?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_747?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.279, 0.264]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_749?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_751?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.278, 0.232]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_753?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_755?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.278, 0.139]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_757?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_759?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0.256, 0.278, 0.172]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_761?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_763?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.141]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_921?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_923?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_925?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_927?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.414, -0.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_929?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_931?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.409, 0.226]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_933?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_935?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.194]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_937?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_939?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.162]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_941?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_943?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.417, -0.236]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_945?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_947?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.412, -0.144]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_949?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_951?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.408, 0.052]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_953?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_955?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.408, 0.042]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_957?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_959?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.069]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_961?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_963?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_965?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_967?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, -0.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_969?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_971?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.039]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_973?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_975?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.412, -0.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_977?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_979?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_981?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_983?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.414, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_985?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_987?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.418, -0.143]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_989?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_991?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, 0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_993?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_995?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_997?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_999?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, -0.114]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1001?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1003?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.418, -0.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1005?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1007?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.418, -0.092]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1009?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1011?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.35, 0.087]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1013?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1015?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.361, 0.166]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1017?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1019?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.355, -0.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1021?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1023?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.35, 0.056]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1025?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1027?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.376, -0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1029?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1031?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.383, -0.316]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1033?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1035?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.378, -0.281]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1037?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1039?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.377, 0.26]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1041?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1043?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.355, -0.022]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1045?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1047?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.351, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1049?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1051?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.354, -0.097]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1053?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1055?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.376, 0.275]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1057?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1059?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.36, -0.173]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1061?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1063?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.104, 0.413, 0.068]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1077?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1079?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.105, 0.413, 0.058]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1081?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1083?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.123, 0.417, -0.077]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1085?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1087?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.108, 0.413, 0.039]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1089?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1091?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.115, 0.412, -0.017]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1093?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1095?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.101, 0.413, 0.089]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1097?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1099?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.119, 0.414, -0.046]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1101?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1103?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.122, 0.418, -0.066]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1105?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1107?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.112, 0.417, 0.01]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1109?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1111?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.113, 0.417, 0]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1113?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1115?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.128, 0.417, -0.114]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1117?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1119?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.13, 0.418, -0.127]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1121?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1123?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.132, 0.418, -0.149]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1125?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1127?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.35, 0.082]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1129?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1131?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.355, -0.064]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1133?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1135?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.376, -0.256]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1137?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1139?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.383, -0.321]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1141?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1143?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.355, -0.026]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1145?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1147?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.354, -0.102]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1149?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1151?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.36, -0.178]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1153?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1155?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.378, -0.304]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1165?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1167?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.372, -0.282]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1169?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1171?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.12, 0.406, 0.129]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1185?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1187?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.125, 0.406, 0.119]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1189?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1191?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.22, 0.408, -0.065]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1193?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1195?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.293, 0.411, -0.206]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1197?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1199?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.251, 0.407, -0.125]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1201?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1203?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.16, 0.408, 0.05]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1205?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1207?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.165, 0.408, 0.041]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1209?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1211?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.147, 0.408, 0.077]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1219?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1221?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.204, 0.404, -0.034]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1223?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1225?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.193, 0.404, -0.012]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1227?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1229?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.099, 0.406, 0.136]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1257?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1259?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.081, 0.409, 0.22]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1261?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1263?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.158, 0.412, -0.143]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1271?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1273?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.117, 0.408, 0.05]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1275?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1277?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, 0.069]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1279?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1281?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, 0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1283?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1285?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, -0.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1287?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1289?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, 0.039]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1291?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1293?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.412, -0.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1295?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1297?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.414, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1299?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1301?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, 0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1303?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1305?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1307?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1309?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, -0.114]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1311?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1313?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.418, -0.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1315?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1317?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.418, -0.092]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1319?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1321?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.415, -0.062]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1327?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1329?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, -0.029]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1331?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1333?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.258, 0.406, 0.041]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1341?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1343?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.251, 0.406, 0.034]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1345?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1347?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.112, 0.414, -0.12]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1349?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1351?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.315, 0.409, 0.104]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1353?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1355?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.293, 0.406, 0.081]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1357?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1359?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.272, 0.406, 0.057]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1361?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1363?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.004, 0.417, -0.238]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1365?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1367?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.066, 0.412, -0.17]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1369?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1371?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.199, 0.408, -0.024]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1373?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1375?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.191, 0.408, -0.032]} rotation={[0, -0.737, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1377?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1379?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.111, 0.406, 0.155]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1385?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1387?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.107, 0.406, 0.146]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1389?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1391?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.028, 0.414, -0.046]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1393?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1395?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.002, 0.412, -0.108]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1397?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1399?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.077, 0.408, 0.074]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1401?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1403?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.073, 0.408, 0.064]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1405?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1407?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.311, 0.406, 0.139]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1415?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1417?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.314, 0.406, 0.128]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1419?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1421?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.357, 0.414, -0.075]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1423?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1425?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.294, 0.409, 0.222]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1427?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1429?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.3, 0.406, 0.19]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1431?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1433?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.307, 0.406, 0.159]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1435?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1437?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.39, 0.417, -0.23]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1439?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1441?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.371, 0.412, -0.14]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1443?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1445?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.33, 0.408, 0.052]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1447?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1449?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.332, 0.408, 0.042]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1451?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1453?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.141]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1465?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1467?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1469?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1471?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.414, -0.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1473?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1475?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.409, 0.226]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1477?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1479?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.194]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1481?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1483?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.406, 0.162]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1485?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1487?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.417, -0.236]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1489?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1491?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.412, -0.144]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1493?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1495?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.408, 0.052]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1497?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1499?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.036, 0.408, 0.042]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1501?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1503?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.069]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1505?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1507?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1509?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1511?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, -0.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1513?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1515?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.039]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1517?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1519?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.412, -0.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1521?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1523?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.413, 0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1525?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1527?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.414, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1529?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1531?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.418, -0.143]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1533?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1535?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, 0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1537?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1539?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1541?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1543?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.417, -0.114]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1545?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1547?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.418, -0.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1549?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1551?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.241, 0.418, -0.092]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1553?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1555?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.35, 0.087]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1557?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1559?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.361, 0.166]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1561?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1563?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.355, -0.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1565?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1567?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.35, 0.056]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1569?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1571?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.376, -0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1573?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1575?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.383, -0.316]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1577?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1579?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.378, -0.281]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1581?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1583?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.377, 0.26]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1585?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1587?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.355, -0.022]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1589?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1591?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.351, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1593?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1595?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.354, -0.097]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1597?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1599?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.376, 0.275]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1601?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1603?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.424, 0.36, -0.173]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1605?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1607?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.111, 0.406, 0.155]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1621?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1623?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.107, 0.406, 0.146]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1625?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1627?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.028, 0.414, -0.046]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1629?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1631?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.002, 0.412, -0.108]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1633?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1635?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.077, 0.408, 0.074]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1637?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1639?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.073, 0.408, 0.064]} rotation={[0, -0.393, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1641?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1643?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.311, 0.406, 0.139]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1651?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1653?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.314, 0.406, 0.128]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1655?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1657?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.357, 0.414, -0.075]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1659?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1661?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.294, 0.409, 0.222]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1663?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1665?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.3, 0.406, 0.19]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1667?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1669?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.307, 0.406, 0.159]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1671?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1673?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.39, 0.417, -0.23]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1675?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1677?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.371, 0.412, -0.14]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1679?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1681?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.33, 0.408, 0.052]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1683?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1685?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.332, 0.408, 0.042]} rotation={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1687?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1689?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.099, 0.406, 0.136]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1699?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1701?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.081, 0.409, 0.22]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1703?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1705?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.158, 0.412, -0.143]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1713?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1715?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.117, 0.408, 0.05]} rotation={[0, 0.208, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1717?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1719?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, 0.069]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1721?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1723?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, 0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1725?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1727?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, -0.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1729?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1731?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, 0.039]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1733?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1735?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.412, -0.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1737?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1739?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.414, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1741?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1743?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, 0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1745?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1747?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1749?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1751?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.417, -0.114]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1753?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1755?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.418, -0.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1757?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1759?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.418, -0.092]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1761?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1763?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.415, -0.062]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1769?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1771?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.377, 0.413, -0.029]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1773?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1775?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.104, 0.413, 0.068]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1781?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1783?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.105, 0.413, 0.058]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1785?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1787?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.123, 0.417, -0.077]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1789?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1791?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.108, 0.413, 0.039]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1793?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1795?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.115, 0.412, -0.017]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1797?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1799?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.101, 0.413, 0.089]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1801?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1803?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.119, 0.414, -0.046]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1805?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1807?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.122, 0.418, -0.066]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1809?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1811?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.112, 0.417, 0.01]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1813?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1815?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.113, 0.417, 0]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1817?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1819?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.128, 0.417, -0.114]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1821?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1823?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.13, 0.418, -0.127]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1825?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1827?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.132, 0.418, -0.149]} rotation={[0, 0.13, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1829?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1831?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.35, 0.082]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1833?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1835?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.355, -0.064]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1837?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1839?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.376, -0.256]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1841?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1843?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.383, -0.321]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1845?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1847?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.355, -0.026]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1849?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1851?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.354, -0.102]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1853?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1855?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.36, -0.178]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1857?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1859?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.378, -0.304]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1869?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1871?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.37, 0.372, -0.282]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1873?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1875?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.12, 0.406, 0.129]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1889?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1891?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.125, 0.406, 0.119]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1893?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1895?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.22, 0.408, -0.065]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1897?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1899?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.293, 0.411, -0.206]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1901?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1903?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.251, 0.407, -0.125]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1905?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1907?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.16, 0.408, 0.05]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1909?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1911?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.165, 0.408, 0.041]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1913?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1915?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.147, 0.408, 0.077]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1923?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1925?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.204, 0.404, -0.034]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1927?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1929?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.193, 0.404, -0.012]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1931?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1933?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.12, 0.406, 0.129]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1969?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1971?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.125, 0.406, 0.119]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1973?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1975?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.22, 0.408, -0.065]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1977?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1979?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.293, 0.411, -0.206]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1981?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1983?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.251, 0.407, -0.125]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1985?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1987?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.16, 0.408, 0.05]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1989?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1991?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.165, 0.408, 0.041]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1993?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_1995?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.147, 0.408, 0.077]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2003?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2005?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.204, 0.404, -0.034]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2007?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2009?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[-0.193, 0.404, -0.012]} rotation={[0, 0.477, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2011?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2013?.geometry}
          material={materials.floor}
          position={[0, 0.079, 0]}
        />
      </group>
      <group position={[0, 0.859, 0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2049?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2051?.geometry}
          material={materials.floor}
          position={[0.5, 0.006, -0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2053?.geometry}
          material={materials.floor}
          position={[0.1, 0.006, -0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2055?.geometry}
          material={materials.floor}
          position={[0.9, 0.006, -0.1]}
        />
      </group>
      <group position={[0.49, 0.893, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2057?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2059?.geometry}
          material={materials.floor}
          position={[0.01, -0.01, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2061?.geometry}
          material={materials.floor}
          position={[0.41, -0.01, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2063?.geometry}
          material={materials.floor}
          position={[-0.39, -0.01, 0.005]}
        />
      </group>
      <group position={[0.5, 0.885, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2065?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2067?.geometry}
          material={materials.floor}
          position={[0, -0.005, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2069?.geometry}
          material={materials.floor}
          position={[-0.4, -0.005, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2071?.geometry}
          material={materials.floor}
          position={[0.4, -0.005, 0.005]}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2101?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2102?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2104?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2105?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2107?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2108?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2110?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2111?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2113?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2114?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2116?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2117?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2119?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2120?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2122?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2123?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2125?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2126?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2128?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2129?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2131?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2132?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2134?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2135?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2137?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2138?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2140?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2141?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2147?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2148?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2150?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2151?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2157?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2158?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.896, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2160?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2161?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2167?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2168?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2170?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2171?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2177?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2178?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.468, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2180?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2181?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2183?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2184?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2186?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2187?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2191?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2192?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.896, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2194?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2195?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2199?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2200?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2202?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2203?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2207?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2208?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.468, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2210?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2211?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2219?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2220?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2222?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2223?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2229?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2230?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.896, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2232?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2233?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2239?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2240?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2242?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2243?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2249?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2250?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.468, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2252?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2253?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[-1.159, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2281?.geometry}
          material={materials.building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2282?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2311?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2312?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2314?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2315?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2317?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2318?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2320?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2321?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2323?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2324?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2326?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2327?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2329?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2330?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2332?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2333?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2335?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2336?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2338?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2339?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2341?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2342?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2344?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2345?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2349?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2350?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2352?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2353?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.896, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2359?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2360?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2362?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2363?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2369?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2370?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2372?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2373?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.468, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2379?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2380?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2382?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2383?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2387?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2388?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2390?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2391?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.896, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2395?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2396?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2398?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2399?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2403?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2404?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2406?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2407?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.468, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2411?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2412?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2414?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2415?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2419?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2420?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2422?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2423?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.896, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2429?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2430?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2432?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2433?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.286, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2439?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2440?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2442?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2443?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.468, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2449?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2450?.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[0.714, 0.815, -0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2452?.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes as any)?.Object_2453?.geometry}
          material={materials.glass}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_4?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_6?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_8?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_10?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_12?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_14?.geometry}
        material={materials.floor}
        position={[0.106, -0.219, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_16?.geometry}
        material={materials.floor}
        position={[-0.108, -0.218, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_18?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_20?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_22?.geometry}
        material={materials.floor}
        position={[0.107, -0.15, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_24?.geometry}
        material={materials.floor}
        position={[-0.107, -0.143, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_26?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_28?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_30?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_32?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_34?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_36?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_38?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_40?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_42?.geometry}
        material={materials.floor}
        position={[0.107, -0.238, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_44?.geometry}
        material={materials.floor}
        position={[-0.107, -0.232, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_46?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_48?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_50?.geometry}
        material={materials.floor}
        position={[0.107, -0.158, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_52?.geometry}
        material={materials.floor}
        position={[-0.107, -0.151, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_54?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_56?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_58?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_60?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_62?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_64?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_66?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_68?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_70?.geometry}
        material={materials.floor}
        position={[-0.107, -0.235, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_72?.geometry}
        material={materials.floor}
        position={[0.106, -0.228, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_74?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_76?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_78?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_80?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_82?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_84?.geometry}
        material={materials.floor}
        position={[-0.002, -0.129, 0]}
        scale={[1.83, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_86?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_88?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_90?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_92?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_94?.geometry}
        material={materials.floor}
        position={[1, 0, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_96?.geometry}
        material={materials.floor}
        position={[1, 0, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_98?.geometry}
        material={materials.floor}
        position={[1, 0, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_100?.geometry}
        material={materials.floor}
        position={[1, 0, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_102?.geometry}
        material={materials.floor}
        position={[1, 0, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_112?.geometry}
        material={materials.floor}
        position={[0.923, 0.206, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_114?.geometry}
        material={materials.floor}
        position={[0.075, 0.205, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_124?.geometry}
        material={materials.floor}
        position={[0.923, 0.206, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_126?.geometry}
        material={materials.floor}
        position={[0.075, 0.205, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_136?.geometry}
        material={materials.floor}
        position={[0.923, 0.206, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_138?.geometry}
        material={materials.floor}
        position={[0.075, 0.205, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_150?.geometry}
        material={materials.floor}
        position={[0.923, 0.262, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_152?.geometry}
        material={materials.floor}
        position={[0.075, 0.262, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_164?.geometry}
        material={materials.floor}
        position={[0.923, 0.262, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_166?.geometry}
        material={materials.floor}
        position={[0.075, 0.262, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_178?.geometry}
        material={materials.floor}
        position={[0.923, 0.262, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_180?.geometry}
        material={materials.floor}
        position={[0.075, 0.262, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_190?.geometry}
        material={materials.floor}
        position={[0.076, 0.179, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_192?.geometry}
        material={materials.floor}
        position={[0.924, 0.194, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_202?.geometry}
        material={materials.floor}
        position={[0.076, 0.179, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_204?.geometry}
        material={materials.floor}
        position={[0.924, 0.194, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_369?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_371?.geometry}
        material={materials.floor}
        position={[0.079, 0.5, -0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_373?.geometry}
        material={materials.floor}
        position={[0.079, 0.5, -0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_375?.geometry}
        material={materials.building}
        position={[0.425, 0.601, 0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_377?.geometry}
        material={materials.building}
        position={[0.382, 0.601, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_379?.geometry}
        material={materials.building}
        position={[0.867, 0.624, 0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_381?.geometry}
        material={materials.building}
        position={[0.887, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_383?.geometry}
        material={materials.building}
        position={[0.822, 0.408, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_385?.geometry}
        material={materials.building}
        position={[0.822, 0.364, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_387?.geometry}
        material={materials.building}
        position={[0.822, 0.316, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_389?.geometry}
        material={materials.building}
        position={[0.866, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_391?.geometry}
        material={materials.building}
        position={[0.844, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_393?.geometry}
        material={materials.building}
        position={[0.822, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_395?.geometry}
        material={materials.building}
        position={[0.801, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_397?.geometry}
        material={materials.building}
        position={[0.643, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_399?.geometry}
        material={materials.building}
        position={[0.621, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_401?.geometry}
        material={materials.building}
        position={[0.887, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_403?.geometry}
        material={materials.building}
        position={[0.866, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_405?.geometry}
        material={materials.building}
        position={[0.844, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_407?.geometry}
        material={materials.building}
        position={[0.822, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_409?.geometry}
        material={materials.building}
        position={[0.801, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_411?.geometry}
        material={materials.building}
        position={[0.643, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_413?.geometry}
        material={materials.building}
        position={[0.621, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_415?.geometry}
        material={materials.building}
        position={[0.683, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_417?.geometry}
        material={materials.building}
        position={[0.661, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_419?.geometry}
        material={materials.building}
        position={[0.683, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_421?.geometry}
        material={materials.building}
        position={[0.661, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_423?.geometry}
        material={materials.building}
        position={[0.703, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_425?.geometry}
        material={materials.building}
        position={[0.703, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_427?.geometry}
        material={materials.building}
        position={[0.822, 0.178, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_429?.geometry}
        material={materials.building}
        position={[0.756, 0.29, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_431?.geometry}
        material={materials.building}
        position={[0.763, 0.408, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_433?.geometry}
        material={materials.building}
        position={[0.763, 0.343, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_435?.geometry}
        material={materials.building}
        position={[0.763, 0.274, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_437?.geometry}
        material={materials.building}
        position={[0.763, 0.201, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_439?.geometry}
        material={materials.building}
        position={[0.65, 0.396, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_441?.geometry}
        material={materials.building}
        position={[0.708, 0.396, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_443?.geometry}
        material={materials.building}
        position={[0.65, 0.333, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_445?.geometry}
        material={materials.building}
        position={[0.5, 0.378, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_447?.geometry}
        material={materials.building}
        position={[0.5, 0.26, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_449?.geometry}
        material={materials.building}
        position={[0.5, 0.15, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_451?.geometry}
        material={materials.building}
        position={[0.425, 0.601, 0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_453?.geometry}
        material={materials.building}
        position={[0.382, 0.601, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_455?.geometry}
        material={materials.building}
        position={[0.867, 0.624, 0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_457?.geometry}
        material={materials.building}
        position={[0.728, 0.403, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_459?.geometry}
        material={materials.building}
        position={[0.822, 0.408, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_461?.geometry}
        material={materials.building}
        position={[0.822, 0.364, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_463?.geometry}
        material={materials.building}
        position={[0.822, 0.316, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_465?.geometry}
        material={materials.building}
        position={[0.707, 0.403, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_467?.geometry}
        material={materials.building}
        position={[0.844, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_469?.geometry}
        material={materials.building}
        position={[0.822, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_471?.geometry}
        material={materials.building}
        position={[0.801, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_473?.geometry}
        material={materials.building}
        position={[0.643, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_475?.geometry}
        material={materials.building}
        position={[0.621, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_477?.geometry}
        material={materials.building}
        position={[0.728, 0.357, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_479?.geometry}
        material={materials.building}
        position={[0.707, 0.357, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_481?.geometry}
        material={materials.building}
        position={[0.844, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_483?.geometry}
        material={materials.building}
        position={[0.822, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_485?.geometry}
        material={materials.building}
        position={[0.801, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_487?.geometry}
        material={materials.building}
        position={[0.643, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_489?.geometry}
        material={materials.building}
        position={[0.621, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_491?.geometry}
        material={materials.building}
        position={[0.661, 0.271, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_493?.geometry}
        material={materials.building}
        position={[0.661, 0.226, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_495?.geometry}
        material={materials.building}
        position={[0.878, 0.257, 0.099]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_497?.geometry}
        material={materials.building}
        position={[0.756, 0.29, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_499?.geometry}
        material={materials.building}
        position={[0.763, 0.408, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_501?.geometry}
        material={materials.building}
        position={[0.763, 0.343, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_503?.geometry}
        material={materials.building}
        position={[0.763, 0.274, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_505?.geometry}
        material={materials.building}
        position={[0.763, 0.201, 0.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_507?.geometry}
        material={materials.building}
        position={[0.65, 0.396, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_509?.geometry}
        material={materials.building}
        position={[0.708, 0.192, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_511?.geometry}
        material={materials.building}
        position={[0.65, 0.333, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_513?.geometry}
        material={materials.building}
        position={[0.5, 0.378, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_515?.geometry}
        material={materials.building}
        position={[0.5, 0.26, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_517?.geometry}
        material={materials.building}
        position={[0.425, 0.601, 0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_519?.geometry}
        material={materials.building}
        position={[0.382, 0.601, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_521?.geometry}
        material={materials.building}
        position={[0.82, 0.41, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_523?.geometry}
        material={materials.building}
        position={[0.82, 0.37, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_525?.geometry}
        material={materials.building}
        position={[0.82, 0.33, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_527?.geometry}
        material={materials.building}
        position={[0.678, 0.283, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_529?.geometry}
        material={materials.building}
        position={[0.657, 0.283, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_531?.geometry}
        material={materials.building}
        position={[0.678, 0.238, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_533?.geometry}
        material={materials.building}
        position={[0.657, 0.238, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_535?.geometry}
        material={materials.building}
        position={[0.702, 0.283, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_537?.geometry}
        material={materials.building}
        position={[0.702, 0.238, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_539?.geometry}
        material={materials.building}
        position={[0.82, 0.29, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_541?.geometry}
        material={materials.building}
        position={[0.756, 0.29, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_543?.geometry}
        material={materials.building}
        position={[0.65, 0.396, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_545?.geometry}
        material={materials.building}
        position={[0.756, 0.395, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_547?.geometry}
        material={materials.building}
        position={[0.704, 0.393, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_549?.geometry}
        material={materials.building}
        position={[0.5, 0.26, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_551?.geometry}
        material={materials.building}
        position={[0.82, 0.25, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_553?.geometry}
        material={materials.building}
        position={[0.82, 0.21, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_555?.geometry}
        material={materials.building}
        position={[0.82, 0.17, 0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_557?.geometry}
        material={materials.building}
        position={[0.728, 0.283, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_559?.geometry}
        material={materials.building}
        position={[0.728, 0.238, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_561?.geometry}
        material={materials.building}
        position={[0.753, 0.283, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_563?.geometry}
        material={materials.building}
        position={[0.753, 0.238, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_565?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_573?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_575?.geometry}
        material={materials.floor}
        position={[0.18, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_577?.geometry}
        material={materials.floor}
        position={[0.392, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_579?.geometry}
        material={materials.floor}
        position={[0.605, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_581?.geometry}
        material={materials.floor}
        position={[0.817, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_583?.geometry}
        material={materials.floor}
        position={[0.394, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_585?.geometry}
        material={materials.floor}
        position={[0.18, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_587?.geometry}
        material={materials.floor}
        position={[0.816, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_589?.geometry}
        material={materials.floor}
        position={[0.602, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_591?.geometry}
        material={materials.floor}
        position={[0.608, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_593?.geometry}
        material={materials.floor}
        position={[0.818, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_595?.geometry}
        material={materials.floor}
        position={[0.181, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_597?.geometry}
        material={materials.floor}
        position={[0.392, 0.521, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_599?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_601?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_603?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_605?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_607?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_609?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_611?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_613?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_615?.geometry}
        material={materials.building}
        position={[-0.019, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_617?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_619?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_621?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_623?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_625?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_627?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_629?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_631?.geometry}
        material={materials.building}
        position={[0.186, 0, 0.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_633?.geometry}
        material={materials.building}
        position={[0.117, 0, 0.227]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_635?.geometry}
        material={materials.building}
        position={[0.062, 0.263, 0.184]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_637?.geometry}
        material={materials.building}
        position={[0.173, 0.263, 0.184]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_639?.geometry}
        material={materials.building}
        position={[0.116, 0.263, 0.3]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_641?.geometry}
        material={materials.building}
        position={[0.308, 0, 0.195]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_643?.geometry}
        material={materials.building}
        position={[0.117, 0, 0.227]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_645?.geometry}
        material={materials.building}
        position={[0.116, 0.044, 0.179]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_647?.geometry}
        material={materials.building}
        position={[0.116, 0, 0.197]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_649?.geometry}
        material={materials.building}
        position={[0.365, 0.084, 0.247]}
        rotation={[1.633, 0.081, 0.909]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_651?.geometry}
        material={materials.building}
        position={[0.092, 0.001, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_653?.geometry}
        material={materials.building}
        position={[0.092, 0.045, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_655?.geometry}
        material={materials.building}
        position={[0.092, 0.089, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_657?.geometry}
        material={materials.building}
        position={[0.092, 0.001, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_659?.geometry}
        material={materials.building}
        position={[0.293, 0.001, 0.196]}
        rotation={[0, -0.364, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_661?.geometry}
        material={materials.building}
        position={[0.207, 0, 0.227]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_663?.geometry}
        material={materials.building}
        position={[0.339, 0.001, 0.233]}
        rotation={[0, 0.482, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_665?.geometry}
        material={materials.building}
        position={[0.068, 0.001, 0.247]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_667?.geometry}
        material={materials.building}
        position={[0.159, 0.352, 0.226]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_705?.geometry}
        material={materials.building}
        position={[0.055, 0.352, 0.232]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_727?.geometry}
        material={materials.building}
        position={[0.256, 0.352, 0.232]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_765?.geometry}
        material={materials.building}
        position={[0.118, 0, 0.202]}
        rotation={[0, 0.506, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_767?.geometry}
        material={materials.building}
        position={[0.349, 0.238, 0.213]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_769?.geometry}
        material={materials.building}
        position={[0.319, 0, 0.218]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_771?.geometry}
        material={materials.building}
        position={[0.62, -0.007, 0.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_773?.geometry}
        material={materials.building}
        position={[0.811, -0.007, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_775?.geometry}
        material={materials.building}
        position={[0.717, -0.006, 0.342]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_777?.geometry}
        material={materials.building}
        position={[0.427, 0, 0.226]}
        rotation={[0, 0.051, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_779?.geometry}
        material={materials.building}
        position={[0.717, -0.007, 0.192]}
        rotation={[0, 1.426, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_781?.geometry}
        material={materials.building}
        position={[0.38, 0.238, 0.2]}
        rotation={[0, 1.178, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_783?.geometry}
        material={materials.building}
        position={[0.166, -0.006, 0.231]}
        rotation={[0, 1.488, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_785?.geometry}
        material={materials.building}
        position={[0.508, -0.007, 0.174]}
        rotation={[0, 0.841, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_787?.geometry}
        material={materials.building}
        position={[0.345, 0, 0.2]}
        rotation={[0, 1.178, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_789?.geometry}
        material={materials.building}
        position={[0.174, -0.006, 0.185]}
        rotation={[0, 1.488, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_791?.geometry}
        material={materials.building}
        position={[0.67, 0, 0.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_793?.geometry}
        material={materials.building}
        position={[0.862, 0.093, 0.14]}
        rotation={[1.15, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_795?.geometry}
        material={materials.building}
        position={[0.345, 0, 0.2]}
        rotation={[0, 1.178, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_797?.geometry}
        material={materials.building}
        position={[0.174, -0.006, 0.185]}
        rotation={[0, 1.488, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_799?.geometry}
        material={materials.building}
        position={[0.506, 0, 0.192]}
        rotation={[0, -0.017, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_801?.geometry}
        material={materials.building}
        position={[0.238, 0, 0.192]}
        rotation={[0, -0.017, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_803?.geometry}
        material={materials.building}
        position={[0.5, 0.1, 0.211]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_805?.geometry}
        material={materials.building}
        position={[0.513, 0.304, 0.227]}
        rotation={[0, 0.35, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_807?.geometry}
        material={materials.building}
        position={[0.325, 0, 0.195]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_809?.geometry}
        material={materials.building}
        position={[0.162, 0, 0.31]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_811?.geometry}
        material={materials.building}
        position={[0.72, 0.1, 0.211]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_813?.geometry}
        material={materials.building}
        position={[0.712, 0.304, 0.201]}
        rotation={[0, 0.046, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_815?.geometry}
        material={materials.building}
        position={[0.495, 0.1, 0.201]}
        rotation={[Math.PI, -1.388, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_817?.geometry}
        material={materials.building}
        position={[0.495, 0.2, 0.201]}
        rotation={[0, -1.469, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_819?.geometry}
        material={materials.building}
        position={[0.701, 0, 0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_821?.geometry}
        material={materials.building}
        position={[0.65, 0, 0.191]}
        rotation={[0, -1.3, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_823?.geometry}
        material={materials.building}
        position={[0.863, 0, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_825?.geometry}
        material={materials.building}
        position={[0.202, 0, -0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_827?.geometry}
        material={materials.building}
        position={[0.133, 0, -0.087]}
        rotation={[0, 0.173, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_829?.geometry}
        material={materials.building}
        position={[0.317, 0, -0.08]}
        rotation={[0, -0.439, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_831?.geometry}
        material={materials.building}
        position={[0.445, -0.031, -0.585]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_833?.geometry}
        material={materials.building}
        position={[0.038, -0.031, -0.214]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_835?.geometry}
        material={materials.building}
        position={[0.313, 0.01, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_837?.geometry}
        material={materials.building}
        position={[0.395, 0.01, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_839?.geometry}
        material={materials.building}
        position={[0.502, 0.01, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_841?.geometry}
        material={materials.building}
        position={[0.102, 0.01, -0.082]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_843?.geometry}
        material={materials.building}
        position={[0.102, 0.01, -0.164]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_845?.geometry}
        material={materials.building}
        position={[0.102, 0.01, -0.271]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_847?.geometry}
        material={materials.building}
        position={[0.581, 0.01, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_849?.geometry}
        material={materials.building}
        position={[0.313, 0.095, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_851?.geometry}
        material={materials.building}
        position={[0.559, 0.095, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_853?.geometry}
        material={materials.building}
        position={[0.386, 0.095, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_855?.geometry}
        material={materials.building}
        position={[0.494, 0.095, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_857?.geometry}
        material={materials.building}
        position={[0.313, 0.197, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_859?.geometry}
        material={materials.building}
        position={[0.536, 0.197, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_861?.geometry}
        material={materials.building}
        position={[0.392, 0.197, -0.522]}
        rotation={[0, 0.109, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_863?.geometry}
        material={materials.building}
        position={[0.471, 0.197, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_865?.geometry}
        material={materials.building}
        position={[0.616, 0.197, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_867?.geometry}
        material={materials.building}
        position={[0.536, 0.299, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_869?.geometry}
        material={materials.building}
        position={[0.392, 0.299, -0.522]}
        rotation={[0, 0.109, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_871?.geometry}
        material={materials.building}
        position={[0.286, 0.299, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_873?.geometry}
        material={materials.building}
        position={[0.197, -0.031, -0.124]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_875?.geometry}
        material={materials.building}
        position={[0.065, 0.01, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_877?.geometry}
        material={materials.building}
        position={[0.147, 0.01, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_879?.geometry}
        material={materials.building}
        position={[0.254, 0.01, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_881?.geometry}
        material={materials.building}
        position={[0.333, 0.01, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_883?.geometry}
        material={materials.building}
        position={[0.065, 0.095, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_885?.geometry}
        material={materials.building}
        position={[0.312, 0.095, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_887?.geometry}
        material={materials.building}
        position={[0.138, 0.095, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_889?.geometry}
        material={materials.building}
        position={[0.247, 0.095, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_891?.geometry}
        material={materials.building}
        position={[0.065, 0.197, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_893?.geometry}
        material={materials.building}
        position={[0.288, 0.197, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_895?.geometry}
        material={materials.building}
        position={[0.145, 0.197, -0.06]}
        rotation={[0, 0.109, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_897?.geometry}
        material={materials.building}
        position={[0.223, 0.197, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_899?.geometry}
        material={materials.building}
        position={[0.368, 0.197, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_901?.geometry}
        material={materials.building}
        position={[0.288, 0.299, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_903?.geometry}
        material={materials.building}
        position={[0.145, 0.299, -0.06]}
        rotation={[0, 0.109, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_905?.geometry}
        material={materials.building}
        position={[0.065, 0.299, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_907?.geometry}
        material={materials.building}
        position={[0.186, 0, -0.175]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_909?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_911?.geometry}
        material={materials.building}
        position={[-0.036, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_913?.geometry}
        material={materials.building}
        position={[-0.425, 0.468, 0.001]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_915?.geometry}
        material={materials.building}
        position={[-0.036, 0.508, 0.007]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_917?.geometry}
        material={materials.building}
        position={[-0.241, 0.508, 0.009]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_919?.geometry}
        material={materials.building}
        position={[-0.036, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1065?.geometry}
        material={materials.building}
        position={[-0.242, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1067?.geometry}
        material={materials.building}
        position={[-0.242, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1069?.geometry}
        material={materials.building}
        position={[-0.426, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1071?.geometry}
        material={materials.building}
        position={[-0.426, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1073?.geometry}
        material={materials.building}
        position={[-0.372, 0.468, -0.004]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1075?.geometry}
        material={materials.building}
        position={[-0.113, 0.508, 0.008]}
        rotation={[0, -1.441, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1157?.geometry}
        material={materials.building}
        position={[-0.052, 0, 0.472]}
        rotation={[0, -1.441, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1159?.geometry}
        material={materials.building}
        position={[-0.175, 0, -0.464]}
        rotation={[0, -1.441, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1161?.geometry}
        material={materials.building}
        position={[-0.372, 0, 0.471]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1163?.geometry}
        material={materials.building}
        position={[-0.372, 0, -0.472]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1173?.geometry}
        material={materials.floor}
        position={[-0.37, 0.371, 0.145]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1175?.geometry}
        material={materials.floor}
        position={[-0.37, 0.371, 0.166]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1177?.geometry}
        material={materials.floor}
        position={[-0.37, 0.377, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1179?.geometry}
        material={materials.building}
        position={[0.034, 0, 0.427]}
        rotation={[0, -1.094, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1181?.geometry}
        material={materials.building}
        position={[-0.182, 0.508, 0.01]}
        rotation={[0, -1.094, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1183?.geometry}
        material={materials.building}
        position={[-0.399, 0, -0.412]}
        rotation={[0, -1.094, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1213?.geometry}
        material={materials.floor}
        position={[-0.093, 0.42, 0.181]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1215?.geometry}
        material={materials.floor}
        position={[-0.088, 0.421, 0.191]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1217?.geometry}
        material={materials.floor}
        position={[-0.102, 0.419, 0.164]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1231?.geometry}
        material={materials.building}
        position={[-0.18, 0, 0.47]}
        rotation={[Math.PI, -1.41, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1233?.geometry}
        material={materials.building}
        position={[-0.426, 0.468, 0.001]}
        rotation={[0, -1.473, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1235?.geometry}
        material={materials.building}
        position={[-0.104, 0.508, 0.007]}
        rotation={[Math.PI, -1.41, Math.PI]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1237?.geometry}
        material={materials.building}
        position={[-0.28, 0.508, 0.009]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1239?.geometry}
        material={materials.building}
        position={[-0.028, 0, -0.461]}
        rotation={[Math.PI, -1.41, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1241?.geometry}
        material={materials.building}
        position={[-0.28, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1243?.geometry}
        material={materials.building}
        position={[-0.28, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1245?.geometry}
        material={materials.building}
        position={[-0.38, 0, 0.474]}
        rotation={[0, -1.473, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1247?.geometry}
        material={materials.building}
        position={[-0.472, 0, -0.465]}
        rotation={[0, -1.473, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1249?.geometry}
        material={materials.building}
        position={[-0.03, 0, 0.465]}
        rotation={[0, -1.363, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1251?.geometry}
        material={materials.building}
        position={[-0.127, 0.508, 0.005]}
        rotation={[0, -1.363, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1253?.geometry}
        material={materials.building}
        position={[-0.378, 0.508, 0.009]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1255?.geometry}
        material={materials.building}
        position={[-0.225, 0, -0.459]}
        rotation={[0, -1.363, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1265?.geometry}
        material={materials.floor}
        position={[-1.106, 0.079, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1267?.geometry}
        material={materials.floor}
        position={[-0.816, 0.079, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1269?.geometry}
        material={materials.floor}
        position={[-0.876, 0.079, 0.228]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1323?.geometry}
        material={materials.building}
        position={[-0.378, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1325?.geometry}
        material={materials.building}
        position={[-0.378, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1335?.geometry}
        material={materials.building}
        position={[-0.483, 0, 0.289]}
        rotation={[-Math.PI, -0.834, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1337?.geometry}
        material={materials.building}
        position={[-0.168, 0.508, -0.058]}
        rotation={[-Math.PI, -0.834, -Math.PI]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1339?.geometry}
        material={materials.building}
        position={[0.151, 0, -0.409]}
        rotation={[-Math.PI, -0.834, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1381?.geometry}
        material={materials.building}
        position={[-0.06, 0.508, 0.031]}
        rotation={[Math.PI, -1.178, Math.PI]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1383?.geometry}
        material={materials.building}
        position={[0.121, 0, -0.407]}
        rotation={[Math.PI, -1.178, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1409?.geometry}
        material={materials.building}
        position={[-0.242, 0, 0.466]}
        rotation={[0, -1.361, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1411?.geometry}
        material={materials.building}
        position={[-0.34, 0.508, 0.007]}
        rotation={[0, -1.361, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1413?.geometry}
        material={materials.building}
        position={[-0.438, 0, -0.456]}
        rotation={[0, -1.361, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1455?.geometry}
        material={materials.building}
        position={[-0.036, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1457?.geometry}
        material={materials.building}
        position={[-0.425, 0.468, 0.001]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1459?.geometry}
        material={materials.building}
        position={[-0.036, 0.508, 0.007]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1461?.geometry}
        material={materials.building}
        position={[-0.241, 0.508, 0.009]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1463?.geometry}
        material={materials.building}
        position={[-0.036, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1609?.geometry}
        material={materials.building}
        position={[-0.242, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1611?.geometry}
        material={materials.building}
        position={[-0.242, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1613?.geometry}
        material={materials.building}
        position={[-0.426, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1615?.geometry}
        material={materials.building}
        position={[-0.426, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1617?.geometry}
        material={materials.building}
        position={[-0.06, 0.508, 0.031]}
        rotation={[Math.PI, -1.178, Math.PI]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1619?.geometry}
        material={materials.building}
        position={[0.121, 0, -0.407]}
        rotation={[Math.PI, -1.178, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1645?.geometry}
        material={materials.building}
        position={[-0.242, 0, 0.466]}
        rotation={[0, -1.361, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1647?.geometry}
        material={materials.building}
        position={[-0.34, 0.508, 0.007]}
        rotation={[0, -1.361, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1649?.geometry}
        material={materials.building}
        position={[-0.438, 0, -0.456]}
        rotation={[0, -1.361, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1691?.geometry}
        material={materials.building}
        position={[-0.03, 0, 0.465]}
        rotation={[0, -1.363, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1693?.geometry}
        material={materials.building}
        position={[-0.127, 0.508, 0.005]}
        rotation={[0, -1.363, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1695?.geometry}
        material={materials.building}
        position={[-0.378, 0.508, 0.009]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1697?.geometry}
        material={materials.building}
        position={[-0.225, 0, -0.459]}
        rotation={[0, -1.363, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1707?.geometry}
        material={materials.floor}
        position={[-1.106, 0.079, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1709?.geometry}
        material={materials.floor}
        position={[-0.816, 0.079, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1711?.geometry}
        material={materials.floor}
        position={[-0.876, 0.079, 0.228]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1765?.geometry}
        material={materials.building}
        position={[-0.378, 0, 0.476]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1767?.geometry}
        material={materials.building}
        position={[-0.378, 0, -0.468]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1777?.geometry}
        material={materials.building}
        position={[-0.372, 0.468, -0.004]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1779?.geometry}
        material={materials.building}
        rotation={[0, -1.441, 0]}
        scale={[-1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1861?.geometry}
        material={materials.building}
        position={[-0.052, 0, 0.472]}
        rotation={[0, -1.441, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1863?.geometry}
        material={materials.building}
        position={[-0.175, 0, -0.464]}
        rotation={[0, -1.441, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1865?.geometry}
        material={materials.building}
        position={[-0.372, 0, 0.471]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1867?.geometry}
        material={materials.building}
        position={[-0.372, 0, -0.472]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1877?.geometry}
        material={materials.floor}
        position={[-0.37, 0.371, 0.145]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1879?.geometry}
        material={materials.floor}
        position={[-0.37, 0.371, 0.166]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1881?.geometry}
        material={materials.floor}
        position={[-0.37, 0.377, 0.202]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1883?.geometry}
        material={materials.building}
        position={[0.034, 0, 0.427]}
        rotation={[0, -1.094, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1885?.geometry}
        material={materials.building}
        position={[-0.182, 0.508, 0.01]}
        rotation={[0, -1.094, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1887?.geometry}
        material={materials.building}
        position={[-0.399, 0, -0.412]}
        rotation={[0, -1.094, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1917?.geometry}
        material={materials.floor}
        position={[-0.093, 0.42, 0.181]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1919?.geometry}
        material={materials.floor}
        position={[-0.088, 0.421, 0.191]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1921?.geometry}
        material={materials.floor}
        position={[-0.102, 0.419, 0.164]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1935?.geometry}
        material={materials.building}
        position={[-0.253, -0.007, 0.239]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1937?.geometry}
        material={materials.building}
        position={[-0.4, -0.007, 0.38]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1939?.geometry}
        material={materials.building}
        position={[-0.4, -0.006, 0.153]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1941?.geometry}
        material={materials.building}
        position={[-0.203, -0.007, 0.409]}
        rotation={[-Math.PI, -0.62, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1943?.geometry}
        material={materials.building}
        position={[-0.274, 0, -0.02]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1945?.geometry}
        material={materials.building}
        position={[-0.101, -0.007, 0.244]}
        rotation={[0, 0.511, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1947?.geometry}
        material={materials.building}
        position={[-0.285, -0.007, 0.378]}
        rotation={[0, 0.148, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1949?.geometry}
        material={materials.building}
        position={[-0.284, -0.006, -0.052]}
        rotation={[-Math.PI, 0.541, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1951?.geometry}
        material={materials.building}
        position={[-0.101, -0.007, 0.244]}
        rotation={[0, 0.511, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1953?.geometry}
        material={materials.building}
        position={[-0.285, -0.007, 0.378]}
        rotation={[0, 0.148, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1955?.geometry}
        material={materials.building}
        position={[-0.284, -0.006, -0.052]}
        rotation={[-Math.PI, 0.541, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1957?.geometry}
        material={materials.building}
        position={[-0.345, 0.001, 0.391]}
        rotation={[Math.PI, -1.478, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1959?.geometry}
        material={materials.building}
        position={[-0.268, 0.001, -0.068]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1961?.geometry}
        material={materials.building}
        position={[-0.3, 0, 0.175]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1963?.geometry}
        material={materials.building}
        position={[0.034, 0, 0.427]}
        rotation={[0, -1.094, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1965?.geometry}
        material={materials.building}
        position={[-0.182, 0.508, 0.01]}
        rotation={[0, -1.094, 0]}
        scale={[1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1967?.geometry}
        material={materials.building}
        position={[-0.399, 0, -0.412]}
        rotation={[0, -1.094, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1997?.geometry}
        material={materials.floor}
        position={[-0.093, 0.42, 0.181]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_1999?.geometry}
        material={materials.floor}
        position={[-0.088, 0.421, 0.191]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2001?.geometry}
        material={materials.floor}
        position={[-0.102, 0.419, 0.164]}
        rotation={[0, 0.477, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2015?.geometry}
        material={materials.building}
        position={[-0.272, 0, 0.113]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2017?.geometry}
        material={materials.building}
        position={[-0.028, 0, 0.085]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2019?.geometry}
        material={materials.building}
        position={[-0.046, 0.1, 0.331]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2021?.geometry}
        material={materials.building}
        position={[-0.035, 0.304, 0.323]}
        rotation={[0, -1.524, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2023?.geometry}
        material={materials.building}
        position={[-0.283, 0.1, 0.317]}
        rotation={[-Math.PI, 0.182, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2025?.geometry}
        material={materials.building}
        position={[-0.283, 0.2, 0.317]}
        rotation={[-Math.PI, -0.102, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2027?.geometry}
        material={materials.building}
        position={[-0.215, 0, -0.122]}
        rotation={[-Math.PI, -0.27, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2029?.geometry}
        material={materials.building}
        position={[-0.028, 0.055, 0.085]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2031?.geometry}
        material={materials.building}
        position={[-0.381, 0.1, 0.254]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2033?.geometry}
        material={materials.building}
        position={[0.002, 0, 0.263]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2035?.geometry}
        material={materials.building}
        position={[-0.35, 0.2, 0.244]}
        rotation={[-Math.PI, 1.516, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2037?.geometry}
        material={materials.building}
        position={[-0.073, 0, -0.102]}
        rotation={[0, -0.867, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2039?.geometry}
        material={materials.building}
        position={[-0.028, 0, 0.085]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2041?.geometry}
        material={materials.building}
        position={[-0.283, 0.1, 0.317]}
        rotation={[-Math.PI, 0.182, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2043?.geometry}
        material={materials.building}
        position={[-0.283, 0.2, 0.317]}
        rotation={[-Math.PI, -0.102, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2045?.geometry}
        material={materials.building}
        position={[-0.274, 0.079, 0.14]}
        rotation={[-0.82, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2047?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2073?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2075?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2077?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2079?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2081?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2083?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2085?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2087?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2089?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2091?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2093?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2095?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2097?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2099?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2143?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2145?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2153?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2155?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2163?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2165?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2173?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2175?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2189?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2197?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2205?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2213?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2215?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2217?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2225?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2227?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2235?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2237?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2245?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2247?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2255?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2257?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2259?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2261?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2263?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2265?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2267?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2269?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2271?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2273?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2275?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2277?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2279?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2284?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2285?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2287?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2288?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2290?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2291?.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2293?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2295?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2297?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2299?.geometry}
        material={materials.building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2301?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2303?.geometry}
        material={materials.floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2305?.geometry}
        material={materials.building}
        position={[-0.292, 0, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2307?.geometry}
        material={materials.building}
        position={[-0.292, 0, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2309?.geometry}
        material={materials.building}
        position={[-0.292, 0, -0.341]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2347?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2355?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2357?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2365?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2367?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2375?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2377?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2385?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2393?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2401?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2409?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2417?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2425?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2427?.geometry}
        material={materials.floor}
        position={[0.83, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2435?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2437?.geometry}
        material={materials.floor}
        position={[0.597, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2445?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2447?.geometry}
        material={materials.floor}
        position={[0.403, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2455?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2457?.geometry}
        material={materials.floor}
        position={[0.17, 0.747, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2459?.geometry}
        material={materials.building}
        position={[0.498, 0.854, 0.402]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2461?.geometry}
        material={materials.building}
        position={[0.498, 0.862, 0.253]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2463?.geometry}
        material={materials.building}
        position={[0.498, 0.839, 0.296]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2465?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.443]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2467?.geometry}
        material={materials.building}
        position={[0.498, 0.851, 0.419]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2469?.geometry}
        material={materials.building}
        position={[0.498, 0.915, 0.353]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2471?.geometry}
        material={materials.building}
        position={[0.498, 0.842, 0.324]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2473?.geometry}
        material={materials.building}
        position={[0.498, 0.854, 0.402]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2475?.geometry}
        material={materials.building}
        position={[0.498, 0.862, 0.334]}
        rotation={[0, 0.166, 0]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2477?.geometry}
        material={materials.building}
        position={[0.498, 0.856, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2479?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.443]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2481?.geometry}
        material={materials.building}
        position={[0.498, 0.843, 0.339]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2483?.geometry}
        material={materials.building}
        position={[0.498, 0.918, 0.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2485?.geometry}
        material={materials.building}
        position={[0.498, 0.842, 0.324]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2487?.geometry}
        material={materials.building}
        position={[0.498, 0.839, 0.234]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2489?.geometry}
        material={materials.building}
        position={[0.498, 0.846, 0.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2491?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.443]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2493?.geometry}
        material={materials.building}
        position={[0.498, 0.843, 0.339]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2495?.geometry}
        material={materials.building}
        position={[0.498, 0.842, 0.324]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2497?.geometry}
        material={materials.building}
        position={[0.498, 0.839, 0.234]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2499?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.443]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2501?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.392]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2503?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.324]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2505?.geometry}
        material={materials.building}
        position={[0.498, 0.931, 0.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_2507?.geometry}
        material={materials.building}
        position={[0.498, 0.921, 0.353]}
      />
    </group>
  );
}
export default memo(ModelDepartment);

import { Suspense, useRef } from "react";
import { Environment } from "@react-three/drei";
import { Group } from "three";

import { ModelBird } from "./model-bird";
import { ModelBirds } from "./model-birds";

const Scene = ({
  isFly,
  position,
  scale,
}: {
  isFly: boolean;
  position: any;
  scale: any;
}) => {
  const ref = useRef<Group>(null);

  return (
    <>
      {/* Light */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={5}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      <Environment preset="sunset" blur={0.2} />

      <Suspense fallback={null}>
        <group position={[0, -1, 0]} ref={ref}>
          <ModelBird
            isFly={isFly}
            position={position.bird}
            scale={scale}
            rotation={[0, Math.PI, 0]}
            randomizeScale
          />
          <ModelBirds
            position={position.birds}
            scale={[3, 3, 3]}
            rotation={[(Math.PI / 180) * 30, Math.PI / 5, -Math.PI]}
            randomizeScale
          />
        </group>
      </Suspense>
    </>
  );
};

export default Scene;

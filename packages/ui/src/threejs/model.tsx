import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

type GLTFResult = any & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    pCylinder1_smokeM_0: THREE.Mesh;
    polySurface4_BustM_0: THREE.Mesh;
    polySurface3_BustM_0: THREE.Mesh;
    polySurface2_BustM_0: THREE.Mesh;
    polySurface1_BustM_0: THREE.Mesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    BustM: THREE.MeshBasicMaterial;
    smokeM: THREE.MeshBasicMaterial;
  };
  animations: any;
};

export const Model = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/model_new.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations) {
      const animationName = animations[0]?.name;
      if (animationName && actions[animationName])
        actions[animationName].reset().fadeIn(0.5).play();

      return () => {
        if (animationName && actions[animationName]) {
          actions[animationName].fadeOut(0.5);
        }
      };
    }
  }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="cde323fd0e0c4aacbabae784c3d8b435fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.BustM}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" />
                  <group
                    name="pCylinder1"
                    position={[0, 9, -17.831]}
                    scale={[31.364, 28.498, 31.364]}
                  >
                    <mesh
                      name="pCylinder1_smokeM_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCylinder1_smokeM_0.geometry}
                      material={materials.smokeM}
                    />
                  </group>
                  <group
                    name="polySurface4"
                    position={[-6.223, -3.293, -0.191]}
                  >
                    <mesh
                      name="polySurface4_BustM_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface4_BustM_0.geometry}
                      material={materials.BustM}
                    />
                  </group>
                  <group
                    name="polySurface3"
                    position={[-7.017, -5.392, -0.191]}
                  >
                    <mesh
                      name="polySurface3_BustM_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface3_BustM_0.geometry}
                      material={materials.BustM}
                    />
                  </group>
                  <group
                    name="polySurface2"
                    position={[-7.665, -6.398, -0.191]}
                  >
                    <mesh
                      name="polySurface2_BustM_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface2_BustM_0.geometry}
                      material={materials.BustM}
                    />
                  </group>
                  <group
                    name="polySurface1"
                    position={[-6.368, -4.489, -0.191]}
                  >
                    <mesh
                      name="polySurface1_BustM_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface1_BustM_0.geometry}
                      material={materials.BustM}
                    />
                  </group>
                  <group name="bust" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

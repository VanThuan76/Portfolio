import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

export function ModelBird(props: any) {
    const group = useRef<Group>();
    const { nodes, materials, animations } = useGLTF("/bird.glb");
    const { actions } = useAnimations(animations, group);

    const flyingPath = [
        new Vector3(30, 30, 10),
        new Vector3(50, 25, 15),
        new Vector3(55, 20, 10),
        new Vector3(30, 30, 5),
        new Vector3(60, 30, 10),
    ];

    let currentTargetIndex = 0;

    useFrame(() => {
        if (!props.isFly) return;
        if (group.current) {
            const targetPosition: any = flyingPath[currentTargetIndex];
            const speed = 0.05;

            group.current.position.lerp(targetPosition, speed);

            if (group.current.position.distanceTo(targetPosition) < 0.1) {
                currentTargetIndex = (currentTargetIndex + 1) % flyingPath.length;
            }
        }
    });

    useEffect(() => {
        if (actions && animations.length > 0) {
            // @ts-ignore
            const animationName = animations[0].name;
            // @ts-ignore
            actions[animationName].play();
        }
    }, [actions, animations]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    position={[-0.625, 0, -17.137]}
                    rotation={[-Math.PI / 2, 0, 0.053]}
                >
                    <group
                        name="5f59736c86d4457fa045aec4aea6b7e0fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={(nodes as any)?._rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={(nodes as any)?.Object_7.geometry}
                                        material={materials.MatI_Ride_FengHuang_01a}
                                        skeleton={(nodes as any)?.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={(nodes as any)?.Object_8.geometry}
                                        material={materials.MatI_Ride_FengHuang_01b}
                                        skeleton={(nodes as any)?.Object_8.skeleton}
                                    />
                                    <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group
                                        name="AMesh_Ride_FengHuang_01"
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/bird.glb");

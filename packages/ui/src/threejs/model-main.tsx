import * as THREE from "three";
import { memo, useRef, useEffect, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useScroll, useGLTF, useAnimations } from "@react-three/drei";

function ModelMain(props: any) {
  const group = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF("/mysterious.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      // @ts-ignore
      const animationName = animations[0].name;
      // @ts-ignore
      actions[animationName].play();
    }
  }, [actions, animations]);

  // useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  // useFrame((state, delta) => {
  //     const action = actions['Take 001']
  //     // The offset is between 0 and 1, you can apply it to your models any way you like
  //     const offset = 1 - scroll.offset
  //     action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //     state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  //     state.camera.lookAt(0, 0, 0)
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4cd116fc63ca40809810ca0842dc78edfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={(nodes as any)?._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={(nodes as any)?.Object_7.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={(nodes as any)?.Object_8.geometry}
                    material={materials.metalmat}
                    skeleton={(nodes as any)?.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={(nodes as any)?.Object_10.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={(nodes as any)?.Object_12.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={(nodes as any)?.Object_14.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={(nodes as any)?.Object_16.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={(nodes as any)?.Object_18.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={(nodes as any)?.Object_20.geometry}
                    material={materials.normal}
                    skeleton={(nodes as any)?.Object_20.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[70.30178001, -179.98287016, 221.36529774]}
                    rotation={[-Math.PI / 2, 0, -3.05432637]}
                    scale={[0.31573631, 0.31573631, 0.31573629]}
                  />
                  <group
                    name="Object_9"
                    position={[-91.87325287, 4.90228271, -24.34089661]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_11"
                    position={[-111.32899475, 4.90228271, -24.34089661]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_13"
                    position={[-111.32899475, 4.90228271, -24.34089661]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_15"
                    position={[-91.87325287, 4.90228271, -24.34089661]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_17"
                    position={[-91.87325287, 4.90228271, -24.34089661]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object_19"
                    position={[-111.32899475, 4.90228271, -24.34089661]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Object078"
                    position={[76.07467651, 163.93734741, 118.59707642]}
                    rotation={[-Math.PI / 3, 0, 0]}
                    scale={3.09947491}
                  >
                    <group
                      name="Object_53"
                      position={[-97.40944672, -7.12828398, -96.26985931]}
                    >
                      <mesh
                        name="Object078_Plastic_Soft_0"
                        castShadow
                        receiveShadow
                        geometry={
                          (nodes as any)?.Object078_Plastic_Soft_0.geometry
                        }
                        material={materials.Plastic_Soft}
                      />
                    </group>
                  </group>
                  <group
                    name="body"
                    position={[41.0542717, -198.3637085, 208.67866516]}
                    rotation={[-Math.PI / 2, 0, 0.94663688]}
                  >
                    <group
                      name="Object_56"
                      position={[0, -0.25399017, 1.81708527]}
                    >
                      <mesh
                        name="body_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.body_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                    <group
                      name="leaf"
                      position={[-0.01513672, 1.3066864, 8.04049683]}
                    >
                      <group
                        name="Object_59"
                        position={[0.01513672, -1.5606792, -6.22341871]}
                      >
                        <mesh
                          name="leaf_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.leaf_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="hand2"
                      position={[2.1270752, -0.73425293, 5.06298828]}
                      rotation={[-5e-8, Math.PI / 3, 6e-8]}
                    >
                      <group
                        name="Object_62"
                        position={[-2.12701416, 0.48027036, -3.24589491]}
                      >
                        <mesh
                          name="hand2_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.hand2_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="hand1"
                      position={[-2.16906738, -0.73426819, 5.08361816]}
                      rotation={[5e-8, -Math.PI / 3, 6e-8]}
                    >
                      <group
                        name="Object_65"
                        position={[2.16912842, 0.48027036, -3.26652098]}
                      >
                        <mesh
                          name="hand1_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.hand1_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="foot2"
                      position={[2.42784119, -0.92294312, 2.01965332]}
                    >
                      <group
                        name="Object_68"
                        position={[-2.42791748, 0.66894537, -0.20257139]}
                      >
                        <mesh
                          name="foot2_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.foot2_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="foot1"
                      position={[-2.49061584, -0.92295837, 1.97839355]}
                    >
                      <group
                        name="Object_71"
                        position={[2.49066162, 0.66894537, -0.16131926]}
                      >
                        <mesh
                          name="foot1_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.foot1_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Object224"
                    position={[50.12818146, -163.15724182, 190.25805664]}
                    rotation={[-Math.PI / 2, 0, -3.05432637]}
                    scale={0.31573629}
                  />
                  <group
                    name="Object608"
                    position={[-54.38043213, 114.48329163, -87.57290649]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={3.09947491}
                  >
                    <group
                      name="Object_75"
                      position={[-55.32002258, -73.64599609, -80.3142395]}
                    >
                      <mesh
                        name="Object608_metalmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object608_metalmat_0.geometry}
                        material={materials.metalmat}
                      />
                      <mesh
                        name="Object608_paintmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object608_paintmat_0.geometry}
                        material={materials.paintmat}
                      />
                    </group>
                  </group>
                  <group
                    name="Object649"
                    position={[-85.04560852, 5.4029541, -25.4332428]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object649_normal_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object649_normal_0.geometry}
                      material={materials.normal}
                    />
                    <mesh
                      name="Object649_paintmat_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object649_paintmat_0.geometry}
                      material={materials.paintmat}
                    />
                    <mesh
                      name="Object649_metalmat_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object649_metalmat_0.geometry}
                      material={materials.metalmat}
                    />
                    <mesh
                      name="Object649_Plastic_Soft_0"
                      castShadow
                      receiveShadow
                      geometry={
                        (nodes as any)?.Object649_Plastic_Soft_0.geometry
                      }
                      material={materials.Plastic_Soft}
                    />
                    <mesh
                      name="Object649_alpha_glass_0"
                      castShadow
                      receiveShadow
                      geometry={
                        (nodes as any)?.Object649_alpha_glass_0.geometry
                      }
                      material={materials.alpha_glass}
                    />
                    <mesh
                      name="Object649_glassmat_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object649_glassmat_0.geometry}
                      material={materials.glassmat}
                    />
                    <mesh
                      name="Object649_Material_#5511_0"
                      castShadow
                      receiveShadow
                      // @ts-ignore
                      geometry={nodes["Object649_Material_#5511_0"].geometry}
                      material={materials.Material_5511}
                    />
                    <mesh
                      name="Object649_Material_#5512_0"
                      castShadow
                      receiveShadow
                      // @ts-ignore
                      geometry={nodes["Object649_Material_#5512_0"].geometry}
                      material={materials.Material_5512}
                    />
                    <mesh
                      name="Object649_glass_transp_0"
                      castShadow
                      receiveShadow
                      geometry={
                        (nodes as any)?.Object649_glass_transp_0.geometry
                      }
                      material={materials.glass_transp}
                    />
                    <mesh
                      name="Object649_interiors_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object649_interiors_0.geometry}
                      material={materials.interiors}
                    />
                    <mesh
                      name="Object649_alpha_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object649_alpha_0.geometry}
                      material={materials.alpha}
                    />
                  </group>
                  <group
                    name="wire7"
                    position={[53.44261169, -91.07002258, 179.83250427]}
                    rotation={[-1.53356226, 0, 0]}
                  >
                    <group
                      name="Object_91"
                      position={[-138.48822021, 205.26574707, 96.47297668]}
                    >
                      <mesh
                        name="wire7_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.wire7_normal_0.geometry}
                        material={materials.normal}
                      />
                      <Html
                        position={[53.44261169, -91.07002258, 179.83250427]}
                        distanceFactor={10}
                        occlude
                        transform
                        zIndexRange={[10, 0]}
                      >
                        <div className="annotation">
                          <h3>Chú thích 1</h3>
                          <p>Đây là vị trí đầu tiên.</p>
                        </div>
                      </Html>
                    </group>
                  </group>
                  <group
                    name="Object674"
                    position={[-85.04560852, 5.4029541, -25.4332428]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object674_outline_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object674_outline_0.geometry}
                      material={materials.outline}
                    />
                    <mesh
                      name="Object674_outline_0_1"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object674_outline_0_1.geometry}
                      material={materials.outline}
                    />
                  </group>
                  <group
                    name="Object675"
                    position={[85.46229553, -196.51934814, -246.38591003]}
                    rotation={[-Math.PI / 2, 0, 3.11258052]}
                  >
                    <group
                      name="Object_97"
                      position={[-0.00003052, 1e-8, 76.43017578]}
                    >
                      <mesh
                        name="Object675_metalmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object675_metalmat_0.geometry}
                        material={materials.metalmat}
                      />
                      <mesh
                        name="Object675_paintmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object675_paintmat_0.geometry}
                        material={materials.paintmat}
                      />
                      <mesh
                        name="Object675_glassmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object675_glassmat_0.geometry}
                        material={materials.glassmat}
                      />
                      <mesh
                        name="Object675_outline_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object675_outline_0.geometry}
                        material={materials.outline}
                      />
                    </group>
                    <group
                      name="Object680"
                      position={[-12.88732147, -0.00001526, 8.3510437]}
                    >
                      <group
                        name="Object_103"
                        position={[12.88728333, 0.00001526, 68.07914734]}
                      >
                        <mesh
                          name="Object680_metalmat_0"
                          castShadow
                          receiveShadow
                          geometry={
                            (nodes as any)?.Object680_metalmat_0.geometry
                          }
                          material={materials.metalmat}
                        />
                      </group>
                    </group>
                    <group
                      name="Object681"
                      position={[14.2895813, -0.00004578, 8.3510437]}
                    >
                      <group
                        name="Object_106"
                        position={[12.88728333, 0.00001526, 68.07914734]}
                      >
                        <mesh
                          name="Object681_metalmat_0"
                          castShadow
                          receiveShadow
                          geometry={
                            (nodes as any)?.Object681_metalmat_0.geometry
                          }
                          material={materials.metalmat}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Object532"
                    position={[-29.25786209, -38.73119354, -7.81499958]}
                    rotation={[-Math.PI / 2, 0, -0.69813215]}
                    scale={3.09947491}
                  >
                    <group
                      name="Object_109"
                      position={[-17.70678711, -77.44828796, -30.88183975]}
                      rotation={[0, 1e-8, 0.69813183]}
                    >
                      <mesh
                        name="Object532_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object532_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object531"
                    position={[-29.69633675, -38.73119354, -8.18292332]}
                    rotation={[-Math.PI / 2, 0, -4.8e-7]}
                    scale={3.09947491}
                  >
                    <group
                      name="Object_112"
                      position={[-63.34698105, -47.94712067, -30.88183975]}
                    >
                      <mesh
                        name="Object531_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object531_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object689"
                    position={[-245.52474976, -161.78152466, -259.30834961]}
                    rotation={[-1.62697374, -0.06681491, -0.70000964]}
                  >
                    <group name="Object_115" rotation={[0, 0, 0.69813177]}>
                      <mesh
                        name="Object689_metalmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object689_metalmat_0.geometry}
                        material={materials.metalmat}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane001"
                    position={[-101.43978882, 184.5949707, -141.8276062]}
                    rotation={[-Math.PI / 2, 0, -0.13987542]}
                  >
                    <group
                      name="Object_118"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane001_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane001_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane003"
                    position={[-95.31121063, 184.5949707, -140.96472168]}
                    rotation={[Math.PI / 2, -1.1e-7, 0.13987545]}
                    scale={-1}
                  >
                    <group
                      name="Object_121"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane003_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane003_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object688"
                    position={[170.33450317, 105.08512115, 196.56175232]}
                    rotation={[-Math.PI / 2, 0, 1.89186542]}
                  />
                  <group
                    name="Plane104"
                    position={[-83.1706543, 184.59500122, -140.37992859]}
                    rotation={[-Math.PI / 2, 0, 0.29998379]}
                  >
                    <group
                      name="Object_125"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane104_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane104_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane103"
                    position={[-77.25801849, 184.59500122, -142.20880127]}
                    rotation={[Math.PI / 2, 2.3e-7, -0.29998379]}
                    scale={-1}
                  >
                    <group
                      name="Object_128"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane103_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane103_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object687"
                    position={[126.55106354, 7.1027689, -162.45452881]}
                    rotation={[-Math.PI / 2, 0, -2.01520597]}
                  />
                  <group
                    name="Plane105"
                    position={[133.48123169, 48.26931381, -68.27579498]}
                    rotation={[-Math.PI / 2, 0, -1.89174992]}
                  >
                    <group
                      name="Object_132"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane105_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane105_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object697"
                    position={[112.71199036, -129.22288513, 159.70213318]}
                    rotation={[-Math.PI / 2, 0, 2.51610478]}
                  />
                  <group
                    name="Plane106"
                    position={[131.52874756, 48.26931381, -62.40280914]}
                    rotation={[Math.PI / 2, -0.00000121, 1.89174992]}
                    scale={-1}
                  >
                    <group
                      name="Object_136"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane106_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane106_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane108"
                    position={[148.08216858, 111.70812988, 190.15950012]}
                    rotation={[-Math.PI / 2, 0, 2.96895194]}
                  >
                    <group
                      name="Object_139"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane108_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane108_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object698"
                    position={[75.75125122, 32.19824982, -225.24731445]}
                    rotation={[-Math.PI / 2, 0, -1.72235147]}
                  />
                  <group
                    name="Plane107"
                    position={[141.98513794, 111.70812988, 189.09628296]}
                    rotation={[Math.PI / 2, 2.2e-7, -2.96895195]}
                    scale={-1}
                  >
                    <group
                      name="Object_143"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane107_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane107_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object699"
                    position={[452.97000122, 28.88640594, -125.94287109]}
                    rotation={[-Math.PI / 2, 0, -2.62371622]}
                  />
                  <group
                    name="Plane109"
                    position={[172.1028595, 108.39628601, 188.55389404]}
                    rotation={[-Math.PI / 2, 0, 2.06758735]}
                  >
                    <group
                      name="Object_147"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane109_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane109_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane110"
                    position={[169.15315247, 108.39628601, 183.11299133]}
                    rotation={[Math.PI / 2, 0.00000114, -2.06758745]}
                    scale={-1}
                  >
                    <group
                      name="Object_150"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane110_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane110_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane111"
                    position={[38.8253212, 198.59669495, 68.56391907]}
                    rotation={[1.57079498, 1.7e-7, -0.1345954]}
                    scale={-1}
                  >
                    <group
                      name="Object_153"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane111_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane111_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane112"
                    position={[32.69224548, 198.59669495, 69.39441681]}
                    rotation={[-Math.PI / 2, 0, 0.1345954]}
                  >
                    <group
                      name="Object_156"
                      position={[-0.96482849, -3.60569763, -2.09040833]}
                    >
                      <mesh
                        name="Plane112_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Plane112_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object700"
                    position={[246.55847168, 21.10449219, -12.25448608]}
                    rotation={[-Math.PI / 2, 0, -1.74073516]}
                  />
                  <group
                    name="Object704"
                    position={[-134.88082886, -36.70125961, -123.58306122]}
                    rotation={[-1.57634693, 0.01037295, -0.01842919]}
                  >
                    <group
                      name="Object_160"
                      position={[49.83522034, -98.14981842, 42.10421371]}
                    >
                      <mesh
                        name="Object704_Plastic_Soft_0"
                        castShadow
                        receiveShadow
                        geometry={
                          (nodes as any)?.Object704_Plastic_Soft_0.geometry
                        }
                        material={materials.Plastic_Soft}
                      />
                      <mesh
                        name="Object704_metalmat_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.Object704_metalmat_0.geometry}
                        material={materials.metalmat}
                      />
                    </group>
                  </group>
                  <group
                    name="wire1"
                    position={[11.34890747, -53.56198883, -65.67224121]}
                    rotation={[-1.74821163, -0.0947575, 0.14076219]}
                  >
                    <group
                      name="Object_164"
                      position={[-101.13696289, -36.73207092, 53.0096817]}
                      rotation={[0.18892812, 0, -0.14268237]}
                    >
                      <mesh
                        name="wire1_Plastic_Soft_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.wire1_Plastic_Soft_0.geometry}
                        material={materials.Plastic_Soft}
                      />
                    </group>
                  </group>
                  <group
                    name="wire2"
                    position={[51.82633972, -43.97445297, -45.54094315]}
                    rotation={[-1.60719284, -0.03518278, -0.80267596]}
                  >
                    <group
                      name="Object_167"
                      position={[-80.7066803, -112.35960388, 49.37740707]}
                      rotation={[0, 0, 0.80203553]}
                    >
                      <mesh
                        name="wire2_Plastic_Soft_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.wire2_Plastic_Soft_0.geometry}
                        material={materials.Plastic_Soft}
                      />
                    </group>
                    <group
                      name="Object081"
                      position={[3.65368438, -65.19503021, -24.49288177]}
                      rotation={[0.04339397, 0.01220214, -2.86764688]}
                      scale={[3.09947491, 3.09947491, 3.09947515]}
                    >
                      <group
                        name="Object_170"
                        position={[-91.86074066, 2.8683815, -19.1242733]}
                        rotation={[0, 0, -0.51937314]}
                      >
                        <mesh
                          name="Object081_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.Object081_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object332"
                      position={[3.79947543, -102.16218567, -21.43030548]}
                      rotation={[0.05136002, -0.0778713, -2.34898273]}
                      scale={[3.09947515, 3.09947515, 3.09947491]}
                    >
                      <group
                        name="Object_173"
                        position={[-78.66785431, -54.73538971, -19.12427139]}
                      >
                        <mesh
                          name="Object332_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.Object332_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object682"
                      position={[0.54150462, -22.69852066, -18.80324173]}
                      rotation={[0.07604924, -0.03027095, -1.64060118]}
                      scale={[3.09947515, 3.09947586, 3.09947467]}
                    >
                      <group
                        name="Object_176"
                        position={[-78.66785431, -54.73538971, -19.12427139]}
                      >
                        <mesh
                          name="Object682_normal_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.Object682_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="wire3"
                    position={[-3.76817322, -84.44289398, -56.36903381]}
                    rotation={[-Math.PI / 2, 0, 0.06867397]}
                  >
                    <group
                      name="Object_179"
                      position={[-83.20866394, -25.28561401, 89.84584808]}
                      rotation={[0, 0, -0.06867395]}
                    >
                      <mesh
                        name="wire3_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.wire3_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="wire4"
                    position={[50.92132568, -99.01292419, -52.27270508]}
                    rotation={[-1.55880025, 0.07173602, -0.16583954]}
                  >
                    <group
                      name="Object_182"
                      position={[-129.69184875, -48.86088181, 104.4158783]}
                      rotation={[0, 0, 0.16540909]}
                    >
                      <mesh
                        name="wire4_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.wire4_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="wire5"
                    position={[77.6723938, -109.81369019, -59.70341492]}
                    rotation={[-1.55655689, -0.0486544, 0.28483793]}
                  >
                    <group
                      name="Object_185"
                      position={[-165.79606628, 12.77730179, 115.21664429]}
                      rotation={[0, 0, -0.28449155]}
                    >
                      <mesh
                        name="wire5_normal_0"
                        castShadow
                        receiveShadow
                        geometry={(nodes as any)?.wire5_normal_0.geometry}
                        material={materials.normal}
                      />
                    </group>
                  </group>
                  <group
                    name="Object705"
                    position={[-85.04560852, 5.4029541, -25.4332428]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object705_Material_#5516_0"
                      castShadow
                      receiveShadow
                      // @ts-ignore
                      geometry={nodes["Object705_Material_#5516_0"].geometry}
                      material={materials.Material_5516}
                    />
                  </group>
                  <group
                    name="treezzzzz"
                    position={[-173.38865662, -142.4724884, 79.92910767]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Object619"
                      position={[80.20849609, -105.9949646, -2.98504639]}
                      rotation={[-0.3197764, 0.8602292, -1.37107732]}
                      scale={[0.79153454, 0.7915343, 0.79153425]}
                    >
                      <group
                        name="Object_191"
                        position={[0.66846359, 3.96862793, 17.98674965]}
                      >
                        <mesh
                          name="Object619_alpha_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.Object619_alpha_0.geometry}
                          material={materials.alpha_0}
                        />
                      </group>
                    </group>
                    <group
                      name="Object620"
                      position={[-62.02587891, -105.94561768, -1.42807007]}
                      rotation={[-0.3197764, 0.8602292, -1.37107732]}
                      scale={[0.79153454, 0.7915343, 0.79153425]}
                    >
                      <group
                        name="Object_194"
                        position={[0.66846359, 3.96862793, 17.98674965]}
                      >
                        <mesh
                          name="Object620_alpha_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.Object620_alpha_0.geometry}
                          material={materials.alpha_0}
                        />
                      </group>
                    </group>
                    <group
                      name="Object621"
                      position={[-81.05310059, 105.38568878, -0.6635437]}
                      rotation={[-0.3197764, 0.8602292, -1.37107732]}
                      scale={[0.79153454, 0.7915343, 0.79153425]}
                    >
                      <group
                        name="Object_197"
                        position={[0.66846359, 3.96862793, 17.98674965]}
                      >
                        <mesh
                          name="Object621_alpha_0"
                          castShadow
                          receiveShadow
                          geometry={(nodes as any)?.Object621_alpha_0.geometry}
                          material={materials.alpha_0}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Object622"
                    position={[-85.04560852, 5.4029541, -25.4332428]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object622_alpha_0"
                      castShadow
                      receiveShadow
                      geometry={(nodes as any)?.Object622_alpha_0.geometry}
                      material={materials.alpha_0}
                    />
                  </group>
                  <group
                    name="Object706"
                    position={[26.37422943, -164.47332764, 185.10646057]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Object_202"
                      position={[-111.41983795, 210.53970337, 169.87628174]}
                    >
                      <mesh
                        name="Object706_Material_#5518_0"
                        castShadow
                        receiveShadow
                        // @ts-ignore
                        geometry={nodes["Object706_Material_#5518_0"].geometry}
                        material={materials.Material_5518}
                      />
                    </group>
                  </group>
                  <group
                    name="Object707"
                    position={[26.37422943, -163.14129639, 185.10646057]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Object_205"
                      position={[-111.41983795, 210.53970337, 168.54425049]}
                    >
                      <mesh
                        name="Object707_Material_#5518_0"
                        castShadow
                        receiveShadow
                        // @ts-ignore
                        geometry={nodes["Object707_Material_#5518_0"].geometry}
                        material={materials.Material_5518}
                      />
                    </group>
                  </group>
                  <group
                    name="Object708"
                    position={[-121.50937653, 153.74084473, 54.20893478]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Object_208"
                      position={[-111.41983795, 210.53970337, 169.87628174]}
                    >
                      <mesh
                        name="Object708_Material_#5518_0"
                        castShadow
                        receiveShadow
                        // @ts-ignore
                        geometry={nodes["Object708_Material_#5518_0"].geometry}
                        material={materials.Material_5518}
                      />
                    </group>
                  </group>
                  <group
                    name="Object709"
                    position={[-121.50937653, 155.07287598, 54.20893478]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Object_211"
                      position={[-111.41983795, 210.53970337, 168.54425049]}
                    >
                      <mesh
                        name="Object709_Material_#5518_0"
                        castShadow
                        receiveShadow
                        // @ts-ignore
                        geometry={nodes["Object709_Material_#5518_0"].geometry}
                        material={materials.Material_5518}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mysterious.glb");

export default memo(ModelMain);
import { memo } from "react";
import { useLoader } from "@react-three/fiber";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

function ModelSchoolPark(props: any) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/optimized_school_park.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
      );
      loader.setDRACOLoader(dracoLoader);
    },
  );


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_4?.geometry}
        material={materials.Pavement}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_6?.geometry}
        material={materials.Ground}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_8?.geometry}
        material={materials.Curbs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_10?.geometry}
        material={materials.Sakura_Tree_Bark}
        position={[6, 0, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any)?.Object_11?.geometry}
        material={materials.Tree_Branch_2}
        position={[6, 0, -12]}
      />
    </group>
  );
}

export default memo(ModelSchoolPark);

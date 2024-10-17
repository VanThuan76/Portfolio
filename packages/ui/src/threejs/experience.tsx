import ModelMain from "@three/model-main";
import ModelCaffe from "@three/model-caffe";
import ModelCastle from "@three/model-castle";
import ModelSchool from "@three/model-school";
import ModelRestaurant from "@three/model-restaurant";
import ModelDepartment from "@three/model-department";
import ModelMountainBackground from "@three/model-mountain-background";
import ModelCityBackground from "@three/model-city-background";
import ModelFarmBackground from "@three/model-farm-background";
import ModelBirds from "@three/project/model-birds";
import ModelFallingSnow from "@three/project/model-falling-snow";
// Course - School
import ModelSchoolPark from "@three/course/model-school-park";
// Config
import { EffectComposerHandler, CameraHandler, Common } from "@three/view";

const Experience = ({
  positions,
  breakpoint,
}: {
  positions: any;
  breakpoint: any;
}) => {
  const isMobileOrIpad = ["xs", "sm"].includes(breakpoint);
  const {
    positionModelRestaurant,
    positionModelCaffe,
    positionModelDepartment,
    positionModelMain,
    positionModelSchool,
    positionModelMountain,
    positionModelCity,
    positionModelCastle,
  } = positions;

  return (
    <>
      <Common />
      <group position={[0, 0, 400]}>
        {!isMobileOrIpad && (
          <ModelCityBackground
            position={
              positionModelCity.length > 0
                ? (positionModelCity.slice(0, 3) as [number, number, number])
                : [1000, 0, 100]
            }
            rotation={[0, Math.PI / 4, 0]}
            scale={positionModelCity.length > 0 ? [50, 50, 50] : [20, 20, 20]}
          />
        )}
        <ModelFarmBackground
          position={[-700, -500, -1000]}
          scale={[5, 5, 5]}
          rotation={[0, Math.PI / 4, 0]}
        />
        <ModelMountainBackground
          position={
            positionModelMountain.length > 0
              ? (positionModelMountain.slice(0, 3) as [number, number, number])
              : [-1500, -50, -100]
          }
          scale={
            positionModelMountain.length > 0 ? [700, 700, 700] : [200, 200, 200]
          }
        />
        {/* Project-Models */}
        <ModelBirds
          position={[-1000, 300, -800]}
          scale={[100, 100, 100]}
          rotation={[(Math.PI / 180) * 30, Math.PI / 5, -Math.PI]}
          randomizeScale
        />
        <ModelFallingSnow
          position={[-1000, 0, -1000]}
          scale={[100, 100, 100]}
        />
      </group>
      <group position={breakpoint === "xs" ? [0, -50, 400] : [0, 50, 450]}>
        <ModelCastle
          position={
            positionModelCastle.length > 0
              ? (positionModelCastle.slice(0, 3) as [number, number, number])
              : [-800, -200, -200]
          }
          scale={positionModelMountain.length > 0 ? [10, 10, 10] : [7, 7, 7]}
        />
        <ModelRestaurant
          position={
            positionModelRestaurant.length > 0
              ? (positionModelRestaurant.slice(0, 3) as [
                  number,
                  number,
                  number,
                ])
              : [-800, -200, 150]
          }
          scale={[30, 30, 30]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <ModelMain
          position={
            positionModelMain.length > 0
              ? (positionModelMain.slice(0, 3) as [number, number, number])
              : [100, 200, -100]
          }
          scale={[2, 2, 2]}
        />
        <ModelCaffe
          position={
            positionModelCaffe.length > 0
              ? (positionModelCaffe.slice(0, 3) as [number, number, number])
              : [200, -100, -500]
          }
          scale={
            positionModelCaffe.length > 0 ? [0.1, 0.1, 0.1] : [0.05, 0.05, 0.05]
          }
          rotation={[0, 1.2, 0]}
        />
        {!isMobileOrIpad && (
          <ModelDepartment
            position={
              positionModelDepartment.length > 0
                ? (positionModelDepartment.slice(0, 3) as [
                    number,
                    number,
                    number,
                  ])
                : [600, -100, -50]
            }
            scale={
              positionModelDepartment.length > 0 ? [60, 60, 60] : [50, 50, 50]
            }
          />
        )}
        <group>
          {!isMobileOrIpad && (
            <ModelSchool
              position={
                positionModelSchool.length > 0
                  ? (positionModelSchool.slice(0, 3) as [
                      number,
                      number,
                      number,
                    ])
                  : [720, -200, 200]
              }
              scale={
                positionModelSchool.length > 0 ? [20, 20, 20] : [10, 10, 10]
              }
            />
          )}
          {!isMobileOrIpad && (
            <ModelSchoolPark
              position={[1000, -200, 450]}
              rotation={[0, Math.PI / 2 + Math.PI, 0]}
              scale={[15, 15, 15]}
            />
          )}
        </group>
        {/* <ModelSchooln={[700, -150, 100]} scale={[20, 20, 20]} /> */}
      </group>
      <EffectComposerHandler />
      <CameraHandler positions={positions} breakpoint={breakpoint} />
    </>
  );
};

export default Experience;

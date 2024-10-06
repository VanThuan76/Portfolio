"use client";

import dynamic from "next/dynamic";
import React from "react";

import { useAppSelector } from "@store/index";

import { StickyScroll } from "@ui/molecules/effects/sticky-scroll-reveal";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules//ui-elements/typography-h3";

import useBreakpoint from "@shared/hooks/use-break-point";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

const SceneProject = dynamic(() => import("@three/project/index"), {
  ssr: false,
});

export default function Page() {
  const { projects } = useAppSelector((state) => state.app);
  const breakpoint = useBreakpoint();

  const optionsScene =
    breakpoint === "sm"
      ? {
          position: { bird: [0, 30, 10], birds: [0, 30, 10] },
          scale: [0.03, 0.03, 0.03],
          isFly: false,
        }
      : {
          position: { bird: [25, 40, 10], birds: [-10, 40, 10] },
          scale: [0.04, 0.04, 0.04],
          isFly: true,
        };

  return (
    <>
      <div className="fixed z-50 w-full h-full gap-5 overflow-hidden bg-black/50 md:gap-0 md:py-6">
        <MotionContainer
          type="scale"
          className="absolute w-[200px] h-[100px] top-5 left-10"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <TypographyH3
              className="relative z-10 text-xl text-black"
              title="Austin's Project"
            />
            <LoaderImage
              isLoader={false}
              width={200}
              height={100}
              alt="@brush"
              src="/images/project/brush.png"
              className="absolute top-0 left-0 z-0 object-contain w-full h-full"
            />
          </div>
        </MotionContainer>
        <MotionContainer
          direction="top"
          className="relative flex flex-col items-center justify-end w-full h-full pr-0 md:justify-center md:pr-5"
        >
          <StickyScroll
            content={projects.map((project) => {
              return {
                title: project.title as string,
                description: project.description as string,
                content: (
                  <div className="flex flex-col items-end justify-end w-full h-full gap-2 shadow-md">
                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                      <LoaderImage
                        isLoader={false}
                        src={project.image_url}
                        alt={"image"}
                        width={355}
                        height={300}
                        className="object-cover object-center w-full h-full"
                        style={{
                          marginRight: ".84rem",
                          WebkitMaskImage: "url(/mask-project.svg)",
                          maskImage: "url(/mask-project.svg)",
                          WebkitMaskSize: "cover",
                          maskSize: "cover",
                          overflow: "hidden",
                          position: "relative",
                          transition: "width 0.5s",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack &&
                        project.tech_stack
                          .split(",")
                          .map((item) => ({
                            title: item,
                            img:
                              item &&
                              `/icon-techstack/${item.toLocaleLowerCase()}.svg`,
                          }))
                          .map((tech, i) => {
                            return (
                              <button
                                key={i}
                                type="button"
                                className="relative inline-flex h-7 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                              >
                                <div
                                  className="inline-flex items-center justify-between w-full h-full gap-2 p-2 text-sm font-medium text-black bg-[#FCCD2A] rounded-md cursor-pointer dark:text-white backdrop-blur-3xl"
                                  style={{
                                    WebkitMaskImage:
                                      "url(/images/project/tag.png)",
                                    maskImage: "url(/images/project/tag.png)",
                                    WebkitMaskSize: "cover",
                                    maskSize: "cover",
                                    overflow: "hidden",
                                    position: "relative",
                                    transition: "width 0.5s",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                >
                                  <LoaderImage
                                    src={tech.img}
                                    alt={tech.title}
                                    isLoader={false}
                                    width={50}
                                    height={50}
                                    className="object-contain w-[15px] h-[15px]"
                                  />
                                  {tech.title}
                                </div>
                              </button>
                            );
                          })}
                    </div>
                  </div>
                ),
              };
            })}
          />
        </MotionContainer>
      </div>
      <div className="fixed inset-0 z-30 flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-full h-full overflow-hidden pointer-events-none">
          <SceneProject
            isFly={optionsScene.isFly}
            scale={optionsScene.scale}
            position={optionsScene.position}
          />
        </div>
      </div>
    </>
  );
}

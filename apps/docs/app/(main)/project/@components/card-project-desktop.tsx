"use client";

import Image from "next/image";
import React from "react";

import { IProject } from "@server/data/types/project";

import { StickyScroll } from "@ui/molecules/effects/sticky-scroll-reveal";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

interface Props {
  projects: IProject[];
}

const CardProjectDesktop = ({ projects }: Props) => {
  return (
    <div className="relative w-full h-full gap-5 px-4 pt-6 overflow-hidden bg-white backdrop-blur-sm md:gap-0 md:py-6 md:px-0">
      <MotionContainer
        direction="top"
        className="relative z-40 flex flex-col items-center justify-center w-full h-full pr-5"
      >
        <StickyScroll
          content={projects.map((project) => {
            return {
              title: project.title as string,
              description: project.description as string,
              content: (
                <div className="flex flex-col items-end justify-end w-full h-full gap-2">
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
                                  WebkitMaskImage: "url(/project-tag.png)",
                                  maskImage: "url(/project-tag.png)",
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

      <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-orange-300 h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_50%,red)]" />

      <div className="absolute -bottom-20 -left-10 w-[600px] h-full">
        <Image
          width={1980}
          height={1280}
          alt="@tree"
          src="/project-super-tree.png"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="absolute top-0 -left-5 w-[150px] h-[150px]">
        <Image
          width={1280}
          height={900}
          alt="@sun"
          src="/project-sun.png"
          className="object-contain object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default CardProjectDesktop;

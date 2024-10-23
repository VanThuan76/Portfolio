"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@utils/tw";
import { fontProject } from "@shared/utils/font";

import { RootState, useAppSelector } from "@store/index";
import {
  IProject,
  ProjectImageSupabase,
  ProjectTagSupabase,
} from "@shared/query/types/project";

import { StickyScroll } from "@ui/molecules/effects/sticky-scroll-reveal";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";

import useBreakpoint from "@shared/hooks/use-break-point";
import EmblaCarousel from "@ui/molecules/effects/embla-carousel";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";
import PlateShowContent from "@ui/organisms/plate-show-content";

export default function Page() {
  const { tags, projects } = useAppSelector((state: RootState) => state.app);
  const breakpoint = useBreakpoint();
  const t = useTranslations("pages.project");

  return (
    <div className="relative w-full h-full border border-black overflow-hidden bg-[url('/images/project/bg-new.jpg')] bg-center bg-no-repeat">
      <MotionContainer
        type="blur"
        className="absolute w-[200px] h-[100px] left-10 top-10 md:left-[15%] z-[100]"
      >
        <div className="relative flex items-start justify-start w-full h-full md:items-end md:justify-center">
          <TypographyH3
            className={cn(
              "relative z-10 text-xl text-black font-bold scale-[3] md:scale-[5]",
              fontProject.className,
            )}
            title={t("title")}
          />
        </div>
      </MotionContainer>
      <div
        className="relative z-50 w-full h-full gap-5 overflow-hidden md:gap-0 md:py-6 bg-[url('/images/project/picture-new.png')] bg-cover bg-top bg-no-repeat"
        style={{
          WebkitMaskImage: "url(/images/project/bg-brush.png)",
          maskImage: "url(/images/project/bg-brush.png)",
          position: "fixed",
          WebkitMaskSize: breakpoint === "xs" ? "cover" : "120%",
          maskSize: breakpoint === "xs" ? "cover" : "120%",
          WebkitMaskPosition: "center",
          transition: "width 0.5s",
        }}
      >
        <MotionContainer
          type="blur"
          className="relative z-50 flex flex-row items-center justify-center w-full h-full pr-0 md:flex-col md:pr-5"
        >
          <StickyScroll
            content={projects.map((project: IProject) => {
              return {
                title: project.title as string,
                description: (
                  <PlateShowContent
                    content={JSON.parse(project.content as string)}
                  />
                ),
                content: (
                  <>
                    <EmblaCarousel
                      slides={project.images.map(
                        (image: ProjectImageSupabase) => ({
                          url: image.image_url as string,
                          alt: project.title,
                        }),
                      )}
                      options={{ dragFree: true, loop: true }}
                      isBasic={false}
                    />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(
                        (item: ProjectTagSupabase, i: number) => {
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
                                  src={
                                    tags.find(
                                      (tag: any) => tag.value === item.name,
                                    )?.image_url as string
                                  }
                                  alt={item.name as string}
                                  isLoader={false}
                                  width={50}
                                  height={50}
                                  className="object-contain w-[15px] h-[15px]"
                                />
                                {item.name}
                              </div>
                            </button>
                          );
                        },
                      )}
                    </div>
                  </>
                ),
              };
            })}
          />
        </MotionContainer>
        <div className="absolute top-0 left-0 z-40 w-full h-full bg-black/20" />
      </div>
    </div>
  );
}

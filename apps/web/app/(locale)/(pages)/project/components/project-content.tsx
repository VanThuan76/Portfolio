"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { useBreakpoint } from "@repo/hooks";
import {
  IProject,
  ProjectImageSupabase,
  ProjectTagSupabase,
} from "@repo/supabase/queries";

import { StickyScroll } from "@repo/design-system/components/molecules/effects/sticky-scroll-reveal";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

import PlateShowContent from "@repo/editor/content";
import EmblaCarousel from "@repo/design-system/components/molecules/effects/embla-carousel";
import MotionContainer from "@repo/design-system/components/molecules/frame/dynamic-contain";
import PixelTransition from "@shared/layouts/transitions/pixel";

interface ProjectContentProps {
  projects: IProject[];
  tags: Array<{
    value: string | null;
    image_url: string | null;
    [key: string]: any;
  }>;
}

export function ProjectContent({ projects, tags }: ProjectContentProps) {
  const breakpoint = useBreakpoint();
  const t = useTranslations("pages.project");

  return (
    <PixelTransition>
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="relative z-50 w-full h-full gap-5 overflow-hidden md:gap-0 md:py-6 bg-[url('/images/project/picture.jpg')] bg-cover bg-top bg-no-repeat"
          style={{
            WebkitMaskImage: "url(/images/project/bg-brush.webp)",
            maskImage: "url(/images/project/bg-brush.webp)",
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
                                      "url(/images/project/tag.webp)",
                                    maskImage: "url(/images/project/tag.webp)",
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
    </PixelTransition>
  );
}

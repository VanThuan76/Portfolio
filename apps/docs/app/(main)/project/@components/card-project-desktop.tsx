"use client";
import { Cpu, Library, TypeIcon } from "lucide-react";

import { IProject } from "@server/data/types/project";
import { StickyScroll } from "@ui/molecules/effects/sticky-scroll-reveal";
import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import IconCloud from "@ui/molecules/ui-elements/icon-cloud";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import { BentoCard } from "./card-bento-desktop";

interface Props {
  projects: IProject[];
}

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const CardProjectDesktop = ({ projects }: Props) => {
  return (
    <div className="grid w-full h-full grid-cols-1 text-black sm:grid-cols-3 lg:grid-cols-3">
      <BentoCard
        title="TechStack"
        icon={<Cpu size={24} />}
        description={<span>Technologies, libraries, and tools commonly.</span>}
        gradient="from-cyan-900 via-60% via-sky-600 to-indigo-600"
        className="w-full h-full sm:col-span-1"
      >
        <MotionContainer direction="bottom">
          <IconCloud iconSlugs={slugs} />
        </MotionContainer>
      </BentoCard>

      <BentoCard
        title="Stories"
        icon={<Library size={24} />}
        description="My projects and products showcase a diverse range of skills and expertise across various fields."
        gradient="from-cyan-900 via-60% via-sky-600 to-indigo-600"
        className="w-full h-full border-l border-l-neutral-200 sm:col-span-2"
      >
        <Separator className="w-full h-[1px] bg-slate-300 dark:bg-white z-10 my-2" />
        <MotionContainer direction="top">
          <StickyScroll
            content={projects.map((project) => {
              return {
                title: project.title as string,
                description: project.description as string,
                content: (
                  <div className="flex flex-col items-start justify-start w-full h-full gap-2 mt-2">
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
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex items-center justify-between w-full h-full gap-2 px-3 py-1 text-sm font-medium text-black rounded-md cursor-pointer bg-zinc-200 dark:bg-slate-950 dark:text-white backdrop-blur-3xl">
                                  <LoaderImage
                                    src={tech.img}
                                    alt={tech.title}
                                    isLoader={false}
                                    width={50}
                                    height={50}
                                    className="object-contain w-full h-full"
                                  />
                                  {tech.title}
                                </span>
                              </button>
                            );
                          })}
                    </div>
                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                      <LoaderImage
                        isLoader={false}
                        src={project.image_url}
                        alt={"image"}
                        width={355}
                        height={300}
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                  </div>
                ),
              };
            })}
          />
        </MotionContainer>
      </BentoCard>

      <BentoCard
        title="Full Gradient"
        icon={<TypeIcon size={24} />}
        description="A conic gradient is a gradient that goes in a circular direction."
        gradient="from-lime-300 via-60% via-green-200 to-lime-200"
        className="w-full h-full border-t border-t-neutral-200 sm:col-span-4"
      />
    </div>
  );
};

export default CardProjectDesktop;

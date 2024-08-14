"use client";

import { cn } from "@utils/tw";

import { IProject } from "@server/data/types/project";

import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { BentoGrid, BentoGridItem } from "@ui/molecules/frame/bento-grid";

interface Props {
  projects: IProject[];
}
const CardProjectMobile = ({ projects }: Props) => {
  return (
    <BentoGrid className="flex flex-wrap md:hidden justify-start items-start w-full h-full">
      {projects
        .map((project) => ({
          title: project.title,
          description: project.description,
          header: (
            <div className="w-full h-full overflow-hidden">
              <LoaderImage
                isLoader={false}
                src={project.image_url}
                alt={project.title}
                width={500}
                height={150}
                className="w-full h-[150px] object-cover object-top"
              />
            </div>
          ),
          icon: (
            <div className="w-full flex justify-start items-start flex-wrap gap-2">
              {project.tech_stack.split(",").map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#153448] text-white px-2 py-1 rounded-xl text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          ),
        }))
        .map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn(
              i === 3 || i === 6 ? "md:col-span-1" : "",
              "border border-zinc-200/50 shadow-sm",
            )}
          />
        ))}
    </BentoGrid>
  );
};

export default CardProjectMobile;

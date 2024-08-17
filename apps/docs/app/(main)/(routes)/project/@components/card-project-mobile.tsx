"use client";

import { IProject } from "@server/data/types/project";

import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import BlurFade from "@ui/molecules/effects/blur-effect";

interface Props {
  projects: IProject[];
}
const CardProjectMobile = ({ projects }: Props) => {
  return (
    <div className="w-full h-full columns-2 gap-4 sm:columns-3 pt-12 px-4">
      {projects.map((item, idx) => (
        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
          <LoaderImage
            src={item.image_url}
            alt={item.title}
            isLoader={false}
            width={500}
            height={150}
            className="mb-4 size-full rounded-lg object-contain"
          />
        </BlurFade>
      ))}
    </div>
    // <BentoGrid className="flex flex-wrap md:hidden justify-start items-start w-full h-full">
    //   {projects.map((project) => ({
    //     title: project.title,
    //     description: project.description,
    //     header: (
    //       <div className="w-full h-full overflow-hidden">
    //         <LoaderImage
    //           isLoader={false}
    //           src={project.image_url}
    //           alt={project.title}
    //           width={500}
    //           height={150}
    //           className="w-full h-[150px] object-cover object-top"
    //         />
    //       </div>
    //     ),
    //     icon: (
    //       <div className="w-full flex justify-start items-start flex-wrap gap-2">
    //         {project.tech_stack.split(",").map((tech, i) => (
    //           <span
    //             key={i}
    //             className="bg-[#153448] text-white px-2 py-1 rounded-xl text-xs"
    //           >
    //             {tech}
    //           </span>
    //         ))}
    //       </div>
    //     ),
    //   }))
    //     .map((item, i) => (
    //       <BentoGridItem
    //         key={i}
    //         title={item.title}
    //         description={item.description}
    //         header={item.header}
    //         icon={item.icon}
    //         className={cn(
    //           i === 3 || i === 6 ? "md:col-span-1" : "",
    //           "border border-zinc-200/50 shadow-sm",
    //         )}
    //       />
    //     ))}
    // </BentoGrid>
  );
};

export default CardProjectMobile;

"use client";

import { IProject } from "@server/data/types/project";

import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import BlurFade from "@ui/molecules/effects/blur-effect";

interface Props {
  projects: IProject[];
}
const CardProjectMobile = ({ projects }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full gap-3 px-4 pt-6 md:hidden">
      <div className="space-y-3">
        <TypographyH3 title="Selected projects" />
        <TypographyP title="" />
      </div>
      <Separator className="w-full h-[1px] bg-slate-300" />
      <div className="w-full h-full gap-4 columns-2 sm:columns-3">
        {projects.map((item, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <LoaderImage
              src={item.image_url}
              alt={item.title}
              isLoader={false}
              width={500}
              height={150}
              className="object-contain mb-4 rounded-lg size-full"
            />
          </BlurFade>
        ))}
      </div>
    </div>
    // <BentoGrid className="flex flex-wrap items-start justify-start w-full h-full md:hidden">
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
    //       <div className="flex flex-wrap items-start justify-start w-full gap-2">
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

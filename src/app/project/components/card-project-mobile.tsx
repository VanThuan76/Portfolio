import { LoaderImage } from "@/components/custom/loader-image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IProject } from "@/server/data/types/project";

interface Props {
  projects: IProject[];
}
const CardProjectMobile = ({ projects }: Props) => {
  return (
    <BentoGrid className="flex md:hidden w-full h-full">
      {projects
        .map((project) => ({
          title: project.title,
          description: project.description,
          header: (
            <LoaderImage
              isLoader={false}
              src={project.image_url}
              alt={""}
              width={500}
              height={250}
            />
          ),
          icon: (
            <div className="w-full flex flex-wrap gap-2">
              {project.tech_stack.split(",").map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#153448] px-2 py-1 rounded-xl text-xs"
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
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
    </BentoGrid>
  );
};

export default CardProjectMobile;

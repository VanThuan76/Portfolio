"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { InfiniteSlider } from "@repo/design-system/components/molecules/effects/infinite-slider";
import { Button } from "@repo/design-system/components/atoms/button";

import CardFarme from "../components/icons/card-frame";

const projects = [
  { id: 1, logo: "/images/home/person_1.png" },
  { id: 2, logo: "/images/home/person_2.png" },
  { id: 3, logo: "/images/home/person_3.png" },
  { id: 4, logo: "/images/home/person_4.png" },
  { id: 5, logo: "/images/home/person_5.png" },
  { id: 6, logo: "/images/home/person_6.png" },
  { id: 7, logo: "/images/home/person_7.png" },
];

const ProjectOutstanding = () => {
  const t = useTranslations("pages.home");

  return (
    <section
      id="project-outstanding"
      className="flex flex-col items-start md:items-center justify-center px-4 pb-6 mt-0 lg:mt-24 md:p-12 lg:px-24 lg:pb-24 max-h-none h-[80svh] rounded-t-[25px] md:rounded-t-[50px] bg-[#B17457] min-h-fit"
    >
      <div className="flex flex-col items-start md:items-center justify-center gap-2 max-w-fit">
        <h2 className="text-xl font-bold md:text-3xl w-[70%] md:w-full">
          {t("title_section_project")}
        </h2>
        <p className="text-sm text-left md:text-center md:text-base w-[70%] md:w-full">
          {t("description_section_project")}
        </p>
      </div>
      <Button className="mt-5">{t("connect_with_us")}</Button>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-full max-w-max">
        <InfiniteSlider durationOnHover={0} direction={"horizontal"}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[276/366] w-[250px] md:w-[275px] group"
            >
              <CardFarme className="absolute inset-0 w-full h-full text-white fill-current" />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath:
                    "path('M0.65332 14.094V314.227C0.65332 321.86 6.85181 328.053 14.4918 328.053H124.335C131.975 328.053 138.173 334.246 138.173 341.878V351.672C138.173 359.305 144.372 365.497 152.012 365.497H261.855C269.495 365.497 275.693 359.305 275.693 351.672V14.094C275.693 6.46104 269.495 0.26828 261.855 0.26828H14.4918C6.85181 0.26828 0.65332 6.46104 0.65332 14.094Z')",
                }}
              >
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`Project ${project.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-white/50" />
                )}
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default ProjectOutstanding;

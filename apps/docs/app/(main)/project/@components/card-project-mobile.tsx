"use client";

import { IProject } from "@server/data/types/project";

import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

import BlurFade from "@ui/molecules/effects/blur-effect";
import useFullScreenBackground from "@shared/hooks/use-mobile-full-screen";

interface Props {
  projects: IProject[];
}
const CardProjectMobile = ({ projects }: Props) => {
  useFullScreenBackground({ backgroundColor: "#e8e6e6" });

  return (
    <div className="flex flex-col items-start justify-start w-full h-screen gap-3 px-4 pt-6 md:hidden">
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
  );
};

export default CardProjectMobile;

"use client";

import Image from "next/image";

import { IProject } from "@server/data/types/project";

import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

import BlurFade from "@ui/molecules/effects/blur-effect";

interface Props {
    projects: IProject[];
    isPending: boolean
}
const CardProjectMobile = ({ isPending, projects }: Props) => {
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

            {isPending && (
                <div className="absolute flex justify-center items-center bottom-0 right-1/2 translate-x-1/2 w-[100px] h-[100px] md:hidden z-[999999]">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-[24px] h-[24px] animate-scale-up`}
                            style={{ animationDelay: `${index * 0.5}s`, overflow: 'hidden' }}
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="loading"
                                src="/logo.png"
                                priority={true}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardProjectMobile;

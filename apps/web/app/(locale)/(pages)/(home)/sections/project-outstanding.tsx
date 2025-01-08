'use client'

import { useTranslations } from "next-intl";

import { InfiniteSlider } from "@repo/design-system/components/molecules/effects/infinite-slider";
import { Button } from "@repo/design-system/components/atoms/button";

import CardFarme from "../components/icons/card-frame";

const ProjectOutstanding = () => {
    const t = useTranslations("pages.home");

    return (
        <section
            id="project-outstanding"
            className="flex flex-col items-center justify-center px-4 pb-6 mt-0 lg:mt-24 md:p-12 lg:px-24 lg:pb-24 max-h-none h-[80svh]"
        >
            <div className="flex flex-col items-center justify-center gap-2 max-w-fit">
                <h2 className="text-xl font-bold md:text-3xl">
                    {t("title_section_project")}
                </h2>
                <p className="text-sm text-center md:text-base">
                    {t("description_section_project")}
                </p>
            </div>
            <Button className="mt-5">{t("connect_with_us")}i</Button>

            <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-full max-w-max">
                <InfiniteSlider durationOnHover={0} direction={"horizontal"}>
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="relative aspect-square w-[250px] md:w-[275px]"
                        >
                            <CardFarme className="w-full" />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
};

export default ProjectOutstanding;

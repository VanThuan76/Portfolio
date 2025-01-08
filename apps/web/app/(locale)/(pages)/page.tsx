"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import { TextAnimated } from "@repo/design-system/components/molecules/ui-elements/text-animated";

import SwitchLanguages from "./(home)/components/switch-languages";
import Spotlight from "./(home)/components/spot-light";
import TechnologyCarousel from "./(home)/sections/techonology-carousel";
import ProjectOutstanding from "./(home)/sections/project-outstanding";
import { FloatingNav } from "./(home)/components/floating-navbar";

export default function Page() {
    const t = useTranslations("pages.home");
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ]


    return (
        <m.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/[0.1] relative w-full min-h-screen h-full pointer-events-auto overflow-x-hidden overflow-y-auto"
            ref={containerRef}
        >
            <FloatingNav navItems={navItems} />
            <div className="absolute top-[-7rem] right-0 w-full h-full scale-x-[-1] z-[100]">
                <Spotlight fill="#FFF2C2" />
            </div>
            <section ref={ref} className="relative mt-24 md:mt-0">
                <div className="flex flex-col-reverse items-center justify-center w-full max-w-full max-h-none h-[80svh] gap-0 px-0 mx-auto xl:max-h-none xl:px-40 md:flex-row xl:gap-16">
                    <div className="flex flex-col px-5 text-center xl:px-0 xl:flex-1 xl:justify-center xl:text-left">
                        <TextAnimated
                            as="h1"
                            per="char"
                            preset="fade"
                            className="text-3xl italic font-bold text-black xl:text-5xl"
                        >
                            {t("slogan")}
                        </TextAnimated>
                        <TextAnimated
                            as="p"
                            per="char"
                            preset="fade"
                            className="mt-5 text-sm italic font-bold text-left text-black xl:text-lg md:mt-10"
                        >
                            {t("means")}
                        </TextAnimated>
                        <TextAnimated
                            as="p"
                            per="char"
                            preset="fade"
                            className="text-sm italic font-bold text-right text-black xl:text-lg"
                        >
                            "Winston Churchill"
                        </TextAnimated>
                    </div>
                    <div className="px-[50px] xl:px-0 mb-[33px] xl:mb-0 xl:flex-1 flex justify-end xl:justify-center">
                        <Image
                            priority
                            src="/images/home/portrait.png"
                            alt="@portrait"
                            width={400}
                            height={400}
                            sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                            className="object-contain object-center rounded-full w-full max-w-[749px] w-1920:w-[749px]"
                        />
                    </div>
                </div>
            </section>
            <ProjectOutstanding />
            <TechnologyCarousel />
            <SwitchLanguages />
        </m.div>
    );
}

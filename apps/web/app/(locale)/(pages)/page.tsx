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

export default function Page() {
  const t = useTranslations("pages.home");
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <m.div
      key="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/[0.1] relative w-full min-h-screen h-full pointer-events-auto overflow-x-hidden overflow-y-auto"
      ref={containerRef}
      data-lenis-prevent="false"
    >
      <div className="absolute top-[-7rem] right-0 w-full h-full scale-x-[-1] z-[100]">
        <Spotlight fill="#FFF2C2" />
      </div>
      <div ref={ref} className="relative mt-24">
        <div className="flex flex-col-reverse items-center justify-center w-full max-w-full gap-0 px-0 mx-auto xl:max-h-none xl:px-40 md:flex-row xl:gap-16">
          <div className="flex flex-col px-5 text-center xl:px-0 xl:flex-1 xl:justify-center xl:text-left">
            <TextAnimated
              as="h1"
              per="char"
              preset="fade"
              className="text-2xl italic font-bold text-black md:text-4xl dark:text-white"
            >
              {t("slogan")}
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
              className="object-cover object-center rounded-full"
            />
          </div>
        </div>
      </div>
      <ProjectOutstanding />
      <TechnologyCarousel />
      <TechnologyCarousel />
      <SwitchLanguages />
    </m.div>
  );
}

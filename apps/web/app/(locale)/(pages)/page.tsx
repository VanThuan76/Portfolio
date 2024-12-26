"use client";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import { cn } from "@repo/design-system/utils/tw";

import { TextAnimated } from "@repo/design-system/components/molecules/ui-elements/text-animated";

import SwitchLanguages from "./(home)/components/switch-languages";
import { useTranslations } from "next-intl";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default function Page() {
  const t = useTranslations("pages.home");
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  return (
    <div className="bg-black/[0.1] antialiased relative grid w-full min-h-screen overflow-x-hidden overflow-y-auto text-black place-items-center">
      <div className="absolute top-[-7rem] right-0 w-full h-full scale-x-[-1] z-[100]">
        <Spotlight fill="#FFF2C2" />
      </div>
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
      <SwitchLanguages />
    </div>
  );
}

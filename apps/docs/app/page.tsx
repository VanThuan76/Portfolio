"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { ChevronUp, Github, Mail } from "lucide-react";
import { cn } from "@utils/tw";

import { CardBody, CardContainer, CardItem } from "@ui/molecules/cards/3d-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@ui/molecules/cards/card";

import { DirectionAwareHover } from "@ui/molecules/effects/direction-aware-hover";
import { TextGenerateEffect } from "@ui/molecules/effects/text-generate-effect";
import { TypewriterEffectSmooth } from "@ui/molecules/effects/typewriter-effect";
import Particles from "@ui/molecules/effects/particles";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";
import FadeWrapper from "@ui/molecules/frame/fade-wrapper";
import SwipeableScreen from "@ui/molecules/effects/swipe-screen";

import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import { Highlight } from "@ui/molecules/other-utils/hero-highlight";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

import { useAppSelector } from "@store/index";
import useBreakpoint from "@shared/hooks/use-break-point";
import usePageLoading from "@shared/hooks/use-page-loading";

export default function HomePage() {
  const { theme } = useTheme();
  const { isOpenScreen } = useAppSelector((state) => state.app);
  //isOpenScreen ? "slide" : "blur"

  const router = useRouter();
  const breakpoint = useBreakpoint();
  const isPageLoading = usePageLoading();

  const handleNextPage = () => {
    router.push("/blog");
  };

  const handlePrevPage = () => {
    router.push("/project");
  };

  return (
    <SwipeableScreen
      isActive={breakpoint === "xs" ? true : false}
      isPageLoading={isPageLoading}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    >
      <FadeWrapper className="grid w-full h-full grid-cols-1 gap-0 m-auto lg:grid-cols-3 md:mt-3">
        <CardContainer className="w-full h-full col-span-1 inter-var">
          <CardBody
            className={cn(
              "bg-screen-mobile md:bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#030712] w-full h-full p-4 md:p-6",
              breakpoint === "xs"
                ? "border-none"
                : "border dark:border-white/[0.2] border-black/[0.1] rounded-xl",
            )}
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <TextGenerateEffect words="Hello 👋🏻 I'm Thuan" />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 text-xs text-neutral-500 md:text-sm dark:text-neutral-300"
            >
              Welcome to my website, enjoy!
            </CardItem>
            <CardItem
              translateZ="100"
              className="w-full h-[300px] md:h-[500px] mt-4 rounded-lg"
            >
              <LoaderImage
                src="/hi.jpg"
                isLoader={false}
                alt="Smoke"
                width={4513}
                height={3009}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </CardItem>
            <CardItem
              as="div"
              translateZ="60"
              className="flex flex-col flex-wrap items-start justify-start w-full gap-1 mt-5 md:flex-row md:items-center md:gap-5"
            >
              <Link
                href="mailto:thuanvuvan76@gmail.com"
                className="flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:gap-1"
              >
                <Mail className="w-[14px] h-[14px]" />
                <TypographyP
                  title="thuanvuvan76@gmail.com"
                  className="text-xs font-light md:text-sm"
                />
              </Link>
              <Link
                href="https://github.com/VanThuan76"
                className="flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:gap-1"
              >
                <Github className="w-[14px] h-[14px]" />
                <TypographyP
                  title="VanThuan76"
                  className="text-xs font-light md:text-sm"
                />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
        <MotionContainer type="blur" className="col-span-1 md:col-span-2">
          <Card className="w-full h-full flex flex-col justify-between items-start bg-[#e8e6e6] md:bg-white rounded-none shadow-none md:shadow md:rounded-xl md:border">
            <CardHeader className="px-4 py-2 md:px-6 md:pt-6">
              <TypewriterEffectSmooth
                className="mt-2 text-2xl leading-7 md:my-4"
                words={[{ text: "About me..." }]}
              />
            </CardHeader>
            <CardContent className="flex-1 px-4 pb-4 md:px-6 md:py-0">
              <div className="relative flex flex-col items-start justify-between gap-2 mb-3 md:gap-3">
                <p className="relative p-2 text-xs font-normal rounded bg-muted md:p-1 md:text-base">
                  My fullname is{" "}
                  <Highlight className="font-semibold text-black dark:text-white">
                    Vu Van Thuan
                  </Highlight>
                  , but you can call me Austin. From 2022 to 2024, I&apos;ve
                  been diving deep into the world of web development, and
                  I&apos;m now on a journey to become{" "}
                  <Highlight className="font-semibold text-black dark:text-white">
                    a full-stack developer
                  </Highlight>
                  .
                </p>
                <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-xs md:text-base font-normal">
                  My passion lies in taking on new challenges and continuously
                  expanding my skill set. I love contributing to innovative
                  projects and working with a team to create something amazing.
                  I&apos;m a quick learner and always ready to go the extra mile
                  to get things done.
                </p>
                <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-xs md:text-base font-normal">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, learning from online courses, and getting
                  inspired by the developer community. I&apos;m excited about
                  the future and looking forward to the opportunities ahead.
                </p>
                <Particles
                  className="absolute inset-0"
                  quantity={100}
                  ease={80}
                  color={theme === "dark" ? "#ffffff" : "#000000"}
                  refresh
                />
              </div>
              <div className="items-center justify-start hidden w-full grid-cols-3 gap-3 md:grid md:grid-cols-4 md:gap-5">
                <div className="w-full max-h-[220px] col-span-2 md:col-span-3">
                  <DirectionAwareHover
                    className="h-[220px]"
                    imageUrl="/background.jpg"
                  >
                    <TypographyP className="text-xl font-bold" title="Quote" />
                    <TypographyP
                      className="text-sm font-normal"
                      title="🫀Stop for a moment..."
                    />
                  </DirectionAwareHover>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-full col-span-1 overflow-hidden">
                  <MotionContainer
                    direction="right"
                    delay={0.5}
                    className="relative flex flex-col justify-center items-center w-full h-full rounded-t-lg bg-[#DCF2F1] dark:text-black cursor-pointer group"
                    onClick={() => router.push("/project")}
                  >
                    <h1 className="text-lg font-extrabold md:text-xl lg:text-4xl">
                      3
                    </h1>
                    <TypographyP title="Projects" />
                    <ChevronUp className="text-gray-400 absolute group-hover:top-1 group-hover:right-0 top-2 right-1 w-[18px] md:w-[24px] lg:w-[32px] h-[18px] md:h-[24px] lg:h-[32px] rotate-45 transition-all duration-1000 ease-in-out" />
                  </MotionContainer>
                  <MotionContainer
                    direction="left"
                    delay={0.5}
                    className="relative flex flex-col justify-center items-center w-full h-full rounded-b-lg text-white dark:text-black bg-[#365486] group cursor-pointer"
                    onClick={() => router.push("/blog")}
                  >
                    <h1 className="text-lg font-extrabold md:text-xl lg:text-4xl">
                      3
                    </h1>
                    <TypographyP title="Blogs" />
                    <ChevronUp className="text-gray-400 absolute group-hover:bottom-1 group-hover:left-0 bottom-2 left-1 w-[18px] md:w-[24px] lg:w-[32px] h-[18px] md:h-[24px] lg:h-[32px] rotate-[225deg] transition-all duration-1000 ease-in-out" />
                  </MotionContainer>
                </div>
              </div>
            </CardContent>
            <CardFooter className="self-end">
              <TypographyP
                title={`© Copyright ${new Date().getFullYear()} - Present Thuan`}
                className="text-xs md:text-sm"
              />
            </CardFooter>
          </Card>
        </MotionContainer>
      </FadeWrapper>
    </SwipeableScreen>
  );
}

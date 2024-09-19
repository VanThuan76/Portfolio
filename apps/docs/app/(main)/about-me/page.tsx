"use client";
import Link from "next/link";
import Image from "next/image";

import React from "react";
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

import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import { Highlight } from "@ui/molecules/other-utils/hero-highlight";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";

import useBreakpoint from "@shared/hooks/use-break-point";
import useFullScreenBackground from "@shared/hooks/use-mobile-full-screen";

export default function HomePage() {
    const { theme } = useTheme();

    const breakpoint = useBreakpoint();

    useFullScreenBackground({ backgroundColor: '#e8e6e6' });

    return (
        <div className="relative grid w-full h-full grid-cols-1 gap-0 m-auto md:grid-cols-3">
            <div className="order-2 w-full h-full col-span-1 md:col-span-2 md:order-1">
                <Card className="relative w-full h-full flex flex-col justify-between items-start dark:bg-[#030712] bg-[#e8e6e6] md:bg-white rounded-none shadow-none md:rounded-l-xl overflow-hidden">
                    <CardHeader className="z-10 px-4 py-2 md:px-6 md:pt-6">
                        <TypewriterEffectSmooth
                            className="mt-2 text-2xl leading-7 border-b md:my-4 border-b-neutral-300"
                            words={[{ text: "About me..." }]}
                        />
                    </CardHeader>

                    <CardContent className="z-10 flex-1 px-4 pb-4 md:px-6 md:py-0">
                        <MotionContainer delay={0.3} type="blur">
                            <div className="relative flex flex-col items-start justify-between gap-2 mb-3 md:gap-3">
                                <p className="relative p-2 text-xs font-normal bg-transparent rounded md:bg-muted md:p-1 md:text-base">
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
                                <div className="w-full h-[100px] md:hidden">
                                    <Image
                                        width={500}
                                        height={500}
                                        alt="quote"
                                        src="/background.jpg"
                                        priority={true}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <p className="relative rounded bg-transparent md:bg-muted px-[0.3rem] py-[0.2rem] text-xs md:text-base font-normal">
                                    My passion lies in taking on new challenges and continuously
                                    expanding my skill set. I love contributing to innovative
                                    projects and working with a team to create something amazing.
                                    I&apos;m a quick learner and always ready to go the extra mile
                                    to get things done.
                                </p>
                                <p className="relative rounded bg-transparent md:bg-muted px-[0.3rem] py-[0.2rem] text-xs md:text-base font-normal">
                                    When I&apos;m not coding, you can find me exploring new
                                    technologies, learning from online courses, and getting
                                    inspired by the developer community. I&apos;m excited about
                                    the future and looking forward to the opportunities ahead.
                                </p>
                                <Particles
                                    className="absolute inset-0 z-10"
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
                                        delay={0.6}
                                        className="relative flex flex-col justify-center items-center w-full h-full rounded-t-lg bg-[#DCF2F1] dark:text-black group"
                                    >
                                        <p className="text-lg font-extrabold md:text-xl lg:text-4xl">
                                            3
                                        </p>
                                        <TypographyP title="Projects" />
                                        <ChevronUp className="text-gray-400 absolute group-hover:top-1 group-hover:right-0 top-2 right-1 w-[18px] md:w-[24px] lg:w-[32px] h-[18px] md:h-[24px] lg:h-[32px] rotate-45 transition-all duration-1000 ease-in-out" />
                                    </MotionContainer>
                                    <MotionContainer
                                        direction="left"
                                        delay={0.6}
                                        className="relative flex flex-col justify-center items-center w-full h-full rounded-b-lg text-white dark:text-black bg-[#365486] group"
                                    >
                                        <h1 className="text-lg font-extrabold md:text-xl lg:text-4xl">
                                            3
                                        </h1>
                                        <TypographyP title="Blogs" />
                                        <ChevronUp className="text-gray-400 absolute group-hover:bottom-1 group-hover:left-0 bottom-2 left-1 w-[18px] md:w-[24px] lg:w-[32px] h-[18px] md:h-[24px] lg:h-[32px] rotate-[225deg] transition-all duration-1000 ease-in-out" />
                                    </MotionContainer>
                                </div>
                            </div>
                        </MotionContainer>
                    </CardContent>

                    <CardFooter className="z-10 self-end">
                        <TypographyP
                            title={`© Copyright ${new Date().getFullYear()} - Present Thuan`}
                            className="text-xs text-black md:text-sm"
                        />
                    </CardFooter>
                    <Image
                        width={250}
                        height={250}
                        src={
                            theme !== "dark" ? "/summer-season-sun.png" : "/moon-sphere.png"
                        }
                        alt="sub-background"
                        className="absolute right-5 object-contain object-center w-[75px] h-[75px] md:w-[100px] md:h-[100px] top-0 md:top-5 z-5"
                        priority={true}
                    />
                    <Image
                        width={1000}
                        height={500}
                        src="/anime-style-clouds.png"
                        alt="bacground-clouds"
                        className="absolute left-0 object-cover object-top w-full h-full -bottom-20 z-5"
                        priority={true}
                    />
                </Card>
            </div>
            <div className="order-1 w-full h-full col-span-1 md:order-2">
                <CardContainer
                    isActive={breakpoint === "xs" ? false : true}
                    className="w-full h-full inter-var"
                >
                    <CardBody
                        className={cn(
                            "bg-screen-mobile shadow-none md:bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#030712] w-full h-full px-4 pt-4 md:p-6",
                            breakpoint === "xs" ? "border-none" : "rounded-r-xl",
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
                            className="w-full h-[300px] mt-4 rounded-lg"
                        >
                            <LoaderImage
                                src="/hi.jpg"
                                alt="Draft"
                                width={4513}
                                height={3009}
                                className="object-cover object-center w-full h-full rounded-lg"
                                isLoader={false}
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
            </div>
        </div>
    );
}

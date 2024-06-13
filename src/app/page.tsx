"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronUp, Github, Mail } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TypographyP } from "@/components/ui/typography-p";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { Highlight } from "@/components/ui/hero-highlight";

import { LoaderImage } from "@/components/custom/loader-image";
import TransitionCpn from "@/components/custom/transition-cpn";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="m-auto w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-0 md:mt-3">
      <TransitionCpn
        variants={{
          hidden: { opacity: 0, x: 0, y: -200 },
          enter: { opacity: 1, x: 0, y: 0 },
        }}
        className="col-span-1"
      >
        <CardContainer className="inter-var w-full h-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#030712] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <TextGenerateEffect words="Hello 👋🏻 I'm Thuan" />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </CardItem>
            <CardItem
              as="div"
              translateZ="60"
              className="w-full flex flex-wrap flex-col md:flex-row justify-start items-start md:items-center gap-3 md:gap-5 mt-5"
            >
              <Link
                href="mailto:thuanvuvan76@gmail.com"
                className="flex justify-center items-center gap-2 hover:gap-1 transition-all duration-300 ease-in-out"
              >
                <Mail className="w-[14px] h-[14px]" />
                <TypographyP
                  title="thuanvuvan76@gmail.com"
                  className="text-sm font-light"
                />
              </Link>
              <Link
                href="https://github.com/VanThuan76"
                className="flex justify-center items-center gap-2 hover:gap-1 transition-all duration-300 ease-in-out"
              >
                <Github className="w-[14px] h-[14px]" />
                <TypographyP
                  title="VanThuan76"
                  className="text-sm font-light"
                />
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
      </TransitionCpn>
      <TransitionCpn className="col-span-1 md:col-span-2">
        <Card className="w-full h-full">
          <CardHeader>
            <TypewriterEffectSmooth
              className="my-2 md:my-4 text-2xl leading-7"
              words={[{ text: "Information..." }]}
            />
          </CardHeader>
          <CardContent>
            <div className="w-full min-h-[200px] md:min-h-[370px] flex gap-2 md:gap-3 flex-col justify-between items-start">
              <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
                My fullname is{" "}
                <Highlight className="font-semibold text-black dark:text-white">
                  Vu Van Thuan
                </Highlight>
                , but you can call me Austin. I recently graduated from UTM
                University in Vietnam with a degree in Information Technology.
                From 2022 to 2024, I&apos;ve been diving deep into the world of
                web development, and I&apos;m now on a journey to become{" "}
                <Highlight className="font-semibold text-black dark:text-white">
                  a full-stack developer
                </Highlight>
                .
              </p>
              <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
                My passion lies in taking on new challenges and continuously
                expanding my skill set. I love contributing to innovative
                projects and working with a team to create something amazing.
                I&apos;m a quick learner and always ready to go the extra mile
                to get things done.
              </p>
              <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
                When I&apos;m not coding, you can find me exploring new
                technologies, learning from online courses, and getting inspired
                by the developer community. I&apos;m excited about the future
                and looking forward to the opportunities ahead.
              </p>
              <div className="mt-3 w-full flex flex-col justify-start items-start gap-3 md:hidden">
                <div onClick={() => router.push("/project")}>
                  <TypographyH3
                    className="text-sm underline cursor-pointer"
                    title="📂 My projects"
                  />
                </div>
                <div onClick={() => router.push("/blog")}>
                  <TypographyH3
                    className="text-sm underline cursor-pointer"
                    title="🗞️ My blogs"
                  />
                </div>
              </div>
              <div className="w-full md:grid grid-cols-3 md:grid-cols-4 justify-start items-center gap-3 md:gap-5 hidden">
                <div className="w-full max-h-[220px] col-span-2 md:col-span-3">
                  <DirectionAwareHover
                    className="h-[220px]"
                    imageUrl="/background.jpg"
                  >
                    <TypographyP className="font-bold text-xl" title="Quote" />
                    <TypographyP
                      className="font-normal text-sm"
                      title="🫀Stop for a moment..."
                    />
                  </DirectionAwareHover>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center col-span-1">
                  <div
                    className="relative flex flex-col justify-center items-center w-full h-full rounded-t-lg bg-[#DCF2F1] dark:text-black cursor-pointer group"
                    onClick={() => router.push("/project")}
                  >
                    <h1 className="text-lg md:text-xl lg:text-4xl font-extrabold">
                      3
                    </h1>
                    <TypographyP title="Projects" />
                    <ChevronUp className="text-gray-400 absolute group-hover:top-1 group-hover:right-0 top-2 right-1 w-[18px] md:w-[24px] lg:w-[32px] h-[18px] md:h-[24px] lg:h-[32px] rotate-45 transition-all duration-300 ease-in-out" />
                  </div>
                  <div
                    className="relative flex flex-col justify-center items-center w-full h-full rounded-b-lg text-white dark:text-black bg-[#365486] group cursor-pointer"
                    onClick={() => router.push("/blog")}
                  >
                    <h1 className="text-lg md:text-xl lg:text-4xl font-extrabold">
                      3
                    </h1>
                    <TypographyP title="Blogs" />
                    <ChevronUp className="text-gray-400 absolute group-hover:bottom-1 group-hover:left-0 bottom-2 left-1 w-[18px] md:w-[24px] lg:w-[32px] h-[18px] md:h-[24px] lg:h-[32px] rotate-[225deg] transition-all duration-300 ease-in-out" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <TypographyP
              title={`© Copyright ${new Date().getFullYear()} - Present Thuan`}
              className="text-sm"
            />
          </CardFooter>
        </Card>
      </TransitionCpn>
    </div>
  );
}

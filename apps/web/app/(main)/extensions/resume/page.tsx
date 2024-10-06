"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { FileText } from "lucide-react";
import { cn } from "@utils/tw";

import { useAppSelector } from "../../../../store/index";

import { Separator } from "@ui/molecules/other-utils/separator";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { Avatar, AvatarImage } from "@ui/molecules/ui-elements/avatar";
import { BentoGrid, BentoGridItem } from "@ui/molecules/frame/bento-grid";
import { SkeletonCard } from "@ui/molecules/cards/skeleton-card";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import FormTouch from "./_components/form-touch";
import GithubCalendar from "../../../../shared/lib/github-calendar";
import useFullScreenBackground from "../../../../shared/hooks/use-mobile-full-screen";

const LinkedinScript = dynamic(() => import("./_components/linkedin-script"), {
  loading: () => <SkeletonCard />,
  ssr: false,
});

export default function Page() {
  const { informationWorks } = useAppSelector((state) => state.app);

  useFullScreenBackground({ backgroundColor: "#e8e6e6" });

  return (
    <div className="relative grid items-center justify-center w-full h-full grid-cols-1 px-4 pt-6 bg-transparent md:grid-cols-3 md:gap-0 md:py-6 md:px-12">
      {/* <div className="flex flex-wrap items-start justify-start order-2 w-full h-full gap-2 md:order-1">
        <div className="space-y-2">
          <LinkedinScript />
          <Link
            className="w-[150px] border light:border-zinc-50 dark:border-gray-50 rounded-md shadow-sm flex justify-start items-start gap-2 py-1 px-2 cursor-pointer hover:scale-y-105 transition-all ease-in-out mr-auto"
            href="https://read.cv/austinvu"
          >
            <FileText className="rotate-45 w-[30px] h-[30px] shadow-lg p-1 rounded-full" />
            <TypographyP
              className="text-sm italic font-thin"
              title="CV online"
            />
          </Link>
        </div>
        <Separator className="w-full" />
        <TypographyH3 title="GET IN TOUCH" />
        <MotionContainer delay={0.3} direction="left" className="w-full h-full">
          <FormTouch />
        </MotionContainer>
      </div>
      <div className="order-1 w-full h-full col-span-1 space-y-4 rounded-md md:col-span-2 md:order-2">
        <TypographyH3 title="🚴🏻 Explore" />
        <MotionContainer delay={0.3} direction="top" className="w-full">
          <GithubCalendar username="vanthuan76" />
        </MotionContainer>
        <TypographyH3 title="💼 Work" />
        <BentoGrid className="grid items-start justify-start w-full h-full overflow-y-auto">
          {informationWorks ? (
            informationWorks
              .map((informationWork) => ({
                title: informationWork?.title_company,
                description: informationWork?.task_company,
                icon: informationWork?.image_company,
                header: (
                  <div className="w-full h-full overflow-hidden">
                    <LoaderImage
                      isLoader={false}
                      src={informationWork?.image_project_company as string}
                      alt={informationWork?.title_company as string}
                      width={500}
                      height={150}
                      className="object-cover object-center w-full h-full rounded-lg"
                    />
                  </div>
                ),
              }))
              .map((item, i) => (
                <MotionContainer
                  key={i}
                  delay={0.3}
                  type="blur"
                  className={cn(
                    i % 2 === 0 ? "md:col-span-2" : "md:col-span-1",
                  )}
                >
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={
                      <Avatar>
                        <AvatarImage
                          src={item.icon as string}
                          alt="@shadcn"
                          className="shadow-sm"
                        />
                      </Avatar>
                    }
                    typeStyleImage="bottom"
                  />
                </MotionContainer>
              ))
          ) : (
            <div className="flex flex-wrap items-start justify-start w-full gap-5">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}
        </BentoGrid>
      </div> */}
    </div>
  );
}

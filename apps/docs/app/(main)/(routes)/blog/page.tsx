"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@store/index";

import { Tabs } from "@ui/molecules/tabs/tabs";
import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules//ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

import HoverImageLink from "@ui/molecules/effects/hover-image-link";
import FadeWrapper from "@ui/molecules/frame/fade-wrapper";
import SwipeableScreen from "@ui/molecules/effects/swipe-screen";

import useBreakpoint from "@shared/hooks/use-break-point";

import CardBlog from "./@components/card-blog";

export default function Page() {
  const { tags, blogs } = useAppSelector((state) => state.app);

  const router = useRouter();
  const breakpoint = useBreakpoint();

  const handleNextPage = () => {
    router.push("/project");
  };

  const handlePrevPage = () => {
    router.push("/");
  };

  return (
    <SwipeableScreen
      isActive={breakpoint === "xs" ? true : false}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    >
      <FadeWrapper>
        <div className="bg-screen-mobile md:bg-[#F6F6F6] w-full h-full flex flex-col justify-start items-start gap-5 px-4 pt-6 md:gap-0 md:pt-2 md:px-0">
          <div className="flex flex-col items-start justify-start w-full h-full col-span-1 md:col-span-5">
            <div className="w-full h-[75px] md:h-[200px]">
              <LoaderImage
                src="/bg-blog.jpg"
                isLoader={false}
                alt="Bg-Blog"
                width={1280}
                height={720}
                className="object-cover object-top w-full h-full rounded-lg"
              />
            </div>
            <div className="ml-0 md:ml-3 w-[50px] h-[50px] md:w-[75px] md:h-[75px] border light:border-black dark:border-gray-400 rounded-full -translate-y-5 md:-translate-y-10">
              <LoaderImage
                isLoader={false}
                src="/images/blog/my-cat.jpg"
                alt="logo"
                className="object-cover w-full h-full rounded-full"
                width={355}
                height={355}
              />
            </div>
            <TypographyH3
              className="mt-0 translate-y-0 md:mt-2 md:-translate-y-10"
              title="Hip Blog"
            />
            <div className="flex flex-wrap items-center justify-start gap-2 translate-y-0 md:-translate-y-10">
              <TypographyP
                className="text-xs italic md:text-sm"
                title="These're my social: "
              />
              <Link href="https://twitter.com/thuanhipp" target="_blank">
                <TypographyP
                  className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 md:px-2 rotate-2 hover:underline"
                  title="Twitter"
                />
              </Link>
              <Link href="https://www.instagram.com/thuanhip76" target="_blank">
                <TypographyP
                  className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-pink-500 to-purple-500 md:px-2 -rotate-1 hover:underline"
                  title="Intargram"
                />
              </Link>
              <Link href="https://www.threads.net/@thuanhip76" target="_blank">
                <TypographyP
                  className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-gray-200 to-gray-500 md:px-2 rotate-12 hover:underline"
                  title="Threads"
                />
              </Link>
            </div>
          </div>
          <Separator className="w-full h-[1px] bg-slate-300" />
          <div className="grid items-start justify-start w-full h-full grid-cols-1 gap-5 md:grid-cols-5">
            <div className="w-full h-full col-span-1 pb-5 mx-auto md:col-span-4 md:py-5">
              <div className="min-h-[35rem] md:min-h-[25rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start overflow-auto md:overflow-visible">
                <Tabs
                  tabs={tags.map((tag) => ({
                    title: tag.title as string,
                    value: tag.slug as string,
                    content: (
                      <div className="relative w-full h-full font-bold text-white">
                        <CardBlog
                          items={blogs.filter((blog) =>
                            blog.tags.some((item) => item.slug === tag.slug),
                          )}
                          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-0 pt-7 md:py-5"
                        />
                      </div>
                    ),
                  }))}
                />
              </div>
            </div>
            <div className="flex-col items-end justify-start hidden w-full h-full col-span-1 gap-3 py-5 mx-auto md:flex">
              <HoverImageLink imgSrc="https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8">
                <div className="pb-4 border-b cursor-pointer border-b-gray-400">
                  <TypographyP
                    title="Blog"
                    className="px-2 py-1 font-medium rounded-md"
                  />
                </div>
              </HoverImageLink>
              <div className="pb-4 border-b border-b-gray-400">
                <TypographyP
                  title="Hobbies"
                  className="px-2 py-1 font-medium rounded-md"
                />
              </div>
              <div className="pb-4 border-b border-b-gray-400">
                <TypographyP
                  title="Newsletter"
                  className="px-2 py-1 font-medium rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeWrapper>
    </SwipeableScreen>
  );
}

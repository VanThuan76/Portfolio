"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { RootState, useAppSelector } from "@store/index";

import { Database } from "@shared/utils/supabase/types";
import { Tabs } from "@ui/molecules/tabs/tabs";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules//ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import InteractiveGrid from "@ui/molecules/frame/interactive-grid";
import EmblaCarousel from "@ui/molecules/effects/embla-carousel";

import { IBlog } from "@shared/query/types/blog";
import CardBlog from "./_components/card-blog";
import CurveTransition from "@shared/layouts/transitions/curve";

export default function Page() {
  const { blogs, blogCategories } = useAppSelector(
    (state: RootState) => state.app,
  );
  const t = useTranslations("pages.blog");

  const groupPeopleStatic = [
    { src: "/images/blog/person_2.svg", alt: "@2" },
    {
      src: "/images/blog/person_3.svg",
      alt: "@3",
      translateX: "-translate-x-12",
      translateY: "-translate-y-10",
    },
    {
      src: "/images/blog/person_4.svg",
      alt: "@4",
      translateX: "-translate-x-24",
      translateY: "",
    },
    {
      src: "/images/blog/person_5.svg",
      alt: "@5",
      translateX: "-translate-x-[350px]",
      translateY: "translate-y-10",
    },
  ];

  const groupReferences = [
    { url: "/images/blog/daily_dev_logo.jpg", alt: "@dailydevlogo" },
    { url: "/images/blog/medium_logo.png", alt: "@mediumlogo" },
    { url: "/images/blog/dev_community_logo.png", alt: "@devcommunitylogo" },
    { url: "/images/blog/stackoverflow_logo.png", alt: "@stackoverflowlogo" },
    { url: "/images/blog/github_logo.png", alt: "@githublogo" },
  ];

  return (
    <CurveTransition backgroundColor="#f8f1e8">
      <div className="relative flex flex-col items-start justify-start w-full h-full gap-2 bg-[#f8f1e8] md:gap-0 overflow-hidden">
        <div className="relative flex flex-col items-start justify-start w-full col-span-1 p-4 md:col-span-5">
          <div className="relative z-10 flex flex-col items-start justify-start gap-2">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] border light:border-black dark:border-gray-400 rounded-full">
                <LoaderImage
                  isLoader={false}
                  src="/images/blog/my-cat.jpg"
                  alt="logo"
                  width={355}
                  height={355}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <TypographyH3
                className="p-1 mt-0 text-xl text-black bg-white rounded-sm md:mt-2"
                title={t("title")}
              />
            </div>
            <div className="flex flex-wrap items-center justify-start gap-2">
              <TypographyP
                className="p-1 text-xs italic text-black bg-white rounded-sm md:text-sm"
                title={t("description")}
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
                  title="Instagram"
                />
              </Link>
              <Link href="https://www.threads.net/@austinvu76" target="_blank">
                <TypographyP
                  className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-gray-200 to-gray-500 md:px-2 rotate-12 hover:underline"
                  title="Threads"
                />
              </Link>
            </div>
          </div>
          <LoaderImage
            isLoader={false}
            width={700}
            height={600}
            alt="@all"
            src="/images/blog/people_all.svg"
            className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full"
          />
        </div>

        <div className="grid items-start justify-start w-full h-full grid-cols-1 gap-0 p-4 md:gap-2 md:grid-cols-5 md:pt-0 md:px-6">
          <InteractiveGrid className="order-2 w-full h-full col-span-1 pb-5 mx-auto md:col-span-4 md:py-5">
            <div className="min-h-[35rem] md:min-h-[25rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start overflow-auto md:overflow-visible">
              <Tabs
                tabs={blogCategories.map(
                  (
                    category: Database["public"]["Tables"]["blog_category"]["Row"],
                  ) => ({
                    title: category.name as string,
                    value: category.name as string,
                    content: (
                      <CardBlog
                        items={blogs.filter(
                          (blog: IBlog) => blog.blog_category === category.name,
                        )}
                        className="grid items-start justify-start grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-0 pt-7 md:py-5"
                      />
                    ),
                  }),
                )}
              />
            </div>
          </InteractiveGrid>
          <div className="flex flex-col items-start justify-start order-1 w-full h-full col-span-1 gap-3 mx-auto mt-0 overflow-hidden border-none md:mt-5 md:border-r md:border-r-slate-300">
            <div className="hidden pb-4 border-b cursor-pointer md:block border-b-black dark:border-b-white">
              <TypographyP
                title="Blog"
                className="px-2 py-1 font-medium rounded-md"
              />
            </div>
            <div className="hidden pb-4 border-b md:block border-b-black dark:border-b-white">
              <TypographyP
                title="Hobbies"
                className="px-2 py-1 font-medium rounded-md"
              />
            </div>
            <div className="hidden pb-4 border-b md:block border-b-black dark:border-b-white">
              <TypographyP
                title="Newsletter"
                className="px-2 py-1 font-medium rounded-md"
              />
            </div>
            <span className="hidden w-full pb-1 mt-5 border-b md:block border-b-slate-300">
              References
            </span>
            <EmblaCarousel
              slides={groupReferences.map((item) => ({
                url: item.url as string,
                alt: item.alt,
              }))}
              options={{ dragFree: true, loop: true }}
              className="w-[50px] h-[50px] p-1 md:py-0 rounded-md"
            />
            {/* <CalendarHeatmap
                        className="lg:motion-safe:[animation-delay:4000ms]"
                        variantClassnames={[
                            "text-white hover:text-white bg-green-400 hover:bg-green-400",
                            "text-white hover:text-white bg-green-500 hover:bg-green-500",
                            "text-white hover:text-white bg-green-700 hover:bg-green-700",
                        ]}
                        weightedDates={[
                            { date: new Date('Jan 1, 2024'), weight: 2 }, { date: new Date('Jan 15, 2024'), weight: 1.5 },
                            { date: new Date('Jun 12, 2024'), weight: 8 }, { date: new Date('July 1, 2024'), weight: 5 },
                            { date: new Date('Jan 19, 2024'), weight: 6 }, { date: new Date('Apr 19, 2024'), weight: 13.5 }
                        ]}
                    /> */}
          </div>
        </div>

        {/* Images */}
        <div className="absolute flex -bottom-10 -left-5">
          {groupPeopleStatic.map(
            ({ src, alt, translateX, translateY }, index) => (
              <LoaderImage
                key={index}
                isLoader={false}
                width={150}
                height={150}
                alt={alt}
                src={src}
                className={`object-contain object-center transform ${translateX} ${translateY}`}
              />
            ),
          )}
        </div>
        <LoaderImage
          isLoader={false}
          width={150}
          height={150}
          alt="@1"
          src="/images/blog/person_1.svg"
          className="absolute object-contain object-center -rotate-180 -bottom-10 -right-10 -scale-y-100"
        />
      </div>
    </CurveTransition>
  );
}

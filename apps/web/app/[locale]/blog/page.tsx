"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { RootState, useAppSelector } from "@store/index";

import { Database } from "@shared/utils/supabase/types";
import { Tabs } from "@ui/molecules/tabs/tabs";
import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { TypographyH3 } from "@ui/molecules//ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

import HoverImageLink from "@ui/molecules/effects/hover-image-link";

import CardBlog from "./_components/card-blog";
import { IBlog } from "@shared/query/types/blog";

export default function Page() {
  const { blogs, blogCategories } = useAppSelector(
    (state: RootState) => state.app,
  );
  const t = useTranslations("pages.blog");

  return (
    <div className="relative flex flex-col items-start justify-start w-full h-full gap-5 px-4 pt-6 bg-black/50 md:gap-0 md:py-6 md:px-12">
      <div className="flex flex-col items-start justify-start w-full col-span-1 md:col-span-5">
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
          className="mt-0 text-xl text-white md:mt-2"
          title={t("title")}
        />
        <div className="flex flex-wrap items-center justify-start gap-2">
          <TypographyP
            className="text-xs italic text-white md:text-sm"
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
              title="Intargram"
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

      <Separator className="w-full h-[1px] bg-slate-300 dark:bg-white mt-1 md:mt-2" />

      <div className="grid items-start justify-start w-full h-[5000px] grid-cols-1 gap-5 md:grid-cols-5">
        <div className="w-full h-full col-span-1 pb-5 mx-auto md:col-span-4 md:py-5">
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
        </div>

        <div className="flex-col items-end justify-start hidden w-full h-full col-span-1 gap-3 py-5 mx-auto md:flex">
          <HoverImageLink imgSrc="https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8">
            <div className="pb-4 border-b cursor-pointer border-b-black dark:border-b-white">
              <TypographyP
                title="Blog"
                className="px-2 py-1 font-medium rounded-md"
              />
            </div>
          </HoverImageLink>
          <div className="pb-4 border-b border-b-black dark:border-b-white">
            <TypographyP
              title="Hobbies"
              className="px-2 py-1 font-medium rounded-md"
            />
          </div>
          <div className="pb-4 border-b border-b-black dark:border-b-white">
            <TypographyP
              title="Newsletter"
              className="px-2 py-1 font-medium rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

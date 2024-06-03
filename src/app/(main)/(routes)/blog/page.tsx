import Link from "next/link";

import { readBlog } from "@/server/actions/blog";
import { readTag } from "@/server/actions/tag";

import { LoaderImage } from "@/components/custom/loader-image";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { Tabs } from "@/components/ui/tabs";
import TransitionCpn from "@/components/custom/transition-cpn";
import HoverImageLink from "@/components/ui/hover-image-link";

import { CardBlog } from "./@components/card-blog";

export default async function Page() {
  let { data: tags } = await readTag();
  let blogs = await readBlog();
  if (!blogs?.length) {
    blogs = [];
  }
  if (!tags?.length) {
    tags = [];
  }
  return (
    <TransitionCpn className="w-full h-auto">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-5 md:gap-0">
        <div className="w-full h-full flex flex-col justify-start items-start col-span-1 md:col-span-5">
          <div className="ml-0 md:ml-3 w-[75px] h-[75px] border light:border-black dark:border-gray-400 rounded-full">
            <LoaderImage
              isLoader={false}
              src="/my-cat.jpg"
              alt="logo"
              className="w-full h-full object-cover rounded-full"
              width={355}
              height={355}
            />
          </div>
          <TypographyH3 className="mt-2" title="Hip Blog" />
          <div className="flex flex-wrap gap-2 justify-start items-center">
            <TypographyP
              className="italic text-xs"
              title="These're my social: "
            />
            <Link href={"https://twitter.com/thuanhipp"} target="_blank">
              <TypographyP
                className="italic text-xs bg-gradient-to-r from-blue-400 to-blue-700 rounded-sm px-2 rotate-2 hover:underline"
                title="Twitter"
              />
            </Link>
            <Link href={"https://www.instagram.com/thuanhip76"} target="_blank">
              <TypographyP
                className="italic text-xs bg-gradient-to-r from-pink-500 to-purple-500 rounded-sm px-2 -rotate-1 hover:underline"
                title="Intargram"
              />
            </Link>
            <Link href={"https://www.threads.net/@thuanhip76"} target="_blank">
              <TypographyP
                className="italic text-xs bg-gradient-to-r from-gray-200 to-gray-500 rounded-sm px-2 rotate-12 hover:underline"
                title="Threads"
              />
            </Link>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-5 justify-start items-start gap-5">
          <div className="w-full h-full mx-auto col-span-1 md:col-span-4 py-5">
            <div className="min-h-[35rem] md:min-h-[25rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start overflow-auto md:overflow-visible">
              <Tabs
                tabs={tags.map((tag) => ({
                  title: tag.title as string,
                  value: tag.slug as string,
                  content: (
                    <div className="w-full h-full relative font-bold text-white">
                      <CardBlog
                        items={
                          blogs.filter((blog) =>
                            blog.tags.some((item) => item.slug === tag.slug),
                          ) || []
                        }
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5"
                      />
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
          <div className="w-full h-full mx-auto col-span-1 hidden md:flex flex-col justify-start items-end gap-3 py-5">
            <HoverImageLink imgSrc="https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8">
              <div className="border-b border-b-gray-400 pb-4 cursor-pointer">
                <TypographyP
                  title="Blog"
                  className="px-2 py-1 rounded-md font-medium"
                />
              </div>
            </HoverImageLink>
            <div className="border-b border-b-gray-400 pb-4">
              <TypographyP
                title="Hobbies"
                className="px-2 py-1 rounded-md font-medium"
              />
            </div>
            <div className="border-b border-b-gray-400 pb-4">
              <TypographyP
                title="Newsletter"
                className="px-2 py-1 rounded-md font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </TransitionCpn>
  );
}

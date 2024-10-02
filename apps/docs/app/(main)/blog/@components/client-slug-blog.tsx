"use client";

import Image from "next/image";
import { cn } from "@utils/tw";
import { Nunito_Sans } from "next/font/google";

import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";

import { useModal } from "@shared/hooks/use-modal";

import { IBlog, IBlogSupabase } from "@server/data/types/blog";
import { IBlogCommentWithUser } from "@server/actions/comment";
import { IAuthSupabase } from "@server/data/types/supabase";

import ListComment from "./list-comment";
import PathRightIcon from "./icons/path-right";
import PathLeftIcon from "./icons/path-left";
import ContentBlog from "./content-blog";

const fontBlog = Nunito_Sans({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

const ClientSlugBlog = ({
  params,
  blog,
  blogs,
  comments,
  user,
}: {
  params: string;
  blog: IBlogSupabase;
  blogs: IBlog[];
  comments: IBlogCommentWithUser[];
  user: IAuthSupabase | null;
}) => {
  const { onOpen } = useModal();

  return (
    <div className="relative grid w-full h-full grid-cols-1 pt-6 overflow-hidden border-none rounded-none shadow-none md:rounded-lg md:shadow-lg md:grid-cols-5 md:p-0">
      <div className="absolute md:hidden top-0 right-0 w-full h-[20%] md:h-full col-span-1 md:col-span-2 z-10">
        <Image
          width={1920}
          height={1280}
          src={blog.image_url}
          alt="@bg_blog"
          className="object-cover object-center w-full h-full -z-10"
        />
      </div>

      <div
        className={cn(
          "z-20 relative flex flex-col items-start justify-start w-full min-h-screen h-screen md:bg-[#e8e6e6] col-span-1 gap-0 pt-20 md:translate-y-0 md:gap-5 md:col-span-3 md:pl-4 md:pt-4",
        )}
      >
        <article className="relative h-full w-full pb-28 p-3 bg-[#e8e6e6] overflow-y-auto rounded-t-3xl md:bg-transparent md:p-0 md:pt-12 md:rounded-none transition-all duration-150 ease-in-out">
          <div
            className={cn(
              "w-full h-full md:h-full dark:bg-grid-small-white/[0.1] md:bg-grid-small-black/[0.1] text-xs md:text-base md:px-4",
              fontBlog.className,
            )}
          >
            <ContentBlog content={JSON.parse(blog.content as string)} />
          </div>
        </article>
      </div>

      <div className="hidden lg:block w-[200px] h-full p-2 mb-5 bg-[#e8e6e6] backdrop-blur-none md:backdrop-blur-sm md:bg-black/30 dark:bg-white/30 md:rounded-b-lg">
        <h1 className="text-3xl font-extrabold text-white text-wrap">
          Austin Vu
        </h1>
        <p className="text-sm font-medium text-white">
          {new Date(blog.created_at).toDateString()}
        </p>
        <span
          className="text-sm font-medium text-white underline cursor-pointer"
          onClick={() =>
            onOpen("article", { blogId: blog.id, comments: comments })
          }
        >
          Comments
        </span>
        <div className="relative flex h-[500px] w-full flex-col overflow-hidden">
          <ListComment comments={comments} />
        </div>
      </div>

      <div className="fixed top-0 z-50 flex w-full transition-all translate-x-1/2 right-1/2">
        <PathLeftIcon className="-ml-20" />
        <div className="flex items-center justify-between bg-white">
          <TypographyH3 title={blog.title} className="text-lg font-medium" />
        </div>
        <PathRightIcon className="-mr-20 transform scale-x-[-1]" />
      </div>
    </div>
  );
};

export default ClientSlugBlog;

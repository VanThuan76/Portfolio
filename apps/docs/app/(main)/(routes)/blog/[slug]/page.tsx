import { Heart } from "lucide-react";
import { Nunito_Sans } from "next/font/google";

import { getBlog } from "@server/actions/blog";
import { IBlogSupabase } from "@server/data/types/blog";
import { IBaseResponse } from "@server/data/types/base";
import { currentProfile } from "@server/actions/auth";
import { readCommentByBlogId } from "@server/actions/comment";

import { Separator } from "@ui/molecules/other-utils/separator";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@ui/molecules/ui-elements/avatar";

import { axiosInstance } from "@api/axios";
import { cn } from "@utils/tw";
import { convertStringDay } from "@utils/helpers/convert-time";

import CardBlog from "../@components/card-blog";
import Comment from "../@components/comment";
import ContentBlog from "../@components/content-blog";

const fontBlog = Nunito_Sans({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"]
});

async function getBlogAndCommentData(slugBlog: string) {
  const { data: blog } = await axiosInstance.get<IBaseResponse<IBlogSupabase>>(
    `/api/blog?slug=${slugBlog}`,
  );
  const comments = await readCommentByBlogId(blog && blog.id);
  return {
    blog,
    comments,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { blog, comments } = await getBlogAndCommentData(params.slug);
  const user = await currentProfile();
  const blogs = await getBlog();

  return (
    <div className="relative grid items-start justify-between w-full h-full grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-3">
      <article className="relative w-full h-auto col-span-1 md:col-span-2">
        <div className="sticky top-[35px] md:top-9 z-50 backdrop-blur-sm bg-white/30 mb-5 pt-2">
          <h1 className="text-3xl font-bold dark:text-gray-200">
            {blog.title}
          </h1>
          <p className="text-sm dark:text-gray-400">
            {new Date(blog.created_at).toDateString()}
          </p>
        </div>
        <div
          className={cn(
            "w-full h-full dark:bg-grid-white/[0.1] bg-grid-black/[0.1] text-xs md:text-base",
            fontBlog.className,
          )}
        >
          <ContentBlog content={JSON.parse(blog.content as string)} />
        </div>
        <Separator className="w-full my-3" />
        <div className="flex flex-col items-start justify-start w-full gap-5 px-2 py-4 bg-white rounded-sm dark:bg-black">
          <TypographyH3
            title={`Top Comments(${comments.data?.length})`}
            className="text-lg font-medium"
          />
          <Comment user={user} blogId={blog.id} />
          <div className="w-full h-full">
            {comments.data &&
              comments.data.length > 0 &&
              comments.data?.map((comment, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-start w-full gap-2 my-5"
                  >
                    <div className="flex items-start justify-start w-full gap-2">
                      <Avatar>
                        <AvatarImage
                          src={comment.users?.avatar_url as string}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start justify-start w-full p-4 border rounded-md">
                        <div className="flex items-center justify-start w-full gap-2">
                          <TypographyP
                            title={comment.users?.display_name as string}
                            className="font-medium"
                          />
                          <span className="text-xs text-zinc-500">
                            {convertStringDay(comment.created_at)}
                          </span>
                        </div>
                        <ContentBlog
                          content={JSON.parse(comment.content as string)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-start gap-2 ml-12">
                      <Heart className="w-[16px] h-[16px]" />
                      <span className="text-xs text-zinc-700">
                        {comment.like} likes
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </article>
      <div className="sticky top-10 z-30 col-span-1 self-start border-l border-l-[#555] h-full">
        <CardBlog
          items={blogs && blogs.filter((blog) => blog.slug !== params.slug)}
        />
      </div>
    </div>
  );
}

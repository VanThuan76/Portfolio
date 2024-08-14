import { Heart } from "lucide-react";
import { Space_Mono } from "next/font/google";

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

const spaceMono = Space_Mono({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["400"],
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
    <div className="relative w-full grid grid-cols-1 md:grid-cols-3 justify-between items-start px-0 md:px-4 mx-auto h-full gap-10">
      <article className="w-full h-auto relative col-span-1 md:col-span-2">
        <div className="sticky top-[35px] md:top-9 z-50 backdrop-blur-sm bg-white/30 mb-5 p-2">
          <h1 className="text-3xl font-bold dark:text-gray-200">
            {blog.title}
          </h1>
          <p className="text-sm dark:text-gray-400">
            {new Date(blog.created_at).toDateString()}
          </p>
        </div>
        <div
          className={cn(
            "w-full h-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2]",
            spaceMono.className,
          )}
        >
          <ContentBlog content={JSON.parse(blog.content as string)} />
        </div>
        <Separator className="w-full my-3" />
        <div className="w-full flex flex-col justify-start items-start py-4 px-2 gap-5 bg-white dark:bg-black rounded-sm">
          <TypographyH3
            title={`Top Comments(${comments.data?.length})`}
            className="font-medium text-lg"
          />
          <Comment user={user} blogId={blog.id} />
          <div className="w-full h-full">
            {comments.data &&
              comments.data.length > 0 &&
              comments.data?.map((comment, i) => {
                return (
                  <div
                    key={i}
                    className="w-full flex flex-col justify-start items-start gap-2 my-5"
                  >
                    <div className="w-full flex justify-start items-start gap-2">
                      <Avatar>
                        <AvatarImage
                          src={comment.users?.avatar_url as string}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="w-full flex flex-col justify-start items-start border rounded-md p-4">
                        <div className="flex items-center justify-start gap-2 w-full">
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
                    <div className="flex justify-start items-center gap-2 ml-12">
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

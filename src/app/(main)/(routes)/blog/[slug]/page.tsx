import Image from "next/image";
import { Heart } from "lucide-react";
import { LoaderImage } from "@/components/custom/loader-image";
import { Separator } from "@/components/plate-ui/separator";
import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import { readBlog } from "@/server/actions/blog";
import { readCommentByBlogId } from "@/server/actions/comment";
import { IBaseResponse } from "@/server/data/types/base";
import { IBlog } from "@/server/data/types/blog";
import { axiosInstance } from "@/utils/axios";
import { convertStringDay } from "@/utils/helpers/convert-time";
import { CardBlog } from "../@components/card-blog";
import Comment from "../@components/comment";
import ContentBlog from "../@components/content-blog";

export default async function Page({ params }: { params: { slug: string } }) {
  const { data: blog } = await axiosInstance.get<IBaseResponse<IBlog>>(
    `/api/blog?slug=${params.slug}`,
  );
  const blogs = await readBlog();
  const comments = await readCommentByBlogId(blog && blog.id)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-between items-start px-4 mx-auto h-screen gap-10 overflow-auto">
      <div className="w-full h-auto relative col-span-1 md:col-span-2">
        <div className="sticky top-0 z-40 backdrop-blur-sm bg-white/30 mb-5 p-2">
          <h1 className="text-3xl font-bold dark:text-gray-200">
            {blog.title}
          </h1>
          <p className="text-sm dark:text-gray-400">
            {new Date(blog.created_at).toDateString()}
          </p>
        </div>
        <LoaderImage
          isLoader={false}
          src={blog.image_url}
          alt={blog.title}
          width={500}
          height={400}
          className="object-cover object-center rounded-md border-[0.5px] border-zinc-600"
        />
        <ContentBlog content={JSON.parse(blog.content as string)} />
        <Separator className="w-full" />
        <div className="w-full flex flex-col justify-start items-start py-4 px-2 gap-5 bg-white dark:bg-black">
          <TypographyH3 title="Top Comments" className="font-medium" />
          <Comment blogId={blog.id} />
          <div className="w-full h-full">
            {comments.data && comments.data.length > 0 && comments.data?.map((comment, i) => {
              return (
                <div key={i} className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full flex justify-start items-center gap-2">
                    <Image
                      src={comment.users?.avatar_url as string}
                      width={24}
                      height={24}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                    <div className="w-full flex flex-col justify-start items-start border rounded-md p-4">
                      <div className="flex items-center justify-start gap-2 w-full">
                        <TypographyP title={comment.users?.display_name as string} className="font-medium" />
                        <span className="text-xs text-zinc-500">{convertStringDay(comment.created_at)}</span>
                      </div>
                      <ContentBlog content={JSON.parse(comment.content as string)} />
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 ml-8">
                    <Heart className="w-[16px] h-[16px]" />
                    <span className="text-xs text-zinc-700">{comment.like} likes</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <CardBlog
        className="sticky top-0 z-30 col-span-1 self-start"
        items={blogs && blogs.filter((blog) => blog.slug !== params.slug)}
      />
    </div>
  );
}
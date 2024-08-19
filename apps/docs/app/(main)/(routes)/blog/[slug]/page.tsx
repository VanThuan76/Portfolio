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
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@ui/molecules/ui-elements/avatar";

import { axiosInstance } from "@api/axios";
import { cn } from "@utils/tw";
import { convertStringDay } from "@utils/helpers/convert-time";

import CardBlog from "../@components/card-blog";
import ContentBlog from "../@components/content-blog";
import Comment from "../@components/comment";

const fontBlog = Nunito_Sans({
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700"],
    preload: true,
    subsets: ["latin"],
});

async function getBlogAndCommentData(slugBlog: string) {
    try {
        const { data: blog } = await axiosInstance.get<IBaseResponse<IBlogSupabase>>(
            `/api/blog?slug=${slugBlog}`
        );
        const comments = await readCommentByBlogId(blog && blog.id);
        return {
            blog,
            comments,
        };
    } catch (error) {
        console.error("Error fetching blog and comments data:", error);
        throw new Error("Failed to fetch blog and comments data");
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { blog, comments } = await getBlogAndCommentData(params.slug);
    const user = await currentProfile();
    const blogs = await getBlog();

    return (
        <div className="relative grid items-start justify-between w-full h-full grid-cols-1 gap-10 px-0 pt-6 mx-auto md:px-4 md:pt-0 md:grid-cols-3">
            <article className="relative z-20 w-full h-auto col-span-1 p-3 bg-white translate-y-52 rounded-3xl md:bg-transparent md:translate-y-0 md:p-0 md:rounded-none md:col-span-2">
                <div className="absolute z-50 pt-2 mb-5 bg-transparent md:sticky -top-20 md:top-9 backdrop-blur-none md:backdrop-blur-sm md:bg-white/30">
                    <h1 className="text-3xl font-extrabold text-white md:font-bold md:text-black dark:text-gray-200">
                        {blog.title}
                    </h1>
                    <p className="text-sm font-medium text-white md:text-black dark:text-gray-400 md:font-normal">
                        {new Date(blog.created_at).toDateString()}
                    </p>
                </div>
                <div
                    className={cn(
                        "w-full h-full dark:bg-grid-white/[0.1] md:bg-grid-black/[0.1] text-xs md:text-base",
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
            <div className="absolute top-0 right-0 block w-full h-[20%] md:hidden z-10">
                <LoaderImage
                    isLoader={false}
                    src={blog.image_url}
                    alt={blog.title}
                    className="object-cover w-full h-full"
                    width={1980}
                    height={500}
                />
            </div>
            <div className="hidden md:block sticky top-10 z-30 col-span-1 self-start border-l border-l-[#555] h-full">
                <CardBlog
                    items={blogs && blogs.filter((blog) => blog.slug !== params.slug)}
                />
            </div>
        </div>
    );
}

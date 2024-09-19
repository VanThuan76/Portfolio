"use client";

import { Maximize2 } from "lucide-react";
import { Nunito_Sans } from "next/font/google";

import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import {
  Modal,
  ModalBody,
  ModalTrigger,
} from "@ui/molecules/modals/animated-modal";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import { cn } from "@utils/tw";

import { IBlog, IBlogSupabase } from "@server/data/types/blog";
import { IBlogCommentWithUser } from "@server/actions/comment";
import { IAuthSupabase } from "@server/data/types/supabase";

import CardBlog from "./card-blog";
import ContentBlog from "./content-blog";
import Comment from "./comment";
import ListComment from "./list-comment";
import { useDisableScroll } from "@shared/hooks/use-disable-scroll";

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
  user: IAuthSupabase;
}) => {
  useDisableScroll();

  return (
    <>
      <div className="z-50 flex flex-col items-start justify-start w-full h-full col-span-1 gap-0 translate-y-52 md:translate-y-0 md:gap-5 md:col-span-4 md:overflow-y-auto">
        <article className="relative w-full h-full md:h-[80%] p-3 bg-white md:overflow-y-auto rounded-t-3xl md:bg-transparent md:p-0 md:rounded-none">
          <div className="absolute z-20 p-2 mb-5 bg-transparent md:sticky -top-20 md:top-0 backdrop-blur-none md:backdrop-blur-sm md:bg-black/30 dark:bg-white/30 md:rounded-b-lg">
            <h1 className="text-3xl font-extrabold text-white md:font-bold md:text-black dark:text-gray-200">
              {blog.title}
            </h1>
            <p className="text-sm font-medium text-white md:text-black dark:text-gray-400 md:font-normal">
              {new Date(blog.created_at).toDateString()}
            </p>
          </div>

          <div
            className={cn(
              "z-10 w-full h-full dark:bg-grid-small-white/[0.1] md:bg-grid-small-black/[0.1] text-xs md:text-base md:px-4",
              fontBlog.className,
            )}
          >
            <ContentBlog content={JSON.parse(blog.content as string)} />
          </div>
        </article>

        <div className="relative flex flex-col items-start justify-start w-full h-full md:h-[20%] z-20 gap-5 px-2 pb-4 md:px-4 bg-white rounded-sm md:overflow-y-auto dark:bg-black">
          <div className="sticky top-0 z-50 flex items-center justify-between w-full pt-4 bg-white">
            <TypographyH3
              title={`Top Comments(${comments.length})`}
              className="text-lg font-medium"
            />
            <Modal>
              <ModalTrigger className="hidden md:block">
                <Maximize2 />
              </ModalTrigger>
              <ModalBody className="z-50 p-4 overflow-y-auto">
                <ListComment comments={comments} />
              </ModalBody>
            </Modal>
          </div>

          <Comment user={user} blogId={blog.id} />

          <ListComment comments={comments} />
        </div>
      </div>

      <MotionContainer
        delay={0.3}
        type="blur"
        className="sticky z-10 self-start hidden h-full col-span-1 md:block top-10"
      >
        <CardBlog
          items={blogs && blogs.filter((blog) => blog.slug !== params)}
        />
      </MotionContainer>

      <div className="absolute top-0 right-0 block w-full h-[40%] md:hidden z-10">
        <LoaderImage
          isLoader={false}
          src={blog.image_url}
          alt={blog.title}
          className="object-cover w-full h-full"
          width={1980}
          height={500}
        />
      </div>
    </>
  );
};

export default ClientSlugBlog;

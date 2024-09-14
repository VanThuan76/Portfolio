import { Maximize2 } from "lucide-react";
import { Nunito_Sans } from "next/font/google";

import { getArticleBlog, getBlog } from "@server/actions/blog";
import { currentProfile } from "@server/actions/auth";

import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import {
  Modal,
  ModalBody,
  ModalTrigger,
} from "@ui/molecules/modals/animated-modal";

import { cn } from "@utils/tw";

import CardBlog from "../@components/card-blog";
import ContentBlog from "../@components/content-blog";
import Comment from "../@components/comment";
import ListComment from "../@components/list-comment";

const fontBlog = Nunito_Sans({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBlog(params.slug);
  const user = await currentProfile();
  const blogs = await getBlog();

  if (!article) return <></>;

  const { blog, comments } = article;

  return (
    <div className="relative md:bg-[#F6F6F6] dark:bg-[#030712] rounded-none md:rounded-lg border shadow-none md:shadow-lg grid items-start justify-between w-full h-full md:h-[45rem] grid-cols-1 gap-10 px-0 pt-6 mx-auto md:py-6 md:px-12 md:grid-cols-5 overflow-hidden">
      <div className="flex flex-col items-start justify-start w-full h-full col-span-1 gap-5 md:col-span-4 md:overflow-y-auto">
        <article className="relative z-20 w-full h-full md:h-[80%] p-3 bg-white md:overflow-y-auto translate-y-52 rounded-t-3xl md:bg-transparent md:translate-y-0 md:p-0 md:rounded-none">
          <div className="absolute z-50 p-2 mb-5 bg-transparent md:sticky -top-20 md:top-0 backdrop-blur-none md:backdrop-blur-sm md:bg-black/30 dark:bg-white/30 md:rounded-b-lg">
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
        </article>

        <div className="flex flex-col items-start justify-start w-full h-full mt-[11rem] md:mt-0 md:h-[20%] gap-5 px-2 py-4 bg-white rounded-sm md:overflow-y-auto dark:bg-black">
          <div className="flex items-center justify-between w-full">
            <TypographyH3
              title={`Top Comments(${comments.length})`}
              className="text-lg font-medium"
            />
            <Modal>
              <ModalTrigger className="hidden md:block">
                <Maximize2 />
              </ModalTrigger>
              <ModalBody className="p-4 overflow-y-auto">
                <ListComment comments={comments} />
              </ModalBody>
            </Modal>
          </div>

          <Comment user={user} blogId={blog.id} />

          <ListComment comments={comments} />
        </div>
      </div>

      <div className="hidden md:block sticky top-10 z-30 col-span-1 self-start border-l border-l-[#555] h-full">
        <CardBlog
          items={blogs && blogs.filter((blog) => blog.slug !== params.slug)}
        />
      </div>

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
    </div>
  );
}

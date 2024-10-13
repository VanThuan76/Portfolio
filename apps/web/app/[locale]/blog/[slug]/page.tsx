"use client";

import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { cn } from "@utils/tw";
import { useModal } from "@shared/hooks/use-modal";
import { fontBlog } from "@shared/utils/font";
import { formatLocaleDate } from "@shared/helpers/get-time";
import { getBlogBySlug } from "@shared/query/actions/blog-actions";

import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import LoadingCommon from "@shared/layouts/loading-common";
import useSupabaseBrowser from "@shared/utils/supabase/client";

import PathLeftIcon from "../_components/icons/path-left";
import PathRightIcon from "../_components/icons/path-right";

const ContentBlog = dynamic(() => import("../_components/content-blog"));
const ListComment = dynamic(() => import("../_components/list-comment"));

export default function Page({ params }: { params: { slug: string } }) {
  const locale = useLocale();
  const t = useTranslations("pages.blog");
  const supabase = useSupabaseBrowser();

  const [article, setArticle] = useState<any | null>(null);

  const { onOpen } = useModal();

  useEffect(() => {
    const fetchArticle = async () => {
      console.log(params.slug);
      const response = await getBlogBySlug(supabase, params.slug, locale);

      if (response.status === 200) {
        setArticle(response.data);
      } else {
        console.error(response.message);
      }
    };

    fetchArticle();
  }, [params.slug]);

  if (!article) return <LoadingCommon />;

  return (
    <div className="relative grid w-full h-full grid-cols-1 pt-6 overflow-hidden border-none rounded-none shadow-none md:rounded-lg md:shadow-lg md:grid-cols-5 md:p-0">
      <div className="absolute md:hidden top-0 right-0 w-full h-[20%] md:h-full col-span-1 md:col-span-2 z-10">
        <LoaderImage
          isLoader={false}
          width={1920}
          height={1280}
          src={article.image_url}
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
            <ContentBlog content={JSON.parse(article.content as string)} />
          </div>
        </article>
      </div>

      <div className="hidden lg:block w-[200px] h-full p-2 mb-5 bg-[#e8e6e6] backdrop-blur-none md:backdrop-blur-sm md:bg-black/30 dark:bg-white/30 md:rounded-b-lg">
        <h1 className="text-3xl font-extrabold text-white text-wrap">
          Austin Vu
        </h1>
        <p className="text-sm font-medium text-white">
          {formatLocaleDate(article.created_at, locale)}
        </p>
        <span
          className="text-sm font-medium text-white underline cursor-pointer"
          onClick={() =>
            onOpen("article", {
              blogId: article.id,
              comments: article.comments,
            })
          }
        >
          {t("comment")}
        </span>
        <div className="relative flex h-[500px] w-full flex-col overflow-hidden">
          <ListComment comments={article.comments} />
        </div>
      </div>

      <div className="fixed top-0 z-50 flex w-full transition-all translate-x-1/2 right-1/2">
        <PathLeftIcon className="-ml-20" />
        <div className="flex items-center justify-between bg-white">
          <TypographyH3 title={article.title} className="text-lg font-medium" />
        </div>
        <PathRightIcon className="-mr-20 transform scale-x-[-1]" />
      </div>
    </div>
  );
}

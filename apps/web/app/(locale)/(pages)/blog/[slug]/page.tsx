"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { PLACE_HOLDER_BLUR_HASH } from "@/shared/constants";
import { formatLocaleDate } from "@shared/helpers/get-time";

import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import { IUserMetadata, getBlogBySlug } from "@repo/supabase/queries";

import { Button } from "@repo/design-system/components/atoms/button";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { BlurImage } from "@repo/design-system/components/molecules/ui-elements/blur-image";
import { TextAnimated } from "@repo/design-system/components/molecules/ui-elements/text-animated";

const ActionsBlog = dynamic(() => import("../components/actions-blog"), {
  ssr: false,
});
const TopComment = dynamic(() => import("../components/top-comment"), {
  ssr: false,
});
const CommentForm = dynamic(() => import("../components/forms/comment"), {
  ssr: false,
});

const PlateShowContent = dynamic(() => import("@repo/editor/content"), {
  ssr: false,
  loading: () => <Skeleton className="w-full min-h-[500px]" />,
});

const ListComment = dynamic(() => import("../components/list-comment"), {
  ssr: false,
  loading: () => (
    <div className="flex items-start w-full gap-2 mt-2">
      <Skeleton className="w-[32px] h-[32px] mt-1 rounded-full" />
      <div className="flex flex-col items-start justify-start w-full gap-2">
        <Skeleton className="w-[200px] h-[50px]" />
        <Skeleton className="w-full h-[75px]" />
      </div>
    </div>
  ),
});

export default function Page() {
  const supabase = useSupabaseBrowser();
  const tBlog = useTranslations("pages.blog");
  const locale = useLocale();
  const params = useParams<{ locale: string; slug: string }>();

  const [optionsQuery, setOptionsQuery] = useState({
    language_code: locale,
    slug: params.slug,
  });

  const { data: article, refetch } = useQuery({
    queryKey: ["article", optionsQuery.slug, optionsQuery.language_code],
    queryFn: () =>
      getBlogBySlug(supabase, optionsQuery.slug, optionsQuery.language_code),
    enabled: !!optionsQuery.slug,
  });

  const userMetadata: IUserMetadata =
    article && article.data && JSON.parse(article.data.users?.user_metadata);

  const handleAnimationComplete = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      {article && article.data ? (
        <m.div
          layout
          key={article.data.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onAnimationComplete={handleAnimationComplete}
          className="grid w-full h-full min-h-screen grid-cols-1 gap-0 mb-20 overflow-y-auto rounded-none md:pt-4 md:gap-2 md:rounded-lg md:grid-cols-11 md:px-4 md:mb-10"
        >
          <main className="relative w-full h-full col-span-1 bg-white md:col-span-8 md:rounded-t-md">
            <article className="flex flex-col items-center justify-start w-full border-none h-fit">
              <BlurImage
                priority
                alt={article.data.title as string}
                src={article.data.image_url}
                blurDataURL={article.data.image_url ?? PLACE_HOLDER_BLUR_HASH}
                className="object-cover object-center w-full max-h-[350px] md:rounded-t-md"
                width={1280}
                height={350}
                placeholder="blur"
                sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
              />
              <section className="relative w-full px-2 pt-3 transition-all duration-150 ease-in-out md:px-4 h-fit lg:px-10 rounded-t-3xl md:rounded-none">
                <div className="flex items-start flex-1 mb-3">
                  <div className="relative">
                    <BlurImage
                      priority
                      alt={userMetadata?.user_name ?? "@user_image"}
                      blurDataURL={
                        userMetadata?.avatar_url ?? PLACE_HOLDER_BLUR_HASH
                      }
                      src={
                        userMetadata?.avatar_url ?? "/images/blog/anonymous.png"
                      }
                      className="rounded-md"
                      width={50}
                      height={50}
                      placeholder="blur"
                      sizes="(max-width: 50px) 50px, 50px"
                    />
                  </div>
                  <div className="flex-1 pl-3">
                    <TextAnimated
                      per="char"
                      preset="fade"
                      className="font-bold"
                    >
                      {userMetadata.full_name ??
                        userMetadata.preferred_username ??
                        tBlog("anonymous")}
                    </TextAnimated>
                    <TextAnimated per="char" as="time" preset="fade">
                      {tBlog("posted_on") +
                        " " +
                        formatLocaleDate(
                          article.data.created_at,
                          optionsQuery.language_code,
                        )}
                    </TextAnimated>
                  </div>
                </div>
                <TextAnimated
                  per="char"
                  as="h1"
                  preset="fade"
                  className="mb-3 text-3xl font-bold leading-7 md:text-5xl"
                >
                  {article.data.title as string}
                </TextAnimated>
                <div className="flex flex-wrap items-start justify-start w-full gap-2">
                  {article.data.tags.map((tag) => {
                    return <span key={tag.id}>#{tag.name}</span>;
                  })}
                </div>
                <div className="w-full h-fit dark:bg-grid-small-white/[0.1] md:bg-grid-small-black/20">
                  <PlateShowContent
                    className="w-full h-fit"
                    content={JSON.parse(article.data.content as string)}
                  />
                </div>
              </section>
            </article>
            <section
              id="comments"
              className="w-full px-4 mt-10 mb-24 overflow-hidden md:px-10 h-fit"
            >
              <h1 className="mb-3 text-xl font-bold leading-7 md:text-3xl">
                {tBlog("list_comments")}({article.data.total_comment})
              </h1>
              <CommentForm
                isCommentEditor={true}
                slug={params.slug}
                blogId={article.data.id}
                refetch={refetch}
              />
              <ListComment
                blogId={article.data.id}
                slug={params.slug}
                comments={article.data.comments || []}
                refetch={refetch}
              />
            </section>
            <ActionsBlog
              article={article.data}
              optionsQuery={optionsQuery}
              setOptionsQuery={setOptionsQuery}
              refetch={refetch}
            />
          </main>
          <aside className="relative w-full h-full col-span-1 md:col-span-3">
            <m.div
              className="sticky right-0 z-50 hidden space-y-4 top-1 md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="w-full max-h-[500px] bg-white rounded-md border border-slate-200 shadow-sm overflow-hidden">
                <div className="w-full h-5 bg-[#d0bca3] md:h-8"></div>
                <div className="flex flex-col w-full px-2 pt-2">
                  <div className="relative flex items-end justify-start gap-2 -translate-y-1/2">
                    <BlurImage
                      priority
                      alt={userMetadata?.user_name ?? ("@user_image" as string)}
                      src={
                        userMetadata?.avatar_url ?? "/images/blog/anonymous.png"
                      }
                      blurDataURL={
                        userMetadata?.avatar_url ?? PLACE_HOLDER_BLUR_HASH
                      }
                      className="rounded-full"
                      width={50}
                      height={50}
                      placeholder="blur"
                      sizes="(max-width: 50px) 50px, 50px"
                    />
                    <TextAnimated
                      per="char"
                      preset="fade"
                      className="font-bold cursor-pointer hover:text-black/80"
                    >
                      {userMetadata.full_name ??
                        userMetadata.preferred_username ??
                        tBlog("anonymous")}
                    </TextAnimated>
                  </div>
                  <Button className="mb-2 text-black bg-[#EAE1D6] hover:bg-[#d0bca3]">
                    {tBlog("follow")}
                  </Button>
                  <ul>
                    <li>
                      <div className="font-semibold">{tBlog("joined")}</div>
                      <time>
                        {formatLocaleDate(
                          article.data.users.created_at,
                          locale,
                        )}
                      </time>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full max-h-[500px] px-2 pt-2 bg-white rounded-md border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold">
                  {tBlog("top_comments")}
                </h3>
                <div className="relative flex flex-col w-full h-full overflow-hidden">
                  <TopComment comments={article.data.comments || []} />
                </div>
              </div>
            </m.div>
          </aside>
        </m.div>
      ) : (
        <main className="relative grid w-full h-full grid-cols-1 gap-4 overflow-hidden rounded-none md:pt-4 md:rounded-lg md:shadow-lg md:grid-cols-10 md:px-4">
          <Skeleton className="flex flex-col items-center justify-start w-full h-screen col-span-1 overflow-hidden overflow-y-auto border-none rounded-md bg-black/10 md:border md:col-span-7 md:rounded-t-md md:border-slate-400" />
          <Skeleton className="w-full bg-black/10 h-[300px] col-span-1 p-2 mb-5 rounded-md md:col-span-3" />
        </main>
      )}
    </AnimatePresence>
  );
}

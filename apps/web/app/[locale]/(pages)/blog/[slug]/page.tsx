"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useTranslations } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { queryClient } from "@providers/react-query";

import { cn } from "@repo/design-system/utils/tw";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import { useModal, useUser, useIsSafari, useOpenScreen } from "@repo/hooks";
import {
  IBlog,
  IUserMetadata,
  ICreateReaction,
  getBlogBySlug,
  createReaction,
} from "@repo/supabase/queries";

import { formatLocaleDate } from "@shared/helpers/get-time";
import { Button } from "@repo/design-system/components/atoms/button";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { TextAnimated } from "@repo/design-system/components/molecules/ui-elements/text-animated";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";
import {
  PopoverBody,
  PopoverButton,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@repo/design-system/components/molecules/other-utils/popover-animated";
import PlateShowContent from "@repo/editor/content";

import LanguageIcon from "../components/icons/language";
import HeartGrowIcon from "../components/icons/heart-grow";
import WowIcon from "../components/icons/wow";
import FireIcon from "../components/icons/fire";
import ClappingHandsIcon from "../components/icons/clapping-hands";
import DotsIcon from "../components/icons/dots";
import ThumbsUpIcon from "../components/icons/thumbs-up";
import ArticleIcon from "../components/icons/article";

import ListComment from "../components/list-comment";
import TopComment from "../components/top-comment";
const CommentForm = dynamic(() => import("../components/forms/comment"), {
  ssr: false,
});

export default function Page() {
  const params = useParams<{ locale: string; slug: string }>();

  const isSafari = useIsSafari();
  const supabase = useSupabaseBrowser();
  const tBlog = useTranslations("pages.blog");
  const tLang = useTranslations("languages");

  const [optionsQuery, setOptionsQuery] = useState({
    language_code: params.locale,
    slug: params.slug,
  });

  const { data: article, refetch } = useQuery({
    queryKey: ["article", optionsQuery.slug, optionsQuery.language_code],
    queryFn: () =>
      getBlogBySlug(supabase, optionsQuery.slug, optionsQuery.language_code),
    enabled: !!optionsQuery.slug,
  });

  const { onOpen } = useModal();
  const { data: user } = useUser();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { handleOpenScreen } = useOpenScreen(isSafari);

  const handleNavigateCreateBlog = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user && user?.id) {
      handleOpenScreen(e, "/blog/new");
    } else {
      onOpen("auth", "blog");
    }
  };

  const { mutate: reactBlog } = useMutation<any, Error, ICreateReaction>({
    mutationFn: async (variables) => {
      if (!executeRecaptcha) {
        return;
      }
      return await executeRecaptcha("likeAction").then((gReCaptchaToken) => {
        createReaction(supabase, variables, gReCaptchaToken);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["article", params.slug, params.locale],
      });
    },
  });

  const actions = (article: IBlog) => {
    const reactionTypes = [
      {
        type: "heart",
        icon: <HeartGrowIcon className="w-4 h-4" />,
        label: tBlog("heart"),
      },
      {
        type: "wow",
        icon: <WowIcon className="w-4 h-4" />,
        label: tBlog("wow"),
      },
      {
        type: "fire",
        icon: <FireIcon className="w-4 h-4" />,
        label: tBlog("fire"),
      },
      {
        type: "raise_hands",
        icon: <ClappingHandsIcon className="w-4 h-4" />,
        label: tBlog("clapping"),
      },
    ];

    const reactionCounts = reactionTypes.map((reaction) => {
      const count = article.reactions.filter(
        (item) => item.reaction_type === reaction.type,
      ).length;
      return { ...reaction, count };
    });

    return [
      {
        trigger: (
          <div className="flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer">
            <ThumbsUpIcon className="w-[24px] h-[24px] bg-transparent rounded-full p-0.5 transition-colors duration-200" />
            <span>{article.reactions.length}</span>
          </div>
        ),
        content: reactionCounts.map((reaction) => {
          const isUserReaction = article.reactions.some(
            (item) =>
              item.reaction_type === reaction.type && item.user_id === user?.id,
          );

          return {
            icon: reaction.icon,
            label: (
              <div
                className={cn(
                  "flex items-center justify-start gap-2",
                  isUserReaction
                    ? "bg-[#AC8E8F] px-2 rounded-md text-white"
                    : "",
                )}
              >
                <p>{reaction.label}</p>
                {reaction.count > 0 && <span>+ {reaction.count}</span>}
              </div>
            ),
            action: () => {
              if (user && user?.id) {
                const body = {
                  user_id: user.id,
                  blog_id: article.id,
                  reaction_type: reaction.type,
                };
                reactBlog(body);
              } else {
                onOpen("auth");
              }
            },
          };
        }),
      },
      {
        trigger: (
          <div className="flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer">
            <LanguageIcon className="w-[24px] h-[24px] bg-transparent rounded-full p-0.5 transition-colors duration-200" />
            <span>{article.translations?.length}</span>
          </div>
        ),
        content: article.translations?.map((item) => ({
          icon: <LanguageIcon className="w-4 h-4" />,
          label: tLang(`${item.language_code}`),
          action: () => {
            setOptionsQuery(item as { language_code: string; slug: string });
            refetch();
          },
        })),
      },
      {
        trigger: (
          <div className="flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer">
            <DotsIcon className="w-[24px] h-[24px] bg-transparent rounded-full p-0.5 transition-colors duration-200" />
          </div>
        ),
        content: [
          {
            icon: <ArticleIcon className="w-4 h-4" />,
            label: "Create Article",
            action: (e) => handleNavigateCreateBlog(e),
          },
        ],
      },
    ];
  };

  const userMetadata: IUserMetadata =
    article && article.data && JSON.parse(article.data.users?.user_metadata);

  const handleAnimationComplete = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        {article && article.data ? (
          <m.div
            key={article.data.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            onAnimationComplete={handleAnimationComplete}
            className="grid w-full h-full grid-cols-1 gap-0 rounded-none md:pt-4 md:gap-2 md:rounded-lg md:grid-cols-11 md:px-4"
          >
            <main className="relative w-full h-full col-span-1 bg-white md:col-span-8 md:rounded-t-md">
              <article className="flex flex-col items-center justify-start h-auto border-none">
                <header className="h-[350px] w-full overflow-hidden md:rounded-t-md">
                  <LoaderImage
                    isLoader={false}
                    src={article.data.image_url}
                    alt="@bg_blog"
                    width={1280}
                    height={350}
                    className="object-cover object-center w-full h-full"
                  />
                </header>
                <section className="relative w-full h-auto px-4 pt-3 transition-all duration-150 ease-in-out md:px-10 rounded-t-3xl md:rounded-none">
                  <div className="flex items-start flex-1 mb-3">
                    <div className="relative">
                      <LoaderImage
                        isLoader={false}
                        src={
                          userMetadata.avatar_url ??
                          "/images/blog/anonymous.png"
                        }
                        width={50}
                        height={50}
                        alt="@avatar"
                        className="rounded-md"
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
                      <TextAnimated per="char" preset="fade">
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
                  <div className="w-full h-auto dark:bg-grid-small-white/[0.1] md:bg-grid-small-black/[0.1]">
                    <PlateShowContent
                      content={JSON.parse(article.data.content as string)}
                    />
                  </div>
                </section>
              </article>
              <section
                id="comments"
                className="px-4 mt-10 mb-24 overflow-hidden md:px-10"
              >
                <h1 className="mb-3 text-xl font-bold leading-7 md:text-3xl">
                  {tBlog("list_comments")}({article.data.total_comment})
                </h1>
                <CommentForm
                  isCommentEditor={true}
                  slug={params.slug}
                  blogId={article.data.id}
                />
                <ListComment
                  blogId={article.data.id}
                  slug={params.slug}
                  comments={article.data.comments || []}
                />
              </section>
              <div className="sticky w-fit z-50 bottom-5 flex flex-row items-center justify-center gap-4 px-2 md:px-4 py-1 md:py-2 rounded-md bg-[#EAE1D6] mx-auto md:left-[28%]">
                {actions(article.data).map((item, index) => (
                  <PopoverRoot key={index} className="relative">
                    <PopoverTrigger className="bg-transparent">
                      {item.trigger}
                    </PopoverTrigger>
                    {item.content?.length !== 0 && (
                      <PopoverContent className="w-48 h-auto overflow-y-auto max:h-48 -top-32 bg-[#F8F5F2]">
                        <PopoverBody className="p-1">
                          {item.content?.map((action, index) => (
                            <PopoverButton key={index} onClick={action.action}>
                              {action.icon}
                              <span>{action.label}</span>
                            </PopoverButton>
                          ))}
                        </PopoverBody>
                      </PopoverContent>
                    )}
                  </PopoverRoot>
                ))}
              </div>
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
                  <div className="w-full h-5 bg-[#EAE1D6] md:h-8"></div>
                  <div className="flex flex-col w-full px-2 pt-2">
                    <div className="relative flex items-end justify-start gap-2 -translate-y-1/2">
                      <LoaderImage
                        isLoader={false}
                        src={
                          userMetadata.avatar_url ??
                          "/images/blog/anonymous.png"
                        }
                        width={50}
                        height={50}
                        alt="@avatar"
                        className="rounded-full"
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
                    <Button className="mb-2 bg-black/80">
                      {tBlog("follow")}
                    </Button>
                    <ul>
                      <li>
                        <div className="font-semibold">{tBlog("joined")}</div>
                        <div>
                          {formatLocaleDate(
                            article.data.users.created_at,
                            params.locale,
                          )}
                        </div>
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
    </Suspense>
  );
}

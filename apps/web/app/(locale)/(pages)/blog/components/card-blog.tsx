"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@providers/react-query";
import { LoaderCircle } from "lucide-react";

import { cn } from "@repo/design-system/utils/tw";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";

import { useModal, useBreakpoint, useOpenScreen, useUser } from "@repo/hooks";
import {
  IBlog,
  IUserMetadata,
  ISaveReaction,
  BlogTagSupabase,
  saveReaction,
} from "@repo/supabase/queries";

import { formatLocaleDate } from "@shared/helpers/get-time";
import { calculateReadTime } from "@shared/helpers/calculate";

import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { Badge } from "@repo/design-system/components/molecules/ui-elements/badge";
import {
  Card,
  CardTitle,
} from "@repo/design-system/components/organisms/cards/card-hover-effect";

import ClockIcon from "./icons/clock";
import HeartGrowIcon from "./icons/heart-grow";
import WowIcon from "./icons/wow";
import FireIcon from "./icons/fire";
import ClappingHandsIcon from "./icons/clapping-hands";
import ChatDotsIcon from "./icons/chat-dots";
import SaveIcon from "./icons/save";

const ListComment = dynamic(() => import("./list-comment"), {
  ssr: false,
  loading: () => (
    <div className="flex items-start w-full gap-2 mt-4">
      <Skeleton className="w-[32px] h-[32px] mt-1 rounded-full" />
      <div className="flex flex-col items-start justify-start w-full gap-2">
        <Skeleton className="w-[200px] h-[50px]" />
        <Skeleton className="w-full h-[75px]" />
      </div>
    </div>
  ),
});

const CardBlog = ({
  items,
  className,
}: {
  items: IBlog[];
  className?: string;
}) => {
  const t = useTranslations("pages.blog");
  const locale = useLocale();
  const breakpoint = useBreakpoint();
  const supabase = useSupabaseBrowser();
  const isMobile = ["xs", "sm"].includes(breakpoint);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedSlug, setClickedSlug] = useState<string | null>(null);

  const { onOpen } = useModal();
  const { data: user } = useUser();
  const { handleOpenScreen, isPageChanging } = useOpenScreen();

  function handleRedirect(e, card: IBlog) {
    setClickedSlug(card.slug);
    if (["xs", "sm"].includes(breakpoint)) {
      handleOpenScreen(e, `/blog/${card.slug}`);
    } else {
      onOpen("blog", card);
    }
  }

  const { mutate: saveBlog } = useMutation<any, Error, ISaveReaction>({
    mutationFn: async (variables) => {
      return await saveReaction(supabase, variables);
    },
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  const handleSave = (item, isSaved) => {
    if (user && user?.id) {
      saveBlog({
        user_id: user.id,
        blog_id: item.id,
        is_saved: !isSaved,
      });
    } else {
      onOpen("auth");
    }
  };

  return (
    <div className={cn(className)}>
      {items.map((item: IBlog, index: number) => {
        const isListComment =
          ["xs", "sm"].includes(breakpoint) &&
          item.comments &&
          item.comments.length > 0;

        const readTime = useMemo(
          () => calculateReadTime(item.content),
          [item && item.content],
        );
        const userMetadata: IUserMetadata = JSON.parse(
          item?.users?.user_metadata,
        );
        const isSaved = item.reactions.find(
          (react) => react.user_id === user?.id && react.is_saved === true,
        );

        return (
          <m.div
            layout
            id={item.slug as string}
            key={item.slug}
            initial="initial"
            animate={clickedSlug === item.slug ? "click" : "initial"}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative block w-full p-0 cursor-pointer md:p-2 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => handleRedirect(e, item)}
          >
            <AnimatePresence>
              {hoveredIndex === index && !isMobile && (
                <m.span
                  className="absolute inset-0 min-h-[100px] h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-md"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.75,
                      type: "spring",
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.75,
                      type: "spring",
                      ease: "easeInOut",
                      delay: 0.35,
                    },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="relative p-0 m-0 dark:bg-[#393E46] bg-white border border-black/10 overflow-hidden shadow-lg rounded-lg">
              <div className="relative z-50 flex flex-col items-start justify-start w-full h-auto gap-2 px-2 pb-2 overflow-hidden">
                <div className="flex items-center justify-start gap-2 mt-2">
                  <Image
                    priority
                    src={
                      userMetadata.avatar_url ?? "/images/blog/anonymous.png"
                    }
                    width={32}
                    height={32}
                    alt="@avatar"
                    className="overflow-hidden rounded-full"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <p className="text-xs text-black">
                      {userMetadata.full_name ??
                        userMetadata.preferred_username ??
                        "Annoymouse"}
                    </p>
                    <span className="text-xs text-black/50">
                      {formatLocaleDate(item.users.created_at, locale)}
                    </span>
                  </div>
                </div>

                <CardTitle className="flex items-end justify-start !mt-0 order-1 gap-1 text-lg font-bold text-black md:font-medium dark:text-white truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {item.title}
                </CardTitle>

                <div className="bottom-0 flex flex-col order-4 w-full gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex justify-start flex-1 gap-2">
                      <div className="flex flex-wrap items-center justify-center gap-1">
                        <div className="flex items-start justify-start">
                          <HeartGrowIcon className="w-4 h-4 -mr-1" />
                          <WowIcon className="w-4 h-4 -mr-1" />
                          <FireIcon className="w-4 h-4 -mr-1" />
                          <ClappingHandsIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-normal text-black">
                          {item.reactions.length}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-1">
                        <ChatDotsIcon className="w-[16px] h-[16px]" />
                        <span className="text-xs font-normal text-black">
                          {item.total_comment}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-1">
                      <ClockIcon className="w-[16px] h-[16px]" />
                      <span className="text-xs font-normal text-black">
                        {readTime}
                      </span>
                    </div>
                  </div>
                  {isListComment && (
                    <>
                      <ListComment
                        blogId={item.id}
                        slug={item.slug as string}
                        comments={item.comments || []}
                        isShowInteraction={false}
                      />
                      <div className="text-sm">
                        {t("see_all")} {item.comments?.length} {t("comment")}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap items-start justify-start order-2 w-full gap-2">
                  {item.tags &&
                    item.tags.map((tag: BlogTagSupabase, index: number) => {
                      return (
                        <Badge
                          key={index}
                          className="font-normal text-black rounded-sm bg-slate-100 hover:bg-slate-200"
                        >
                          #{tag.name}
                        </Badge>
                      );
                    })}
                </div>
                <Image
                  priority
                  src={item.image_url}
                  alt={item.title as string}
                  placeholder="blur"
                  blurDataURL={item.image_url}
                  width={400}
                  height={400}
                  sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                  className="object-cover object-center py-1 sm:p-0 w-full sm:w-[50%] md:w-full h-[200px] order-3"
                />
              </div>
              <SaveIcon
                onClick={() => handleSave(item, isSaved)}
                className={cn(
                  "absolute z-50 w-4 h-4 top-3 right-2",
                  isSaved ? "bg-yellow-100" : "",
                )}
              />
              {isPageChanging && (
                <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/10">
                  <LoaderCircle className="w-5 h-5 text-white animate-spin" />
                </div>
              )}
            </Card>
          </m.div>
        );
      })}
    </div>
  );
};
export default CardBlog;

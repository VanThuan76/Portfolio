"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

import { IUserMetadata, CommentWithUser } from "@repo/supabase/queries";

import { formatLocaleDate } from "@shared/helpers/get-time";

import { AnimatedList } from "@repo/design-system/components/molecules/effects/animated-list";
import { BlurImage } from "@repo/design-system/components/molecules/ui-elements/blur-image";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";

import HeartGrowIcon from "./icons/heart-grow";
import { PLACE_HOLDER_BLUR_HASH } from "@/shared/constants";

const PlateShowContent = dynamic(() => import("@repo/editor/content"), {
  ssr: false,
  loading: () => <Skeleton className="w-full min-h-[200px]" />,
});

const TopComment = ({ comments }: { comments: CommentWithUser[] }) => {
  const t = useTranslations("pages.blog");
  const locale = useLocale();

  const topComments = comments
    .filter((comment) => comment.like > 0)
    .sort((a, b) => b.like - a.like)
    .slice(0, 3);

  return (
    <AnimatedList>
      {topComments &&
        topComments.map((comment, i) => {
          const userMetadata: IUserMetadata =
            comment &&
            comment?.users &&
            JSON.parse(comment?.users?.user_metadata);

          return (
            <div
              key={i}
              className="flex flex-col items-start justify-start w-full gap-2 p-2 bg-transparent rounded-md"
            >
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <div className="flex items-center justify-start gap-2 mt-2">
                  <BlurImage
                    priority
                    alt={userMetadata?.user_name ?? "@user_image"}
                    blurDataURL={
                      userMetadata?.avatar_url ?? PLACE_HOLDER_BLUR_HASH
                    }
                    src={
                      userMetadata?.avatar_url ?? "/images/blog/anonymous.png"
                    }
                    className="overflow-hidden rounded-full"
                    width={32}
                    height={32}
                    placeholder="blur"
                    sizes="(max-width: 32px) 32px, 32px"
                  />
                  <div>
                    <p className="text-black">
                      {userMetadata?.full_name ??
                        userMetadata?.preferred_username ??
                        t("anonymous")}
                    </p>
                    <span className="text-xs text-black/50">
                      {formatLocaleDate(comment?.users?.created_at, locale)}
                    </span>
                  </div>
                </div>
                <div className="w-full border-white rounded-md md:border-none bg-slate-100 !text-sm pl-2">
                  <PlateShowContent
                    content={JSON.parse(comment.content as string)}
                  />
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <HeartGrowIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs text-black">
                  {comment.like} {t("likes")}{" "}
                </span>
              </div>
            </div>
          );
        })}
    </AnimatedList>
  );
};

export default TopComment;

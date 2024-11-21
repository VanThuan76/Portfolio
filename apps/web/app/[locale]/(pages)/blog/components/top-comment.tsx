"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

import { IUserMetadata, CommentWithUser } from "@repo/supabase/queries";

import { formatLocaleDate } from "@shared/helpers/get-time";

import { AnimatedList } from "@repo/design-system/components/molecules/effects/animated-list";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

import PlateShowContent from "@repo/editor/content";

import HeartGrowIcon from "./icons/heart-grow";

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
                  <LoaderImage
                    isLoader={false}
                    src={
                      userMetadata?.avatar_url ?? "/images/blog/anonymous.png"
                    }
                    width={32}
                    height={32}
                    alt="@avatar"
                    className="overflow-hidden rounded-full"
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

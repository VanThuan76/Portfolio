"use client";

import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@utils/tw";

import { IBlogCommentWithUser } from "@server/actions/comment";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@ui/molecules/ui-elements/avatar";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import { Separator } from "@ui/molecules/other-utils/separator";
import { AnimatedList } from "@ui/molecules/effects/animated-list";

import { convertStringDay } from "@utils/helpers/convert-time";

import ContentBlog from "./content-blog";

const ListComment = ({
  type = "article",
  comments,
}: {
  type?: "modal" | "article";
  comments: IBlogCommentWithUser[];
}) => {
  const Wrapper = type === "modal" ? React.Fragment : AnimatedList;

  return (
    <Wrapper>
      {comments &&
        comments.length > 0 &&
        comments.map((comment, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-start justify-start w-full gap-2 p-2 bg-transparent rounded-md"
            >
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <div className="flex items-start justify-start gap-4">
                  <Avatar>
                    <AvatarImage
                      src={comment.users?.avatar_url as string}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start justify-start w-full">
                    <TypographyP
                      title={comment.users?.display_name as string}
                      className={cn(
                        "font-semibold",
                        type === "modal" ? "text-black" : "text-zinc-200",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs",
                        type === "modal" ? "text-black" : "text-zinc-300",
                      )}
                    >
                      {convertStringDay(comment.created_at)}
                    </span>
                  </div>
                </div>
                <div className="w-full border-white rounded-md md:border-none bg-slate-200 !text-sm">
                  <ContentBlog
                    content={JSON.parse(comment.content as string)}
                  />
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <Heart className="w-[16px] h-[16px] text-rose-500" />
                <span
                  className={cn(
                    "text-xs",
                    type === "modal" ? "text-black" : "text-zinc-300",
                  )}
                >
                  {comment.like} likes
                </span>
              </div>
              {type === "modal" && i !== comments.length - 1 && (
                <Separator className="w-full bg-neutral-500" />
              )}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default ListComment;

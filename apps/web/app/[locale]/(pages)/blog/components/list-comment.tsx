"use client";

import React, { useCallback, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@providers/react-query";

import { cn } from "@repo/design-system/utils/tw";
import { useUser } from "@repo/hooks";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import { formatRelativeDate } from "@shared/helpers/get-time";

import {
  ILikeComment,
  IUserMetadata,
  CommentWithUser,
  likeComment,
} from "@repo/supabase/queries";

import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

import PlateShowContent from "@repo/editor/content";

import CommentForm from "./forms/comment";
import HeartGrowIcon from "./icons/heart-grow";
import DotsIcon from "./icons/dots";
import ChatAddIcon from "./icons/chat-add";
import ChatDotsIcon from "./icons/chat-dots";

const MAX_LEVEL = 4;

const ListComment = ({
  comments,
  slug,
  blogId,
  level = 1,
  isShowInteraction = true,
  className,
}: {
  comments: CommentWithUser[];
  blogId: string;
  slug: string;
  level?: number;
  isShowInteraction?: boolean;
  className?: string;
}) => {
  const t = useTranslations("pages.blog");
  const locale = useLocale();
  const supabase = useSupabaseBrowser();

  const [expandedComments, setExpandedComments] = useState<{
    [key: number]: boolean;
  }>(comments.reduce((acc, _, i) => ({ ...acc, [i]: true }), {}));

  const toggleExpandInteractions = (index: number) => {
    setExpandedComments((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const useReplyFormToggle = () => {
    const openReplyRef = useRef<{ [key: number]: boolean }>({});
    const commentParentRef = useRef<CommentWithUser | null>(null);
    const [, setRerender] = useState(false);

    const toggleReplyForm = useCallback(
      (index: number, comment: CommentWithUser) => {
        openReplyRef.current[index] = !openReplyRef.current[index];
        commentParentRef.current = comment;
        setRerender((prev) => !prev);
      },
      [],
    );

    return {
      openReply: openReplyRef.current,
      toggleReplyForm,
      commentParent: commentParentRef.current,
    };
  };

  const { openReply, commentParent, toggleReplyForm } = useReplyFormToggle();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { data: user } = useUser();

  const { mutate: reactComment } = useMutation<any, Error, ILikeComment>({
    mutationFn: async (variables) => {
      if (!executeRecaptcha) {
        return;
      }
      return await executeRecaptcha("likeComment").then((gReCaptchaToken) => {
        likeComment(supabase, variables, gReCaptchaToken);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["article", slug, locale] });
    },
  });

  return (
    <div
      className={cn(
        "mt-4 space-y-2",
        level > 1
          ? `ml-${level * 4} border-l-2 border-l-slate-300/30 pl-2`
          : "",
        className,
      )}
    >
      {(isShowInteraction ? comments : comments.slice(0, 2)).map(
        (comment: CommentWithUser, i: number) => {
          const userMetadata: IUserMetadata =
            comment &&
            comment.users &&
            comment.users.user_metadata &&
            JSON.parse(comment.users.user_metadata);

          return (
            <div key={i} className="flex items-start w-full gap-2 mt-2">
              <LoaderImage
                isLoader={false}
                src={userMetadata?.avatar_url ?? "/images/blog/anonymous.png"}
                width={32}
                height={32}
                alt="@avatar"
                className="flex-shrink-0 mt-1 overflow-hidden rounded-full"
              />
              <div className="flex flex-col w-full gap-2">
                <div
                  className={cn(
                    "w-full text-sm",
                    i !== 0 || level > 1
                      ? "border-t border-t-slate-300/30"
                      : "",
                  )}
                >
                  <div className="flex flex-col items-start">
                    <p className="text-black">
                      {userMetadata?.full_name ??
                        userMetadata?.preferred_username ??
                        t("anonymous")}
                    </p>
                    <span className="text-xs text-black/50">
                      {formatRelativeDate(comment.created_at, locale)}
                    </span>
                  </div>
                  <PlateShowContent
                    content={JSON.parse(comment.content as string)}
                    className="py-2 pl-2 pr-4 mt-2 rounded-sm bg-muted"
                  />
                </div>

                {isShowInteraction && (
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2">
                      <div
                        className={cn(
                          "flex items-center gap-1 rounded-sm cursor-pointer",
                          comment.like === 0
                            ? "bg-transparent"
                            : "bg-rose-100 px-2 py-1",
                        )}
                        onClick={() =>
                          reactComment({
                            user_id: comment.user_id,
                            parent_id: comment.parent_id,
                            blog_id: comment.blog_id,
                          })
                        }
                      >
                        <HeartGrowIcon
                          color={comment.like === 0 ? "#1111" : ""}
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span className="text-sm text-black">
                          {comment.like}{" "}
                          {comment.like === 0 ? t("like") : t("likes")}
                        </span>
                      </div>
                      {comment.interactions.length > 0 &&
                        (expandedComments[i] ? (
                          <div
                            onClick={() => toggleExpandInteractions(i)}
                            className="flex items-center gap-1 px-2 py-1 rounded-sm cursor-pointer"
                          >
                            <ChatDotsIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-sm text-black">
                              {t("hide_replies")}
                            </span>
                          </div>
                        ) : (
                          <div
                            onClick={() => toggleExpandInteractions(i)}
                            className="flex items-center gap-1 px-2 py-1 rounded-sm cursor-pointer"
                          >
                            <ChatDotsIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-sm text-black">
                              {comment.interactions.length} {t("replies")}
                            </span>
                          </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        onClick={() => toggleReplyForm(i, comment)}
                        className="flex items-center gap-1 px-2 py-1 rounded-sm cursor-pointer"
                      >
                        <ChatAddIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-sm text-black">{t("reply")}</span>
                      </div>
                      {comment.user_id === user?.id && (
                        <DotsIcon className="w-[16px] h-[16px]" />
                      )}
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {openReply[i] && level < MAX_LEVEL && (
                    <m.div
                      className="relative mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CommentForm
                        slug={slug}
                        blogId={blogId}
                        orderComment={commentParent?.interactions?.length}
                        commentParentId={commentParent?.id}
                        isCommentEditor={true}
                        isReplyComment={true}
                        toggleReplyForm={() => toggleReplyForm(i, comment)}
                      />
                    </m.div>
                  )}
                </AnimatePresence>

                {isShowInteraction &&
                  comment.interactions &&
                  comment.interactions.length > 0 &&
                  expandedComments[i] && (
                    <ListComment
                      slug={slug}
                      blogId={blogId}
                      comments={comment.interactions}
                      level={level + 1}
                    />
                  )}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default ListComment;

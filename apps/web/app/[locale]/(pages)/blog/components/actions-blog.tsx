"use client";

import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { cn } from "@repo/design-system/utils/tw";
import { useModal, useOpenScreen, useUser } from "@repo/hooks";
import { queryClient } from "@/providers/react-query";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";
import { createReaction, IBlog, ICreateReaction } from "@repo/supabase/queries";

import {
  PopoverBody,
  PopoverButton,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@repo/design-system/components/molecules/other-utils/popover-animated";

import LanguageIcon from "../components/icons/language";
import HeartGrowIcon from "../components/icons/heart-grow";
import WowIcon from "../components/icons/wow";
import FireIcon from "../components/icons/fire";
import ClappingHandsIcon from "../components/icons/clapping-hands";
import DotsIcon from "../components/icons/dots";
import ThumbsUpIcon from "../components/icons/thumbs-up";
import ArticleIcon from "../components/icons/article";

interface IActionsBlogProps {
  article: IBlog;
  optionsQuery: { language_code: string; slug: string };
  setOptionsQuery: React.Dispatch<
    React.SetStateAction<{ language_code: string; slug: string }>
  >;
  refetch: () => void;
}

const ActionsBlog = ({
  article,
  optionsQuery,
  setOptionsQuery,
  refetch,
}: IActionsBlogProps) => {
  const tBlog = useTranslations("pages.blog");
  const tLang = useTranslations("languages");
  const supabase = useSupabaseBrowser();

  const { handleOpenScreen } = useOpenScreen();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { onOpen } = useModal();
  const { data: user } = useUser();

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
        queryKey: ["article", optionsQuery.slug, optionsQuery.language_code],
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

  const handleNavigateCreateBlog = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user && user?.id) {
      handleOpenScreen(e, "/blog/new");
    } else {
      onOpen("auth", "blog");
    }
  };

  return (
    <div className="sticky w-fit z-50 bottom-20 md:bottom-32 flex flex-row items-center justify-center gap-4 px-2 md:px-4 py-1 md:py-2 rounded-md bg-[#EAE1D6] mx-auto md:left-[28%]">
      {actions(article).map((item, index) => (
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
  );
};

export default ActionsBlog;

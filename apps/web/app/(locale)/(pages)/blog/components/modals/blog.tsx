"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { LoaderCircle } from "lucide-react";

import { cn } from "@repo/design-system/utils/tw";
import { formatLocaleDate } from "@shared/helpers/get-time";

import { useModal, useOpenScreen } from "@repo/hooks";

import { IUserMetadata, IBlog } from "@repo/supabase/queries";

import { Button } from "@repo/design-system/components/atoms/button";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { Separator } from "@repo/design-system/components/molecules/other-utils/separator";
import { BlurImage } from "@repo/design-system/components/molecules/ui-elements/blur-image";
import { TypographyH3 } from "@repo/design-system/components/molecules/ui-elements/typography-h3";
import { PLACE_HOLDER_BLUR_HASH } from "@/shared/constants";

const Modal = dynamic(
  () =>
    import(
      "@repo/design-system/components/molecules/modals/animated-modal"
    ).then((mod) => mod.Modal),
  { ssr: false },
);
const ModalBody = dynamic(
  () =>
    import(
      "@repo/design-system/components/molecules/modals/animated-modal"
    ).then((mod) => mod.ModalBody),
  { ssr: false },
);
const PlateShowContent = dynamic(() => import("@repo/editor/content"), {
  ssr: false,
  loading: () => <Skeleton className="mt-2 w-full min-h-[200px]" />,
});

const ModalBlog = () => {
  const tLang = useTranslations("languages");
  const tBlog = useTranslations("pages.blog");
  const locale = useLocale();

  const { isOpen, type, onClose, data } = useModal();
  const { handleOpenScreen, changingPageInfo } = useOpenScreen();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen && type === "blog") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isOpen, type]);

  const filteredContent =
    data && data.content
      ? JSON.parse(data.content).filter((item: IBlog) => {
          const idNumber = parseInt(item.id);
          return idNumber >= 1 && idNumber <= 3;
        })
      : null;

  async function handleRedirect(e, card: IBlog) {
    handleOpenScreen(e, `/blog/${card.slug}`, card.id, onClose);
  }

  const userMetadata: IUserMetadata =
    data && data.users && JSON.parse(data?.users?.user_metadata);

  return (
    <Modal open={isModalOpen} setClose={onClose}>
      <ModalBody className={cn("relative p-3 md:p-6 max-w-[50%]")}>
        <div className="flex items-center justify-between">
          <TypographyH3 title={data?.title} />
          {changingPageInfo?.itemId === data?.id ? (
            <LoaderCircle className="w-6 h-6 animate-spin" />
          ) : (
            <Button
              className="relative z-50 pr-4 cursor-pointer"
              onClick={(e) => handleRedirect(e, data)}
            >
              {tBlog("read_post")}
            </Button>
          )}
        </div>
        <Separator className="w-full h-[1px] my-2" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="order-2 w-full h-full md:order-1">
            <BlurImage
              priority
              alt={data?.title ?? ("@image_modal" as string)}
              src={data?.image_url}
              blurDataURL={data?.image_url ?? PLACE_HOLDER_BLUR_HASH}
              className="object-cover rounded-md w-full h-[150px]"
              width={300}
              height={300}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <div className="flex flex-col items-start justify-start order-1 w-full h-full md:order-2">
            <div className="flex items-center justify-start gap-2">
              <BlurImage
                priority
                alt={userMetadata?.user_name ?? "@user_image"}
                blurDataURL={userMetadata?.avatar_url ?? PLACE_HOLDER_BLUR_HASH}
                className="overflow-hidden rounded-full"
                width={42}
                height={42}
                placeholder="blur"
                src={userMetadata?.avatar_url ?? "/images/blog/anonymous.png"}
                sizes="(max-width: 42px) 42px, 42px"
              />
              <div className="flex flex-col items-start justify-start">
                <p className="text-black">
                  {userMetadata?.full_name ??
                    userMetadata?.preferred_username ??
                    tBlog("anonymous")}
                </p>
                <span className="text-xs text-black/50">
                  {formatLocaleDate(data?.users?.created_at, locale)}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-start gap-2 mt-2">
              {data?.translations?.length >= 0 &&
                data?.translations.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="p-1 text-xs rounded-md bg-black/10"
                    >
                      + {tLang(item.language_code)}
                    </span>
                  );
                })}
              <span className="p-1 text-xs rounded-md bg-black/10">
                + {data?.reactions?.length} {tBlog("reactions")}
              </span>
              <span className="p-1 text-xs rounded-md bg-black/10">
                + {data?.total_comment} {tBlog("comment")}
              </span>
            </div>
          </div>
        </div>
        {data ? (
          <PlateShowContent
            className="mt-2 pl-2 border-l-2 md:-translate-y-1/5 border-l-[#253841]"
            content={filteredContent as string}
          />
        ) : (
          <div className="flex flex-col w-full">
            <Skeleton className="w-full h-8 mb-2" />
            <Skeleton className="w-full h-32 mb-2" />
            <Skeleton className="w-full h-8 mb-2" />
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ModalBlog;

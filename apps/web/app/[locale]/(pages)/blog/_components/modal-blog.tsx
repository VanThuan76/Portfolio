"use client";

import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { useModal } from "@shared/hooks/use-modal";
import { Button } from "@ui/atoms/button";
import { Modal, ModalBody } from "@ui/molecules/modals/animated-modal";
import { TypographyH3 } from "@ui/molecules/ui-elements/typography-h3";
import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { IBlog } from "@shared/query/types/blog";

const ContentBlog = dynamic(() => import("./content-blog"));

const ModalBlog = () => {
  const router = useRouter();
  const locale = useLocale();

  const { isOpen, type, onClose, data } = useModal();
  const [isPending, startTransition] = useTransition();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen && type === "blog") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isOpen]);

  if (!data) return <></>;

  const filteredContent =
    data.content &&
    JSON.parse(data.content).filter((item: IBlog) => {
      const idNumber = parseInt(item.id);
      return idNumber >= 1 && idNumber <= 3;
    });

  function handleRedirect(card: IBlog) {
    startTransition(() => {
      setTimeout(() => {
        router.push(`/${locale}/blog/${card.slug}`, { scroll: false });
      }, 300);
    });
    onClose();
  }

  return (
    <Modal open={isModalOpen} setClose={onClose}>
      <ModalBody className="p-4 overflow-y-auto">
        <div className="flex items-center justify-between w-full">
          <TypographyH3 title={data.title} />
          <Button
            className="pr-4 cursor-pointer"
            onClick={() => handleRedirect(data)}
          >
            Read post
          </Button>
        </div>
        <Separator className="w-full h-[1px] my-2" />
        <div className="w-full h-full">
          <LoaderImage
            isLoader={false}
            width={300}
            height={300}
            alt="@image_url"
            src={data.image_url as string}
            className="object-contain w-[150px] h-[150px]"
          />
        </div>
        <ContentBlog
          className="pl-2 border-l-2 border-l-violet-300"
          content={filteredContent as string}
        />
      </ModalBody>
    </Modal>
  );
};

export default ModalBlog;

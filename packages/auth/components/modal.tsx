"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { useOpenScreen, useModal } from "@repo/hooks";

import {
  Modal,
  ModalBody,
} from "@repo/design-system/components/molecules/modals/animated-modal";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";
import { Button } from "@repo/design-system/components/atoms/button";

const ModalAuth = () => {
  const t = useTranslations("pages.auth");

  const { handleOpenScreen } = useOpenScreen();
  const { isOpen, type, onClose } = useModal();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen && type === "auth") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isOpen, type]);

  return (
    <Modal open={isModalOpen} setClose={onClose}>
      <ModalBody className="relative flex flex-col justify-start gap-2 p-4">
        <h1 className="w-full pb-2 mb-2 text-xl font-bold border-b border-b-slate-300">
          {t("login_to_continue")}
        </h1>
        <div className="flex flex-col items-start justify-start w-full gap-8">
          <LoaderImage
            isLoader={false}
            width={300}
            height={300}
            alt="@image_url"
            src="/logo.png"
            className="object-contain w-[100px] h-[100px] -rotate-[25deg]"
          />
          <p>{t("modal_auth_description")}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4 px-8 mt-5">
          <Button
            className="relative z-50 w-full"
            onClick={(e) => {
              handleOpenScreen(e, "/auth/signin");
              setIsModalOpen(false);
            }}
          >
            {t("login")}
          </Button>
          <div
            className="relative z-50 underline cursor-pointer"
            onClick={(e) => {
              setIsModalOpen(false);
              handleOpenScreen(e, "/auth/register");
            }}
          >
            {t("create_account")}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalAuth;

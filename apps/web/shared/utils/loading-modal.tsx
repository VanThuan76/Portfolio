"use client";

import { LoaderCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { useModal } from "@repo/hooks";

const LoadingModal = () => {
  const currentLang = useLocale();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, type } = useModal();

  useEffect(() => {
    if (isOpen && type === "loading") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isOpen, type, currentLang]);

  return (
    <>
      {isModalOpen && (
        <div className="absolute top-0 left-0 z-[9999999] flex items-center justify-center w-full h-full bg-black/10 backdrop-blur-[4px] backdrop-saturate-[100%]">
          <LoaderCircle className="w-5 h-5 text-white animate-spin" />
        </div>
      )}
    </>
  );
};

export default LoadingModal;

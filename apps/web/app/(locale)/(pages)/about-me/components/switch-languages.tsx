"use client";

import { useModal } from "@repo/hooks";

import GlobleIcon from "./icons/globle";

const SwitchLanguages = () => {
  const { onOpen } = useModal();

  return (
    <div
      className="absolute cursor-pointer bottom-5 right-5 md:bottom-10 md:right-10"
      onClick={() => onOpen("switch-languages")}
    >
      <GlobleIcon className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] text-white" />
    </div>
  );
};

export default SwitchLanguages;

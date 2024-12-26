"use client";

import { useModal } from "@repo/hooks";

import SwitchLanguageDoubleIcon from "./icons/switch-language-double";

const SwitchLanguages = () => {
  const { onOpen } = useModal();

  return (
    <div
      className="fixed cursor-pointer bottom-5 right-5 z-[1000000]"
      onClick={() => onOpen("switch-languages")}
    >
      <SwitchLanguageDoubleIcon className="absolute bottom-5 right-5 w-[24px] h-[24px] md:w-[36px] md:h-[36px] " />
    </div>
  );
};

export default SwitchLanguages;

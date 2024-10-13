"use client";

import { useTranslations } from "next-intl";
import GradualSpacing from "@ui/molecules/ui-elements/text-gradual";

const Page = () => {
  const t = useTranslations();

  return (
    <div className="grid w-full h-full place-items-center">
      <GradualSpacing
        className="text-center text-4xl font-bold tracking-[-0.1em] text-white md:text-7xl md:leading-[5rem]"
        text={t("intro")}
      />
    </div>
  );
};

export default Page;

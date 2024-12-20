"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@repo/design-system/utils/tw";
import { useOpenScreen } from "@repo/hooks";

const Header = () => {
  const t = useTranslations("pages.blog");
  const locale = useLocale();
  const pathName = usePathname();

  const isSlugBlog = useMemo(
    () => pathName.split("/").length >= 4 && !pathName.includes("new"),
    [pathName],
  );

  const { handleOpenScreen } = useOpenScreen();

  const headerClass = cn(
    "relative flex flex-col items-start justify-start w-full min-h-fit col-span-1 md:col-span-5 pointer-events-auto border-b border-b-slate-300",
    isSlugBlog ? "p-2 md:p-3" : "p-4",
  );

  const containerClass = cn(
    "relative z-10 w-full flex gap-2",
    isSlugBlog
      ? "flex-row items-center justify-start pr-24"
      : "flex-col items-start justify-start",
  );

  return (
    <m.header
      layout
      className={headerClass}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <m.div
        className={containerClass}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="flex items-center justify-start w-full gap-2 cursor-pointer"
          onClick={(e) => handleOpenScreen(e, "/blog")}
        >
          <Image
            priority
            width={355}
            height={355}
            src="/images/blog/avatar.png"
            alt="logo"
            className="object-cover w-[50px] h-[50px] md:w-[75px] md:h-[75px] border light:border-black dark:border-gray-400 bg-white rounded-full"
          />
          <h3 className="p-1 text-base text-black bg-white rounded-sm min-w-8 md:text-xl">
            {t("title")}
          </h3>
        </div>
      </m.div>

      <Image
        priority
        width={700}
        height={600}
        alt="@all"
        src="/images/blog/people_all.svg"
        className="absolute top-0 left-0 z-0 object-cover object-right w-full h-full"
      />
    </m.header>
  );
};

export default Header;

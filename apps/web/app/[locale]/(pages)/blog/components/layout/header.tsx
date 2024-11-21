"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@repo/design-system/utils/tw";

import { TypographyH3 } from "@repo/design-system/components/molecules/ui-elements/typography-h3";
import { LoaderImage } from "@repo/design-system/components/molecules/ui-elements/loader-image";

const Header = () => {
  const t = useTranslations("pages.blog");
  const locale = useLocale();
  const pathName = usePathname();
  const isSlugBlog =
    pathName.split("/").length >= 4 && !pathName.includes("new");

  return (
    <m.header
      layout
      className={cn(
        "relative flex flex-col items-start justify-start w-full min-h-fit col-span-1 md:col-span-5 pointer-events-auto border-b border-b-slate-300",
        !isSlugBlog ? "p-4" : "p-2 md:p-3",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <m.div
        className={cn(
          "relative z-10 w-full flex gap-2",
          !isSlugBlog
            ? "flex-col items-start justify-start"
            : "flex-row items-center justify-start pr-24",
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={`/${locale}/blog`}
          className="flex items-center justify-start gap-2"
        >
          <div className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] border light:border-black dark:border-gray-400 rounded-full">
            <LoaderImage
              isLoader={false}
              src="/images/blog/avatar.png"
              alt="logo"
              width={355}
              height={355}
              className="object-cover w-full h-full bg-white rounded-full"
            />
          </div>
          <TypographyH3
            className="p-1 text-base text-black bg-white rounded-sm md:text-xl"
            title={t("title")}
          />
        </Link>
        {/* <div className="flex-wrap items-center justify-start hidden gap-2 lg:flex">
                    <TypographyP
                        className="p-1 text-xs italic text-black bg-white rounded-sm md:text-sm"
                        title={t("description")}
                    />
                    <Link href="https://twitter.com/thuanhipp" target="_blank">
                        <TypographyP
                            className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 md:px-2 rotate-2 hover:underline"
                            title="Twitter"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/thuanhip76" target="_blank">
                        <TypographyP
                            className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-pink-500 to-purple-500 md:px-2 -rotate-1 hover:underline"
                            title="Instagram"
                        />
                    </Link>
                    <Link href="https://www.threads.net/@austinvu76" target="_blank">
                        <TypographyP
                            className="px-1 text-xs italic rounded-sm bg-gradient-to-r from-gray-200 to-gray-500 md:px-2 rotate-12 hover:underline"
                            title="Threads"
                        />
                    </Link>
                </div> */}
      </m.div>
      <LoaderImage
        isLoader={false}
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

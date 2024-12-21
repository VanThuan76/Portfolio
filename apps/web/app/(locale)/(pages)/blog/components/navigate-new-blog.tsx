"use client";

import { m } from "framer-motion";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { useBreakpoint, useUser, useModal, useOpenScreen } from "@repo/hooks";

import { Button } from "@repo/design-system/components/atoms/button";

const NavigateNewBlog = () => {
  const t = useTranslations("pages.blog");
  const pathName = usePathname();
  const breakpoint = useBreakpoint();

  const isSlugBlog = useMemo(() => {
    return pathName.split("/").length >= 4 && !pathName.includes("new");
  }, [pathName]);

  const { onOpen } = useModal();
  const { data: user } = useUser();
  const { handleOpenScreen } = useOpenScreen();

  const handleNavigateCreateBlog = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user?.id) {
      handleOpenScreen(e, "/blog/new", "blog-new");
    } else {
      onOpen("auth", "blog");
    }
  };

  if (!isSlugBlog) return <></>;

  return (
    <m.div
      className="fixed bottom-5 right-5 z-[999999] pointer-events-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {!["xs", "sm"].includes(breakpoint) && (
        <Button
          type="button"
          className="ml-auto font-semibold bg-white text-back hover:text-black hover:bg-white"
          onClick={handleNavigateCreateBlog}
        >
          {t("create_post")}
        </Button>
      )}
    </m.div>
  );
};

export default NavigateNewBlog;

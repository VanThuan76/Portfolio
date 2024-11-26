"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import { Button } from "@repo/design-system/components/atoms/button";

const hintVariants = {
  initial: { opacity: 0, x: -20, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

interface HintNewBlogProps {
  isMountHint: boolean;
  setIsMountHint: React.Dispatch<React.SetStateAction<boolean>>;
}
const HintNewBlog = ({ isMountHint, setIsMountHint }: HintNewBlogProps) => {
  const t = useTranslations("pages.blog");

  return (
    <>
      <AnimatePresence mode="wait">
        {isMountHint && (
          <m.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={hintVariants}
            transition={{ duration: 0.3 }}
            className="relative top-0 flex flex-col items-start justify-start order-1 col-span-1 gap-2 w-fit md:sticky md:order-2"
          >
            <h4 className="text-base font-bold md:text-lg">
              {t("title_new_blog")}
            </h4>
            <ul className="list-disc list-inside !block">
              <li className="!list-item !m-2">{t("description_new_blog_1")}</li>
              <li className="!list-item !m-2">{t("description_new_blog_2")}</li>
            </ul>
            <Button
              type="button"
              className="self-start md:self-center"
              onClick={() => setIsMountHint(false)}
            >
              {t("understand_new_blog")}
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HintNewBlog;

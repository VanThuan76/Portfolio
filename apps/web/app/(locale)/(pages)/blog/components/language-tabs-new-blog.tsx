"use client";

import dynamic from "next/dynamic";
import { z } from "zod";
import { cn } from "@repo/design-system/utils/tw";
import { UseFormReturn } from "react-hook-form";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";

import { useSticky } from "@repo/hooks";
import InputText from "@repo/design-system/components/molecules/forms/input-text";
import InputSelect from "@repo/design-system/components/molecules/forms/input-select";
import InputMultiSelect from "@repo/design-system/components/molecules/forms/input-select-multiple";

import { DEFAULT_VALUES } from "@shared/constants/pages/blog";
import { LANGUAGE_CODES } from "@shared/constants";
import { calculateWordCount } from "@shared/helpers/calculate";

import { Button } from "@repo/design-system/components/atoms/button";
import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@repo/design-system/components/organisms/forms/form";
import {
  TabsBtn,
  TabsContent,
  TabsProvider,
} from "@repo/design-system/components/molecules/tabs/tabs-animated";

const PlateEditor = dynamic(() => import("@repo/editor/index"), {
  ssr: false,
  loading: () => <Skeleton className="w-full min-h-[500px]" />,
});

interface LanguageTabsNewBlogProps {
  form: UseFormReturn<z.infer<any>>;
  optionTags: { value: any; label: any }[];
  optionCategories: { value: any; label: any }[];
  currentLocaleForm: string;
  setCurrentLocaleForm: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageTabsNewBlog = ({
  form,
  optionTags,
  optionCategories,
  currentLocaleForm,
  setCurrentLocaleForm,
}: LanguageTabsNewBlogProps) => {
  const tLang = useTranslations("languages");
  const tBlog = useTranslations("pages.blog");
  const element = useRef<HTMLDivElement>(null);

  const [isSticky] = useSticky(element, { axis: "y", nav: 0 });
  const [charCount, setCharCount] = useState<number>(0);

  return (
    <>
      <div ref={element} className="w-1 h-1"></div>
      <TabsProvider defaultValue={currentLocaleForm}>
        <AnimatePresence mode="wait">
          <m.div
            className={cn(
              "z-40 flex items-center gap-2 max-w-xl overflow-x-auto mb-2",
              isSticky ? "sticky top-10 left-0" : "",
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="max-w-xs overflow-x-auto md:max-w-md">
              <m.div
                className="flex items-start p-1 bg-gray-200 border rounded-md"
                animate={{ flexDirection: isSticky ? "column" : "row" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {[...new Set([currentLocaleForm, ...LANGUAGE_CODES])].map(
                  (code) => (
                    <TabsBtn
                      key={code}
                      value={code}
                      onSuccess={setCurrentLocaleForm}
                    >
                      <span
                        className={cn(
                          "relative z-[2] text-sm",
                          isSticky ? "uppercase" : "",
                        )}
                      >
                        {isSticky ? code : tLang(`${code}`)}
                      </span>
                    </TabsBtn>
                  ),
                )}
              </m.div>
              {isSticky && (
                <m.div
                  className="flex items-center justify-center w-full p-1 mt-5 bg-gray-200 border rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <m.p className="flex flex-col items-center text-center">
                    <span>{charCount}</span>
                    <span>{tBlog("words")}</span>
                  </m.p>
                </m.div>
              )}
            </div>
            {!isSticky && (
              <span className="text-xs list-disc">
                ⚫️ {tLang("languages")}
              </span>
            )}
          </m.div>
        </AnimatePresence>
        {LANGUAGE_CODES.map((code) => (
          <TabsContent key={code} value={code}>
            <InputText
              form={form}
              fieldName={`contents.${code}.title`}
              placeHolder={tBlog("title_blog")}
            />
            <InputSelect
              form={form}
              fieldName={`contents.${code}.category_id`}
              placeHolder={tBlog("category")}
              options={optionCategories}
            />
            <InputMultiSelect
              form={form}
              options={optionTags}
              fieldName={`contents.${code}.tags`}
              placeHolder={tBlog("tags")}
              className="relative z-40"
            />
            <FormField
              control={form?.control}
              name={`contents.${code}.content`}
              render={({ field }) => (
                <FormItem className="max-w-[calc(100vw-32px)] sm:max-w-[min(calc(100vw-64px),1336px)]">
                  <FormControl>
                    <PlateEditor
                      {...field}
                      onChange={(editor) => {
                        field.onChange(editor.value);
                        setCharCount(calculateWordCount(editor.value));
                      }}
                      value={
                        field.value ||
                        DEFAULT_VALUES.find(
                          (item) => item.language_code === currentLocaleForm,
                        )?.content ||
                        ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
        ))}
        <div className="fixed z-50 right-4 md:right-8 bottom-24 md:bottom-28">
          <Button type="submit">{tBlog("publish")}</Button>
        </div>
      </TabsProvider>
    </>
  );
};

export default LanguageTabsNewBlog;

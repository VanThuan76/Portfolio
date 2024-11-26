import { useCallback, useState } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { useLocale } from "next-intl";

export const useOpenScreen = () => {
  const routerTrans = useTransitionRouter();
  const locale = useLocale();

  const [isPageChanging, setPageChanging] = useState(false);

  const handleOpenScreen = useCallback(
    async (
      e: React.MouseEvent<any>,
      href: string,
      callbackFinish?: () => void,
      newLocale?: string,
    ) => {
      e?.preventDefault();

      const localizedHref = `/${newLocale || locale}${href}`;
      setPageChanging(true);

      await new Promise((res) => setTimeout(res, 300));

      routerTrans.push(localizedHref);
      setPageChanging(false);

      if (typeof callbackFinish === "function") {
        callbackFinish();
      }
    },
    [locale, routerTrans],
  );

  return {
    handleOpenScreen,
    isPageChanging,
  };
};

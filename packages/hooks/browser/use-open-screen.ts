import { useCallback, useState, useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";

interface ChangingPageInfo {
  itemId: string;
  href: string;
}

export const useOpenScreen = () => {
  const routerTrans = useTransitionRouter();

  const [changingPageInfo, setChangingPageInfo] =
    useState<ChangingPageInfo | null>(null);

  const handleOpenScreen = useCallback(
    async (
      e: React.MouseEvent<any>,
      href: string,
      itemId: string,
      callbackFinish?: () => void,
    ) => {
      e?.preventDefault();

      const localizedHref = `${href}`;
      setChangingPageInfo({ itemId, href: localizedHref });

      await new Promise((res) => setTimeout(res, 300));

      routerTrans.push(localizedHref);

      if (typeof callbackFinish === "function") {
        callbackFinish();
      }
    },
    [routerTrans],
  );

  useEffect(() => {
    const handleTransitionComplete = () => {
      setChangingPageInfo(null);
    };

    window.addEventListener("popstate", handleTransitionComplete);
    window.addEventListener("hashchange", handleTransitionComplete);
    return () => {
      window.removeEventListener("popstate", handleTransitionComplete);
      window.addEventListener("hashchange", handleTransitionComplete);
    };
  }, [routerTrans]);

  return {
    handleOpenScreen,
    changingPageInfo,
    isPageChanging: changingPageInfo !== null,
  };
};

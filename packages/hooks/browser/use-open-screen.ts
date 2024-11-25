import { useCallback, useEffect, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { useAppDispatch } from "@repo/management-system";

export const useOpenScreen = () => {
  const dispatch = useAppDispatch();
  const routerNext = useRouter();
  const routerTrans = useTransitionRouter();
  const locale = useLocale();

  const isPageChangingRef = useRef(false);

  const handleOpenScreen = useCallback(
    async (
      e: React.MouseEvent<any>,
      href: string,
      callbackFinish?: () => void,
      newLocale?: string,
    ) => {
      e.preventDefault();
      const localizedHref = newLocale
        ? `/${newLocale}${href}`
        : `/${locale}${href}`;

      isPageChangingRef.current = true;

      await new Promise((resolve) => setTimeout(resolve, 300));

      routerTrans.push(localizedHref);

      isPageChangingRef.current = false;

      if (callbackFinish) {
        callbackFinish();
      }
    },
    [dispatch, routerNext, routerTrans, locale],
  );

  // useEffect(() => {
  //     const handlePopState = () => {
  //         const { pathname } = window.location;
  //     };

  //     window.addEventListener("popstate", handlePopState);

  //     return () => {
  //         window.removeEventListener("popstate", handlePopState);
  //     };
  // }, [dispatch]);

  return {
    handleOpenScreen,
    isPageChanging: isPageChangingRef.current,
  };
};

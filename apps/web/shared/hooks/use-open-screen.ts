import { useCallback, useEffect, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useAppDispatch } from "@store/index";

const useOpenScreen = (isSafari: boolean) => {
  const dispatch = useAppDispatch();
  const routerNext = useRouter();
  const routerTrans = useTransitionRouter();
  const locale = useLocale();

  const isPageChangingRef = useRef(false);

  const handleOpenScreen = useCallback(
    async (e: React.MouseEvent<any>, href: string) => {
      e.preventDefault();
      const localizedHref = `/${locale}${href}`;

      isPageChangingRef.current = true;

      try {
        const audio = new Audio("/audios/tap.mp3");
        await audio.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }

      if (isSafari) {
        routerNext.push(localizedHref);
      } else {
        routerTrans.push(localizedHref);
      }

      isPageChangingRef.current = false;
    },
    [isSafari, dispatch, routerNext, routerTrans, locale],
  );

  useEffect(() => {
    const handlePopState = () => {
      const { pathname } = window.location;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [dispatch]);

  return {
    handleOpenScreen,
    isPageChanging: isPageChangingRef.current,
  };
};

export default useOpenScreen;

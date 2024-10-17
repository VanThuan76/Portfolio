import { useCallback, useEffect, useState, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import {
  addPageToCache,
  setIsPageChanging,
  setPositionModels,
} from "@store/app-slice";
import { useAppDispatch } from "@store/index";
import { DATA_MENUS } from "@shared/constants";

const useOpenScreen = (pageCached: string[], isSafari: boolean) => {
  const dispatch = useAppDispatch();
  const routerNext = useRouter();
  const routerTrans = useTransitionRouter();
  const locale = useLocale();

  const isPageChangingRef = useRef(false);
  const [urlChanging, setUrlChanging] = useState<string | null>(null);

  const handleOpenScreen = useCallback(
    async (e: React.MouseEvent<any>, href: string, positions: any) => {
      e.preventDefault();
      dispatch(setPositionModels(positions));

      setUrlChanging(href);

      const localizedHref = `/${locale}${href}`;

      if (!pageCached.includes(localizedHref)) {
        dispatch(addPageToCache(localizedHref));
      }

      isPageChangingRef.current = true;
      dispatch(setIsPageChanging(true));

      try {
        const audio = new Audio("/audios/tap.mp3");
        await audio.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (isSafari) {
        routerNext.push(localizedHref);
      } else {
        routerTrans.push(localizedHref);
      }

      isPageChangingRef.current = false;
      dispatch(setIsPageChanging(false));
    },
    [pageCached, isSafari, dispatch, routerNext, routerTrans, locale],
  );

  useEffect(() => {
    const handlePopState = () => {
      const { pathname } = window.location;
      const menuItem = DATA_MENUS.find(
        (item) => "/" + locale + item.href === pathname,
      );

      if (menuItem && menuItem.positions) {
        const { positions } = menuItem;
        dispatch(setPositionModels(positions));
      } else {
        dispatch(
          setPositionModels({
            cameraPosition: [-50, 100, 1000],
            positionModelMain: [100, 200, -100, true],
            positionModelCastle: [],
            positionModelDepartment: [],
            positionModelCaffe: [],
            positionModelRestaurant: [],
            positionModelSchool: [],
            positionModelMountain: [],
            positionModelCity: [],
          }),
        );
        console.warn("No positions found for the current pathname.");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [dispatch]);

  return {
    handleOpenScreen,
    isPageChanging: isPageChangingRef.current,
    urlChanging,
  };
};

export default useOpenScreen;

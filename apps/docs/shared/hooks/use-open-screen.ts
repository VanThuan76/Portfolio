import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

import { addPageToCache, setPositionModels } from "@store/app-slice";
import { useAppDispatch } from "@store/index";

const useOpenScreen = (pageCached: string[], isSafari: boolean) => {
  const dispatch = useAppDispatch();
  const routerNext = useRouter();
  const routerTrans = useTransitionRouter();

  const [isPageChanging, setIsPageChanging] = useState(false);
  const [urlChanging, setUrlChanging] = useState<string | null>(null);

  const handleOpenScreen = useCallback(
    async (e: React.MouseEvent<any>, href: string, positions: any) => {
      e.preventDefault();

      const audio = new Audio("/tap.mp3");
      await audio.play();

      setIsPageChanging(true);
      setUrlChanging(href);

      dispatch(setPositionModels(positions));

      if (isSafari) {
        routerNext.push(href);
      } else {
        routerTrans.push(href);
      }

      if (!pageCached.includes(href)) {
        dispatch(addPageToCache(href));
      }

      setTimeout(() => {
        setIsPageChanging(false);
      }, 1000);
    },
    [pageCached, isSafari, dispatch, routerNext, routerTrans],
  );

  return { handleOpenScreen, isPageChanging, urlChanging };
};

export default useOpenScreen;

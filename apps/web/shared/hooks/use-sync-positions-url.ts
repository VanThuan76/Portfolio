import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setPositionModels } from "@store/app-slice";
import { DATA_MENUS } from "@shared/constants";

const useSyncPositionsWithURL = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const hasVisited = useAppSelector((state) => state.app.hasVisited);

  useEffect(() => {
    if (hasVisited) {
      const menuItem = Object.values(DATA_MENUS).find(
        (item) => (item.href as string) === pathname,
      );

      if (menuItem) {
        dispatch(setPositionModels(menuItem.positions));
      }
    }
  }, [pathname, dispatch, hasVisited]);
};

export default useSyncPositionsWithURL;

"use client";

import { useState } from "react";
import { useAppSelector } from "@store/index";

import { DATA_MENUS } from "@shared/constants";

import useIsSafari from "@shared/hooks/use-is-safari";
import useOpenScreen from "@shared/hooks/use-open-screen";

import MenuMobileIcon from "@shared/layouts/main/head/@components/icons/menu-mobile-icon";
import NavDeepIcon from "@shared/layouts/main/icons/nav-deep-icon";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

const MenuMobile = () => {
  const isSafari = useIsSafari();
  const pageCached = useAppSelector((state) => state.app.pageCached);

  const { handleOpenScreen, isPageChanging } = useOpenScreen(
    pageCached,
    isSafari,
  );

  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const handleMenuClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    const currentMenu: any = DATA_MENUS[currentMenuIndex];

    handleOpenScreen(e, currentMenu.href, currentMenu.positions);

    setCurrentMenuIndex((prevIndex) => {
      if (prevIndex === DATA_MENUS.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  if (isPageChanging) return <></>;

  return (
    <>
      <MotionContainer
        direction="right"
        className="absolute top-5 right-5 fill-white w-[50px] block md:hidden"
      >
        <MenuMobileIcon />
      </MotionContainer>

      <MotionContainer
        direction="bottom"
        className="absolute bottom-0 z-50 w-[170px] block md:hidden"
      >
        <NavDeepIcon onClick={handleMenuClick} />
      </MotionContainer>
    </>
  );
};

export default MenuMobile;

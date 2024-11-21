"use client";

import { useState } from "react";

import { DATA_MENUS } from "@shared/constants";
import { useIsSafari, useOpenScreen } from "@repo/hooks";

import MotionContainer from "@repo/design-system/components/molecules/frame/dynamic-contain";

import NavDeepIcon from "../icons/nav-deep-icon";

const NavBottom = () => {
  const isSafari = useIsSafari();

  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const { handleOpenScreen, isPageChanging } = useOpenScreen(isSafari);

  const handleMenuClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    const currentMenu: any = DATA_MENUS[currentMenuIndex];

    setCurrentMenuIndex((prevIndex) => {
      if (prevIndex === DATA_MENUS.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });

    handleOpenScreen(e, currentMenu.href);
  };

  return (
    <MotionContainer
      type="slide"
      direction="top"
      className="w-full pointer-events-auto"
      isClose={isPageChanging}
    >
      <div className="grid w-full place-items-center">
        <NavDeepIcon onClick={handleMenuClick} className="w-[170px]" />
      </div>
    </MotionContainer>
  );
};

export default NavBottom;

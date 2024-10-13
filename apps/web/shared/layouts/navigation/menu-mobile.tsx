"use client";

import { Grip } from "lucide-react";
import { useState } from "react";
import { RootState, useAppSelector } from "@store/index";

import { DATA_MENUS } from "@shared/constants";

import useIsSafari from "@shared/hooks/use-is-safari";
import useOpenScreen from "@shared/hooks/use-open-screen";

import SidePanel from "@ui/molecules/other-utils/side-panel";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import MenuMobileIcon from "../head/_components/icons/menu-mobile-icon";
import NavDeepIcon from "../icons/nav-deep-icon";

const MenuMobile = () => {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isSafari = useIsSafari();
  const pageCached = useAppSelector((state: RootState) => state.app.pageCached);

  const { handleOpenScreen, isPageChanging } = useOpenScreen(
    pageCached,
    isSafari,
  );

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

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderButton = () => (
    <MotionContainer
      direction="right"
      className="fill-white w-[50px] block md:hidden z-50"
      onClick={handleIsOpen}
    >
      <div className="relative w-full h-full">
        <MenuMobileIcon />
        <Grip
          className="absolute scale-75 top-1/4 right-1/4 text-neutral-400"
          color="#555"
        />
      </div>
    </MotionContainer>
  );

  if (isPageChanging) return <></>;

  return (
    <>
      <SidePanel
        panelOpen={isOpen}
        handlePanelOpen={handleIsOpen}
        renderButton={renderButton}
      >
        <div className="fixed w-full h-screen bg-rose-500"></div>
      </SidePanel>
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

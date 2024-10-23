"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { RootState, useAppSelector } from "@store/index";
import { DATA_MENUS } from "@shared/constants";

import useIsSafari from "@shared/hooks/use-is-safari";
import useOpenScreen from "@shared/hooks/use-open-screen";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import MenuMobileIcon from "../head/_components/icons/menu-mobile-icon";
import NavDeepIcon from "../icons/nav-deep-icon";

const menuVariants = {
  open: {
    width: "100vw",
    height: "100vh",
    top: "0px",
    right: "0px",
    backgroundColor: "rgba(230, 230, 230, 1)",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const containerMenuVariants = {
  open: {
    right: "0px",
    top: "0px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    right: "20px",
    top: "20px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};
export const perspectiveMenuItemVariants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

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

  return (
    <>
      <m.div
        variants={containerMenuVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className="absolute z-[999999999] pointer-events-auto"
      >
        <m.div
          className="relative w-full h-full"
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isOpen && (
              <div className="flex flex-col justify-between h-full px-10 pt-24 pb-12">
                <div className="flex flex-col gap-4">
                  {DATA_MENUS.map((item, i) => {
                    return (
                      <div
                        key={`menu_${i}`}
                        style={{
                          perspective: "120px",
                          perspectiveOrigin: "bottom",
                        }}
                      >
                        <m.div
                          custom={i}
                          variants={perspectiveMenuItemVariants}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                            setIsOpen(!isOpen);
                            handleOpenScreen(e, item.href, item.positions);
                          }}
                        >
                          <p className="text-3xl text-[#1e1e1e]">{item.name}</p>
                        </m.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </AnimatePresence>
          <m.div
            animate={{
              scale: isOpen ? "1.1" : "1",
              opacity: isPageChanging ? 0 : 1,
              translateZ: isPageChanging ? "100%" : "0",
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            }}
            className="w-[50px] z-50 absolute !top-0 !right-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuMobileIcon />
            <m.div
              className="absolute top-0 right-0 grid items-center justify-center w-full h-full grid-cols-2 gap-[2px] p-[14px] rounded-full"
              animate={{
                rotate: isOpen ? "45deg" : "0",
                backgroundColor: isOpen ? "transparent" : "#1e1e1e",
              }}
              transition={{
                duration: 0.7,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {Array.from({ length: 4 }, (_, i) => {
                return (
                  <m.div
                    key={i}
                    animate={{
                      rotate: isOpen ? "45deg" : "0",
                      backgroundColor: isOpen ? "#1e1e1e" : "white",
                    }}
                    transition={{
                      duration: 0.7,
                      type: "tween",
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="w-full h-full rounded-l-sm rounded-r-sm"
                  ></m.div>
                );
              })}
            </m.div>
          </m.div>
        </m.div>
      </m.div>
      <MotionContainer
        type="slide"
        direction="top"
        className="absolute bottom-0 right-0 z-50 w-full"
        isClose={isPageChanging}
      >
        <div className="grid w-full place-items-center">
          <NavDeepIcon onClick={handleMenuClick} className="w-[170px]" />
        </div>
      </MotionContainer>
    </>
  );
};

export default MenuMobile;

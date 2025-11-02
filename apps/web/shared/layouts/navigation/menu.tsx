"use client";

import { useTranslations } from "next-intl";
import { memo, useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@repo/design-system/utils/tw";

// Lazy load heavy components
const SpinningText = lazy(() =>
  import("@repo/design-system/components/molecules/effects/text-spinning").then(
    (mod) => ({ default: mod.SpinningText }),
  ),
);
const InfiniteSlider = lazy(() =>
  import(
    "@repo/design-system/components/molecules/effects/infinite-slider"
  ).then((mod) => ({ default: mod.InfiniteSlider })),
);

import { BlurImage } from "@repo/design-system/components/molecules/ui-elements/blur-image";
import { useBreakpoint, useOpenScreen } from "@repo/hooks";

import { DATA_MENUS, PLACE_HOLDER_BLUR_HASH } from "@shared/constants";

import MenuIcon from "../icons/menu-icon";

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
      duration: 0.5,
      delay: 0.5 * i,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const fadeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] },
  },
};

const Menu = () => {
  const breakpoint = useBreakpoint();
  const tMenu = useTranslations("menu");
  const isSmallScreen = new Set(["xs", "sm"]).has(breakpoint);
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const { handleOpenScreen } = useOpenScreen();

  // Lazy mount content when menu opens, keep it mounted during transition
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShouldRenderContent(true);
      }, 100); // Small delay to let initial animation start
      return () => clearTimeout(timer);
    } else {
      // Delay unmount to allow exit animation
      const timer = setTimeout(() => {
        setShouldRenderContent(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const menuVariants = {
    open: {
      width: "100vw",
      top: isSmallScreen ? "-15px" : "0px",
      right: isSmallScreen ? "-15px" : "0px",
      height: "100vh",
      backgroundColor: "rgba(255, 255, 255)",
      transition: {
        duration: 0.75,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        backgroundColor: { duration: 0.75 },
      },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: isSmallScreen ? "-10px" : "0",
      right: isSmallScreen ? "-15px" : "-5px",
      backgroundColor: "rgba(255, 255, 255, 0)",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        backgroundColor: { duration: 0.75 },
      },
    },
  };

  const containerMenuVariants = {
    open: {
      right: isSmallScreen ? "15px" : "0px",
      top: isSmallScreen ? "15px" : "0px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      right: "20px",
      top: "20px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
  };

  const groupSlider1 = [
    "/images/home/character_1.webp",
    "/images/home/character_2.webp",
    "/images/home/character_3.webp",
    "/images/home/background_1.webp",
  ];
  const groupSlider2 = [
    "/images/home/character_4.webp",
    "/images/home/character_5.webp",
    "/images/home/character_6.webp",
    "/images/home/background_2.webp",
  ];
  const groupSlider3 = [
    "/images/home/character_7.webp",
    "/images/home/character_8.webp",
    "/images/home/character_9.webp",
    "/images/home/background_3.webp",
  ];
  const groupSlider4 = [
    "/images/home/character_10.webp",
    "/images/home/character_11.webp",
    "/images/home/character_12.webp",
    "/images/home/background_4.webp",
  ];

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLDivElement>,
    href: string,
    name: string,
  ) => {
    if (isOpen) {
      setIsOpen(false);

      setTimeout(() => {
        handleOpenScreen(e, href, name);
      }, 750);
    } else {
      setIsOpen(true);
    }
  };

  return (
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
        <AnimatePresence mode="wait" onExitComplete={() => setIsOpen(false)}>
          {isOpen && (
            <m.div
              className="relative bg-black/[0.1] flex flex-col gap-8 justify-between h-full overflow-hidden lg:flex-row"
              initial="initial"
              animate={isOpen ? "animate" : "exit"}
              variants={fadeVariants}
            >
              <div className="flex flex-col items-end justify-start order-1 w-full gap-4 px-5 mt-48 lg:mt-56 lg:gap-8 lg:order-2 lg:px-10">
                {DATA_MENUS.map((item, i) => {
                  const nameFix = item.name
                    .toLowerCase()
                    .replace(
                      /(?:^\w|[A-Z]|\b\w|\s+|[^\w\s])+/g,
                      (match, index) =>
                        index === 0 ? match.toLowerCase() : match.toUpperCase(),
                    )
                    .replace(/\s+/g, "");
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
                        onClick={(e) =>
                          handleMenuItemClick(e, item.href, item.name)
                        }
                      >
                        <p className="text-3xl lg:text-5xl font-bold text-[#1e1e1e] cursor-pointer">
                          {tMenu(`${nameFix}`)}
                        </p>
                      </m.div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col order-2 w-full h-full space-x-4 lg:flex-row lg:order-1">
                {shouldRenderContent && (
                  <Suspense
                    fallback={
                      <div className="flex gap-4 w-full h-full">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] bg-gray-200 animate-pulse rounded-[4px]"
                          />
                        ))}
                      </div>
                    }
                  >
                    <InfiniteSlider
                      durationOnHover={isSmallScreen ? 75 : 0}
                      direction={isSmallScreen ? "horizontal" : "vertical"}
                    >
                      {groupSlider1.map((item, index) => (
                        <div
                          key={index}
                          className="relative aspect-square w-[120px] md:w-[150px]"
                        >
                          <BlurImage
                            loading="lazy"
                            alt={item as string}
                            src={item}
                            blurDataURL={item ?? PLACE_HOLDER_BLUR_HASH}
                            className="rounded-[4px] bg-black/50 object-cover"
                            width={150}
                            height={150}
                            placeholder="blur"
                            sizes="(max-width: 120px) 150px, (max-width: 150px) 150px"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-[4px]" />
                        </div>
                      ))}
                    </InfiniteSlider>
                    <InfiniteSlider
                      durationOnHover={isSmallScreen ? 75 : 0}
                      direction={isSmallScreen ? "horizontal" : "vertical"}
                      reverse
                    >
                      {groupSlider2.map((item, index) => (
                        <BlurImage
                          key={index}
                          loading="lazy"
                          alt={item as string}
                          src={item}
                          blurDataURL={item ?? PLACE_HOLDER_BLUR_HASH}
                          className="aspect-square w-[120px] md:w-[150px] rounded-[4px]"
                          width={150}
                          height={150}
                          placeholder="blur"
                          sizes="(max-width: 120px) 150px, (max-width: 150px) 150px"
                        />
                      ))}
                    </InfiniteSlider>
                    <InfiniteSlider
                      durationOnHover={isSmallScreen ? 75 : 0}
                      direction={isSmallScreen ? "horizontal" : "vertical"}
                    >
                      {groupSlider3.map((item, index) => (
                        <div
                          key={index}
                          className="relative aspect-square w-[120px] md:w-[150px]"
                        >
                          <BlurImage
                            loading="lazy"
                            alt={item as string}
                            src={item}
                            blurDataURL={item ?? PLACE_HOLDER_BLUR_HASH}
                            className="rounded-[4px] bg-black/50 object-cover"
                            width={150}
                            height={150}
                            placeholder="blur"
                            sizes="(max-width: 120px) 150px, (max-width: 150px) 150px"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-[4px]" />
                        </div>
                      ))}
                    </InfiniteSlider>
                    <InfiniteSlider
                      durationOnHover={isSmallScreen ? 75 : 0}
                      direction={isSmallScreen ? "horizontal" : "vertical"}
                      reverse
                    >
                      {groupSlider4.map((item, index) => (
                        <BlurImage
                          key={index}
                          loading="lazy"
                          alt={item as string}
                          src={item}
                          blurDataURL={item ?? PLACE_HOLDER_BLUR_HASH}
                          className="aspect-square w-[120px] md:w-[150px] rounded-[4px]"
                          width={150}
                          height={150}
                          placeholder="blur"
                          sizes="(max-width: 120px) 150px, (max-width: 150px) 150px"
                        />
                      ))}
                    </InfiniteSlider>
                  </Suspense>
                )}
              </div>

              {shouldRenderContent && (
                <Suspense
                  fallback={
                    <div className="absolute top-24 right-24 w-20 h-20 animate-pulse" />
                  }
                >
                  <SpinningText
                    radius={5.5}
                    fontSize={1}
                    variants={{
                      container: {
                        hidden: {
                          opacity: 1,
                        },
                        visible: {
                          opacity: 1,
                          rotate: 360,
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 6,
                            repeat: Infinity,
                            staggerChildren: 0.03,
                          },
                        },
                      },
                      item: {
                        hidden: {
                          opacity: 0,
                          filter: "blur(4px)",
                        },
                        visible: {
                          opacity: 1,
                          filter: "blur(0px)",
                        },
                      },
                    }}
                    className="font-[450] absolute top-24 right-24"
                  >
                    {`austin-vu • austin-vu • austin-vu • `}
                  </SpinningText>
                </Suspense>
              )}
            </m.div>
          )}
        </AnimatePresence>
        <m.div
          animate={{
            scale: isOpen ? 1.1 : 1,
            top: isOpen ? "4.5rem" : "0rem",
            right: isSmallScreen
              ? isOpen
                ? "5rem"
                : "0rem"
              : isOpen
                ? "4.3rem"
                : "0rem",
            opacity: isOpen ? 1 : 0.8,
          }}
          transition={{
            scale: {
              type: "spring",
              stiffness: 200,
              damping: 15,
            },
            top: {
              duration: 0.8,
              type: "tween",
              ease: [0.42, 0, 0.58, 1],
            },
            right: {
              duration: 0.8,
              type: "tween",
              ease: [0.42, 0, 0.58, 1],
            },
          }}
          className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: "absolute" }}
        >
          <m.div
            className={cn(
              "relative",
              isOpen
                ? " w-[50px] h-[50px]"
                : "w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
            )}
            animate={{
              rotate: isOpen ? -45 : 0,
            }}
            transition={{
              rotate: {
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            }}
          >
            <MenuIcon className="w-full h-full" />
          </m.div>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default memo(Menu);

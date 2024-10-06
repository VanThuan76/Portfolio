"use client";

import React from "react";

import { cn } from "@utils/tw";
import { useAppSelector } from "@store/index";

import { buttonVariants } from "@ui/atoms/button";

import { Separator } from "@ui/molecules/other-utils/separator";
import { LoaderImage } from "@ui/molecules/ui-elements/loader-image";
import { Dock, DockIcon } from "@ui/molecules/navigation/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@ui/molecules/other-utils/tooltip";

import { DATA_MENUS } from "@shared/constants";

import useIsSafari from "@shared/hooks/use-is-safari";
import useOpenScreen from "@shared/hooks/use-open-screen";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

export default function NavigationDesktop({
  className,
}: {
  className?: string;
}) {
  const isSafari = useIsSafari();
  const pageCached = useAppSelector((state) => state.app.pageCached);

  const { handleOpenScreen, isPageChanging, urlChanging } = useOpenScreen(
    pageCached,
    isSafari,
  );

  return (
    <MotionContainer
      type="blur"
      className={cn(
        "fixed bottom-5 right-1/2 left-1/2 flex items-center justify-center",
        className,
      )}
    >
      <Dock
        direction="middle"
        className="bg-[#E0E0E0] dark:bg-[#2C2C2E] backdrop-blur-md bg-opacity-30"
      >
        {DATA_MENUS.slice(0, 1).map((item) => (
          <DockIcon key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    handleOpenScreen(e, item.href, item.positions)
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full relative",
                    urlChanging === item.href && isPageChanging
                      ? "animate-bounce"
                      : "",
                  )}
                >
                  <LoaderImage
                    isLoader={false}
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  {pageCached.includes(item.href) && (
                    <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-black rounded-full left-1/2" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator
          orientation="vertical"
          className="h-full w-[1px] bg-gray-300/50"
        />
        {DATA_MENUS.slice(1, 4).map((item) => (
          <DockIcon key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    handleOpenScreen(e, item.href, item.positions)
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full relative",
                    urlChanging === item.href && isPageChanging
                      ? "animate-bounce"
                      : "",
                  )}
                >
                  <LoaderImage
                    isLoader={false}
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  {pageCached.includes(item.href) && (
                    <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-black rounded-full left-1/2" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator
          orientation="vertical"
          className="h-full w-[1px] bg-gray-300/50"
        />
        {DATA_MENUS.slice(4, 7).map((item) => (
          <DockIcon key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    handleOpenScreen(e, item.href, item.positions)
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full relative",
                    urlChanging === item.href && isPageChanging
                      ? "animate-bounce"
                      : "",
                  )}
                >
                  <LoaderImage
                    isLoader={false}
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  {pageCached.includes(item.href) && (
                    <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-black rounded-full left-1/2" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </MotionContainer>
  );
}

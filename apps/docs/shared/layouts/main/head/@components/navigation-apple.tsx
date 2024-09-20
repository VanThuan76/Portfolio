"use client";

import { useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { ChevronsLeftRight, Minus, X } from "lucide-react";
import { cn } from "@utils/tw";

import useIsSafari from "@shared/hooks/use-is-safari";
import MotionContainer from "@ui/molecules/frame/dynamic-contain";

import { useAppDispatch, useAppSelector } from "@store/index";
import { setHasCloseScreen, setHasFullScreen } from "@store/app-slice";

const NavigationApple = () => {
  const dispatch = useAppDispatch();
  const routerNext = useRouter();
  const routerTrans = useTransitionRouter();
  const isSafari = useIsSafari();

  const { hasFullScreen, hasCloseScreen } = useAppSelector(
    (state) => state.app,
  );

  function handleClose() {
    isSafari ? routerNext.push("/") : routerTrans.push("/");
    dispatch(setHasCloseScreen(true));
  }

  function handleExpand() {
    dispatch(setHasFullScreen(!hasFullScreen));
  }

  function handleHistory() {
    isSafari ? routerNext.back() : routerTrans.back();
  }

  if (hasCloseScreen) return <></>;

  return (
    <MotionContainer
      delay={0.5}
      type="blur"
      className="absolute z-[999999999] hidden space-x-1 left-2 top-2 md:flex"
    >
      <div
        className="w-[10px] h-[10px] rounded-full bg-[#fe3645] group"
        onClick={handleClose}
      >
        <X className="hidden w-full h-full group-hover:block" color="black" />
      </div>
      <div
        className={cn(
          "w-[10px] h-[10px] rounded-full group",
          hasFullScreen ? "bg-slate-300" : "bg-[#FEB402]",
        )}
        onClick={() => !hasFullScreen && handleHistory()}
      >
        <Minus
          className={cn(
            "hidden w-full h-full",
            !hasFullScreen && "group-hover:block",
          )}
          color="black"
        />
      </div>
      <div
        className="w-[10px] h-[10px] rounded-full bg-[#03CF02] group"
        onClick={handleExpand}
      >
        <ChevronsLeftRight
          className="hidden w-full h-full rotate-45 group-hover:block"
          color="black"
        />
      </div>
    </MotionContainer>
  );
};

export default NavigationApple;

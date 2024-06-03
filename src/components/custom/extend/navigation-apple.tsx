"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { setHasFullScreen } from "@/store/app-slice";
import { ChevronsLeftRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { setShowNavBarMenu } from "@/store/app-slice";

const NavigationApple = () => {
  const dispatch = useAppDispatch();
  const { hasFullScreen, showNavbarMenu } = useAppSelector(
    (state) => state.app,
  );
  const router = useRouter();
  return (
    <div className="flex space-x-1 z-50">
      <div
        className="w-[12px] h-[12px] rounded-full bg-[#fe3645] group"
        onClick={() => router.back()}
      >
        <X className="w-full h-full hidden group-hover:block" color="black" />
      </div>
      <div className="w-[12px] h-[12px] rounded-full bg-[#FEB402]"></div>
      <div
        className="w-[12px] h-[12px] rounded-full bg-[#03CF02] group"
        onClick={() => {
          dispatch(setHasFullScreen(!hasFullScreen));
          dispatch(setShowNavBarMenu(hasFullScreen));
        }}
      >
        <ChevronsLeftRight
          className="w-full h-full rotate-45 hidden group-hover:block"
          color="black"
        />
      </div>
    </div>
  );
};

export default NavigationApple;

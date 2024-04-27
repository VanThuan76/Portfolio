"use client";
import useBreakpoint from "@/hooks/break-point";
import { cn } from "@/lib/tw";
import { useAppSelector } from "@/store";
import { NavBarMenu } from "./navbar-menu";
import HeadLayout from "./head-layout";
import { usePathname } from "next/navigation";
interface Props {
  children: React.ReactNode;
}
const ContainerLayout = ({ children }: Props) => {
  const pathName = usePathname();
  const breakpoint = useBreakpoint();
  const { hasFullScreen } = useAppSelector((state) => state.app);
  const styleLayout = hasFullScreen
    ? "bg-[#F6F6F6] dark:bg-[#060606]"
    : "bg-[#E2E2E2] dark:bg-[#222222] p-4 md:p-8";
  const fixLayoutFullScreen =
    hasFullScreen && !pathName.includes("/admin") &&
    !pathName.includes("/extensions") && "px-4 md:px-12 py-4";
  const fixLayoutMb = breakpoint === "xs" && "pb-12 mb-12";
  return (
    <main
      className={cn(
        "relative mx-auto w-[100vw] min-h-[100vh] transition-all duration-300 ease-in-out",
        styleLayout,
        fixLayoutMb,
      )}
    >
      <HeadLayout className={`${!hasFullScreen && "rounded-t-xl"}`} />
      <div className={cn(fixLayoutFullScreen)}>{children}</div>
      {breakpoint === "xs" && <NavBarMenu />}
    </main>
  );
};

export default ContainerLayout;

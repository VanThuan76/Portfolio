"use client";
import { cn } from "@utils/tw";
import { useAppSelector } from "@store/index";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const FrameFully = ({ children, className }: Props) => {
  const { hasFullScreen } = useAppSelector((state) => state.app);

  const styleScreen = hasFullScreen
    ? "relative w-full h-full"
    : "relative w-full h-full bg-[#F6F6F6] dark:bg-[#060606] rounded-b-xl p-2 md:p-5 lg:p-10";

  return <div className={cn(styleScreen, className)}>{children}</div>;
};

export default FrameFully;

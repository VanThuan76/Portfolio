"use client";
import { cn } from "@/lib/tw";
import { useAppSelector } from "@/store";

interface Props {
  children: React.ReactNode;
}
const ContainerLayout = ({ children }: Props) => {
  const { hasFullScreen } = useAppSelector((state) => state.app);
  const styleLayout = hasFullScreen
    ? "bg-[#F6F6F6] dark:bg-[#060606] py-4"
    : " bg-[#E2E2E2] dark:bg-[#222222] p-8";
  return (
    <main
      className={cn(
        "relative mx-auto flex w-[100vw] min-h-[100vh] flex-col items-center justify-center overflow-auto transition-all duration-300 ease-in-out",
        styleLayout,
      )}
    >
      {children}
    </main>
  );
};

export default ContainerLayout;

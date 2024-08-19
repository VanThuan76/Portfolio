import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import MotionContainer from "@ui/molecules/frame/dynamic-contain";

export function NavigationMobile() {
  const pathname = usePathname();
  const router = useRouter();

  const shouldShowNavigation = /^\/(blog|project)\/.+/.test(pathname);

  if (!shouldShowNavigation) {
    return null;
  }

  const handleXClick = () => {
    if (pathname.startsWith("/blog")) {
      router.push("/blog");
    } else if (pathname.startsWith("/project")) {
      router.push("/project");
    }
  };

  return (
    <div className="fixed flex items-center justify-between w-full px-2 bottom-5">
      <MotionContainer
        delay={2}
        type="scale"
        className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#bb4855] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
        onClick={handleXClick}
      >
        <X className="w-[16px] h-[16px] text-white" />
      </MotionContainer>
      <div className="flex items-center justify-center gap-4">
        <MotionContainer
          delay={2}
          type="scale"
          className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
        >
          <ArrowLeft className="w-[16px] h-[16px] text-white" />
        </MotionContainer>
        <MotionContainer
          delay={2}
          type="scale"
          className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"
        >
          <ArrowRight className="w-[16px] h-[16px] text-white" />
        </MotionContainer>
      </div>
    </div>
  );
}

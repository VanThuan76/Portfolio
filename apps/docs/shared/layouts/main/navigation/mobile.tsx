import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@ui/atoms/button";

export function NavigationMobile() {
    return (
        <div className="w-full flex justify-between items-center fixed bottom-5 px-2">
            <Button className="flex hover:bg-none justify-center items-center w-[48px] h-[48px] rounded-full bg-[#bb4855] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"><X className="w-[24px] h-[24px]"/></Button>
            <div className="flex justify-center items-center gap-4">
                <Button className="flex hover:bg-none justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"><ArrowLeft className="w-[24px] h-[24px]"/></Button>
                <Button className="flex hover:bg-none justify-center items-center w-[48px] h-[48px] rounded-full bg-[#3d4759] transform scale-x-100 translate-z-0 transition-all duration-400 ease-[cubic-bezier(.42,.97,.52,1.49)]"><ArrowRight className="w-[24px] h-[24px]"/></Button>
            </div>
        </div>
    )
}
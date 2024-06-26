"use client";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeTheme } from "@/components/custom/extend/mode-theme";
import { useRouter } from "next/navigation";
import Auth from "@/components/custom/auth";
import { IAuthSupabase } from "@/server/data/types/supabase";
interface Props {
  user?: IAuthSupabase | undefined;
}
export function DropdownMenuApp({ user }: Props) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="max-w-[50px] hidden md:block fixed bottom-20 right-5 p-1 rounded-xl border border-black bg-dark dark:bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer"
          style={{ position: "-webkit-sticky" }}
        >
          <Ellipsis color="#555" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <ModeTheme />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/extensions/resume")}>
          Resume
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/extensions/git-roll")}>
          Git Roll
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/extensions/chatbot")}>
          Chat AI
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Auth user={user} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

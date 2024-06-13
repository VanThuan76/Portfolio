import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/tw";
import {
  Bot,
  FolderOpenDot,
  GithubIcon,
  HomeIcon,
  Newspaper,
  ShieldEllipsis,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/plate-ui/tooltip";
import { TypographyP } from "@/components/ui/typography-p";

function ItemNavbar({
  icon,
  href,
  title,
}: {
  icon: React.ReactNode;
  href: string;
  title: string;
}) {
  const path = usePathname();
  const checkPath = path.split("/").slice(0, 3).join("/");

  return (
    <Tooltip>
      <TooltipTrigger className="relative">
        <Link href={href}>
          <div
            className={cn(
              "relative flex h-full flex-col items-center justify-center bg-muted shadow-md p-1 rounded-md transition-all ease-in-out",
              checkPath === href ? "-translate-y-5" : "hover:-translate-y-0.5",
            )}
          >
            <div className={checkPath === href ? "w-[30px] h-[30px]" : ""}>
              {icon}
            </div>
            {checkPath === href && (
              <div className="absolute -bottom-[10px] left-1/2 right-1/2 -translate-x-1/2 bg-sky-500/50 w-[7px] h-[7px] rounded-full"></div>
            )}
          </div>
        </Link>
      </TooltipTrigger>
      {checkPath !== href && (
        <TooltipContent>
          <TypographyP title={title} />
        </TooltipContent>
      )}
    </Tooltip>
  );
}

export function NavbarMenuDesktop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed bottom-2 h-[50px] inset-x-0 max-w-[350px] mx-auto z-50 bg-zinc-300/50 dark:bg-zinc-800/70 backdrop-blur-2xl flex justify-center items-center shadow-lg rounded-2xl",
        className,
      )}
    >
      <nav className="relative grid w-full grid-flow-col items-center justify-center gap-5 p-3">
        <ItemNavbar
          icon={<HomeIcon className="w-full h-full" />}
          href="/"
          title="Home"
        />
        <ItemNavbar
          icon={<FolderOpenDot className="w-full h-full" />}
          href="/project"
          title="Project"
        />
        <ItemNavbar
          icon={<Bot className="w-full h-full" />}
          href="/extensions/chatbot"
          title="ChatBot"
        />
        <ItemNavbar
          icon={<Newspaper className="w-full h-full" />}
          href="/blog"
          title="Blog"
        />
        <ItemNavbar
          icon={<GithubIcon className="w-full h-full" />}
          href="/extensions/git-roll"
          title="GitRoll"
        />
        <ItemNavbar
          icon={<ShieldEllipsis className="w-full h-full" />}
          href="/extensions/resume"
          title="Resume"
        />
      </nav>
    </div>
  );
}

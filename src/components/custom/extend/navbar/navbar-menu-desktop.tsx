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
          <div className="relative flex h-full flex-col items-center justify-center shadow-md p-2 rounded-md">
            {icon}
            {checkPath === href && (
              <div className="absolute -bottom-[6px] left-1/2 right-1/2 -translate-x-1/2 bg-sky-500/50 w-[5px] h-[5px] rounded-full"></div>
            )}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <TypographyP title={title} />
      </TooltipContent>
    </Tooltip>
  );
}

export function NavbarMenuDesktop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed bottom-2 h-[50px] inset-x-0 w-[95%] mx-auto z-50 bg-zinc-300/50 dark:bg-zinc-800/70 backdrop-blur-2xl flex justify-center items-center shadow-lg rounded-2xl",
        className,
      )}
    >
      <nav className="relative grid w-full grid-flow-col items-center justify-start gap-3 p-3">
        <ItemNavbar icon={<HomeIcon />} href="/" title="Home" />
        <ItemNavbar icon={<FolderOpenDot />} href="/project" title="Project" />
        <ItemNavbar icon={<Bot />} href="/extensions/chatbot" title="ChatBot" />
        <ItemNavbar icon={<Newspaper />} href="/blog" title="Blog" />
        <ItemNavbar
          icon={<GithubIcon />}
          href="/extensions/git-roll"
          title="GitRoll"
        />
        <ItemNavbar
          icon={<ShieldEllipsis />}
          href="/extensions/resume"
          title="Resume"
        />
      </nav>
    </div>
  );
}

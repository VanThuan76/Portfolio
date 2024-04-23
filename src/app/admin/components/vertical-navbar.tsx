"use client";
import { NewspaperIcon, Settings, Home, FolderGit2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LoaderImage } from "@/components/custom/loader-image";
import Link from "next/link";

const VerticalNavbar = () => {
  return (
    <aside className="sticky inset-y-0 z-10 hidden w-14 h-screen flex-col border rounded-md bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="/admin"
          className="group p-1 flex h-9 w-9 shrink-0 items-center  bg-white justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <LoaderImage
            isLoader={false}
            src="/logo.png"
            alt="Logo"
            width={35}
            height={35}
          />
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin/blog"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <NewspaperIcon className="h-5 w-5" />
              <span className="sr-only">Blog</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Blog</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/admin/project"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <FolderGit2 className="h-5 w-5" />
              <span className="sr-only">Project</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Project</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default VerticalNavbar;

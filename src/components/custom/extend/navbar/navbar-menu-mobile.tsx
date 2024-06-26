"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/tw";
import { TypographyP } from "@/components/ui/typography-p";
import {
  Bot,
  FolderOpenDot,
  GithubIcon,
  HomeIcon,
  Newspaper,
  PlusCircle,
  ShieldEllipsis,
} from "lucide-react";
import ActionDrawer from "@/components/custom/action-drawer";

export function NavbarMenuMobile({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "fixed bottom-0 min-h-[60px] inset-x-0 w-full mx-auto z-50 bg-[#E2E2E2] dark:bg-[#222222] flex justify-center items-center px-3",
        className,
      )}
    >
      <nav className="grid w-full grid-flow-col items-center justify-between rounded-16">
        <div
          className="relative flex h-full flex-col items-center justify-center pt-4 pb-2"
          onClick={() => router.push("/")}
        >
          <HomeIcon />
          <TypographyP title="Home" className="text-xs p-0 m-0" />
        </div>
        <div
          className="relative flex h-full flex-col items-center justify-center pt-4 pb-2"
          onClick={() => router.push("/project")}
        >
          <FolderOpenDot />
          <TypographyP title="Project" className="text-xs p-0 m-0" />
        </div>
        <div className="flex w-[52px] h-[52px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-700">
          <ActionDrawer
            drawerTrigger={
              <PlusCircle className="group-hover:text-white transition" />
            }
            drawerContent={
              <div className="w-full flex justify-start gap-x-8">
                <div
                  className="flex flex-col justify-center items-center"
                  onClick={() => router.push("/extensions/chatbot")}
                >
                  <Bot />
                  <TypographyP className="text-xs" title="Chat AI" />
                </div>
                <div
                  className="flex flex-col justify-center items-center"
                  onClick={() => router.push("/extensions/git-roll")}
                >
                  <GithubIcon />
                  <TypographyP title="Git Roll" className="text-xs p-0 m-0" />
                </div>
              </div>
            }
          />
        </div>
        <div
          className="relative flex h-full flex-col items-center justify-center pt-4 pb-2"
          onClick={() => router.push("/blog")}
        >
          <Newspaper />
          <TypographyP title="Blog" className="text-xs p-0 m-0" />
        </div>
        <div
          className="relative flex h-full flex-col items-center justify-center pt-4 pb-2"
          onClick={() => router.push("/extensions/resume")}
        >
          <ShieldEllipsis />
          <TypographyP title="Resume" className="text-xs p-0 m-0" />
        </div>
      </nav>
    </div>
  );
}

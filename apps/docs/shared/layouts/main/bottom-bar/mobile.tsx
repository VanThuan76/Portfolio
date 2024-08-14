"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Bot,
  FolderOpenDot,
  GithubIcon,
  HomeIcon,
  Newspaper,
  PlusCircle,
  ShieldEllipsis,
} from "lucide-react";
import { cn } from "@utils/tw";

import { TypographyP } from "@ui/molecules/ui-elements/typography-p";
import ActionDrawer from "@ui/molecules/navigation/action-drawer";

export function BottomBarMenuMobile({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "fixed top-0 h-[24px] inset-x-0 w-full mx-auto bg-[#2A3446] px-6",
        className,
      )}
    ></div>
  );
}

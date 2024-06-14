'use client'
import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  Bot,
  FolderOpenDot,
  GithubIcon,
  HomeIcon,
  Newspaper,
  ShieldEllipsis,
} from "lucide-react";

import { cn } from "@/lib/tw";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/plate-ui/tooltip";
import { TypographyP } from "@/components/ui/typography-p";

const navbarItems = [
  {
    icon: <HomeIcon className="w-full h-full p-1" strokeWidth={1.75} />,
    href: "/",
    title: "Home",
  },
  {
    icon: <FolderOpenDot className="w-full h-full p-1" strokeWidth={1.75}  />,
    href: "/project",
    title: "Project",
  },
  {
    icon: <Bot className="w-full h-full p-1" strokeWidth={1.75}  />,
    href: "/extensions/chatbot",
    title: "ChatBot",
  },
  {
    icon: <Newspaper className="w-full h-full p-1" strokeWidth={1.75}  />,
    href: "/blog",
    title: "Blog",
  },
  {
    icon: <GithubIcon className="w-full h-full p-1" strokeWidth={1.75}  />,
    href: "/extensions/git-roll",
    title: "GitRoll",
  },
  {
    icon: <ShieldEllipsis className="w-full h-full p-1" strokeWidth={1.75}  />,
    href: "/extensions/resume",
    title: "Resume",
  },
];

function AppIcon({ mouseX, icon, href, title }: { mouseX: MotionValue, icon: React.ReactNode; href: string; title: string; }) {
  const router = useRouter()
  const path = usePathname();
  const checkPath = path.split("/").slice(0, 3).join("/");

  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Tooltip>
      <TooltipTrigger>
        <motion.div
          ref={ref}
          style={{width}}
          className={cn('relative aspect-square w-10 rounded-full bg-gray-200 dark:bg-zinc-600 flex items-center justify-center', checkPath === href ? "-translate-y-5" : "hover:-translate-y-0.5")}
          onClick={() => router.push(href)}
        >
          <div className={checkPath === href ? "w-[30px] h-[30px]" : "w-[70%] h-[70%]"}>
            {icon}
          </div>
          {checkPath === href && (
            <div className="absolute -bottom-[10px] left-1/2 right-1/2 -translate-x-1/2 bg-black w-[5px] h-[5px] rounded-full"></div>
          )}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <TypographyP title={title} />
      </TooltipContent>
    </Tooltip>
  );
}

export function NavbarMenuDesktop({ className }: { className?: string }) {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-5 h-[50px] inset-x-0 max-w-[350px] mx-auto z-50 bg-white/50 dark:bg-zinc-800/70 backdrop-blur-2xl flex justify-center items-center shadow-lg rounded-3xl border border-gray-200/50 gap-2",
        className,
      )}
    >
      {navbarItems.map((item, index) => (
        <AppIcon mouseX={mouseX} key={index} {...item} />
      ))}
    </motion.div>
  );
}

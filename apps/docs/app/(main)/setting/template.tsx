"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Aperture, Eclipse } from "lucide-react";
import { cn } from "@utils/tw";

import { Avatar, AvatarImage } from "@ui/molecules/ui-elements/avatar";
import { Sidebar, SidebarBody, SidebarLink } from "@ui/molecules/frame/sidebar";

import NavigationApple from "@shared/layouts/main/head/@components/navigation-apple";

const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black"
    >
      <Avatar className="w-6 h-5 cursor-pointer">
        <AvatarImage src="/logo.png" alt="@logo" sizes="sm" />
      </Avatar>
      <span className="font-medium text-black whitespace-pre dark:text-white">
        Austin Vu
      </span>
    </Link>
  );
};
const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black"
    >
      <Avatar className="w-6 h-5 cursor-pointer">
        <AvatarImage src="/logo.png" alt="@logo" sizes="sm" />
      </Avatar>
    </Link>
  );
};

const LayoutTemplate = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      label: "Backgrounds",
      href: "/setting/background",
      icon: (
        <Aperture className="flex-shrink-0 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Displays",
      href: "/setting/display",
      icon: (
        <Eclipse className="flex-shrink-0 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-md flex flex-col md:flex-row w-full h-full bg-[#E0E0E0] dark:bg-[#2C2C2E] bg-opacity-60 backdrop-blur-md flex-1 max-w-2xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-[#E0E0E0] dark:bg-[#2C2C2E] bg-opacity-60 backdrop-blur-md">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="flex flex-col gap-2 mt-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 w-full h-full">
        <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 overflow-hidden bg-white border md:p-10 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900">
          {children}
        </div>
      </div>
      <NavigationApple />
    </div>
  );
};

export default LayoutTemplate;

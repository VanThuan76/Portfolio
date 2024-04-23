"use client";

import * as React from "react";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/store";
import { setShowNavBarMenu } from "@/store/app-slice";
import { Lock, LockOpen } from "lucide-react";

export function ModeNavbar() {
  const dispatch = useAppDispatch();
  const { showNavbarMenu } = useAppSelector((state) => state.app);
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="flex gap-3">
        {" "}
        Navbar - {showNavbarMenu ? (
          <LockOpen size={16} />
        ) : (
          <Lock size={16} />
        )}{" "}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem onClick={() => dispatch(setShowNavBarMenu(true))}>
            Open
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setShowNavBarMenu(false))}>
            Close
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}

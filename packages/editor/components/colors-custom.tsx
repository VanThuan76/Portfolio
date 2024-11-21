"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  useColorsCustom,
  useColorsCustomState,
} from "@udecode/plate-font/react";

import { buttonVariants } from "./button";
import { ColorDropdownMenuItems } from "./color-dropdown-menu-items";
import { ColorInput } from "./color-input";
import { DropdownMenuItem } from "./dropdown-menu";

import type { TColor } from "./color-dropdown-menu";

type ColorsCustomProps = {
  colors: TColor[];
  customColors: TColor[];
  updateColor: (color: string) => void;
  updateCustomColor: (color: string) => void;
  color?: string;
};

export function ColorsCustom({
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
}: ColorsCustomProps) {
  const t = useTranslations("udecode-plate");
  const state = useColorsCustomState({
    color,
    colors,
    customColors,
    updateCustomColor,
  });
  const { inputProps, menuItemProps } = useColorsCustom(state);

  return (
    <div className="flex flex-col gap-4">
      <ColorInput {...inputProps}>
        <DropdownMenuItem
          className={buttonVariants({
            isMenu: true,
            variant: "outline",
          })}
          {...menuItemProps}
        >
          {t("custom")}
        </DropdownMenuItem>
      </ColorInput>

      <ColorDropdownMenuItems
        color={color}
        colors={state.computedColors}
        updateColor={updateColor}
      />
    </div>
  );
}

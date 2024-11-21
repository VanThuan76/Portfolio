import React from "react";
import { useTranslations } from "next-intl";
import { withRef } from "@udecode/cn";
import {
  useLinkToolbarButton,
  useLinkToolbarButtonState,
} from "@udecode/plate-link/react";

import { Icons } from "./icons";

import { ToolbarButton } from "./toolbar";

export const LinkToolbarButton = withRef<typeof ToolbarButton>((rest, ref) => {
  const t = useTranslations("udecode-plate");
  const state = useLinkToolbarButtonState();
  const { props } = useLinkToolbarButton(state);

  return (
    <ToolbarButton ref={ref} tooltip={t("link")} {...props} {...rest}>
      <Icons.link />
    </ToolbarButton>
  );
});

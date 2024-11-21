import React from "react";
import { useTranslations } from "next-intl";
import { withRef } from "@udecode/cn";
import { useIndentButton } from "@udecode/plate-indent/react";

import { Icons } from "./icons";

import { ToolbarButton } from "./toolbar";

export const IndentToolbarButton = withRef<typeof ToolbarButton>(
  (rest, ref) => {
    const t = useTranslations("udecode-plate");
    const { props } = useIndentButton();

    return (
      <ToolbarButton ref={ref} tooltip={t("indent")} {...props} {...rest}>
        <Icons.indent />
      </ToolbarButton>
    );
  },
);

import React from "react";
import { useTranslations } from "next-intl";
import { withRef } from "@udecode/cn";
import { useOutdentButton } from "@udecode/plate-indent/react";

import { Icons } from "./icons";

import { ToolbarButton } from "./toolbar";

export const OutdentToolbarButton = withRef<typeof ToolbarButton>(
  (rest, ref) => {
    const t = useTranslations("udecode-plate");
    const { props } = useOutdentButton();

    return (
      <ToolbarButton ref={ref} tooltip={t("outdent")} {...props} {...rest}>
        <Icons.outdent />
      </ToolbarButton>
    );
  },
);

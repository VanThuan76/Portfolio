import { useTranslations } from "next-intl";
import { withRef } from "@udecode/cn";
import {
  useIndentTodoToolBarButton,
  useIndentTodoToolBarButtonState,
} from "@udecode/plate-indent-list/react";

import { Icons } from "./icons";

import { ToolbarButton } from "./toolbar";

export const IndentTodoToolbarButton = withRef<typeof ToolbarButton>(
  (rest, ref) => {
    const t = useTranslations("udecode-plate");
    const state = useIndentTodoToolBarButtonState({ nodeType: "todo" });
    const { props } = useIndentTodoToolBarButton(state);

    return (
      <ToolbarButton ref={ref} tooltip={t("todo")} {...props} {...rest}>
        <Icons.todo />
      </ToolbarButton>
    );
  },
);

import React from "react";
import { useTranslations } from "next-intl";
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import { useEditorReadOnly } from "@udecode/plate-common/react";
import { SparklesIcon } from "lucide-react";

import { Icons } from "./icons";

import { AIToolbarButton } from "./ai-toolbar-button";
import { CommentToolbarButton } from "./comment-toolbar-button";
import { LinkToolbarButton } from "./link-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FloatingToolbarButtons({
  isCommentEditor,
}: {
  isCommentEditor: boolean;
}) {
  const t = useTranslations("udecode-plate");
  const readOnly = useEditorReadOnly();

  return (
    <>
      {!readOnly && (
        <>
          <ToolbarGroup>
            <AIToolbarButton
              className="text-purple-500 hover:text-purple-600"
              tooltip={t("ask_ai_des")}
            >
              <SparklesIcon className="mr-1.5 !size-3.5" />
              {t("ask_ai")}
            </AIToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <TurnIntoDropdownMenu isCommentEditor={isCommentEditor} />

            <MarkToolbarButton nodeType={BoldPlugin.key} tooltip={t("bold")}>
              <Icons.bold />
            </MarkToolbarButton>

            <MarkToolbarButton
              nodeType={ItalicPlugin.key}
              tooltip={t("italic")}
            >
              <Icons.italic />
            </MarkToolbarButton>

            <MarkToolbarButton
              nodeType={UnderlinePlugin.key}
              tooltip={t("underline")}
            >
              <Icons.underline />
            </MarkToolbarButton>

            <MarkToolbarButton
              nodeType={StrikethroughPlugin.key}
              tooltip={t("strikethrough")}
            >
              <Icons.strikethrough />
            </MarkToolbarButton>

            <MarkToolbarButton nodeType={CodePlugin.key} tooltip={t("code")}>
              <Icons.code />
            </MarkToolbarButton>

            <LinkToolbarButton />
          </ToolbarGroup>
        </>
      )}

      <ToolbarGroup>
        <CommentToolbarButton />
        {!readOnly && <MoreDropdownMenu />}
      </ToolbarGroup>
    </>
  );
}

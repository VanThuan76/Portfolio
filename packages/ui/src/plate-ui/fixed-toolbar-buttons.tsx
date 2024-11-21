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
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
} from "@udecode/plate-font/react";
import { ListStyleType } from "@udecode/plate-indent-list";
import { ImagePlugin } from "@udecode/plate-media/react";
import { SparklesIcon } from "lucide-react";

import { Icons, iconVariants } from "./icons";

import { AIToolbarButton } from "./ai-toolbar-button";
import { AlignDropdownMenu } from "./align-dropdown-menu";
import { ColorDropdownMenu } from "./color-dropdown-menu";
import { CommentToolbarButton } from "./comment-toolbar-button";
import { EmojiDropdownMenu } from "./emoji-dropdown-menu";
import { IndentListToolbarButton } from "./indent-list-toolbar-button";
import { IndentTodoToolbarButton } from "./indent-todo-toolbar-button";
import { IndentToolbarButton } from "./indent-toolbar-button";
import { InsertDropdownMenu } from "./insert-dropdown-menu";
import { LineHeightDropdownMenu } from "./line-height-dropdown-menu";
import { LinkToolbarButton } from "./link-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { MediaToolbarButton } from "./media-toolbar-button";
import { ModeDropdownMenu } from "./mode-dropdown-menu";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { OutdentToolbarButton } from "./outdent-toolbar-button";
import { TableDropdownMenu } from "./table-dropdown-menu";
import { ToggleToolbarButton } from "./toggle-toolbar-button";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FixedToolbarButtons({ isCommentEditor }) {
  const t = useTranslations("udecode-plate");
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full">
      <div
        className="flex"
        style={{
          // Conceal the first separator on each line using overflow
          transform: "translateX(calc(-1px))",
          overflowX: "auto",
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup>
              {!isCommentEditor && (
                <ToolbarGroup>
                  <AIToolbarButton
                    className="text-purple-500 hover:text-purple-600"
                    tooltip={t("ask_ai_des")}
                  >
                    <SparklesIcon className="mr-1.5 !size-3.5" />
                    {t("ask_ai")}
                  </AIToolbarButton>
                </ToolbarGroup>
              )}

              <InsertDropdownMenu isCommentEditor={isCommentEditor} />

              <TurnIntoDropdownMenu isCommentEditor={isCommentEditor} />
            </ToolbarGroup>

            <ToolbarGroup>
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

              <ColorDropdownMenu
                nodeType={FontColorPlugin.key}
                tooltip={t("text_color")}
              >
                <Icons.color className={iconVariants({ variant: "toolbar" })} />
              </ColorDropdownMenu>

              <ColorDropdownMenu
                nodeType={FontBackgroundColorPlugin.key}
                tooltip={t("highlight_color")}
              >
                <Icons.bg className={iconVariants({ variant: "toolbar" })} />
              </ColorDropdownMenu>
            </ToolbarGroup>

            <ToolbarGroup>
              <AlignDropdownMenu />

              <LineHeightDropdownMenu />

              <IndentListToolbarButton nodeType={ListStyleType.Disc} />
              <IndentListToolbarButton nodeType={ListStyleType.Decimal} />
              <IndentTodoToolbarButton />

              <OutdentToolbarButton />
              <IndentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
              <LinkToolbarButton />

              <MediaToolbarButton nodeType={ImagePlugin.key} />

              {!isCommentEditor && <TableDropdownMenu />}

              <EmojiDropdownMenu />

              {!isCommentEditor && <ToggleToolbarButton />}

              <MoreDropdownMenu />
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />
        {!isCommentEditor && (
          <ToolbarGroup>
            <CommentToolbarButton />
            <ModeDropdownMenu />
          </ToolbarGroup>
        )}
      </div>
    </div>
  );
}

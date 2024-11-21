"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { insertEmptyCodeBlock } from "@udecode/plate-code-block";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { insertEmptyElement } from "@udecode/plate-common";
import { focusEditor, ParagraphPlugin } from "@udecode/plate-common/react";
import { ExcalidrawPlugin } from "@udecode/plate-excalidraw/react";
import { HEADING_KEYS, insertToc } from "@udecode/plate-heading";
import { TocPlugin } from "@udecode/plate-heading/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { toggleIndentList } from "@udecode/plate-indent-list";
import { insertColumnGroup } from "@udecode/plate-layout";
import { ColumnPlugin } from "@udecode/plate-layout/react";
import { LinkPlugin, triggerFloatingLink } from "@udecode/plate-link/react";
import { insertMedia } from "@udecode/plate-media";
import { ImagePlugin, MediaEmbedPlugin } from "@udecode/plate-media/react";
import { TodoListPlugin } from "@udecode/plate-list/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import { DatePlugin } from "@udecode/plate-date/react";
import { insertTable, TablePlugin } from "@udecode/plate-table/react";

import { useMyEditorRef } from "@repo/editor/components/types/plate-types";
import { Icons } from "./icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from "./dropdown-menu";
import { ToolbarButton } from "./toolbar";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

export function InsertDropdownMenu(
  props: DropdownMenuProps & { isCommentEditor: boolean },
) {
  const t = useTranslations("udecode-plate");
  const editor = useMyEditorRef();
  const openState = useOpenState();

  const items = [
    {
      items: [
        {
          description: t("paragraph"),
          icon: Icons.paragraph,
          label: t("paragraph"),
          value: ParagraphPlugin.key,
        },
        ...(!props.isCommentEditor
          ? [
              {
                description: t("heading_1"),
                icon: Icons.h1,
                label: t("heading_1"),
                value: HEADING_KEYS.h1,
              },
              {
                description: t("heading_2"),
                icon: Icons.h2,
                label: t("heading_2"),
                value: HEADING_KEYS.h2,
              },
              {
                description: t("heading_3"),
                icon: Icons.h3,
                label: t("heading_3"),
                value: HEADING_KEYS.h3,
              },
              {
                description: t("heading_4"),
                icon: Icons.h4,
                label: t("heading_4"),
                value: HEADING_KEYS.h4,
              },
              {
                description: t("heading_5"),
                icon: Icons.h5,
                label: t("heading_5"),
                value: HEADING_KEYS.h5,
              },
              {
                description: t("heading_6"),
                icon: Icons.h6,
                label: t("heading_6"),
                value: HEADING_KEYS.h6,
              },
              {
                description: t("table"),
                icon: Icons.table,
                label: t("table"),
                value: TablePlugin.key,
              },
            ]
          : []),
        {
          description: t("code"),
          icon: Icons.codeblock,
          label: t("code"),
          value: CodeBlockPlugin.key,
        },
        {
          description: t("quote"),
          icon: Icons.blockquote,
          label: t("quote"),
          value: BlockquotePlugin.key,
        },
        {
          description: t("divider"),
          icon: Icons.hr,
          label: t("divider"),
          value: HorizontalRulePlugin.key,
        },
      ],
      label: t("basic_blocks"),
    },
    {
      items: [
        {
          description: t("bulleted_list"),
          icon: Icons.ul,
          label: t("bulleted_list"),
          value: "ul",
        },
        {
          description: t("numbered_list"),
          icon: Icons.ol,
          label: t("numbered_list"),
          value: "ol",
        },
        ...(!props.isCommentEditor
          ? [
              {
                description: t("to_do_list"),
                icon: Icons.todo,
                label: t("to_do_list"),
                value: TodoListPlugin.key,
              },
              {
                description: t("toggle_list"),
                icon: Icons.chevronRight,
                label: t("toggle_list"),
                value: TogglePlugin.key,
              },
            ]
          : []),
      ],
      label: t("lists"),
    },
    {
      items: [
        {
          description: t("image"),
          icon: Icons.image,
          label: t("image"),
          value: ImagePlugin.key,
        },
        {
          description: t("embed"),
          icon: Icons.embed,
          label: t("embed"),
          value: MediaEmbedPlugin.key,
        },
        ...(!props.isCommentEditor
          ? [
              {
                description: t("excalidraw"),
                icon: Icons.excalidraw,
                label: t("excalidraw"),
                value: ExcalidrawPlugin.key,
              },
            ]
          : []),
      ],
      label: t("media"),
    },
    ...(!props.isCommentEditor
      ? [
          {
            items: [
              {
                description: t("table_of_contents"),
                icon: Icons.ul,
                label: t("table_of_contents"),
                value: TocPlugin.key,
              },
              {
                description: t("columns"),
                icon: Icons.LayoutIcon,
                label: t("columns"),
                value: ColumnPlugin.key,
              },
            ],
            label: t("advanced_blocks"),
          },
          {
            items: [
              {
                description: t("link"),
                icon: Icons.link,
                label: t("link"),
                value: LinkPlugin.key,
              },
              {
                description: t("date"),
                icon: Icons.date,
                label: t("date"),
                value: DatePlugin.key,
              },
            ],
            label: t("inline"),
          },
        ]
      : []),
  ];

  if (!editor) return <></>;

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip={t("insert")}
          isDropdown
        >
          <Icons.add />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="h-[250px] min-w-0 overflow-y-auto"
        align="start"
        data-lenis-prevent="true"
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ icon: Icon, label: itemLabel, value: type }) => (
                <DropdownMenuItem
                  key={itemLabel}
                  className="min-w-[180px]"
                  onSelect={async () => {
                    switch (type) {
                      case CodeBlockPlugin.key: {
                        insertEmptyCodeBlock(editor, {
                          insertNodesOptions: { select: true },
                        });

                        break;
                      }
                      case ColumnPlugin.key: {
                        insertColumnGroup(editor);

                        break;
                      }
                      case ImagePlugin.key: {
                        await insertMedia(editor, {
                          select: true,
                          type: ImagePlugin.key,
                        });

                        break;
                      }
                      case LinkPlugin.key: {
                        triggerFloatingLink(editor, { focused: true });

                        break;
                      }
                      case MediaEmbedPlugin.key: {
                        await insertMedia(editor, {
                          select: true,
                          type: MediaEmbedPlugin.key,
                        });

                        break;
                      }
                      case TablePlugin.key: {
                        insertTable(editor, {}, { select: true });

                        break;
                      }
                      case TocPlugin.key: {
                        insertToc(editor);

                        break;
                      }
                      case "ol":
                      case "ul": {
                        insertEmptyElement(editor, ParagraphPlugin.key, {
                          nextBlock: true,
                          select: true,
                        });

                        toggleIndentList(editor, {
                          listStyleType: type === "ul" ? "disc" : "decimal",
                        });

                        break;
                      }
                      default: {
                        insertEmptyElement(editor, type, {
                          nextBlock: true,
                          select: true,
                        });
                      }
                    }

                    focusEditor(editor);
                  }}
                >
                  <Icon className="mr-2 size-5" />
                  {itemLabel}
                </DropdownMenuItem>
              ),
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

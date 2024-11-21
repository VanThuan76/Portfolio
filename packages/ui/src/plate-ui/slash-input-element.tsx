const { AIChatPlugin } = require("@udecode/plate-ai/react");

import React from "react";
import { useTranslations } from "next-intl";
import { withRef } from "@udecode/cn";
import { DatePlugin } from "@udecode/plate-date/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { ListStyleType, toggleIndentList } from "@udecode/plate-indent-list";
import { TocPlugin } from "@udecode/plate-heading/react";
import { ColumnPlugin } from "@udecode/plate-layout/react";
import { TodoListPlugin } from "@udecode/plate-list/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import { TablePlugin } from "@udecode/plate-table/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { Icons } from "./icons";

import {
  InlineCombobox,
  InlineComboboxContent,
  InlineComboboxEmpty,
  InlineComboboxInput,
  InlineComboboxItem,
} from "./inline-combobox";
import { PlateElement } from "./plate-element";

import type { ComponentType, SVGProps } from "react";
import type { PlateEditor } from "@udecode/plate-common/react";

interface SlashCommandRule {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onSelect: (editor: PlateEditor) => void;
  value: string;
  className?: string;
  focusEditor?: boolean;
  keywords?: string[];
}

export const SlashInputElement = withRef<typeof PlateElement>(
  ({ className, ...props }, ref) => {
    const t = useTranslations("udecode-plate");
    const { children, editor, element } = props;

    const rules: SlashCommandRule[] = [
      {
        focusEditor: false,
        icon: Icons.ai,
        value: "AI",
        onSelect: (editor) => {
          editor.getApi(AIChatPlugin).aiChat.show();
        },
      },
      {
        icon: Icons.h1,
        value: t("heading_1"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: HEADING_KEYS.h1 });
        },
      },
      {
        icon: Icons.h2,
        value: t("heading_2"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: HEADING_KEYS.h2 });
        },
      },
      {
        icon: Icons.h3,
        value: t("heading_3"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: HEADING_KEYS.h3 });
        },
      },
      {
        icon: Icons.ul,
        keywords: ["ul", "unordered list"],
        value: t("bulleted_list"),
        onSelect: (editor) => {
          toggleIndentList(editor, {
            listStyleType: ListStyleType.Disc,
          });
        },
      },
      {
        icon: Icons.ol,
        keywords: ["ol", "ordered list"],
        value: t("numbered_list"),
        onSelect: (editor) => {
          toggleIndentList(editor, {
            listStyleType: ListStyleType.Decimal,
          });
        },
      },
      {
        icon: Icons.todo,
        value: t("to_do_list"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: TodoListPlugin.key });
        },
      },
      {
        icon: Icons.chevronRight,
        value: t("toggle_list"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: TogglePlugin.key });
        },
      },
      {
        icon: Icons.table,
        value: t("table"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: TablePlugin.key });
        },
      },
      {
        icon: Icons.codeblock,
        value: t("code"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: CodeBlockPlugin.key });
        },
      },
      {
        icon: Icons.blockquote,
        value: t("quote"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: BlockquotePlugin.key });
        },
      },
      {
        icon: Icons.ul,
        value: t("table_of_contents"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: TocPlugin.key });
        },
      },
      {
        icon: Icons.LayoutIcon,
        value: t("columns"),
        onSelect: (editor) => {
          editor.tf.toggle.block({ type: ColumnPlugin.key });
        },
      },
      {
        icon: Icons.add,
        keywords: ["inline", "date"],
        value: t("date"),
        onSelect: (editor) => {
          editor.getTransforms(DatePlugin).insert.date();
        },
      },
    ];

    return (
      <PlateElement
        ref={ref}
        as="span"
        data-slate-value={element.value}
        {...props}
      >
        <InlineCombobox element={element} trigger="/">
          <InlineComboboxInput />

          <InlineComboboxContent
            className="h-[200px] overflow-y-auto"
            data-lenis-prevent="true"
          >
            <InlineComboboxEmpty>
              No matching commands found
            </InlineComboboxEmpty>

            {rules.map(
              ({ focusEditor, icon: Icon, keywords, value, onSelect }) => (
                <InlineComboboxItem
                  key={value}
                  value={value}
                  onClick={() => onSelect(editor)}
                  focusEditor={focusEditor}
                  keywords={keywords}
                >
                  <Icon className="mr-2 size-4" aria-hidden />
                  {value}
                </InlineComboboxItem>
              ),
            )}
          </InlineComboboxContent>
        </InlineCombobox>

        {children}
      </PlateElement>
    );
  },
);

import { useTranslations } from "next-intl";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { getNodeEntries, isBlock } from "@udecode/plate-common";
import {
  focusEditor,
  ParagraphPlugin,
  useEditorRef,
  useEditorSelector,
} from "@udecode/plate-common/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { ListStyleType, toggleIndentList } from "@udecode/plate-indent-list";
import { TodoListPlugin } from "@udecode/plate-list/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { ColumnPlugin } from "@udecode/plate-layout/react";

import { Icons } from "./icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  useOpenState,
} from "./dropdown-menu";
import { ToolbarButton } from "./toolbar";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

export function TurnIntoDropdownMenu(
  props: DropdownMenuProps & { isCommentEditor: boolean },
) {
  const t = useTranslations("udecode-plate");

  const items = [
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
        ]
      : []),
    {
      description: t("quote"),
      icon: Icons.blockquote,
      label: t("quote"),
      value: BlockquotePlugin.key,
    },
    {
      description: t("bulleted_list"),
      icon: Icons.ul,
      label: t("bulleted_list"),
      value: ListStyleType.Disc,
    },
    {
      description: t("numbered_list"),
      icon: Icons.ol,
      label: t("numbered_list"),
      value: ListStyleType.Decimal,
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
          {
            description: t("columns"),
            icon: Icons.LayoutIcon,
            label: t("columns"),
            value: ColumnPlugin.key,
          },
        ]
      : []),
    {
      description: t("code"),
      icon: Icons.codeblock,
      label: t("code"),
      value: CodeBlockPlugin.key,
    },
  ];

  const defaultItem = items.find((item) => item.value === ParagraphPlugin.key)!;

  const value: string = useEditorSelector((editor) => {
    let initialNodeType: string = ParagraphPlugin.key;
    let allNodesMatchInitialNodeType = false;
    const codeBlockEntries = getNodeEntries(editor, {
      match: (n) => isBlock(editor, n),
      mode: "highest",
    });
    const nodes = Array.from(codeBlockEntries);

    if (nodes.length > 0) {
      // @ts-ignore
      initialNodeType = nodes[0][0].type as string;
      allNodesMatchInitialNodeType = nodes.every(([node]) => {
        const type: string = (node?.type as string) || ParagraphPlugin.key;

        return type === initialNodeType;
      });
    }

    return allNodesMatchInitialNodeType ? initialNodeType : ParagraphPlugin.key;
  }, []);

  const editor = useEditorRef();
  const openState = useOpenState();

  const selectedItem =
    items.find((item) => item.value === value) ?? defaultItem;
  const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem;

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip={t("turn_into")}
          isDropdown
        >
          <SelectedItemIcon className="size-5 lg:hidden" />
          <span className="max-lg:hidden">{selectedItemLabel}</span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-0 ignore-click-outside/toolbar"
        align="start"
      >
        <DropdownMenuLabel>{t("turn_into")}</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          data-lenis-prevent="true"
          className="max-h-[150px] overflow-y-auto"
          value={value}
          onValueChange={(type: any) => {
            if (type === ListStyleType.Disc || type === ListStyleType.Decimal) {
              toggleIndentList(editor, {
                listStyleType: type,
              });
            }

            editor.tf.toggle.block({ type });

            focusEditor(editor);
          }}
        >
          {items.map(({ icon: Icon, label, value: itemValue }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              className="min-w-[180px] max-h-[30px]"
              value={itemValue}
            >
              <Icon className="mr-2 size-5" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

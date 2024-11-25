"use client";

const { DndProvider } = require("react-dnd");
const { HTML5Backend } = require("react-dnd-html5-backend");
const { AIPlugin } = require("@udecode/plate-ai/react");
const {
  ParagraphPlugin,
  Plate,
  PlateLeaf,
  usePlateEditor,
} = require("@udecode/plate-common/react");

import { forwardRef, useRef } from "react";
import Prism from "prismjs";
import { cn, withProps } from "@udecode/cn";
import { AlignPlugin } from "@udecode/plate-alignment/react";
import { AutoformatPlugin } from "@udecode/plate-autoformat/react";
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { ExitBreakPlugin, SoftBreakPlugin } from "@udecode/plate-break/react";
import { CaptionPlugin } from "@udecode/plate-caption/react";
import {
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock,
} from "@udecode/plate-code-block";
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from "@udecode/plate-code-block/react";
import { CommentsPlugin } from "@udecode/plate-comments/react";
import {
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  someNode,
} from "@udecode/plate-common";
import { DatePlugin } from "@udecode/plate-date/react";
import { DndPlugin } from "@udecode/plate-dnd";
import { DocxPlugin } from "@udecode/plate-docx";
import { EmojiPlugin } from "@udecode/plate-emoji/react";
import { ExcalidrawPlugin } from "@udecode/plate-excalidraw/react";
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
  FontSizePlugin,
} from "@udecode/plate-font/react";
import { HEADING_KEYS, HEADING_LEVELS } from "@udecode/plate-heading";
import { HeadingPlugin, TocPlugin } from "@udecode/plate-heading/react";
import { HighlightPlugin } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { IndentListPlugin } from "@udecode/plate-indent-list/react";
import { IndentPlugin } from "@udecode/plate-indent/react";
import { JuicePlugin } from "@udecode/plate-juice";
import { KbdPlugin } from "@udecode/plate-kbd/react";
import { ColumnItemPlugin, ColumnPlugin } from "@udecode/plate-layout/react";
import { LineHeightPlugin } from "@udecode/plate-line-height/react";
import { LinkPlugin } from "@udecode/plate-link/react";
import { TodoListPlugin } from "@udecode/plate-list/react";
import { MarkdownPlugin } from "@udecode/plate-markdown";
import { ImagePlugin, MediaEmbedPlugin } from "@udecode/plate-media/react";
import {
  MentionInputPlugin,
  MentionPlugin,
} from "@udecode/plate-mention/react";
import { NodeIdPlugin } from "@udecode/plate-node-id";
import { ResetNodePlugin } from "@udecode/plate-reset-node/react";
import { SelectOnBackspacePlugin } from "@udecode/plate-select";
import {
  BlockMenuPlugin,
  BlockSelectionPlugin,
} from "@udecode/plate-selection/react";
import {
  SlashInputPlugin,
  SlashPlugin,
} from "@udecode/plate-slash-command/react";
import { TabbablePlugin } from "@udecode/plate-tabbable/react";
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from "@udecode/plate-table/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";

import { BlockquoteElement } from "@repo/editor/components/blockquote-element";
import { CodeBlockElement } from "@repo/editor/components/code-block-element";
import { CodeLeaf } from "@repo/editor/components/code-leaf";
import { CodeLineElement } from "@repo/editor/components/code-line-element";
import { CodeSyntaxLeaf } from "@repo/editor/components/code-syntax-leaf";
import { CommentLeaf } from "@repo/editor/components/comment-leaf";
import { CommentsPopover } from "@repo/editor/components/comments-popover";
import {
  CursorOverlay,
  DragOverCursorPlugin,
  SelectionOverlayPlugin,
} from "@repo/editor/components/cursor-overlay";
import { Editor } from "@repo/editor/components/editor";
import { ExcalidrawElement } from "@repo/editor/components/excalidraw-element";
import { FixedToolbar } from "@repo/editor/components/fixed-toolbar";
import { FixedToolbarButtons } from "@repo/editor/components/fixed-toolbar-buttons";
import { FloatingToolbar } from "@repo/editor/components/floating-toolbar";
import { FloatingToolbarButtons } from "@repo/editor/components/floating-toolbar-buttons";
import { HeadingElement } from "@repo/editor/components/heading-element";
import { HighlightLeaf } from "@repo/editor/components/highlight-leaf";
import { HrElement } from "@repo/editor/components/hr-element";
import { ImageElement } from "@repo/editor/components/image-element";
import { TodoLi, TodoMarker } from "@repo/editor/components/indent-todo-marker";
import { KbdLeaf } from "@repo/editor/components/kbd-leaf";
import { LinkElement } from "@repo/editor/components/link-element";
import { LinkFloatingToolbar } from "@repo/editor/components/link-floating-toolbar";
import { MediaEmbedElement } from "@repo/editor/components/media-embed-element";
import { MentionElement } from "@repo/editor/components/mention-element";
import { MentionInputElement } from "@repo/editor/components/mention-input-element";
import { ParagraphElement } from "@repo/editor/components/paragraph-element";
import { withPlaceholders } from "@repo/editor/components/placeholder";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "@repo/editor/components/table-cell-element";
import { TableElement } from "@repo/editor/components/table-element";
import { TableRowElement } from "@repo/editor/components/table-row-element";
import { TodoListElement } from "@repo/editor/components/todo-list-element";
import { withDraggables } from "@repo/editor/components/with-draggables";
import { TrailingBlockPlugin } from "@udecode/plate-trailing-block";

import { AILeaf } from "@repo/editor/components/ai-leaf";
import { BlockContextMenu } from "@repo/editor/components/block-context-menu";
import { ColumnElement } from "@repo/editor/components/column-element";
import { ColumnGroupElement } from "@repo/editor/components/column-group-element";
import { DateElement } from "@repo/editor/components/date-element";
import { SlashInputElement } from "@repo/editor/components/slash-input-element";
import { TocElement } from "@repo/editor/components/toc-element";
import { ToggleElement } from "@repo/editor/components/toggle-element";
import { aiPlugins } from "@repo/editor/components/plugins/ai-plugins";
import { copilotPlugins } from "@repo/editor/components/plugins/copilot-plugins";
import { autoformatRules } from "@repo/editor/components/types/autoformat-rules";

interface PlateEditorProps {
  onChange: (value: any) => void;
  value: any;
  className?: string;
  editorClassName?: string;
  isCommentEditor?: boolean;
}

const PlateEditor = forwardRef<HTMLDivElement, PlateEditorProps>(
  function PlateEditor(
    {
      onChange,
      value,
      className,
      editorClassName,
      isCommentEditor = false,
    }: PlateEditorProps,
    ref,
  ) {
    const containerRef = useRef(null);
    const editor = useMyEditor(value, isCommentEditor);

    return (
      <DndProvider backend={HTML5Backend}>
        <Plate editor={editor} onChange={onChange}>
          <div
            id="scroll_container"
            ref={ref || containerRef}
            className={cn(
              "relative",
              // Block selection
              "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4",
              className,
            )}
          >
            <FixedToolbar>
              <FixedToolbarButtons isCommentEditor={isCommentEditor} />
            </FixedToolbar>

            <Editor
              autoFocus
              focusRing={false}
              variant="demo"
              size="md"
              className={cn("!px-24", editorClassName)}
            />

            <FloatingToolbar>
              <FloatingToolbarButtons isCommentEditor={isCommentEditor} />
            </FloatingToolbar>

            <CommentsPopover />

            <CursorOverlay containerRef={containerRef} />
          </div>
        </Plate>
      </DndProvider>
    );
  },
);
export default PlateEditor;

export const useMyEditor: (
  value: any,
  isCommentEditor: boolean,
) => ReturnType<typeof usePlateEditor> = (value, isCommentEditor) => {
  return usePlateEditor({
    id: "plate-editor",
    plugins: [
      // AI
      // ...(!isCommentEditor ? aiPlugins : []),
      // ...(!isCommentEditor ? copilotPlugins : []),
      // Nodes
      HeadingPlugin,
      TocPlugin,
      BlockquotePlugin,
      CodeBlockPlugin.configure({
        options: {
          prism: Prism,
        },
      }),
      CodeLinePlugin,
      CodeSyntaxPlugin,
      HorizontalRulePlugin,
      LinkPlugin.configure({
        render: { afterEditable: () => <LinkFloatingToolbar /> },
      }),
      ImagePlugin,
      MediaEmbedPlugin,
      CaptionPlugin.configure({
        options: { plugins: [ImagePlugin, MediaEmbedPlugin] },
      }),
      MentionPlugin,
      MentionInputPlugin,
      TablePlugin,
      TableRowPlugin,
      TableCellPlugin,
      TableCellHeaderPlugin,
      TodoListPlugin,
      ExcalidrawPlugin,
      ColumnPlugin,
      ColumnItemPlugin,

      // Marks
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      StrikethroughPlugin,
      CodePlugin,
      SubscriptPlugin,
      SuperscriptPlugin,
      FontColorPlugin,
      FontBackgroundColorPlugin,
      FontSizePlugin,
      HighlightPlugin,
      KbdPlugin,

      // Block Style
      DatePlugin,
      TogglePlugin,
      AlignPlugin.configure({
        inject: {
          targetPlugins: [ParagraphPlugin.key, ...HEADING_LEVELS],
        },
      }),
      IndentPlugin.configure({
        inject: {
          targetPlugins: [
            ParagraphPlugin.key,
            BlockquotePlugin.key,
            CodeBlockPlugin.key,
            ...HEADING_LEVELS,
          ],
        },
      }),
      IndentListPlugin.configure({
        inject: {
          targetPlugins: [
            ParagraphPlugin.key,
            BlockquotePlugin.key,
            CodeBlockPlugin.key,
            ...HEADING_LEVELS,
          ],
        },
        options: {
          listStyleTypes: {
            todo: {
              liComponent: TodoLi,
              markerComponent: TodoMarker,
              type: "todo",
            },
          },
        },
      }),
      LineHeightPlugin.configure({
        inject: {
          nodeProps: {
            defaultNodeValue: 1.5,
            validNodeValues: [1, 1.2, 1.5, 2, 3],
          },
          targetPlugins: [ParagraphPlugin.key, ...HEADING_LEVELS],
        },
      }),

      // Functionality
      SlashPlugin,
      AutoformatPlugin.configure({
        options: {
          rules: autoformatRules,
          enableUndoOnDelete: true,
        },
      }),
      BlockSelectionPlugin.configure({
        options: {
          areaOptions: {
            behaviour: {
              scrolling: {
                startScrollMargins: { x: 0, y: 0 },
              },
            },
            boundaries: "#scroll_container",
            // container: '#scroll_container',
            selectables: "#scroll_container .slate-selectable",
            selectionAreaClass: "slate-selection-area",
          },
          enableContextMenu: true,
        },
      }),
      BlockMenuPlugin.configure({
        render: { aboveEditable: BlockContextMenu },
      }),
      DndPlugin.configure({
        options: { enableScroller: true },
      }),
      EmojiPlugin,
      ExitBreakPlugin.configure({
        options: {
          rules: [
            {
              hotkey: "mod+enter",
            },
            {
              hotkey: "mod+shift+enter",
              before: true,
            },
            {
              hotkey: "enter",
              query: {
                start: true,
                end: true,
                allow: HEADING_LEVELS,
              },
              relative: true,
              level: 1,
            },
          ],
        },
      }),
      NodeIdPlugin,
      ResetNodePlugin.configure({
        options: {
          rules: [
            {
              types: [BlockquotePlugin.key, TodoListPlugin.key],
              defaultType: ParagraphPlugin.key,
              hotkey: "Enter",
              predicate: isBlockAboveEmpty,
            },
            {
              types: [BlockquotePlugin.key, TodoListPlugin.key],
              defaultType: ParagraphPlugin.key,
              hotkey: "Backspace",
              predicate: isSelectionAtBlockStart,
            },
            {
              types: [CodeBlockPlugin.key],
              defaultType: ParagraphPlugin.key,
              onReset: unwrapCodeBlock,
              hotkey: "Enter",
              predicate: isCodeBlockEmpty,
            },
            {
              types: [CodeBlockPlugin.key],
              defaultType: ParagraphPlugin.key,
              onReset: unwrapCodeBlock,
              hotkey: "Backspace",
              predicate: isSelectionAtCodeBlockStart,
            },
          ],
        },
      }),
      SelectOnBackspacePlugin.configure({
        options: {
          query: {
            allow: [ImagePlugin.key, HorizontalRulePlugin.key],
          },
        },
      }),
      SoftBreakPlugin.configure({
        options: {
          rules: [
            { hotkey: "shift+enter" },
            {
              hotkey: "enter",
              query: {
                allow: [
                  CodeBlockPlugin.key,
                  BlockquotePlugin.key,
                  TableCellPlugin.key,
                  TableCellHeaderPlugin.key,
                ],
              },
            },
          ],
        },
      }),
      TabbablePlugin.configure(({ editor }) => ({
        options: {
          query: () => {
            if (isSelectionAtBlockStart(editor)) return false;

            return !someNode(editor, {
              match: (n) => {
                return !!(
                  n.type &&
                  ([
                    TablePlugin.key,
                    TodoListPlugin.key,
                    CodeBlockPlugin.key,
                  ].includes(n.type as string) ||
                    n.listStyleType)
                );
              },
            });
          },
        },
      })),
      TrailingBlockPlugin.configure({
        options: { type: ParagraphPlugin.key },
      }),
      SelectionOverlayPlugin,
      DragOverCursorPlugin,
      // Collaboration
      CommentsPlugin.configure({
        options: {
          users: {
            1: {
              id: "1",
              name: "zbeyens",
              avatarUrl:
                "https://avatars.githubusercontent.com/u/19695832?s=96&v=4",
            },
          },
          myUserId: "1",
        },
      }),

      // Deserialization
      DocxPlugin,
      MarkdownPlugin,
      JuicePlugin,
    ],
    override: {
      components: withDraggables(
        withPlaceholders({
          [AIPlugin.key]: AILeaf,
          [DatePlugin.key]: DateElement,
          ...(isCommentEditor
            ? {}
            : { [SlashInputPlugin.key]: SlashInputElement }),
          [TogglePlugin.key]: ToggleElement,
          [BlockquotePlugin.key]: BlockquoteElement,
          [CodeBlockPlugin.key]: CodeBlockElement,
          [CodeLinePlugin.key]: CodeLineElement,
          [TocPlugin.key]: TocElement,
          [ColumnItemPlugin.key]: ColumnElement,
          [ColumnPlugin.key]: ColumnGroupElement,
          [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
          [HorizontalRulePlugin.key]: HrElement,
          ...(isCommentEditor
            ? {}
            : {
                [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: "h1" }),
                [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: "h2" }),
                [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: "h3" }),
                [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: "h4" }),
                [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: "h5" }),
                [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: "h6" }),
              }),
          [ImagePlugin.key]: ImageElement,
          [LinkPlugin.key]: LinkElement,
          [MediaEmbedPlugin.key]: MediaEmbedElement,
          [MentionPlugin.key]: MentionElement,
          [MentionInputPlugin.key]: MentionInputElement,
          [ParagraphPlugin.key]: ParagraphElement,
          [TablePlugin.key]: TableElement,
          [TableRowPlugin.key]: TableRowElement,
          [TableCellPlugin.key]: TableCellElement,
          [TableCellHeaderPlugin.key]: TableCellHeaderElement,
          [TodoListPlugin.key]: TodoListElement,
          [ExcalidrawPlugin.key]: ExcalidrawElement,
          [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
          [CodePlugin.key]: CodeLeaf,
          [HighlightPlugin.key]: HighlightLeaf,
          [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
          [KbdPlugin.key]: KbdLeaf,
          [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
          [SubscriptPlugin.key]: withProps(PlateLeaf, { as: "sub" }),
          [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: "sup" }),
          [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
          [CommentsPlugin.key]: CommentLeaf,
        }),
      ),
    },
    value: value
      ? value
      : [
          {
            id: "1",
            type: "h1",
            children: [{ text: "Welcome to the Austin's Editor" }],
          },
          {
            id: "2",
            type: ParagraphPlugin.key,
            children: [
              { text: "A rich-text editor with AI capabilities. Try the" },
              { text: "AI commands", bold: true },
              { text: " or use " },
              { text: "Cmd+J", kbd: true },
              { text: " to open the AI menu." },
            ],
          },
        ],
  });
};

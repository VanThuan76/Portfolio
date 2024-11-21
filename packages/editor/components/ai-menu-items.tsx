const { AIChatPlugin, AIPlugin } = require("@udecode/plate-ai/react");
const {
  PlateEditor,
  focusEditor,
  useEditorPlugin,
} = require("@udecode/plate-common/react");

import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  getAncestorNode,
  getEndPoint,
  getNodeString,
} from "@udecode/plate-common";
import { useIsSelecting } from "@udecode/plate-selection/react";
import {
  Album,
  BadgeHelp,
  Check,
  CornerUpLeft,
  FeatherIcon,
  ListEnd,
  ListMinus,
  ListPlus,
  PenLine,
  Wand,
  X,
} from "lucide-react";

import { CommandGroup, CommandItem } from "./command";

export type EditorChatState =
  | "cursorCommand"
  | "cursorSuggestion"
  | "selectionCommand"
  | "selectionSuggestion";

export const AIMenuItems = ({
  aiEditorRef,
  setValue,
}: {
  aiEditorRef: React.MutableRefObject<typeof PlateEditor | null>;
  setValue: (value: string) => void;
}) => {
  const t = useTranslations("udecode-plate");
  const isSelecting = useIsSelecting();
  const { editor, useOption } = useEditorPlugin(AIChatPlugin);
  const { messages } = useOption("chat");

  const menuState = useMemo(() => {
    if (messages && messages.length > 0) {
      return isSelecting ? "selectionSuggestion" : "cursorSuggestion";
    }

    return isSelecting ? "selectionCommand" : "cursorCommand";
  }, [isSelecting, messages]);

  const aiChatItems = {
    accept: {
      icon: <Check />,
      label: t("accept"),
      value: "accept",
      onSelect: ({ editor }) => {
        editor.getTransforms(AIChatPlugin).aiChat.accept();
        focusEditor(editor, getEndPoint(editor, editor.selection!));
      },
    },
    continueWrite: {
      icon: <PenLine />,
      label: t("continueWrite"),
      value: "continueWrite",
      onSelect: ({ editor }) => {
        const ancestorNode = getAncestorNode(editor);
        const isEmpty = getNodeString(ancestorNode![0]).trim().length === 0;

        void editor.getApi(AIChatPlugin).aiChat.submit({
          mode: "insert",
          prompt: isEmpty
            ? `<Document>
  {editor}
  </Document>
  Start writing a new paragraph AFTER <Document> ONLY ONE SENTENCE`
            : "Continue writing AFTER <Block> ONLY ONE SENTENCE. DONT REPEAT THE TEXT.",
        });
      },
    },
    discard: {
      icon: <X />,
      label: t("discard"),
      shortcut: "Escape",
      value: "discard",
      onSelect: ({ editor }) => {
        editor.getTransforms(AIPlugin).ai.undo();
        editor.getApi(AIChatPlugin).aiChat.hide();
      },
    },
    explain: {
      icon: <BadgeHelp className="size-4" />,
      label: t("explain"),
      value: "explain",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          prompt: {
            default: t("explainPrompt", { editor: "{editor}" }),
            selecting: t("explainSelecting"),
          },
        });
      },
    },
    fixSpelling: {
      icon: <Check />,
      label: t("fixSpelling"),
      value: "fixSpelling",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          prompt: t("fixSpellingPrompt"),
        });
      },
    },
    improveWriting: {
      icon: <Wand />,
      label: t("improveWriting"),
      value: "improveWriting",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          prompt: t("improveWritingPrompt"),
        });
      },
    },
    insertBelow: {
      icon: <ListEnd />,
      label: t("insertBelow"),
      value: "insertBelow",
      onSelect: ({ aiEditor, editor }) => {
        void editor.getTransforms(AIChatPlugin).aiChat.insertBelow(aiEditor);
      },
    },
    makeLonger: {
      icon: <ListPlus />,
      label: t("makeLonger"),
      value: "makeLonger",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          prompt: t("makeLongerPrompt"),
        });
      },
    },
    makeShorter: {
      icon: <ListMinus />,
      label: t("makeShorter"),
      value: "makeShorter",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          prompt: t("makeShorterPrompt"),
        });
      },
    },
    replace: {
      icon: <Check />,
      label: t("replace"),
      value: "replace",
      onSelect: ({ aiEditor, editor }) => {
        void editor
          .getTransforms(AIChatPlugin)
          .aiChat.replaceSelection(aiEditor);
      },
    },
    simplifyLanguage: {
      icon: <FeatherIcon />,
      label: t("simplifyLanguage"),
      value: "simplifyLanguage",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          prompt: t("simplifyLanguagePrompt"),
        });
      },
    },
    summarize: {
      icon: <Album className="size-4" />,
      label: t("summarize"),
      value: "summarize",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.submit({
          mode: "insert",
          prompt: {
            default: t("summarizePrompt", { editor: "{editor}" }),
            selecting: t("summarizeSelecting"),
          },
        });
      },
    },
    tryAgain: {
      icon: <CornerUpLeft />,
      label: t("tryAgain"),
      value: "tryAgain",
      onSelect: ({ editor }) => {
        void editor.getApi(AIChatPlugin).aiChat.reload();
      },
    },
  };

  const menuStateItems: Record<
    EditorChatState,
    {
      items: (typeof aiChatItems)[keyof typeof aiChatItems][];
      heading?: string;
    }[]
  > = {
    cursorCommand: [
      {
        items: [
          aiChatItems.continueWrite,
          aiChatItems.summarize,
          aiChatItems.explain,
        ],
      },
    ],
    cursorSuggestion: [
      {
        items: [aiChatItems.accept, aiChatItems.discard, aiChatItems.tryAgain],
      },
    ],
    selectionCommand: [
      {
        items: [
          aiChatItems.improveWriting,
          aiChatItems.makeLonger,
          aiChatItems.makeShorter,
          aiChatItems.fixSpelling,
          aiChatItems.simplifyLanguage,
        ],
      },
    ],
    selectionSuggestion: [
      {
        items: [
          aiChatItems.replace,
          aiChatItems.insertBelow,
          aiChatItems.discard,
          aiChatItems.tryAgain,
        ],
      },
    ],
  };

  const menuGroups = useMemo(() => {
    return menuStateItems[menuState] || [];
  }, [menuState]);

  useEffect(() => {
    if (
      menuGroups.length > 0 &&
      menuGroups[0] &&
      menuGroups[0].items.length > 0
    ) {
      const value = menuGroups[0].items[0]?.value;
      if (typeof value === "string") {
        setValue(value);
      }
    }
  }, [menuGroups, setValue]);

  return (
    <>
      {menuGroups.map((group, index) => (
        <CommandGroup key={index} heading={group.heading} data-l>
          {group.items.map((menuItem) => (
            <CommandItem
              key={menuItem.value}
              className="gap-2 [&_svg]:size-4 [&_svg]:text-muted-foreground"
              value={menuItem.value}
              onSelect={() => {
                menuItem.onSelect?.({
                  aiEditor: aiEditorRef.current!,
                  editor: editor,
                });
              }}
            >
              {menuItem.icon}
              <span>{menuItem.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      ))}
    </>
  );
};

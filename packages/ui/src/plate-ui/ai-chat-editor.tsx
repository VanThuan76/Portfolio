"use client";

const {
  PlateEditor,
  AIChatPlugin,
  useLastAssistantMessage,
} = require("@udecode/plate-ai/react");
const { Plate, useEditorPlugin } = require("@udecode/plate-common/react");

import React, { memo } from "react";
import { deserializeMd } from "@udecode/plate-markdown";

import { Editor } from "./editor";

export const AIChatEditor = memo(
  ({
    aiEditorRef,
  }: {
    aiEditorRef: React.MutableRefObject<typeof PlateEditor | null>;
  }) => {
    const { getOptions } = useEditorPlugin(AIChatPlugin);
    const lastAssistantMessage = useLastAssistantMessage();
    const content = lastAssistantMessage?.content ?? "";

    const aiEditor = React.useMemo(() => {
      const editor = getOptions().createAIEditor();

      const fragment = deserializeMd(editor, content);
      editor.children =
        fragment.length > 0 ? fragment : editor.api.create.value();

      return editor;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
      if (aiEditor && content) {
        aiEditorRef.current = aiEditor;

        setTimeout(() => {
          aiEditor.tf.setValue(deserializeMd(aiEditor, content));
        }, 0);
      }
    }, [aiEditor, aiEditorRef, content]);

    if (!content) return null;

    return (
      <Plate editor={aiEditor}>
        <Editor variant="aiChat" readOnly />
      </Plate>
    );
  },
);

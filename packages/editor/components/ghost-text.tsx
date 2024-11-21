"use client";

const { CopilotPluginConfig } = require("@udecode/plate-ai/react");

import React from "react";
import { useEditorPlugin, useElement } from "@udecode/plate-common/react";

export const GhostText = () => {
  const { useOption } = useEditorPlugin<typeof CopilotPluginConfig>({
    key: "copilot",
  });
  const element = useElement();

  const isSuggested = useOption("isSuggested", element.id as string);

  if (!isSuggested) return null;

  return <GhostTextContent />;
};

export function GhostTextContent() {
  const { useOption } = useEditorPlugin<typeof CopilotPluginConfig>({
    key: "copilot",
  });

  const suggestionText = useOption("suggestionText");

  return (
    <span className="text-muted-foreground" contentEditable={false}>
      {suggestionText && suggestionText}
    </span>
  );
}

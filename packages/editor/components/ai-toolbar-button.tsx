"use client";

const { AIChatPlugin } = require("@udecode/plate-ai/react");
const { useEditorPlugin } = require("@udecode/plate-common/react");

import React from "react";
import { withRef } from "@udecode/cn";

import { ToolbarButton } from "./toolbar";

export const AIToolbarButton = withRef<typeof ToolbarButton>(
  ({ children, ...rest }, ref) => {
    const { api } = useEditorPlugin(AIChatPlugin);

    return (
      <ToolbarButton
        ref={ref}
        {...rest}
        onClick={() => {
          api.aiChat.show();
        }}
      >
        {children}
      </ToolbarButton>
    );
  },
);

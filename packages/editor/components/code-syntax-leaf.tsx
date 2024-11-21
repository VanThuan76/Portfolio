"use client";

const { PlateLeaf } = require("@udecode/plate-common/react");

import React from "react";
import { withRef } from "@udecode/cn";
import { useCodeSyntaxLeaf } from "@udecode/plate-code-block/react";

// @ts-ignore
export const CodeSyntaxLeaf = withRef<typeof PlateLeaf>(
  ({ children, ...props }, ref) => {
    const { leaf } = props;

    const { tokenProps } = useCodeSyntaxLeaf({ leaf });

    return (
      <PlateLeaf ref={ref} {...props}>
        <span {...tokenProps}>{children}</span>
      </PlateLeaf>
    );
  },
);

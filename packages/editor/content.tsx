"use client";
const { Plate, PlateContent } = require("@udecode/plate-common/react");

import { useEffect, useMemo } from "react";

import { useMyEditor } from "./index";

type PlateShowContentProps = {
  content: any;
  className?: string;
};

const PlateShowContent = ({ content, className }: PlateShowContentProps) => {
  // Memoize editor to prevent recreation on every render
  const editor = useMyEditor(content, false);

  useEffect(() => {
    if (editor && content) {
      editor.tf.setValue(content);
    }
  }, [editor, content]);

  // Memoize the editor instance key based on content to prevent unnecessary re-renders
  const editorKey = useMemo(() => {
    try {
      return content ? JSON.stringify(content).slice(0, 100) : "default";
    } catch (error) {
      // Handle circular reference errors
      return content ? String(content).slice(0, 100) : "default";
    }
  }, [content]);

  return (
    <Plate key={editorKey} editor={editor} readOnly>
      <PlateContent className={className} />
    </Plate>
  );
};

export default PlateShowContent;

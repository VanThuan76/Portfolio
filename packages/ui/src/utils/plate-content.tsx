"use client";

const { Plate, PlateContent } = require("@udecode/plate-common/react");

import { useEffect } from "react";
import { useMyEditor } from "./plate-editor";

type PlateShowContentProps = {
  content: any;
  className?: string;
};

const PlateShowContent = ({ content, className }: PlateShowContentProps) => {
  const editor = useMyEditor(content, false);

  useEffect(() => {
    if (editor && content) {
      editor.tf.setValue(content);
    }
  }, [editor, content]);

  return (
    <Plate editor={editor} readOnly>
      <PlateContent className={className} />
    </Plate>
  );
};

export default PlateShowContent;

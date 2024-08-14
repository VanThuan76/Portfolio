"use client";
import { Plate } from "@udecode/plate";
import { PlateContent } from "@udecode/plate-common";

import { plugins } from "@shared/lib/plate";

interface Props {
  content: any;
}
const ContentBlog = ({ content }: Props) => {
  return (
    <Plate readOnly plugins={plugins} initialValue={content}>
      <PlateContent />
    </Plate>
  );
};

export default ContentBlog;

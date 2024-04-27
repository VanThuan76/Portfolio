"use client";
import { Plate } from "@udecode/plate";
import { plugins } from "@/lib/plate";
import { PlateContent } from "@udecode/plate-common";

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

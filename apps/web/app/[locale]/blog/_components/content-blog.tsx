"use client";

import PlateShowContent from "@ui/organisms/plate-show-content";

interface Props {
  content: any;
  className?: string;
}

const ContentBlog = ({ content, className }: Props) => {
  return (
    <div className={className}>
      <PlateShowContent content={content} />
    </div>
  );
};

export default ContentBlog;

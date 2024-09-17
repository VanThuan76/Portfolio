"use client";

import PlateShowContent from "@ui/organisms/plate-show-content";

interface Props {
    content: any;
}

const ContentBlog = ({ content }: Props) => {
    return <PlateShowContent content={content} />;
};

export default ContentBlog;

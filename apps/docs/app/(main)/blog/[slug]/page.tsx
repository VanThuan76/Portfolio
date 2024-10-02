"use client";
import { useEffect, useState } from "react";
import { useGetArticleBlog } from "@server/_actions/blog_actions";
import { useAppSelector } from "@store/index";

import ClientSlugBlog from "../@components/client-slug-blog";

export default function Page({ params }: { params: { slug: string } }) {
  const blogs = useAppSelector((state) => state.app.blogs);
  const [article, setArticle] = useState<any>(null);

  const {
    mutate: fetchArticle,
    data: articleData,
    isSuccess,
  } = useGetArticleBlog();

  useEffect(() => {
    fetchArticle(params.slug);
  }, [params.slug]);

  useEffect(() => {
    if (isSuccess && articleData) {
      setArticle(articleData?.data);
    }
  }, [isSuccess, articleData]);

  if (!article) return <></>;

  return (
    <ClientSlugBlog
      params={params.slug}
      user={null}
      blogs={blogs}
      blog={article.blog} // Đảm bảo dữ liệu đúng cấu trúc
      comments={article.comments} // Đảm bảo dữ liệu đúng cấu trúc
    />
  );
}

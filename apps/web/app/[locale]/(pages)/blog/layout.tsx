import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = `https://www.austinvu.tech/${locale}/blog`;

  return {
    title: {
      default: "Blog",
      template: `%s | Blog`,
    },
    description: "Explore a variety of articles and insights on our blog.",
    openGraph: {
      title: "Blog",
      description: "Discover the latest articles, tips, and insights.",
      url: baseUrl,
      images: ["https://www.austinvu.tech/banner-light.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog",
      description: "Discover the latest articles, tips, and insights.",
      images: ["https://www.austinvu.tech/banner-light.png"],
      site: "@yourTwitterHandle",
    },
    keywords: "blog, articles, insights, tips, Austin Vu",
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

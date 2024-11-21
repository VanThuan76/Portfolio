import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = `https://www.austinvu.tech/${locale}/course`;

  return {
    title: {
      default: "Course",
      template: `%s | Course`,
    },
    description: "Explore a variety of articles and insights on our course.",
    openGraph: {
      title: "Blog",
      description: "Discover the latest articles, tips, and insights.",
      url: baseUrl,
      images: ["https://www.austinvu.tech/banner-light.png"],
    },
  };
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

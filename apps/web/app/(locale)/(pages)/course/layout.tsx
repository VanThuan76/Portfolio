import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
    const headerNext = await headers();
    const locale = headerNext.get("x-my-locale") || "en";


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

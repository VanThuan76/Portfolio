import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const locale = params.locale;

    const baseUrl = `https://www.austinvu.tech/${locale}/blog`;

    return {
        title: {
            default: "Blog",
            template: `%s | Blog`,
        },
        description: "Explore a variety of articles and insights on our blog.",
        openGraph: {
            title: 'Blog',
            description: "Discover the latest articles, tips, and insights.",
            url: baseUrl,
            images: [
                'https://www.austinvu.tech/banner-light.png',
            ],
        },
    };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}

import { Metadata } from "next";
import { headers } from "next/headers";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
    const headerNext = await headers();
    const locale = headerNext.get("x-my-locale") || "en";

    const tMetadataBlog = await getTranslations('metadata.blog');
    const baseUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/blog`;

    return {
        title: {
            default: `${tMetadataBlog('blogTitle')}`,
            template: `%s | ${tMetadataBlog('blogTitle')}`,
        },
        description: tMetadataBlog('blogDescription'),
        openGraph: {
            title: tMetadataBlog('openGraphTitle'),
            description: tMetadataBlog('openGraphDescription'),
            url: baseUrl,
            images: [`${process.env.NEXT_PUBLIC_WEB_URL}/banner-light.png`],
        },
        twitter: {
            card: "summary_large_image",
            title: tMetadataBlog('openGraphTitle'),
            description: tMetadataBlog('twitterDescription'),
            images: [`${process.env.NEXT_PUBLIC_WEB_URL}/banner-light.png`],
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

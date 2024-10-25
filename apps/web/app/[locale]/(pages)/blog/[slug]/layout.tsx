import { Metadata } from "next";
import { getBlogBySlug } from "@shared/query/actions/blog-actions";
import { getSupabaseBrowserClient } from "@shared/utils/supabase/client";

export async function generateMetadata(
    { params }: { params: { locale: string; slug: string } }
): Promise<Metadata> {
    const locale = params.locale;
    const slug = params.slug;

    const supabase = getSupabaseBrowserClient();

    let baseUrl;
    let title;
    let description;
    let article;

    const response = await getBlogBySlug(supabase, slug, locale);
    article = response.status === 200 ? response.data : null;

    if (article) {
        baseUrl = `https://www.austinvu.tech/${locale}/blog/${slug}`;
        title = article.title;
        description = article.description || "Read this blog post to learn more.";
    } else {
        baseUrl = `https://www.austinvu.tech/${locale}/blog`;
        title = "Blog Post Not Found";
        description = "The blog post you are looking for does not exist.";
    }

    return {
        title: {
            default: title,
            template: `%s | Blog | Austin Vu`,
        },
        description: description,
        openGraph: {
            title: title,
            description: description,
            url: baseUrl,
            images: [
                'https://www.austinvu.tech/banner-light.png',
            ],
        },
    };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}

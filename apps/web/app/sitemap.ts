import {
    getBlogCategories,
    getBlogs,
} from "@shared/query/actions/blog-actions";
import { getSupabaseBrowserClient } from "@shared/utils/supabase/client";

export default async function sitemap() {
    const supabase = getSupabaseBrowserClient();
    const baseUrl = "https://www.austinvu.tech";

    const locales = ["en", "vi", "ja"];

    const sitemapUrls: { url: string; lastModified: Date }[] = [];
    for (const locale of locales) {
        const { data: posts } = await getBlogs(supabase, locale);
        if (!posts) throw new Error("Error fetching posts");

        const postsUrls = posts.map((post) => ({
            url: `${baseUrl}/blog/${locale}/${post.slug}`,
            lastModified: new Date(),
        }));

        const { data: categories } = await getBlogCategories(supabase, locale);
        if (!categories) throw new Error("Error fetching categories");

        const categoriesUrls = categories.map((category) => ({
            url: `${baseUrl}/${locale}/categories/${category.slug}`,
            lastModified: new Date(),
        }));

        sitemapUrls.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
        });
        sitemapUrls.push(...postsUrls, ...categoriesUrls);
    }

    return sitemapUrls;
}

import { getArticleBlog, getBlog } from "@server/actions/blog";
import { currentProfile } from "@server/actions/auth";

import FadeWrapper from "@ui/molecules/frame/fade-wrapper";

import ClientSlugBlog from "../@components/client-slug-blog";

export default async function Page({ params }: { params: { slug: string } }) {
    const article = await getArticleBlog(params.slug);
    const user = await currentProfile();
    const blogs = await getBlog();

    if (!article) return <></>;

    const { blog, comments } = article;

    return (
        <FadeWrapper className="relative md:bg-[#F6F6F6] dark:bg-[#030712] rounded-none md:rounded-lg border-none shadow-none md:shadow-lg grid w-full h-full overflow-hidden grid-cols-1 px-0 pt-6 md:p-0 md:grid-cols-5 overflow-y-auto md:overflow-y-hidden">
            <ClientSlugBlog params={params.slug} blog={blog} blogs={blogs} comments={comments} user={user} />
        </FadeWrapper>
    );
}

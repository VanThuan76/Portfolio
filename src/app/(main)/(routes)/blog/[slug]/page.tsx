import { LoaderImage } from "@/components/custom/loader-image";
import { readBlog } from "@/server/actions/blog";
import { IBaseResponse } from "@/server/data/types/base";
import { IBlog } from "@/server/data/types/blog";
import { axiosInstance } from "@/utils/axios";
import { CardBlog } from "../@components/card-blog";
import ContentBlog from "../@components/content-blog";

export default async function Page({ params }: { params: { slug: string } }) {
  const { data: blog } = await axiosInstance.get<IBaseResponse<IBlog>>(
    `/api/blog?slug=${params.slug}`,
  );
  const blogs = await readBlog();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-between items-start px-4 mx-auto h-screen gap-10 overflow-auto">
      <div className="w-full h-auto relative col-span-1 md:col-span-2">
        <div className="sticky top-0 z-40 backdrop-blur-sm bg-white/30 mb-5 p-2">
          <h1 className="text-3xl font-bold dark:text-gray-200">
            {blog.title}
          </h1>
          <p className="text-sm dark:text-gray-400">
            {new Date(blog.created_at).toDateString()}
          </p>
        </div>
        <LoaderImage
          isLoader={false}
          src={blog.image_url}
          alt={blog.title}
          width={500}
          height={400}
          className="object-cover object-center rounded-md border-[0.5px] border-zinc-600"
        />
        <ContentBlog content={JSON.parse(blog.content as string)} />
      </div>
      <CardBlog className="sticky top-0 z-30 col-span-1 self-start" items={blogs && blogs.filter(blog => blog.slug !== params.slug)} />
    </div>
  );
}

import { readBlog } from "@/server/actions/blog";
import { BlogTable } from "@/app/admin/components/blog/blog-table";
import BreadCrumb from "@/app/admin/components/breadcrumb";

const breadcrumbItems = [{ title: "Blog", link: "/admin/blog" }];
export default async function Page() {
  let blogs = await readBlog();
  if (!blogs?.length) {
    blogs = [];
  }
  return (
    <div className="relative w-full min-h-[500px]">
      <BreadCrumb items={breadcrumbItems} />
      <BlogTable data={blogs} />
    </div>
  );
}

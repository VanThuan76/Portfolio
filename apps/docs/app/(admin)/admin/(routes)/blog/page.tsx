// import { getBlog } from "@server/actions/blog";

import { BlogTable } from "../../@components/blog/blog-table";
import BreadCrumb from "../../@components/breadcrumb";

const breadcrumbItems = [{ title: "Blog", link: "/admin/blog" }];
export default async function Page() {
  //   let blogs = await getBlog();
  //   if (!blogs?.length) {
  //     blogs = [];
  //   }
  return (
    <div className="relative w-full min-h-[500px]">
      <BreadCrumb items={breadcrumbItems} />
      {/* <BlogTable data={blogs} /> */}
    </div>
  );
}

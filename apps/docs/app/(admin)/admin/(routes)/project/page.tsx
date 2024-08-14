import { getProject } from "@server/actions/project";

import { ProjectTable } from "../../@components/project/project-table";
import BreadCrumb from "../../@components/breadcrumb";

const breadcrumbItems = [{ title: "Project", link: "/admin/project" }];
export default async function Page() {
  let project = await getProject();
  if (!project?.length) {
    project = [];
  }
  return (
    <div className="relative w-full min-h-[500px]">
      <BreadCrumb items={breadcrumbItems} />
      <ProjectTable data={project} />
    </div>
  );
}

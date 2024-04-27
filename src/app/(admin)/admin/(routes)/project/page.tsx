import { readProject } from "@/server/actions/project";
import BreadCrumb from "@/app/(admin)/admin/@components/breadcrumb";
import { ProjectTable } from "@/app/(admin)/admin/@components/project/project-table";

const breadcrumbItems = [{ title: "Project", link: "/admin/project" }];
export default async function Page() {
  let { data: project } = await readProject();
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

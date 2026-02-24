import { headers } from "next/headers";

import { useSupabaseServer } from "@repo/supabase/utils/server";
import { getTags, getProjects } from "@repo/supabase/queries";

import { ProjectContent } from "./components/project-content";

export default async function Page() {
  const headerNext = await headers();
  const locale = headerNext.get("x-my-locale") || "en";

  const supabase = await useSupabaseServer();

  const [tags, projects] = await Promise.all([
    getTags(supabase).then((res) => res.data || []),
    getProjects(supabase, locale).then((res) => res.data || []),
  ]);

  return <ProjectContent projects={projects} tags={tags} />;
}

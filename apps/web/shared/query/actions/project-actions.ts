import { cache } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@shared/utils/supabase/types";

import { IBaseResponse } from "@shared/query/types/base";
import { IProject } from "@shared/query/types/project";
import { createResponse } from "@shared/query/index";

export const getProjects = cache(
  async (
    supabase: SupabaseClient<Database>,
    locale: string,
  ): Promise<IBaseResponse<IProject[] | []>> => {
    const { data: projects, error: projectError } = await supabase
      .from("project")
      .select("*")
      .eq("language_code", locale)
      .order("finished_date", { ascending: true });

    if (projectError) createResponse(500, [], "Failed to fetch projects");

    const projectIds = projects!.map((project) => project.id);

    const { data: projectTagsData, error: projectTagsDataError } =
      await supabase
        .from("project_tag")
        .select("*")
        .in("project_id", projectIds);

    if (projectTagsDataError)
      createResponse(500, [], "Failed to fetch project tags");

    const { data: projectImagesData, error: projectImagessDataError } =
      await supabase
        .from("project_image")
        .select("*")
        .in("project_id", projectIds);

    if (projectImagessDataError)
      createResponse(500, [], "Failed to fetch project images");

    const result = projects!.map((project) => ({
      ...project,
      tags: projectTagsData!.filter((tag) => tag.project_id === project.id),
      images: projectImagesData!.filter(
        (image) => image.project_id === project.id,
      ),
    }));

    return createResponse(200, result || [], "Successfully fetched projects");
  },
);

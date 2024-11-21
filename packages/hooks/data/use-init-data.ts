import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { toast } from "../ui/use-toast";

import {
  useAppDispatch,
  setTags,
  setBlogs,
  setBlogCategories,
  setProjects,
  setInformation,
} from "@repo/management-system";

import { getTags } from "@repo/supabase/queries/actions/config-actions";
import { getProjects } from "@repo/supabase/queries/actions/project-actions";
import { getInformations } from "@repo/supabase/queries/actions/information-actions";
import {
  getBlogCategories,
  getBlogs,
} from "@repo/supabase/queries/actions/blog/blog-actions";
import { useSupabaseBrowser } from "@repo/supabase/utils/client";

export const useInitData = () => {
  const supabase = useSupabaseBrowser();
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const [isTasksCompleted, setIsTasksCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const [
        tagsResponse,
        blogsResponse,
        categoriesResponse,
        projectsResponse,
        infoResponse,
      ] = await Promise.all([
        getTags(supabase),
        getBlogs(supabase, locale),
        getBlogCategories(supabase, locale),
        getProjects(supabase, locale),
        getInformations(supabase, locale),
      ]);
      if (tagsResponse.status === 200) dispatch(setTags(tagsResponse.data));
      if (blogsResponse.status === 200) dispatch(setBlogs(blogsResponse.data));
      if (categoriesResponse.status === 200)
        dispatch(setBlogCategories(categoriesResponse.data));
      if (projectsResponse.status === 200)
        dispatch(setProjects(projectsResponse.data));
      if (infoResponse.status === 200)
        dispatch(setInformation(infoResponse.data));

      setIsTasksCompleted(true);
    } catch (error) {
      console.error("Fetch data error:", error);
      setIsError(true);
      toast({
        variant: "destructive",
        title: "Failed to get information from web",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    isTasksCompleted,
    refetch: fetchData,
  };
};

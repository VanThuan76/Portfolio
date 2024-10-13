import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { toast } from "./use-toast";

import { useAppDispatch } from "@store/index";
import {
  setTags,
  setBlogs,
  setBlogCategories,
  setProjects,
  setInformation,
} from "@store/app-slice";

import { getTags } from "@shared/query/actions/config-actions";
import {
  getBlogCategories,
  getBlogs,
} from "@shared/query/actions/blog-actions";
import { getProjects } from "@shared/query/actions/project-actions";
import { getInformations } from "@shared/query/actions/information-actions";

import useSupabaseBrowser from "@shared/utils/supabase/client";

const useInitData = () => {
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

export default useInitData;

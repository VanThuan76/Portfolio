import { useState, useEffect } from "react";
import { toast } from "./use-toast";

import {
  useGetBlog,
  useGetBlogCategory,
} from "@shared/query/actions/blog-actions";
import { useGetProject } from "@shared/query/actions/project-actions";
import { useGetTag } from "@shared/query/actions/tag-actions";
import { useGetInformationWork } from "@shared/query/actions/information-work-actions";

const useInitData = () => {
  const [isTasksCompleted, setIsTasksCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const actions = [
    useGetTag(),
    useGetBlog(),
    useGetBlogCategory(),
    useGetProject(),
    useGetInformationWork(),
  ];

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const tasks = actions.map((action) => action.mutateAsync({}));
      await Promise.allSettled(tasks);
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

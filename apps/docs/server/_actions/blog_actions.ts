import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { axiosInstance } from "@api/axios";
import { useAppDispatch } from "@store/index";
import { queryClient } from "@shared/lib/providers/react-query";

import { IBaseResponse } from "@server/data/types/base";
import { IArticleBlogResult, IBlog } from "@server/data/types/blog";

import { setBlogCategories, setBlogs } from "@store/app-slice";

export const useGetBlogCategory: () => UseMutationResult<
  IBaseResponse<any[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<any[]>, Error>({
    mutationFn: () =>
      axiosInstance.get<IBaseResponse<any[]>>("/api/blog/blog-category"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setBlogCategories(data.data));

      queryClient.invalidateQueries({
        queryKey: ["BLOG_CATEGORY", "GET_ALL"],
      });
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });
};

export const useGetBlog: () => UseMutationResult<
  IBaseResponse<IBlog[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<IBlog[]>, Error>({
    mutationFn: () => axiosInstance.get<IBaseResponse<IBlog[]>>("/api/blog"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setBlogs(data.data));

      queryClient.invalidateQueries({
        queryKey: ["BLOG", "GET_ALL"],
      });
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });
};

export const useGetArticleBlog = (): UseMutationResult<
  IBaseResponse<IArticleBlogResult>,
  Error,
  string
> => {
  return useMutation<IBaseResponse<IArticleBlogResult>, Error, string>({
    mutationFn: (slug: string) =>
      axiosInstance.get<IBaseResponse<IArticleBlogResult>>(`/api/blog/${slug}`),
    onSuccess: async (data, variables) => {
      if (!data.data) return;
      queryClient.invalidateQueries({
        queryKey: ["BLOG", "GET_DETAIL", variables],
      });
      return data.data;
    },
    onError(error) {
      console.log(error);
    },
  });
};

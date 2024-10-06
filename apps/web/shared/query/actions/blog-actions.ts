import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { IBaseResponse } from "@shared/query/types/base";
import { IArticle, IBlog } from "@shared/query/types/blog";

import { setBlogCategories, setBlogs } from "@store/app-slice";
import { useAppDispatch } from "@store/index";
import { axiosInstance } from "@shared/utils/axios";
import { queryClient } from "@providers/react-query";

export const useGetBlogCategory: () => UseMutationResult<
  IBaseResponse<any[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<any[]>, Error>({
    mutationFn: () =>
      axiosInstance.get<IBaseResponse<any[]>>("/blogs/categories"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setBlogCategories(data.data));

      queryClient.invalidateQueries({
        queryKey: ["BLOG_CATEGORIES", "GET_ALL"],
      });
    },
    onError(error) {
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
    mutationFn: () => axiosInstance.get<IBaseResponse<IBlog[]>>("/blogs"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setBlogs(data.data));

      queryClient.invalidateQueries({
        queryKey: ["BLOGS", "GET_ALL"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });
};

export const useGetArticleBlog = (): UseMutationResult<
  IBaseResponse<IArticle>,
  Error,
  string
> => {
  return useMutation<IBaseResponse<IArticle>, Error, string>({
    mutationFn: (slug: string) =>
      axiosInstance.get<IBaseResponse<IArticle>>(`/blogs/${slug}`),
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

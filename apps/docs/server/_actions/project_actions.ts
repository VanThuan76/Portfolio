import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { axiosInstance } from "@api/axios";
import { useAppDispatch } from "@store/index";
import { queryClient } from "@shared/lib/providers/react-query";

import { IBaseResponse } from "@server/data/types/base";
import { IProject } from "@server/data/types/project";

import { setProjects } from "@store/app-slice";

export const useGetProject: () => UseMutationResult<
  IBaseResponse<IProject[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<IProject[]>, Error>({
    mutationFn: () =>
      axiosInstance.get<IBaseResponse<IProject[]>>("/api/project"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setProjects(data.data));

      queryClient.invalidateQueries({
        queryKey: ["PROJECT", "GET_ALL"],
      });
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });
};

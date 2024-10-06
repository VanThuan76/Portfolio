import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { IBaseResponse } from "@shared/query/types/base";
import { IProject } from "@shared/query/types/project";

import { setProjects } from "@store/app-slice";
import { useAppDispatch } from "@store/index";
import { axiosInstance } from "@shared/utils/axios";
import { queryClient } from "@providers/react-query";

export const useGetProject: () => UseMutationResult<
  IBaseResponse<IProject[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<IProject[]>, Error>({
    mutationFn: () => axiosInstance.get<IBaseResponse<IProject[]>>("/projects"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setProjects(data.data));

      queryClient.invalidateQueries({
        queryKey: ["PROJECTS", "GET_ALL"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });
};

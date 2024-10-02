import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { axiosInstance } from "@api/axios";
import { useAppDispatch } from "@store/index";
import { queryClient } from "@shared/lib/providers/react-query";

import { IBaseResponse } from "@server/data/types/base";
import { ITag } from "@server/data/types/tag";

import { setTags } from "@store/app-slice";

export const useGetTag: () => UseMutationResult<
  IBaseResponse<ITag[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<ITag[]>, Error>({
    mutationFn: () => axiosInstance.get<IBaseResponse<ITag[]>>("/api/tag"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setTags(data.data));

      queryClient.invalidateQueries({
        queryKey: ["TAG", "GET_ALL"],
      });
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });
};

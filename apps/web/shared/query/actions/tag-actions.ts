import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { IBaseResponse } from "@shared/query/types/base";
import { ITag } from "@shared/query/types/tag";

import { setTags } from "@store/app-slice";
import { useAppDispatch } from "@store/index";
import { axiosInstance } from "@shared/utils/axios";
import { queryClient } from "@providers/react-query";

export const useGetTag: () => UseMutationResult<
  IBaseResponse<ITag[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<ITag[]>, Error>({
    mutationFn: () => axiosInstance.get<IBaseResponse<ITag[]>>("/tags"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setTags(data.data));

      queryClient.invalidateQueries({
        queryKey: ["TAGS", "GET_ALL"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });
};

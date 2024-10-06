import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { IBaseResponse } from "@shared/query/types/base";
import { IInformationWork } from "@shared/query/types/information-work";

import { setInformationWorks } from "@store/app-slice";
import { useAppDispatch } from "@store/index";
import { axiosInstance } from "@shared/utils/axios";
import { queryClient } from "@providers/react-query";

export const useGetInformationWork: () => UseMutationResult<
  IBaseResponse<IInformationWork[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<IInformationWork[]>, Error>({
    mutationFn: () =>
      axiosInstance.get<IBaseResponse<IInformationWork[]>>("/information-work"),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setInformationWorks(data.data));

      queryClient.invalidateQueries({
        queryKey: ["INFORMATION_WORK", "GET_ALL"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });
};

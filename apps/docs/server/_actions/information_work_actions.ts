import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { axiosInstance } from "@api/axios";
import { useAppDispatch } from "@store/index";
import { queryClient } from "@shared/lib/providers/react-query";

import { IBaseResponse } from "@server/data/types/base";
import { IInformationWork } from "@server/data/types/information-work";

import { setInformationWorks } from "@store/app-slice";

export const useGetInformationWork: () => UseMutationResult<
  IBaseResponse<IInformationWork[]>,
  Error,
  any
> = () => {
  const dispatch = useAppDispatch();

  return useMutation<IBaseResponse<IInformationWork[]>, Error>({
    mutationFn: () =>
      axiosInstance.get<IBaseResponse<IInformationWork[]>>(
        "/api/information-work",
      ),
    onSuccess: async (data) => {
      if (!data.data) return;

      dispatch(setInformationWorks(data.data));

      queryClient.invalidateQueries({
        queryKey: ["INFORMATION_WORK", "GET_ALL"],
      });
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });
};

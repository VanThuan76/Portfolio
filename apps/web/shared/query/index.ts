import { IBaseResponse } from "./types/base";

export function createResponse<T>(
  status: number,
  data: T,
  message: string,
): IBaseResponse<T> {
  return {
    status,
    data,
    message,
  };
}

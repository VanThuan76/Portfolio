export interface IBaseResponse<T> {
  status: number;
  data: T;
  message: string;
}

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

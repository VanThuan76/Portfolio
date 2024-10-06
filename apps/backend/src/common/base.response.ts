export interface BaseResponse<T> {
  status: number;
  data: T;
  message: string;
}

export function createBaseResponse<T>(
  status: number,
  data: T,
  message: string,
): BaseResponse<T> {
  return { status, data, message };
}

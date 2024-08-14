export interface IBaseResponse<T> {
  error: null;
  data: T;
  count: null;
  status: number;
  statusText: string;
}

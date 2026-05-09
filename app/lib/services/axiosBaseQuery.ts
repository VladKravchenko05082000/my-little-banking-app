import axios, { AxiosError } from "axios";
import type { Method } from "axios";

interface BaseQueryArgs {
  url: string;
  method?: Method;
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

interface BaseQueryError {
  status: number | undefined;
  data: unknown;
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

export const axiosBaseQuery =
  () =>
  async ({
    url,
    method = "GET",
    data,
    params,
    headers,
  }: BaseQueryArgs): Promise<
    { data: unknown; error?: never } | { data?: never; error: BaseQueryError }
  > => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (err) {
      const axiosError = err as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data ?? axiosError.message,
        },
      };
    }
  };

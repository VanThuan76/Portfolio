"use client";

import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const defaultQueryOptions = {
  queries: {
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: false,
    retry: 1,
  },
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
});

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

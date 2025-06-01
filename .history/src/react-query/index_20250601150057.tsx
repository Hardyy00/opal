import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const ReactQueryProvider = () => {
  return <QueryClientProvider></QueryClientProvider>;
};

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Provider = ({ children }: { children: React.ReactNode }) => {
  //React에서 화면에 렌더링할 수 있는 모든 값의 타입

  const queryClient = new QueryClient();
  return (
    // 하위 컴포넌트에서 useQuery, useMutation 등을 사용할 수 있도록 Provider로 감싸줌
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;

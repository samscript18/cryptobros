'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
};

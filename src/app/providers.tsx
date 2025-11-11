'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, type ThemeProviderProps } from 'next-themes';
import { useState } from 'react';

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}

import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import BaseLayout from '@/layouts/BaseLayout';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          fallback={
            <BaseLayout>
              <div className="text-center mt-10 font-semibold">
                Bir şeyler ters gitti... :/
              </div>
            </BaseLayout>
          }
        >
          <Component {...pageProps} />
        </ErrorBoundary>
      </QueryClientProvider>
    </UserProvider>
  );
}

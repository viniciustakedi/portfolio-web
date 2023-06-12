import { useEffect, useRef } from 'react';
import { SnackbarProvider } from 'notistack'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app'
import { updateVisitsOnWebsite } from '@/services/patch';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  useEffect(() => {
    updateVisitsOnWebsite();
  }, [])

  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

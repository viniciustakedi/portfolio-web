import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react';
import { SnackbarProvider } from 'notistack'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { updateVisitsOnWebsite } from '@/services/patch';
import { Provider } from 'jotai';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  useEffect(() => {
    updateVisitsOnWebsite();
  }, [])

  return (
    // Provider snackbar
    // Provider react query
    // Hydrate react query
    // Provider Jotai
    <SnackbarProvider autoHideDuration={5000}> 
      <QueryClientProvider client={queryClient.current}> 
        <Hydrate state={pageProps.dehydratedState}>
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

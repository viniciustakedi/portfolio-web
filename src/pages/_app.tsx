import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react';
import { MaterialDesignContent, SnackbarProvider } from 'notistack'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { updateVisitsOnWebsite } from '@/services/patch';
import { Provider } from 'jotai';
import { styled } from '@mui/system';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  useEffect(() => {
    updateVisitsOnWebsite();
  }, [])

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: '#376E37',
      borderRadius: 16,
      fontSize: 16,
      fontWeight: 500,
      padding: 12,
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: '#B71C1C',
      borderRadius: 16,
      fontSize: 16,
      fontWeight: 500,
      padding: 12,
    },
    '&.notistack-MuiContent-warning': {
      backgroundColor: '#F2D602',
      borderRadius: 16,
      fontSize: 16,
      fontWeight: 500,
      padding: 12,
    },
  }));

  return (
    // Provider snackbar
    // Provider react query
    // Hydrate react query
    // Provider Jotai
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
      autoHideDuration={5000}
    >
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

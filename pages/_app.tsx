import '@/styles/globals.css';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { global } from '@/styles/Global';
import ReactQueryProvider from '@/components/react-query/ReactQueryProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

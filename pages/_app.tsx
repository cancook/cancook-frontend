import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { global } from '@/styles/Global';
import ReactQueryProvider from '@/components/react-query/ReactQueryProvider';
import Layout from '@/components/layout/Layout';
// Swiper
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global(theme)} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

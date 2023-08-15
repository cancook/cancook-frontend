import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { global } from '@/styles/Global';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import Layout from '@/components/layout/Layout';
// Swiper
import 'swiper/css';
import Modal from '@/components/common/Modal';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // header에 검색 기능이 있는 route들
  const SEARCHABLE_HEADER_PATH = ['/result'];

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global(theme)} />
        <Modal />
        <Layout searchable={SEARCHABLE_HEADER_PATH.includes(router.route)}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

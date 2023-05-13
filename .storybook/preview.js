import { Global, ThemeProvider } from '@emotion/react';
import { global } from '@/styles/Global';
import theme from '@/styles/theme';
import 'swiper/css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#151517'
        // TODO: 색상 코드를 상수로 빼면 해당 색상 hex코드도 상수로 사용하기
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Story />
      </ThemeProvider>
    </>
  )
];

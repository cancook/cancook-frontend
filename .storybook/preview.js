import { Global } from '@emotion/react';
import { global } from '@/styles/Global';

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
      <Global styles={global} />
      <Story />
    </>
  )
];

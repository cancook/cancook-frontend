import { Theme, css } from '@emotion/react';

export const colors = {
  orange: {
    50: '#FFF3EF',
    100: '#FFE1D6',
    200: '#FABDA5',
    300: '#FA9269',
    400: '#FF6937',
    500: '#C14F29',
    600: '#9A3F21',
    700: '#672A16'
  },
  red: {
    50: '#FFEFED',
    100: '#FED7D2',
    200: '#F1998E',
    300: '#E85C4A',
    400: '#E11900',
    500: '#AB1300',
    600: '#870F00',
    700: '#5A0A00'
  },
  yellow: {
    50: '#FFFAF0',
    100: '#FFF2D9',
    200: '#FFE3AC',
    300: '#FFCF70',
    400: '#FFC043',
    500: '#BC8B2C',
    600: '#996F00',
    700: '#674D1B'
  },
  gray: {
    100: '#E8EAED',
    200: '#BFC1C8',
    300: '#97969E',
    400: '#62626C',
    500: '#4D4D58',
    600: '#383840',
    700: '#2C2C34',
    800: '#232328',
    900: '#151517'
  },
  white: {
    0: '#FFFFFF',
    50: '#FFFFFF80',
    70: '#FFFFFFB2'
  },
  black: {
    0: '#000000',
    30: '#0000004c',
    60: '#00000099'
  }
};

export const font = {
  headLine: {
    lg: css`
      font-size: 1.875rem;
      line-height: 2.8125rem;
      letter-spacing: -0.0375rem;
      font-weight: 700;
    `,
    md: css`
      font-size: 1.75rem;
      line-height: 2.625rem;
      letter-spacing: -0.0375rem;
      font-weight: 700;
    `,
    sm: css`
      font-size: 1.625rem;
      line-height: 2.4375rem;
      letter-spacing: -0.0375rem;
      font-weight: 700;
    `
  },
  title: {
    lg: css`
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: -0.0375rem;
      font-weight: 700;
    `,
    md: css`
      font-size: 1.25rem;
      line-height: 1.75rem;
      letter-spacing: -0.0375rem;
      font-weight: 700;
    `,
    sm: css`
      font-size: 1.125rem;
      line-height: 1.75rem;
      letter-spacing: -0.0375rem;
      font-weight: 700;
    `
  },
  label: {
    lg: css`
      font-size: 1rem;
      line-height: 1.375rem;
      letter-spacing: -0.0375rem;
      font-weight: 600;
    `,
    md: css`
      font-size: 0.875rem;
      line-height: 1.25rem;
      letter-spacing: -0.0375rem;
      font-weight: 600;
    `,
    sm: css`
      font-size: 0.75rem;
      line-height: 1.125rem;
      letter-spacing: -0.0375rem;
      font-weight: 600;
    `
  },
  body: {
    lg: css`
      font-size: 1rem;
      line-height: 1.75rem;
      letter-spacing: -0.0375rem;
      font-weight: 400;
    `,
    md: css`
      font-size: 0.875rem;
      line-height: 1.5rem;
      letter-spacing: -0.0375rem;
      font-weight: 400;
    `,
    sm: css`
      font-size: 0.75rem;
      line-height: 1.3125rem;
      letter-spacing: -0.0375rem;
      font-weight: 400;
    `
  }
};

export const screen = {
  /** All Devices  */
  s: '@media only screen and (max-width: 767px)',

  /* Medium devices (landscape tablets, 768px and up) */
  m: '@media only screen and (min-width: 768px)',

  /* Large devices (laptops/desktops, 1440px and up) */
  l: '@media only screen and (min-width: 1440px)',

  phone: '@media only screen and (max-width: 767px)',
  tablet: '@media only screen and (min-width: 768px) and (max-width: 1439px)',
  monitor: '@media only screen and (min-width: 1440px)'
};

const theme: Theme = {
  colors,
  screen,
  font
};

export default theme;

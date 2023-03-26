import { Theme } from '@emotion/react';

const colors = {
  primary: '#000',
  secondary: '#fff',
  white: '#fff',
  black: '#000'
};

// const colors = {}
const screen = {
  /* Extra small devices (phones, 600px and down) */
  xs: '@media only screen and (max-width: 600px)',

  /* Small devices (portrait tablets and large phones, 600px and up) */
  s: '@media only screen and (min-width: 600px)',

  /* Medium devices (landscape tablets, 768px and up) */
  m: '@media only screen and (min-width: 768px)',

  /* Large devices (laptops/desktops, 992px and up) */
  l: '@media only screen and (min-width: 992px)',

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  xl: '@media only screen and (min-width: 1200px)',

  /** All Devices  */
  phone: '@media only screen and (max-width: 768px)',
  monitor: '@media only screen and (min-width: 768px)'
};

const theme: Theme = {
  colors,
  screen
};

export default theme;

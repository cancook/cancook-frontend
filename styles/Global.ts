import { Theme, css } from '@emotion/react';

export const global = (theme: Theme) => css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    box-sizing: border-box;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  body {
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.gray[900]};
    /* background-color: #fcf4e4; */
  }

  /* 스크롤바 설정 */
  /* Webkit Browsers (Safari, Chrome) */
  ::-webkit-scrollbar {
    width: 0.625rem;
    height: 100%;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1a1a1a;
    border-radius: calc(0.75rem / 2);
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }
`;

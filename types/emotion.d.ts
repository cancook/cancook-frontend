import '@emotion/react';
import { colors, screen, font } from '@/styles/theme';
declare module '@emotion/react' {
  export interface Theme {
    screen: typeof screen;
    colors: typeof colors;
    font: typeof font;
  }
}

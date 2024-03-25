import { OtherPropsThemeModel } from './ThemeModel';

const spacing = [0, 2, 4, 8, 10, 12, 14, 18, 24, 48] as number[];
const spacingObj = spacing.reduce((acc, s) => {
 acc[`${s}`] = s;
 acc[`-${s}`] = -s;
 return acc;
}, {});

export const commonTheme = {
 fonts: {
  body: "'Signika', sans-serif",
  heading: 'Signika',
  monospace: 'Menlo, monospace'
 },
 fontSizes: {
  '12': 12,
  '14': 14,
  '16': 16,
  '18': 18,
  '96': 96,
  'x-small': 12,
  small: 14,
  default: 16,
  text: 16
 },
 fontWeights: {
  light: 300,
  regular: 400,
  semi: 600,
  bold: 700
 },
 lineHeights: {
  body: 1.5,
  heading: 1.25
 },
 space: {
  ...spacingObj,
  small: spacingObj['12'],
  '-small': spacingObj['-12'],
  large: spacingObj['24'],
  '-large': spacingObj['-24']
 },
 sizes: {
  ...spacingObj,
  small: spacingObj['28'],
  '-small': spacingObj['-28'],
  large: spacingObj['40'],
  '-large': spacingObj['-40']
 },
 borderWidths: {
  'border-default': 1,
  'border-big': 2
 },

 styles: {
  root: {
   fontFamily: 'body',
   fontWeight: 'regular',
   lineHeight: 'body'
  }
 }
} as OtherPropsThemeModel;

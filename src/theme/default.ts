import { ThemeModel } from './ThemeModel';

const bittersweet = '#ff6d6d';

const colorPalette = {
 text100: '#000000',
 background: '#f4f5f7',
 inputCaretColor: '#047fff',
 tag: '#00779a',
 info: {
  '160': '#023366',
  '140': '#024c99',
  '120': '#0366cc',
  '100': '#047fff',
  '60': '#68b2ff',
  '30': '#b3d8ff'
 },
 success: {
  '160': '#2d4c1a',
  '140': '#437328',
  '120': '#5A9935',
  '100': '#70bf42',
  '60': '#A9D98E',
  '30': '#d4ebc6'
 },
 error: {
  '160': '#662c2c',
  '140': '#994141',
  '120': '#cc5757',
  '100': bittersweet,
  '60': '#ffa7a7',
  '30': '#ffd3d3'
 },
 warning: {
  '160': '#665410',
  '140': '#997e19',
  '120': '#cca821',
  '100': '#ffd229',
  '60': '#ffe47f',
  '30': '#fff1be'
 },
 notificationDot: bittersweet,
 primary: {
  '100': '#485465',
  '80': '#6d7684',
  '60': '#9198a3',
  '40': '#b6bbc1',
  '20': '#dadde0',
  '10': '#ecedef',
  '0': '#ffffff'
 }
};

const spacing = [0, 2, 4, 8, 10, 12, 14] as number[];

const spacingObj = spacing.reduce((acc, s) => {
 acc[`${s}`] = s;
 acc[`-${s}`] = -s;
 return acc;
}, {} as any);
export const defaultTheme = {
 colors: {
  heading: colorPalette.text100,
  text: colorPalette.primary['100'],
  white: colorPalette.primary['0'],
  buttons: {
   primary: {
    border: colorPalette.primary['100'],
    color: colorPalette.primary['80'],
    background: colorPalette.primary['20'],
    hover: colorPalette.primary['10'],
    active: colorPalette.primary['40'],
    focus: colorPalette.info['60']
   },
   secondary: {
    color: colorPalette.primary['100'],
    background: colorPalette.primary['0']
   }
  },
  ...colorPalette
 },
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

 borders: {
  default: `1px solid ${colorPalette.primary['20']}`,
  primary: `1px solid ${colorPalette.primary['10']}`,
  buttons: {
   secondary: `1px solid ${colorPalette.primary['20']}`,
   secondaryHover: `1px solid ${colorPalette.primary['60']}`
  },
  popover: {
   primary: `1px solid ${colorPalette.primary['10']}`
  }
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
} as ThemeModel;

export default defaultTheme;

import { ColorThemeModel, ThemeModel } from './ThemeModel';
import { commonTheme } from './commonTheme';

const colorPalette = {
  text100: '#000000',
  background: '#fff',
  inputCaretColor: '#047fff',
  tag: '#00779a',
  info: {
    '160': '#023366',
    '140': '#024c99',
    '120': '#0366cc',
    '100': '#047fff',
    '60': '#68b2ff',
    '30': '#b3d8ff',
  },
  success: {
    '160': '#2d4c1a',
    '140': '#437328',
    '120': '#5A9935',
    '100': '#70bf42',
    '60': '#A9D98E',
    '30': '#d4ebc6',
  },
  error: {
    '160': '#662c2c',
    '140': '#994141',
    '120': '#cc5757',
    '100': '#ff6d6d',
    '60': '#ffa7a7',
    '30': '#ffd3d3',
  },
  warning: {
    '160': '#665410',
    '140': '#997e19',
    '120': '#cca821',
    '100': '#ffd229',
    '60': '#ffe47f',
    '30': '#fff1be',
  },
  primary: {
    '100': '#485465',
    '80': '#6d7684',
    '60': '#9198a3',
    '40': '#b6bbc1',
    '20': '#dadde0',
    '10': '#ecedef',
    '0': '#ffffff',
  },
};
const ligthColorTheme = {
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
        focus: colorPalette.info['60'],
      },
      secondary: {
        color: colorPalette.primary['100'],
        background: colorPalette.primary['0'],
      },
    },
    ...colorPalette,
  },
} as ColorThemeModel;
export const defaultTheme = {
  ...commonTheme,
  ...ligthColorTheme,
} as ThemeModel;
export default defaultTheme;

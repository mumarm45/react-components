import * as React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../theme/default';
import { ThemeModel } from '../../theme/ThemeModel';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme: t }: { theme: ThemeModel }) => {
     return t.fonts.heading;
    }}
  }
`;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
 return (
  <StyledThemeProvider theme={theme}>
   <GlobalStyle />
   {children}
  </StyledThemeProvider>
 );
};

export default ThemeProvider;

interface ThemeProviderProps {
 children: React.JSX.Element;
}

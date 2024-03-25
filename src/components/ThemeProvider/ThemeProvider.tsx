import React, { useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CurrentThemeContext from './CurrentThemeContext';
import { GlobalStyle } from '../../theme/Global.styled';
import defaultTheme from '../../theme/defaultTheme';
import darkTheme from '../../theme/darkTheme';

function ThemeProvider({ children }: ThemeProviderProps) {
 const { currentTheme } = useContext(CurrentThemeContext);
 const theme = useMemo(() => (currentTheme === 'light' ? defaultTheme : darkTheme), [currentTheme]);
 return (
  <StyledThemeProvider theme={theme}>
   <GlobalStyle />
   {children}
  </StyledThemeProvider>
 );
}

export default ThemeProvider;

interface ThemeProviderProps {
 children: React.JSX.Element;
}

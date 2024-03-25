import React, { useState } from 'react';
import CurrentThemeContext from './CurrentThemeContext';

const CurrentThemeProvider = ({ children }: CurrentThemeProviderPropTypes) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</CurrentThemeContext.Provider>
  );
};
export default CurrentThemeProvider;

export interface CurrentThemeProviderPropTypes {
  children: React.ReactNode;
}

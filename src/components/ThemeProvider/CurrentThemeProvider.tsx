import React, { useState } from 'react';
import CurrentThemeContext from './CurrentThemeContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const CurrentThemeProvider = ({ children }: CurrentThemeProviderPropTypes) => {
  const { value: theme, updateLocalStorage } = useLocalStorage({ key: 'theme', defaultValue: 'light' });
  const [currentTheme, setCurrentTheme] = useState(theme);

  const updateTheme = (_currentTheme: string): void => {
    updateLocalStorage('theme', _currentTheme);
    setCurrentTheme(_currentTheme);
  };

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme: updateTheme }}>
      {children}
    </CurrentThemeContext.Provider>
  );
};
export default CurrentThemeProvider;

export interface CurrentThemeProviderPropTypes {
  children: React.ReactNode;
}

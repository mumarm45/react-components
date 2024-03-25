import React from 'react';

const CurrentThemeContext = React.createContext({
 currentTheme: 'light',
 setCurrentTheme: (_mode: string) => {}
});
export default CurrentThemeContext;

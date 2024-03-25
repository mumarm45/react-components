import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import { router } from '../Router/Router';
import CurrentThemeProvider from '../ThemeProvider/CurrentThemeProvider';

function App() {
 return (
  <CurrentThemeProvider>
   <ThemeProvider>
    <RouterProvider router={router} />
   </ThemeProvider>
  </CurrentThemeProvider>
 );
}
export default App;

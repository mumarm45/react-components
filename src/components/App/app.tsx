import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import { router } from '../Router/Router';

function App() {
 return (
  <ThemeProvider>
   <RouterProvider router={router} />
  </ThemeProvider>
 );
}
export default App;

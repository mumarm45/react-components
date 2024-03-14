import * as React from 'react';
import { Header } from '../Header/header.component';
import { Main } from '../Main/main.component';
import { Footer } from '../Footer/footer.component';

export const Layout = () => {
 return (
  <div className="layout-container">
   <Header />
   <Main />
   <Footer />
  </div>
 );
};

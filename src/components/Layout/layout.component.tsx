import * as React from 'react';
import { LayoutStyledComponent } from './layout.styled';
import { Header } from '../Header/header.component';
import { Content } from '../Content/content.component';
import { SideNav } from '../SideNav/sidenav.component';
import { Main } from '../Main/main.component';
import { Footer } from '../Footer/footer.component';

export const Layout = () => {
 return (
  <LayoutStyledComponent>
   <Header />
   <Content>
    <>
     <SideNav />
     <Main />
    </>
   </Content>
   <Footer />
  </LayoutStyledComponent>
 );
};

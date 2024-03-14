import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/home.component';
import { BlogApp } from '../BlogApp/blog-app.component';
import { Layout } from '../Layout/layout.component';

export const Root = () => {
 return (
  <Routes>
   <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/blog/*" element={<BlogApp />} />
   </Route>
  </Routes>
 );
};

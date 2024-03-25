import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BlogApp } from '../BlogApp/blog-app.component';
import { Layout } from '../Layout/layout.component';

export const Root = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />} />
        <Route path="/blog/*" element={<BlogApp />} />
      </Route>
    </Routes>
  );
};

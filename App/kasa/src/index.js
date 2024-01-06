import React from 'react';
import {createRoot} from 'react-dom/client';
import { Header, Content, Footer } from './App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('wrapper');
  createRoot(root).render(
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
});

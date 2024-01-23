import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Apropos from './pages/Apropos/Apropos';

export const Router = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/A-propos" element={<Apropos />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>)
}

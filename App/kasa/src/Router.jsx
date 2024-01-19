import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import PageNotFound from './pages/PageNotFound/PageNotFound';

export const Router = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/Page-Not-Found" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>)
}

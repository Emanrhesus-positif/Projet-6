import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';


const container = document.getElementById('App');
const root = createRoot(container);

function Routage() {
root.render(<React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
    </Routes>
  </Router>
</React.StrictMode>);
}

export default Routage
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('App');
const root = createRoot(container);

function Routage() {
root.render(<React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
</React.StrictMode>);
}

export default Routage
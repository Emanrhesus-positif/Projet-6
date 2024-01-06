import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';


// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('wrapper');
//   createRoot(root).render(
//     <div>
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// }); voir si le navigateur préfère cette version

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" element={<Logement />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

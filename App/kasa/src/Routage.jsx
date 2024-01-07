import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Logement from './pages/Logement';
// import PageNotFound from './pages/PageNotFound';
// import Apropos from './pages/Apropos';
function Routage() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Logement" element={<Logement />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/PageNotFound" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export default Routage
import React from 'react';
import "./Header.css"
import imageSVG from '../../assets/LOGOHD.svg';
function Header() {
    const content = (
      <header>
        <img src={imageSVG} alt="logo kasa" />
        <nav>
          <a href="/">Accueil</a>
          <a href="Logement">A propos</a>
        </nav>
      </header>
    );
    return content;
}

export default Header
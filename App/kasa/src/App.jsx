import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
function Header() {
    const content = (
      <header>
        <img src="./assets/LOGOH.svg" alt="logo kasa" />
        <nav>
          <a href="/">Accueil</a>
          <a href="Logement">A propos</a>
        </nav>
      </header>
    );
    return content;
  }
  
  function GetContent() {
    const [jsonData, setJsonData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const answer = await fetch('logements.json');
          const data = await answer.json();
          setJsonData(data);
          console.log("je passe ici");
        } catch (error) {
          console.error("json failure");
        }
      };
      fetchData();
    }, []);
  
    return jsonData;
  }
  
  function LocationSquare({element}) {
    const content = [
      <div key={element.id} id={element.id}>{element.title}</div>
    
    ];
    return content;
  }
  function Content() {
    const jsonData = GetContent();
  
    const firstElement = jsonData && jsonData[0];
    const content = [
      <div class="mainContent">{firstElement && <LocationSquare element={firstElement} />}</div>
    ];
    return content;
  }
  
  function Carrousel() {
    const content = [
      <img src="./Assets/IMG1.png" alt="paysage"></img>,
      <img src="./Assets/IMG2.png" alt="paysage"></img>
    ];
  
    const container = [
      <div className="carrousel">{content}</div>
    ];
  
    return container;
  }
  function DropDown() {
        const content = [
            <div></div>
        ]
        return content
  }

  function Card({ id, title, picture, description }) {
    const content = [
        <div key={id} class="card">
            <span>{title}</span>
            <img src={picture} alt="je sais pas encore" height={80} width={80} />
            <span>{description}</span>
        </div>
    ]
    return content
}
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string
}
  
  function Footer() {
    const content = (
      <footer>
        <img src="./assets/LOGOF.svg" alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
    return content;
  }

  export {Header, Content, Footer};
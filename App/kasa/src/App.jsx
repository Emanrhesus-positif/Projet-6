// App.jsx
import React, { useEffect, useState } from 'react';

function Header() {
  const content = (
    <header>
      <img src="./assets/LOGOH.svg" alt="logo kasa" />
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A propos</a></li>
      </ul>
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
    <div>{JSON.stringify(element.title)}</div>
  ];
  return content;
}
function Content() {
  const jsonData = GetContent();

  const firstElement = jsonData && jsonData[0];
  const content = [
    <div>{firstElement && <LocationSquare element={firstElement} />}</div>
  ];
  return content;
}

function Carrousel() {
  const content = [
    <img alt="paysage"></img>,
    <img alt="paysage"></img>
  ];

  const container = [
    <div className="carrousel">{content}</div>
  ];

  return container;
}


function Footer() {
  const content = (
    <footer>
      <img src="./assets/LOGOF.svg" alt="logo kasa" />
    </footer>
  );
  return content;
}

export { Header, Content, Footer };

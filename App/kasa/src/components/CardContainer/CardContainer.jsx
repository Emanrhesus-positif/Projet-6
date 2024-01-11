import React from 'react';
import Card from '../Card/Card.jsx';
import './CardContainer.css';
function CardContainer({ jsonData }) {
  const subContent = [];

  if (jsonData) {
    if (Array.isArray(jsonData)) {
      jsonData.forEach((element) => {
        subContent.push(
          <Card
            key={element.id}
            title={element.title}
            cover={element.cover}
            description={element.description}
          />
        );
      });
      console.log(jsonData);
    } else {
      console.error("Erreur : jsonData n'est pas un tableau valide", jsonData);
    }
  } else {
    console.error("Pas de données JSON :", jsonData);
  }

  const content = (
    <div key="cardContainer" className="cardContainer">
      {subContent}
    </div>
  );
  return content;
}

export default CardContainer;

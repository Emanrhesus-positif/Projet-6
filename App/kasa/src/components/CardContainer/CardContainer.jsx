import React from 'react';
import Card from '../Card/Card.jsx';
function CardContainer(jsonData) {

	let subContent = [];
  if (jsonData && Array.isArray(jsonData)) {
    subContent = jsonData.map((element) => (
      <Card
        key={element.id}
        title={element.title}
        picture={element.cover}
        description={element.description}
      />
    ));
    console.log("passe ici")
  } else {
    console.error("Le contenu de jsonData n'est pas un tableau valide :", jsonData);
  }


    const content = [
    	<div className="cardContainer">
			{subContent}
    	</div>
    ];
    return content
}
export default CardContainer


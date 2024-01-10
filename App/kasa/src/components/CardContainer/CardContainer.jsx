import React from 'react';
import Card from '../Card/Card.jsx';
import './CardContainer.css';
function CardContainer(jsonData) {
  const subContent=[];
	
  if (jsonData) {
    const keys = Object.keys(jsonData);
    
    if(keys.length > 0){
      keys.map((key) => (subContent.push(<Card key={key.id} title={key.title} picture={key.cover} description={key.description}/>)));
      console.log(jsonData);
      console.log(subContent);
    }
    else{
      console.log("erreur",jsonData );
      console.log(jsonData.length);
    }
  } else {
    console.error("pas de JSON:", jsonData);
  }
    const content = [
    	<div key="cardContainer" className="cardContainer">
			  {subContent}
    	</div>
    ];
    return content
}
export default CardContainer
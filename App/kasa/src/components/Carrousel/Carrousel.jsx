import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Carrousel.css";
 function Carrousel({ jsonData }) {
  const subContent = [];
  const [currentImg, setCurrentImg] = useState(null);
  
  if (jsonData) {
    if (Array.isArray(jsonData)) {
      jsonData.forEach((element) => {
        subContent.push(
          <img key={element.id} src={element.cover} alt={element.description} visibility="hidden"></img>
        );
        setCurrentImg(element.id);
      });
      console.log(jsonData);
    } else {
      console.error("Erreur : jsonData n'est pas un tableau valide", jsonData);
    }
  } else {
    console.error("Pas de données JSON :", jsonData);
  }

Carrousel.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string
}
    
    const content = [
      <div key="carrousel-container" className="carrousel-container">
        <div key="carrousel" className="carrousel">
            <div key="Carrousel-slide"className={`carrousel-slide`}>
              {subContent}
            </div>
        </div>
      </div>
    ];
    return content;
}
export default Carrousel;
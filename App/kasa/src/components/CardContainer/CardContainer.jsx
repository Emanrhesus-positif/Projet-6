import React from 'react';
import { Card } from '../Card/Card.jsx';
import classes from './CardContainer.module.scss';
export const CardContainer = ({jsonData}) => {
  const subContent = [];

  if (jsonData) {
    if (Array.isArray(jsonData)) {
      jsonData.forEach((element) => {
        subContent.push(
          <Card
            id={element.id}
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

  return (
    <div key={0} className={classes.container}>
      {subContent}
    </div>
  );


}

// return (
//   <div key={0} className={classes.container}>
//     {jsonData ?
//     Array.isArray(jsonData) ?
//       jsonData.forEach((element) => {
//         subContent.push(
//           <Card
//             id={element.id}
//             title={element.title}
//             cover={element.cover}
//             description={element.description}
//           />
//         );
//       });
//       console.log(jsonData);
//     : console.error("Erreur : jsonData n'est pas un tableau valide", jsonData);
  
//   : console.error("Pas de données JSON :", jsonData);
//   }
//   </div>
// );
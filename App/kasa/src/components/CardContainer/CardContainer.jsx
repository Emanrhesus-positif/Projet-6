import React from 'react';
import { Card } from '../Card/Card.jsx';
import classes from './CardContainer.module.scss';
export const CardContainer = ({ jsonData }) => {
	const subContent = [];
	
	return (
		<div key="cardcontainer" className={classes.container}>
			{jsonData ?
				Array.isArray(jsonData) ?
					jsonData.forEach((element) => {
						subContent.push(
							<Card
								id={element.id}
								title={element.title}
								cover={element.cover}
								description={element.description}
							/>
						)
					})
					: console.error("Erreur : jsonData n'est pas un tableau valide", jsonData)
				: console.error("Pas de données JSON :", jsonData)
			}
			{subContent}
		</div>
	);
}
import classes from './Rating.module.scss';
import fullStar from '../../assets/STARCOMPLETE.svg';
import emptyStar from '../../assets/STAREMPTY.svg';

export const Rating = ({note}) => {
	const ratingBar = [
		emptyStar,
		emptyStar,
		emptyStar,
		emptyStar,
		emptyStar,
	];
	for( let i = 0; i <= note-1; i++ ){
		ratingBar[i] = fullStar;
	}
	ratingBar.map(element => console.log(element));

	return(
		<div className={classes.container}>
			{ratingBar.map((element) => <img src={element}></img>)}
		</div>
	);  
}
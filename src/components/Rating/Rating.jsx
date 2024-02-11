import classes from './Rating.module.scss';
import fullStar from '../../assets/STARCOMPLETE.svg';
import emptyStar from '../../assets/STAREMPTY.svg';
import PropTypes from 'prop-types';
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

	return(
		<div className={classes.container}>
			{ratingBar.map((element, index) => <img key={index} src={element} alt=""></img>)}
		</div>
	);  
}

Rating.propTypes = {
	element: PropTypes.string
}
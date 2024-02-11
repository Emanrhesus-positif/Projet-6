import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from "./Carousel.module.scss";
import left from '../../assets/ARROWLEFT.svg';
import right from '../../assets/ARROWRIGHT.svg';

export const Carousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxPictures = data.length;
	const toNext = () => {
		if (currentIndex === maxPictures-1) {
			return setCurrentIndex(0);
		}
		return setCurrentIndex(currentIndex + 1)
	}
	const toPrev = () => {
		if (currentIndex === 0) {
			return setCurrentIndex(maxPictures - 1);
		}
		return setCurrentIndex(currentIndex - 1)
	}

	return (
		<div className={classes.control}>
			{maxPictures === 1 ? <></> : <button onClick={toPrev} className={classes.prev}><img src={left} alt="previous"></img></button>}
			<div className={classes.container}>
				{data.map((image, index) => (
						<div key={index} className={`${classes.item} ${index === currentIndex ? classes.currentItem : ''}`}>
							<img src={image} alt=""></img>
							<span className={maxPictures === 1 ? classes.spanHidden : " "}>{index+1}/{data.length}</span>
						</div>
					))}
			</div>
			{maxPictures === 1 ? <></> : <button onClick={toNext} className={classes.next}><img src={right} alt="next"></img></button>}
		</div>);
}
Carousel.propTypes = {
	index: PropTypes.string,
	pictures: PropTypes.arrayOf(PropTypes.string)
}
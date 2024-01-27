import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from "./Carousel.module.scss";
import left from '../../assets/ARROWLEFT.svg';
import right from '../../assets/ARROWRIGHT.svg';

export const Carousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxTemp = data.length;
	const toNext = () => {
		if (currentIndex === maxTemp-1) {
			return setCurrentIndex(0);
		}
		return setCurrentIndex(currentIndex + 1)
	}
	const toPrev = () => {
		if (currentIndex === 0) {
			return setCurrentIndex(maxTemp - 1);
		}
		return setCurrentIndex(currentIndex - 1)
	}

	return (
		<div className={classes.control}>
			<button onClick={toPrev} className={classes.prev}><img src={left} alt="previous"></img></button>
			<div className={classes.container}>
				{data.map((image, index) => (
						<div key={index} className={classes.item} style={{transform: `translate(-${currentIndex * 100}%)`}}>
							<img src={image} alt=""></img>
							<span>{index+1}/{data.length-1}</span>
						</div>
					))}
			</div>
			<button onClick={toNext} className={classes.next}><img src={right} alt="next"></img></button>
		</div>);
}
Carousel.propTypes = {
	index: PropTypes.string,
	pictures: PropTypes.arrayOf(PropTypes.string)
}
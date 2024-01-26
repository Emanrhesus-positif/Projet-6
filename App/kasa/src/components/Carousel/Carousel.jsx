import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from "./Carousel.module.scss";

export const Carousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxTemp = data.length;
	const carouselInfiniteScroll = () => {
		const maxTemp = data.length;
		if (currentIndex === maxTemp-1) {
			return setCurrentIndex(0);
		}
		return setCurrentIndex(currentIndex + 1)
	}
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
	useEffect(() => {
		const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
		return clearInterval(interval)
	})

	return (
		<div className="carousel-control">
		<button onClick={toPrev}>previous</button>
		<img src="../../assets/ARROWLEFT.svg" alt="previous"></img>
		<div className={classes.container}>
				{data.map((image, index) => (
						<div key={index} className={classes.item} style={{transform: `translate(-${currentIndex * 100}%)`}}>
							<img src={image} alt=""></img>
							<span>{index+1}/{data.length-1}</span>
						</div>
					))}
		</div>
		<button onClick={toNext}>next</button>
	</div>);
}
Carousel.propTypes = {
	index: PropTypes.string,
	pictures: PropTypes.arrayOf(PropTypes.string)
}
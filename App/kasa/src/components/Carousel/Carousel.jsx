import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Carousel.css";

function Carousel({ data }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const carouselInfiniteScroll = () => {
		const maxTemp = data.map(element => element.pictures.length);
		console.log(maxTemp);
		if (currentIndex === maxTemp-1) {
			return setCurrentIndex(0);
		}
		return setCurrentIndex(currentIndex + 1)
	}
	useEffect(() => {
		const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
		return () => clearInterval(interval)
	})
	return (
		<div className='carousel-container'>
			{data? 
				Array.isArray(data)? 
					data.map(element => (
						element.pictures.map((image, index) => (
							<div key={index} className='carousel-item' style={{transform: `translate(-${currentIndex * 100}%)`}}>
								<img src={image} alt={element.title}></img>
								<span>{index+1}/{element.pictures.length-1}</span>
							</div>
						))
					))
				: <p>Les données ne sont pas au format tableau</p>
			: <p>Aucune donnée fournie</p>}
		</div>
	);
}
Carousel.propTypes = {
	id: PropTypes.string,
	pictures: PropTypes.arrayOf(PropTypes.string)
};

export default Carousel;
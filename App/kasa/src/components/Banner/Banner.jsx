import './Banner.css';

import "./Banner.css";
import img1 from '../../assets/IMG1.png';

 function Banner() {
    const image = { id: 1, src:img1, alt: "paysage1" }
    
    const content = [
    	<div key={image.id} className={`banner`}>
            <img src={image.src} alt={image.alt} />
            <p>Chez vous, Partout et ailleurs</p>
        </div>
    ]
    return content
}

export default Banner;
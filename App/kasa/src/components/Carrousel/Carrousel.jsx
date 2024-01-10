import React, { useEffect, useState } from 'react';
import "./Carrousel.css";
import img1 from '../../assets/IMG1.png';
import img2 from '../../assets/IMG2.png';

 function Carrousel() {
    const images = [
      { id: 1, src:img1, alt: "paysage1" },
      { id: 2, src:img2, alt: "paysage2" },
      { id: 3, src:img2, alt: "paysage3" }
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 10000);
  
      return () => clearInterval(interval);
  
    }, [images.length])
    
    const content = [
      <div key="carrousel-container" className="carrousel-container">
        <div key="carrousel" className="carrousel">
            <div key={currentImage+1}className={`carousel-slide`}>
              <img src={images[currentImage].src} alt={images[currentImage].alt} />
              <p>Chez vous, Partout et ailleurs</p>
            </div>
        </div>
      </div>
    ]
    return content
}

export default Carrousel;
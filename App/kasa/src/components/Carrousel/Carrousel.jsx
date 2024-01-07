import React, { useEffect, useState } from 'react';

 function Carrousel() {
    const images = [
      { id: 1, src: "./Assets/IMG1.png", alt: "paysage1" },
      { id: 2, src: "./Assets/IMG2.png", alt: "paysage2" }
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 10000);
  
      return () => clearInterval(interval);
  
    }, [images.length])
    
    const content = [
      <div className="carrousel-container">
        <div className="carrousel">
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
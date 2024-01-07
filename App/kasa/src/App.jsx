import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
function Header() {
    const content = (
      <header>
        <img src="./assets/LOGOH.svg" alt="logo kasa" />
        <nav>
          <a href="/">Accueil</a>
          <a href="Logement">A propos</a>
        </nav>
      </header>
    );
    return content;
}
  
function GetContent() {
	const [jsonData, setJsonData] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const answer = await fetch('logements.json')
          const data = await answer.json()
          setJsonData(data);
        } catch (error) {
          console.error("json failure")
        }
      };
      fetchData()
    }, []);
  
    return jsonData
}

function Content() {
    const jsonData = GetContent()
	const subContent = []

	if(jsonData)
	{
		jsonData.forEach((element)=>{
			subContent.push(
				<Card key={element.id}
					title={element.title}
					picture={element.picture}
					description={element.description}
				/>
			)
		})
	}

    const content = [
    	<div className="cardContainer">
			{subContent}
    	</div>
    ];
    return content
}
  
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

function Card({ id, title, picture, description }) {
    const content = [
        <div key={id} className="card">
            <span>{title}</span>
        </div>
    ]
    return content
}
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string
}
  
function Footer() {
    const content = (
      <footer>
        <img src="./assets/LOGOF.svg" alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
    return content
}

export {Header, Content, Footer, Card, Carrousel};
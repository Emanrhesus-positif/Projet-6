import './Banner.css';

 function Banner({img1}) {
    const image = { id: 1, src:{img1}, alt: "paysage" }
    
    const content = [
    	<div key={image.id} className={`banner`}>
            <img src={image.src} alt={image.alt} />
            <p>Chez vous, Partout et ailleurs</p>
        </div>
    ]
    return content
}

export default Banner;
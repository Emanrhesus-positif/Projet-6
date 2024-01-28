import classes from './Banner.module.scss';

export const Banner = ({picture, text}) => {
    const image = { id: 1, src:picture, alt: "paysage" }
    
    const content = [
    	<div key={image.id} className={classes.banner}>
            <img src={image.src} alt={image.alt} />
            <p>{text}</p>
        </div>
    ]
    return content
}
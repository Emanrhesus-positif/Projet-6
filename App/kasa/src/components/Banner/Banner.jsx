import classes from './Banner.module.scss';

export const Banner = ({picture}) => {
    const image = { id: 1, src:picture, alt: "paysage" }
    
    const content = [
    	<div key={image.id} className={classes.banner}>
            <img src={image.src} alt={image.alt} />
            <p>Chez vous, Partout et ailleurs</p>
        </div>
    ]
    return content
}
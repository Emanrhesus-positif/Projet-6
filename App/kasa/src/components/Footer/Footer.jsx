import classes from './Footer.module.scss';
import imageSVG from '../../assets/LOGOFD.svg';
export const Footer = () => {

	  return (
	  	<footer className={classes.container}>
	  		<img src={imageSVG} alt="logo kasa" />
	  		<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
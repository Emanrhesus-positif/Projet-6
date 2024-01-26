import classes from './Footer.module.scss';
import imageSVG from '../../assets/LOGOFD.svg';
export const Footer = () => {
	const content = (
		<footer>
		  <img src={imageSVG} alt="logo kasa" />
		  <p>© 2020 Kasa. All rights reserved</p>
		</footer>
	  );
	  return content
}
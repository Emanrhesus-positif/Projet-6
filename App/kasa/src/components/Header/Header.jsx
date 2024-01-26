import classes from './Header.module.scss'
import React from 'react';
import imageSVG from '../../assets/LOGOHD.svg';

export const Header = () => {
	const content = (
		<header>
		  <img src={imageSVG} alt="logo kasa" />
		  <nav>
			<a href="/">Accueil</a>
			<a href="/A-propos">A propos</a>
		  </nav>
		</header>
	  );
	  return content;
}
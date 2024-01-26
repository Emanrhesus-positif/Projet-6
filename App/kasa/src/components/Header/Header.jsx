import classes from './Header.module.scss'
import React from 'react';
import imageSVG from '../../assets/LOGOHD.svg';
import {Link} from "react-router-dom";

export const Header = () => {
	const content = (
		<header>
		  <img src={imageSVG} alt="logo kasa" />
		  <nav>
			<Link to={`/`}>Accueil</Link>
			<Link to={`/a-propos/`}>A propos</Link>
		  </nav>
		</header>
	  );
	  return content;
}
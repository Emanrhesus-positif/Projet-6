import classes from './Header.module.scss';
import React from 'react';
import imageSVG from '../../assets/LOGOHD.svg';
import { NavLink } from "react-router-dom";

export const Header = () => {
	console.log(isActive('/'));
	return (
		<header>
		  <img src={imageSVG} alt="logo kasa" />
		  <nav>
			<NavLink to={`/`} 
				ClassName={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			  }>Accueil</NavLink>
			<NavLink to={`/a-propos/`} ClassName={classes.active}>A propos</NavLink>
		  </nav>
		</header>
	  );
}
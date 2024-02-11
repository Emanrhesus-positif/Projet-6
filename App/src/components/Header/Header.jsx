import classes from './Header.module.scss';
import React from 'react';
import imageSVG from '../../assets/LOGOHD.svg';
import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<header>
		  <img src={imageSVG} alt="logo kasa" />
		  <nav>
			<NavLink to={`/`} className={({ isActive, isPending }) => isPending ? classes.pending : isActive ? classes.active : ""}>
				Accueil
			</NavLink>
			<NavLink to={`/a-propos/`} className={({ isActive, isPending }) => isPending ? classes.pending : isActive ? classes.active : ""}>
				A propos
			</NavLink>
		  </nav>
		</header>
	  );
}
import {Link} from "react-router-dom";
import classes from './ErrorHandler.module.scss';
export const ErrorHandler = () => {
	return (
		<div className={classes.container}>
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to={`/Home/`}>Retourner sur la page d'accueil</Link>
		</div>
	)
}
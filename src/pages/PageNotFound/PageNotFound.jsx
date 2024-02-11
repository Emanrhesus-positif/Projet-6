
import classes from './PageNotFound.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ErrorHandler } from '../../components/ErrorHandler/ErrorHandler';
export const PageNotFound = () => {

	return <main>
		<div className={classes.headerWrap}><Header key="0" /></div>
		<div className={classes.errorWrap}><ErrorHandler key="1" /></div>
		<div className={classes.footerWrap}><Footer key="2" /></div>
	</main>
}
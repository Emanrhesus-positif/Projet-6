
import classes from './PageNotFound.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ErrorHandler } from '../../components/ErrorHandler/ErrorHandler';
export const PageNotFound = () => {
    const content = [
        <main>
            <div className={classes.headerWrap}><Header /></div>
            <div className={classes.errorWrap}><ErrorHandler /></div>
            <div className={classes.footerWrap}><Footer /></div>
         </main>
    ]
    return content
}
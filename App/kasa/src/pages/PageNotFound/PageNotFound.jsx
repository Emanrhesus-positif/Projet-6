
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ErrorHandler } from '../../components/ErrorHandler/ErrorHandler';
export const PageNotFound = () => {
    const content = [
        <main>
           <Header />
           <ErrorHandler />
           <Footer />
         </main>
    ]
    return content
}
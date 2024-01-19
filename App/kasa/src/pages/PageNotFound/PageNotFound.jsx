
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
function PageNotFound(){
    const content = [
        <main>
           <Header />
           <ErrorHandler />
           <Footer />
         </main>
    ]
    return content
}
//en faire un component en cas de non découverte du json/suppression d'un objet...
export default PageNotFound


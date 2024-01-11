
import {Header, Footer} from '../../App';
function PageNotFound(){
    const content = [
        <main>
           <Header />
           <p>404 Oups! La page que vous demandez n'existe pas.</p>
           <Footer />
         </main>
    ]
    return content
}
//en faire un component en cas de non découverte du json/suppression d'un objet...
export default PageNotFound


import useFetch from '../../hooks/useFetch.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import LogementData from '../../components/LogementData/LogementData.jsx';
import {useParams} from'react-router-dom';

function Logement () {
    const jsonData = useFetch();
    const { id } = useParams();
    const content = [
        <main>
            <Header />
            <Carrousel jsonData={jsonData}/>
            <LogementData id={id} jsonData={jsonData}/>
            <Footer />
        </main>
    ];
    return content;
}

export default Logement;
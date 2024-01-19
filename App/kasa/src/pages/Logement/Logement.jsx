import useFetch from '../../hooks/useFetch.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import LogementData from '../../components/LogementData/LogementData.jsx';
import {useParams} from'react-router-dom';

function Logement () {
    const jsonData = useFetch();
    const { id } = useParams();
    
    if (jsonData){
        if(Array.isArray(jsonData)){
            const filtered = jsonData.filter(element => element.id === id);
            return (
                <main>
                    <Header />
                    <Carousel data={filtered}/>
                    <LogementData data={filtered}/>
                    <Footer />
                </main>);
        }
    }
    
}

export default Logement;
import useFetch from '../../hooks/useFetch.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import LogementData from '../../components/LogementData/LogementData.jsx';
import {useParams, useNavigate} from'react-router-dom';
import {useEffect, useState} from 'react';

function Logement () {
    const jsonData = useFetch();
    const [house, setHouse] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (jsonData.length > 0){
            const filtered = jsonData.find(element => element.id === id);
            console.log(filtered);
            console.log(jsonData);
            console.log(id);
            if(filtered){
                setHouse(filtered);

            } else {
                navigate("/not-found");
            }
        }
        
    },[jsonData])
    
            
            return (
                <main>
                    <Header />
                    {house && (
                        <LogementData data={house}/>
                    )}
                    <Footer />
                </main>);

}

export default Logement;
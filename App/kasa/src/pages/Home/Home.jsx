
import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from 'react';
import "./Home.css";

function GetJSON() {
	const [jsonData, setJsonData] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const answer = await fetch('logements.json')
          const data = await answer.json()
          setJsonData(data);
        } catch (error) {
          console.error("json failure")
        }
      };
      fetchData()
    }, []);
  
    return jsonData
}
function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <CardContainer jsonData={GetJSON()} />
            <Footer />
        </div>
    );
}

export default Home;

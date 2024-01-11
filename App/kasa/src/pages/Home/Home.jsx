import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import GetJSON from '../../components/GetJSON/GetJSON.jsx';

function Home() {
  const jsonData = GetJSON();

  return (
    <div>
      <Header />
      <Banner />
      <CardContainer jsonData={jsonData} />
      <Footer />
    </div>
  );
}

export default Home;

import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import GetJSON from '../../hooks/useFetch.jsx';

function Home() {
  const jsonData = GetJSON();

  return (
    <main>
      <Header />
      <Banner />
      <CardContainer jsonData={jsonData} />
      <Footer />
    </main>
  );
}

export default Home;

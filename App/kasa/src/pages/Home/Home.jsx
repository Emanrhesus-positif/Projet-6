import  classes from'./Home.module.scss';
import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { Banner } from '../../components/Banner/Banner.jsx';
import { CardContainer } from '../../components/CardContainer/CardContainer.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { useFetch } from '../../hooks/useFetch.jsx';
import img1 from '../../assets/IMG1.png';

export const Home = () => {
	const jsonData = useFetch();
	console.log(jsonData);
	if (jsonData){
		if(Array.isArray(jsonData)){
			return (
				<main className={classes.container}>
					<Header />
					<Banner picture={img1} />
					<CardContainer jsonData={jsonData} />
					<Footer />
				</main>
			);
		}
	}
}

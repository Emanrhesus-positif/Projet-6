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
	if (jsonData){
		if(Array.isArray(jsonData)){
			return (
				<main className={classes.container}>
					<div className={classes.headerWrap}><Header /></div>
					<div className={classes.bannerWrap}><Banner picture={img1} text={"Chez vous, partout et ailleurs"} /></div>
					<div className={classes.cardcontainerWrap}><CardContainer jsonData={jsonData} /></div>
					<div className={classes.footerWrap}><Footer /></div>
				</main>
			);
		}
	}
}

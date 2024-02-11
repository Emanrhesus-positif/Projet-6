import classes from './Apropos.module.scss';
import { Header } from '../../components/Header/Header.jsx';
import { Banner } from '../../components/Banner/Banner.jsx';
import { Dropdown } from '../../components/Dropdown/Dropdown.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import img2 from '../../assets/IMG2.png';
export const Apropos = () => {
	return <div className={classes.container}>
		<Header />
		<Banner  picture={img2}/>
		<div className={classes.DDcontainer}>
			<Dropdown title="Fiabilité" options="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
			<Dropdown title="Respect" options="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
			<Dropdown title="Service" options="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
			<Dropdown title="Sécurité" options="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
		</div>

		<div className="footerWrap"><Footer /></div>
	</div>
}
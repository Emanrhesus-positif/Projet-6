import classes from './LogementData.module.scss';
import { DropDown } from '../DropDown/DropDown.jsx';
import { Profile } from '../Profile/Profile.jsx';
import {Tag} from '../Tag/Tag.jsx';
import {Rating} from '../Rating/Rating.jsx';

	export const LogementData = ({ data }) => {
		return (
			<div className={classes.container}>
				<div className={classes.informations}>
					<div className={classes.situation}>
						<h1>{data.title}</h1>
						<p>{data.location}</p>
						<div className={classes.tags}>
							{data.tags.map((tag) => (<Tag element={tag} />))}
						</div>
					</div>

					<div className={classes.evaluator}>
						<Profile name={data.host.name} picture={data.host.picture}/>
						<Rating note={data.rating} />
					</div>
				</div>
				<div className={classes.addons}>
					<DropDown title="Description" options={data.description} />
					<DropDown title="Équipements" options={data.equipments} />
				</div>
			</div>
		)
	}
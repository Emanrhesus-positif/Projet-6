import classes from './LogementData.module.scss';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown/Dropdown.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { Tag } from '../Tag/Tag.jsx';
import { Rating } from '../Rating/Rating.jsx';

export const LogementData = ({ data }) => {
	return (
		<div className={classes.container}>
			<div className={classes.informations}>
				<div className={classes.situation}>
					<h1>{data.title}</h1>
					<p>{data.location}</p>
					<div className={classes.tags}>
						{data.tags.map((tag) => (<Tag key={tag} element={tag} />))}
					</div>
				</div>

				<div className={classes.evaluator}>
					<div className={classes.profileWrap}>
						<Profile name={data.host.name} picture={data.host.picture} />
					</div>
					<div className={classes.ratingWrap}>
						<Rating note={data.rating} />
					</div>
				</div>
			</div>
			<div className={classes.addons}>
				<Dropdown title="Description" options={data.description} />
				<Dropdown title="Équipements" options={data.equipments} />
			</div>
		</div>
	)
}
LogementData.propTypes = {
    title: PropTypes.string,
	location: PropTypes.string
}
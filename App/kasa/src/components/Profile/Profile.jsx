import classes from './Profile.module.scss';
import PropTypes from 'prop-types';
export const Profile = ({name, picture}) => {
    return(
        <div className={classes.container}>
            <span>{name}</span>
            <img src={picture} alt='profil'></img>
        </div>
    );
}
Profile.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}
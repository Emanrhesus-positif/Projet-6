import classes from './Profile.module.scss';

export const Profile = ({name, picture}) => {
    return(
        <div className={classes.container}>
            <span>{name}</span>
            <img src={picture} alt='profil'></img>
        </div>
    );
}
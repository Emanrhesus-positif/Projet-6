import './Profile.css';

export const Profile = ({name, picture}) => {
    return(
        <div className="Profile-container">
            <span>{name}</span>
            <img src={picture} alt='profil'></img>
        </div>
    );
}
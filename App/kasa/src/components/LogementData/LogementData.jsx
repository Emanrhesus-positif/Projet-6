import './LogementData.css';
import DropDown from '../Dropdown/Dropdown.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import {Profile} from '../Profile/Profile.jsx';
import {Tag} from '../Tag/Tag.jsx';
import {Rating} from '../Rating/Rating.jsx';

function LogementData ({data}){
    console.log(data);
    return (
        console.log(data.equipments),
        <div key={data.id} className="logement-info">
            <Carousel data={data.pictures}/>
            <div className="logement-content">
                <div className="logement-situation">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <div className="logement-tag-container">
                        {data.tags.map((tag) => (<Tag element={tag} />))}
                    </div>
                </div>
                <div className="logement-rater">
                    <Profile name={data.host.name} picture={data.host.picture}/>
                    <Rating note={data.rating} />
                </div>
            </div>
            <div className="logement-extended-info">
                    <DropDown title="description" options={data.description} />
                    <DropDown title="equipements" options={data.equipments} />
                </div>
        </div>
    )
}


export default LogementData;
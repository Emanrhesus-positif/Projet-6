import './LogementData.css';
import DropDown from '../Dropdown/Dropdown.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import {Profile} from '../Profile/Profile.jsx';
import {Tag} from '../Tag/Tag.jsx';
import {Rating} from '../Rating/Rating.jsx';

function LogementData ({data}){
    return data.map((element) => (
        console.log(element.equipments),
        <div key={element.id} className="logement-info">
            <Carousel data={data}/>
            <div className="logement-content">
                <div className="logement-situation">
                    <h1>{element.title}</h1>
                    <p>{element.location}</p>
                    <div className="logement-tag-container">
                        {element.tags.map((tag) => (<Tag element={tag} />))}
                    </div> 
                </div>
                <div className="logement-rater">
                    <Profile name={element.host.name} picture={element.host.picture}/>
                    <Rating note={element.rating} />
                </div>
            </div>
            <div className="logement-extended-info">
                    <DropDown title="description" options={element.description} />
                    <DropDown title="equipements" options={element.equipments} />
                </div>
        </div>
    ))
}


export default LogementData;
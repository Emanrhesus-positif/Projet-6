import './LogementData.css';
import DropDown from '../Dropdown/Dropdown.jsx';
import Carousel from '../Carousel/Carousel.jsx';

function LogementData ({data}){

   const testelements = ["ferrepasser", "patates", "chips"];
    data.forEach((element) => { })
    return  <div key="logement-code" className="logement-info">
                <Carousel data={data}/>
                <DropDown title="descends" options={testelements} />
            </div>
}
export default LogementData;
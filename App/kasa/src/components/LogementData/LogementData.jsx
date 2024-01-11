import '../../hooks/useFetch.jsx';
import './LogementData.css';
import DropDown from '../Dropdown/Dropdown.jsx';

function LogementData ({id, jsonData}){

    if (jsonData && jsonData.id === id) {
        if (Array.isArray(jsonData)) {
          jsonData.forEach((element) => { })
        }
        console.log("id correct");
    }
    return <div key="test" class="logement-info">
        <DropDown />
    </div>
}
export default LogementData;
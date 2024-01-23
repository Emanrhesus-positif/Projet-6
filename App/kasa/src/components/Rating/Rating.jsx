import './Rating.css';

import fullStar from '../../assets/STARCOMPLETE.svg';
import emptyStar from '../../assets/STAREMPTY.svg';

export const Rating = ({note}) => {
    const {number} = note;
    console.log(parseInt(number, 10));
    const ratingBar = [
        emptyStar,
        emptyStar,
        emptyStar,
        emptyStar,
        emptyStar,
    ];
    for( let i = 0; i <= note-1; i++ ){
        ratingBar[i] = fullStar;
    }
    ratingBar.map(element => console.log(element));

    return(<div>{ratingBar.map((element) => <img src={element}></img>)}</div>);
        
}
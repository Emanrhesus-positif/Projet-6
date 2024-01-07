// import PropTypes from 'prop-types';
// function Card({ id, title, picture, description }) {
//     const content = [
//         <div key={id} className="card">
//             <span>{title}</span>
//             <a href="Logement"> </a>
//         </div>
//     ]
//     return content
// }
// Card.propTypes = {
//     id: PropTypes.string,
//     title: PropTypes.string,
//     picture: PropTypes.arrayOf(PropTypes.string),
//     description: PropTypes.string
// }

// export default Card

// dans src/components/Card/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Card({ id, title, picture, description }) {
    return (
        <div key={id} className="card">
            <span>{title}</span>
            {/* Utilisez Link pour gérer la navigation dans React Router */}
            <a href="Logement"> </a>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
function Card({ id, title, picture, description }) {
    const content = [
        <div key={id} className="card">
            <span>{title}</span>
            <a href="Logement"> </a>
        </div>
    ]
    return content
}
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string
}

export default Card

//utiliser LINK au lieu de A pour les liens
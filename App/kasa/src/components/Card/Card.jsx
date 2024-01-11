import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './Card.css';
function Card({ id, title, cover, description }) {
    const content = [
        <Link to={`/logement/${id}`}>
            <div key={id} className="card">
                <span>{title}</span>
                <img key={id} src={cover} alt={description}></img>
            </div>
        </Link>
    ]
    return content
}
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string
}

export default Card

//utiliser LINK au lieu de A pour les liens
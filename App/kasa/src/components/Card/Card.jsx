import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classes from './Card.module.scss';

export const Card = ({ id, title, cover, description }) => {
    const content = [
        <div key={id} className={classes.card}>
            <Link to={`/logement/${id}`}>
                <span>{title}</span>
                <img key={id} src={cover} alt={description}></img>
            </Link>
        </div>
    ]
    return content
}
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string
}
import classes from './Tag.module.scss'
import PropTypes from 'prop-types';
export const Tag = ({ element }) => {

    return(<span className={classes.container}>{element}</span>)
}

Tag.propTypes = {
    element: PropTypes.string
}

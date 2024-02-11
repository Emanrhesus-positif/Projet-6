import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Dropdown.module.scss';
import down from '../../assets/DDARROWFDDOWN.svg';
import up from '../../assets/DDARROWFDUP.svg';

export const Dropdown = ({ title, options }) => {
	const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
      setLoaded(true);
    };
    console.log(loaded);
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <button onClick={handleOpen}>
            {title}
            <img 
              src={open ? down : up} 
              className={open && loaded ? classes.arrowDown : ( !open && loaded ? classes.arrowUp : '')}
              alt="">
            </img>
          </button>
        </div>
        {open ? (
            <div className={classes.options}>
                {Array.isArray(options)?
                  options.map(element => (<p key={element}>{element}</p>))
                : <p>{options}</p>
                }
            </div>
        ): null}
      </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    element: PropTypes.string
}
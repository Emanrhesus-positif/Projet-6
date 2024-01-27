import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './DropDown.module.scss';
import down from '../../assets/DDARROWFDDOWN.svg';
import up from '../../assets/DDARROWFDUP.svg';

export const DropDown = ({ title, options }) => {
	const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <button onClick={handleOpen}>{title}<img src={open ? down : up}></img></button>
        </div>
        {open ? (
            <div className={classes.options}>
                {Array.isArray(options)?
                  options.map(element => (<p>{element}</p>))
                : <p>{options}</p>
                }
            </div>
        ): null}
      </div>
    );
}

DropDown.propTypes = {
    title: PropTypes.string,
    options: Array.isArray(PropTypes.string)
}
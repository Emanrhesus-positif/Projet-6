import { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

function DropDown({title, options}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    return (
      <div className="dropdown-container">
        <div className="dropdown-title">
          <button onClick={handleOpen}>{title}</button>
        </div>
        {open ? (
            <div className="dropdown-options">
                {Array.isArray(options)?
                  options.map(element => (<p>{element}</p>))
                : <p>{options}</p>
                }
                
            </div>
        ): null }
      </div>
    );
}

DropDown.propTypes = {
    id: PropTypes.string,
}

export default DropDown;
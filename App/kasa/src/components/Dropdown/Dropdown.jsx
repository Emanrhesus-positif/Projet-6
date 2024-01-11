import React from 'react';
import PropTypes from 'prop-types';

function DropDown() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <div>
        <button onClick={handleOpen}>Element</button>
        {open ? (   
            // <div className={data.id}></div>
            <div className="temporaire">
                <p>test</p>
                <p>test2</p>
            </div>
        ): null }
      </div>
    );
}

DropDown.propTypes = {
    id: PropTypes.string,
}

export default DropDown;
import React from 'react';
import PropTypes from 'prop-types';
import useMagicBoxColor from '../../hooks/useMagicBoxColor';

MagicBox.propTypes = {

};

function MagicBox(props) {
    const color = useMagicBoxColor();
    return (
        <div
            className="magic-box"
            style={{ backgroundImage: `linear-gradient(${color})`, width: 200, height: 200 }}
        >

        </div>
    );
}

export default MagicBox;
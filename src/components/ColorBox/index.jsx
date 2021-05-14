import React, { useState } from 'react';
import './ColorBox.scss'

ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue', 'red'];
    const randomIndex = Math.trunc(Math.random() * 6);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    // const [color, setColor] = useState(localStorage.getItem('box_color') ? localStorage.getItem('box_color') : 'deeppink');
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color_box') || 'deeppink';
        console.log(initColor);
        return initColor;
    });
    function handleBoxClick() {
        //get radom color -> sert color
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    };
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color, fontSize: 30, color: 'green' }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;
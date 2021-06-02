import { useEffect, useRef, useState } from 'react';

function randomColor(currColor) {
    const arrayColor = ["to right, yellow, orange, red", "to right, white, lightGray, gray"];
    let randomIndex = Math.trunc(Math.random() * 2);
    let currentIndex = arrayColor.indexOf(currColor);
    console.log(currentIndex);
    while (currentIndex === randomIndex) {
        randomIndex = Math.trunc(Math.random() * 2);
    }
    return arrayColor[randomIndex];
};

function useMagicBoxColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    useEffect(() => {
        const intervalColor = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => { clearInterval(intervalColor) };
    }

        , []);


    return color;
}

export default useMagicBoxColor;
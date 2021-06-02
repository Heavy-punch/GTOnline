import { useEffect, useState } from 'react';


function formatDate(date) {
    let hours = `0${date.getHours()}`.slice(-2);
    let minutes = `0${date.getMinutes()}`.slice(-2);
    let seconds = `0${date.getSeconds()}`.slice(-2);
    let result = hours + ':' + minutes + ':' + seconds
    return result
};

function useClock(props) {
    const [dateString, setDateString] = useState('');
    useEffect(() => {
        const timer = setInterval(() => {
            let newTimeString = formatDate(new Date());
            setDateString(newTimeString)
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }
        , []);
    return { dateString };
}

export default useClock;
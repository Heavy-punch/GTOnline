import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};

// function formatDate(date) {
//     let hours = `0${date.getHours()}`.slice(-2);
//     let minutes = `0${date.getMinutes()}`.slice(-2);
//     let seconds = `0${date.getSeconds()}`.slice(-2);
//     let result = hours + ':' + minutes + ':' + seconds
//     return result
// };

function Clock() {
    // const [dateString, setDateString] = useState('');
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         let newTimeString = formatDate(new Date());
    //         setDateString(newTimeString)
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }
    //     , []);
    // return (
    //     <div style={{ fontSize: 42 }}>
    //         {dateString}
    //     </div>
    // );

    const { dateString } = useClock();
    return (
        <div style={{ fontSize: 42 }}>
            <p>{dateString}</p>
        </div>
    );

}

export default Clock;
import React, { useState, useEffect } from 'react';

const CurrentDate = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <p style={{display:"inline-block"}}>{date.toLocaleDateString()}</p>
    );
}

export default CurrentDate;
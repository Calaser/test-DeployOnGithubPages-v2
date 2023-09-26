import React, { useEffect, useState } from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [countingTime, setCountingTime] = useState(0);

    useEffect(() => {
        let timer;
        if(isRunning){
            timer = setInterval(() => {
                setCountingTime(prevTime => prevTime + 0.1 );
            }, 100);
        }

        return() =>{
            clearInterval(timer);
        };
    }, [isRunning])
    
    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{countingTime.toFixed(1)}</span>
            <button onClick={() => setIsRunning(prevState => !prevState)}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={() => setCountingTime(0)}>Reset</button>
        </div>
    );
}

export default Stopwatch;
import React, { useState, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getMilliSeconds = `00${timer}`.slice(-2);
    const getSeconds = `0${Math.floor((timer/100) )}`;
    const minutes = `${Math.floor((timer / 60000))}`;
    console.log(minutes);

    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}: ${getMilliSeconds}`;
  };

  return (
    <div className="background-style">
      <div className="time-style">
        <h1>{formatTime()}</h1>
      </div>
      <p>SPLIT TIME</p>
      <div className="buttons">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

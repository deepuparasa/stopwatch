import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="time-display">{time}s</div>
      <div className="buttons">
        <button onClick={handleStart} className="button start">Start</button>
        <button onClick={handleStop} className="button stop">Stop</button>
        <button onClick={handleReset} className="button reset">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

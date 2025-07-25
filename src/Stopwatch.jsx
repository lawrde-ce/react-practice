import React, { useState, useEffect, useRef } from "react";
import styles from "./Components/styles.module.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalId = useRef(null);
  const startTime = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [isRunning]);

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours - String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  function start() {
    setIsRunning(true);
    startTime.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  return (
    <div className={styles.stopwatchContainer}>
      <div className={styles.stopwatchDisplay}>{formatTime()}</div>
      <div className={styles.Controls}>
        <button onClick={start} className={styles.startBtn}>
          Start
        </button>
        <button onClick={reset} className={styles.resetBtn}>
          Reset
        </button>
        <button onClick={stop} className={styles.stopBtn}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;

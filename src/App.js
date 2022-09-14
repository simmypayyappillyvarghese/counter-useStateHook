import "./styles.css";
import { useState } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    // Complete this function
    window.timer = setInterval(
      setTimer((time) => time + 1),
      1000
    );
  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(window.timer);
  };
  const resetTimer = () => {
    // Complete this function
    clearInterval(window.timer);
    setTimer(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> 0 mins </span>
      <span> 0 secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return() => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime() {
    let hours  = time.getHours();
    const mins = time.getMinutes(); 
    let secs = time.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // if its exactly 12 then display 12 instead of 0 oclock 

    return (
      `${leadingZero(hours)}:${leadingZero(mins)}:${leadingZero(secs)} ${meridiem}`
    );
  }

  function leadingZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return(
    <div className="clock-container">
      <span>{formatTime()}</span>
    </div>
  );
}

export default Clock
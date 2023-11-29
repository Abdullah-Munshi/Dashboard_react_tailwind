import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    isRunning: true,
  });
  return (
    <div className='flex items-center justify-end'>
      {days}d <span>:</span> {hours}h <span>:</span> {minutes}m <span>:</span>{" "}
      {seconds}s
    </div>
  );
};

export default Timer;

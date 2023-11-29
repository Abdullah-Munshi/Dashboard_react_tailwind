import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    isRunning: true,
  });
  return (
    <div className='flex items-center justify-end font-trunoSemibold text-lg'>
      {days}d{" "}
      <span className='mx-[5px] text-xl inline-block -translate-y-[2px]'>
        :
      </span>{" "}
      {hours}h{" "}
      <span className='mx-[5px] text-xl inline-block -translate-y-[2px]'>
        :
      </span>{" "}
      {minutes}m{" "}
      <span className='mx-[5px] text-xl inline-block -translate-y-[2px]'>
        :
      </span>{" "}
      {seconds}s
    </div>
  );
};

export default Timer;

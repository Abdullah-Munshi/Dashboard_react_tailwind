import React from "react";
import { useTimer } from "react-timer-hook";

const TimerTwo = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    isRunning: true,
  });

  return (
    <div className="flex items-center justify-end text-lg">
      <p className="text-white txt_shadow_one font-oxanium font-bold text-lg leading-tight text-center max-w-[140px] mx-auto">
        Earnings <br /> starts in
        <strong className="block text-orange txt_shadow_one text-4xl leading-[.8] mt-1">
          {seconds}
        </strong>{" "}
        seconds
      </p>
    </div>
  );
};

export default TimerTwo;

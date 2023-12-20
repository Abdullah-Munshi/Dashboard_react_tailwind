import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    isRunning: true,
  });

  return (
    <div className="flex items-center justify-end font-trunoSemibold text-lg">
      <p className="text-white txt_shadow_one font-oxanium font-bold text-lg leading-tight">
        Expires in
        <strong className="block text-[#40C5E6] txt_shadow_one text-4xl leading-[.8] mt-1">
          {days}
        </strong>{" "}
        days
      </p>
    </div>
  );
};

export default Timer;

import React from "react";
import TimerTwo from "./TimerTwo";
import CircularProgressBarTwo from "./CircularProgressBarTwo";

const ContractTwo = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);
  return (
    <div className="bg-six rounded-[50px] border-[5px] border-white min-h-[450px] relative box-border p-6 space-y-7">
      <h4 className="text-white text-[22px] txt_shadow_one font-orbitron font-bold text-center">
        CONTRACT #13
      </h4>

      <div className="relative w-[200px] h-[200px] mx-auto">
        <CircularProgressBarTwo progress={100} size={200} />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full inline-flex items-center justify-center">
          <TimerTwo expiryTimestamp={time} />
        </div>
      </div>
      <button className="bg-four w-[calc(100%_+_10px)] h-32 border-[5px] border-white rounded-[50px] inline-flex flex-col items-center justify-center leading-tight sm:leading-[1] font-orbitron text-white text-xl sm:text-3xl uppercase transition duration-300 hover:border-primary hover:text-primary absolute -bottom-[5px] -left-[5px] right-0 ">
        <span className="block text-xs sm:text-lg">CANCEL CONTRACT</span>
        GET REFUND
      </button>
    </div>
  );
};

export default ContractTwo;

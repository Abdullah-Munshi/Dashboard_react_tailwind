import React from "react";
import Timer from "./Timer";
import CircularProgressBar from "./CircularProgressBar";

const Contract = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3801600);
  return (
    <div className="bg-five rounded-[50px] border-[5px] border-white min-h-[450px] relative box-border p-6 space-y-7">
      <h4 className="text-white text-[22px] txt_shadow_one font-orbitron font-bold text-center">
        CONTRACT #13
      </h4>

      <div className="flex items-center justify-center space-x-[10px]">
        <CircularProgressBar progress={100} size={85} />
        <Timer expiryTimestamp={time} />
      </div>

      <div className="flex justify-around">
        <div>
          <strong className="block text-orange text-[28px] txt_shadow_one leading-tight font-oxanium font-bold">
            $2.912
          </strong>
          <p className="text-white txt_shadow_one font-oxanium font-normal text-lg leading-tight">
            Unclaimed
          </p>
        </div>{" "}
        <div>
          <strong className="block text-orange text-[28px] txt_shadow_one leading-tight font-oxanium font-bold">
            $23.912
          </strong>
          <p className="text-white txt_shadow_one font-oxanium font-normal text-lg leading-tight">
            Claimed so far
          </p>
        </div>
      </div>

      <button className="bg-four w-[calc(100%_+_10px)] h-32 border-[5px] border-white rounded-[50px] inline-flex flex-col items-center justify-center leading-tight sm:leading-[1] font-orbitron text-white text-xl sm:text-3xl uppercase transition duration-300 hover:border-primary hover:text-primary absolute -bottom-[5px] -left-[5px] right-0 ">
        <span className="block text-xs sm:text-lg">CANCEL CONTRACT</span>
        GET REFUND
      </button>
    </div>
  );
};

export default Contract;

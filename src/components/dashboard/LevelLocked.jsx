import React from "react";
import binanceIconWhite from "../../assets/binance-icon-white.png";
import lock from "../../assets/lock-2.png";

const LevelLocked = () => {
  return (
    <div className="bg-gradient-to-b from-[#282828] to-[#141414] rounded-xl pt-5 pb-6 shadow-md shadow-[#36221E]">
      <div className="px-6 space-y-4 flex flex-col justify-between h-full">
        <div className="level-title-bar flex items-center justify-between">
          <h4 className="font-bold text-xl text-[#FBBA04]">Level 5</h4>
          <strong className="inline-flex justify-end items-center text-white text-2xl font-bold">
            <img src={binanceIconWhite} alt="" className="mr-2.5" />
            $80
          </strong>
        </div>
        <div className="text-center">
          <img src={lock} alt="" className=" w-[75px] mx-auto block mb-3" />
          <h6 className="text-[#FBBA04] mb-2 text-xl font-bold">
            Activate Level
          </h6>
          <h6 className="text-[#fff] mb-2 text-base font-bold">
            Unlock Previous <br />
            Level First
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LevelLocked;

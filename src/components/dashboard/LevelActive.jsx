import React from "react";
import dollerSign from "../../assets/dollerSign.png";
import binanceIcon from "../../assets/binance-icon-black.png";
import lock from "../../assets/lock.png";
import { Button } from "../Utility";

const LevelActive = () => {
  return (
    <div className="bg-primaryGradient_to_b rounded-xl pt-5 pb-6">
      <div className="px-6 space-y-4 flex flex-col justify-between h-full">
        <div className="level-title-bar flex items-center justify-between">
          <h4 className="font-bold text-xl text-[#2E2E2E]">Level 4</h4>
          <strong className="inline-flex justify-end items-center text-black text-2xl font-bold">
            <img src={lock} alt="" className="mr-2.5" />
          </strong>
        </div>
        <div className="text-center">
          <h6 className="text-[#2E2E2E] mb-2 text-xl font-bold">
            Activate Level
          </h6>
          <strong className="inline-flex justify-end items-center text-[#2E2E2E] text-4xl font-bold">
            <img src={binanceIcon} alt="" className="mr-2" />
            $60
          </strong>
        </div>
        <div className="text-center">
          <Button variant="gray" classes="purchase-btn">
            PURCHASE NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LevelActive;

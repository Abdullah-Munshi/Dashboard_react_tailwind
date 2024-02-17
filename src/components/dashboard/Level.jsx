import React from "react";
import dollerSign from "../../assets/dollerSign.png";
import refresh from "../../assets/refresh.png";
import binanceIcon from "../../assets/binance-icon.png";

const Level = () => {
  return (
    <div className="bg-gradient-to-b from-[#fff] to-[#D0D0D0] rounded-xl pt-5 pb-6">
      <div className="px-6 space-y-4">
        <div className="level-title-bar flex items-center justify-between">
          <h4 className="font-bold text-xl text-[#2E2E2E]">Level 1</h4>
          <strong className="inline-flex justify-end items-center text-black text-2xl font-bold">
            <img src={binanceIcon} alt="" className="mr-2.5" />
            $0
          </strong>
        </div>
        <div className="level-rating flex flex-wrap justify-center space-x-3">
          <span className="active"></span>
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="level-balance-bar flex items-center justify-between">
          <strong className="inline-flex justify-end items-center text-[#2E2E2E] text-2xl font-bold">
            <img src={dollerSign} alt="" className="mr-2.5" />
            $10
          </strong>
          <strong className="inline-flex justify-end items-center text-[#2E2E2E] text-2xl font-bold">
            20
            <img src={refresh} alt="" className="ml-2.5" />
          </strong>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#B0B0B0] my-4"></div>
      <div className="px-6 space-y-4">
        <div className="flex items-center justify-between">
          <h5 className="text-[#2E2E2E] font-bold text-sm">Bonuses</h5>
          <div className="flex items-center justify-end space-x-4">
            <strong className="inline-flex justify-end items-center text-[#2E2E2E] text-base font-bold">
              <img src={dollerSign} alt="" className="mr-2" />
              $10
            </strong>
            <strong className="inline-flex justify-end items-center text-[#2E2E2E] text-base font-bold">
              20
              <img src={refresh} alt="" className="ml-2" />
            </strong>
          </div>
        </div>
        <div className="level-rating plc-2 flex items-center justify-center space-x-3">
          <span className="active"></span>
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Level;

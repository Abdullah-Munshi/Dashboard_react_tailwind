import React from "react";
import dollerSign from "../../assets/dollerSign.png";
import refresh from "../../assets/refresh.png";

const Level = () => {
  return (
    <div className="bg-[#E4E4E4] rounded-xl">
      <div className="level-title-bar">
        <h4>Level 1</h4>
        <strong className="inline-flex justify-end items-center">$0</strong>
      </div>
      <div className="level-rating">
        <span className="active"></span>
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="level-balance-bar">
        <strong className="inline-flex items-center">
          <img src={dollerSign} alt="" />
          $10
        </strong>
        <strong className="inline-flex items-center">
          20
          <img src={refresh} alt="" />
        </strong>
      </div>
      <div className="w-full h-[1px] bg-[#B0B0B0] my-4"></div>
      <div>
        <div className="flex items-center justify-between">
          <h5 className="text-[#2E2E2E] text-bold text-sm">Bonuses</h5>
          <div className="flex items-center justify-end">
            <strong className="inline-flex items-center">
              <img src={dollerSign} alt="" />
              $10
            </strong>
            <strong className="inline-flex items-center">
              20
              <img src={refresh} alt="" />
            </strong>
          </div>
        </div>
        <div className="level-rating plc-2">
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

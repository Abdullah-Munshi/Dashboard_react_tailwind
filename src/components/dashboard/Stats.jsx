import React from "react";
const Stats = ({ value, label, icon }) => {
  return (
    <div className="grid grid-cols-[40px_auto] gap-4 items-center">
      <div className="text-center">
        <img src={icon} alt="icon" />
      </div>
      <div>
        <strong className="block text-primary text-[24px]">{value}</strong>
        <span className="block text-white text-sm font-bold">{label}</span>
      </div>
    </div>
  );
};

export default Stats;

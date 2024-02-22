import React from "react";
const Stats = ({ icon, label, value, subLabel }) => {
  return (
    <div className="grid grid-cols-[46px_auto] gap-4 items-center">
      <div className="text-center">
        <img src={icon} alt="icon" />
      </div>
      <div className="stats-content">
        <p className="text-white text-xs leading-tight mb-1">{label}</p>
        <strong
          className="block text-white text-2xl font-bold leading-tight"
          dangerouslySetInnerHTML={{ __html: value }}
        ></strong>
        <p className="text-[#9E9E9E] text-sm font-bold">{subLabel}</p>
      </div>
    </div>
  );
};

export default Stats;

import React from "react";

const ShortHeaderInfo = ({ icon, title, value }) => {
  return (
    <div className="grid grid-cols-[40px_auto] gap-4 align-items-center items-center">
      <img className="max-w-full block" src={icon} alt="icon" />
      <div>
        <span className="text-white text-sm font-medium block leading-tight mb-[1px]">
          {title}
        </span>
        <strong className="text-primary font-russoOne text-lg tracking-[1px] block leading-tight">
          {value}
        </strong>
      </div>
    </div>
  );
};

export default ShortHeaderInfo;

import React from "react";

export const ChainDark = ({ icon, name, isActive }) => {
  return (
    <button
      className={`border-[3px] ${
        isActive ? "border-primary" : "border-transparent"
      } bg-[#515151] rounded-[15px] shadow-lg shadow-black/10 py-3 px-[5px] sm:px-2 text-center w-[95px] sm:w-[100px] h-[125px]  `}
    >
      <span className="inline-flex justify-center">
        <img src={icon} alt="icon" className="max-h-[50px]" />
      </span>
      <span className="block text-white text-[13px] font-normal">{name}</span>
    </button>
  );
};

export const ChainLight = ({ icon, name, isActive }) => {
  return (
    <button
      className={`border-[3px] ${
        isActive ? "border-primary" : "border-transparent"
      } bg-white rounded-[15px] shadow-lg shadow-black/10 py-3 px-2 text-center w-[100px] h-[125px]  `}
    >
      <span className="inline-flex justify-center">
        <img src={icon} alt="icon" className="max-h-[50px]" />
      </span>
      <span className="block text-[#484848] text-[13px] font-normal">
        {name}
      </span>
    </button>
  );
};

export const TokenDark = ({ icon, name, isActive }) => {
  return (
    <button
      className={`border-[3px] ${
        isActive ? "border-primary" : "border-transparent"
      } bg-[#515151] rounded-[15px] shadow-lg shadow-black/10 w-[165px] h-[60px] px-3  grid grid-cols-[40px_auto] items-center gap-3`}
    >
      <span className="inline-flex items-center justify-center">
        <img src={icon} alt="icon" className="max-w-full mx-auto block" />
      </span>
      <strong className="block text-primary text-xl font-bold leading-tight text-left uppercase">
        <span className="block text-white text-[13px] font-normal capitalize">
          Pay Using
        </span>
        {name}
      </strong>
    </button>
  );
};

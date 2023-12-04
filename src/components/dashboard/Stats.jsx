import React from "react";
const Stats = ({ value, label, icon }) => {
  return (
    <div className='grid grid-cols-[54px_auto] gap-4 items-center'>
      <div>
        <img src={icon} alt='icon' />
      </div>
      <div>
        <strong className='block text-primary tracking-[3.05px] text-[34px] leading-none'>
          {value}
        </strong>
        <span className='block text-white tracking-[1.4px] font-medium text-base'>
          {label}
        </span>
      </div>
    </div>
  );
};

export default Stats;

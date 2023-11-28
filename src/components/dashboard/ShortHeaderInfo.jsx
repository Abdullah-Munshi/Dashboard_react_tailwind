import React from "react";

const ShortHeaderInfo = ({ icon, title, value }) => {
  return (
    <div className='grid grid-cols-[48px_auto] gap-4 align-items-center px-3 h-12 items-center min-w-[180px]'>
      <img className='max-w-full' src={icon} alt='icon' />
      <div>
        <span className='text-[#EE4C23] text-sm tracking-[.28px] font-normal block leading-tight mb-[1px]'>
          {title}
        </span>
        <strong className='text-[#243775] font-trunoSemibold text-lg tracking-[.6px] block'>
          {value}
        </strong>
      </div>
    </div>
  );
};

export default ShortHeaderInfo;

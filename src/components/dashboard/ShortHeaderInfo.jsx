import React from "react";

const ShortHeaderInfo = ({ icon, title, value }) => {
  return (
    <div className='grid grid-cols-[74px_auto] gap-1 align-items-center items-center'>
      <img className='max-w-full block' src={icon} alt='icon' />
      <div>
        <span className='text-primary font-longshotRegular text-[15px] tracking-[1.6px] font-normal block leading-tight mb-[1px]'>
          {title}
        </span>
        <strong className='text-white font-khand text-[21px] tracking-[.6px] block leading-tight'>
          {value}
        </strong>
      </div>
    </div>
  );
};

export default ShortHeaderInfo;

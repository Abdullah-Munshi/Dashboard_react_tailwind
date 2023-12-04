import React from "react";

const BlkSpent = ({ value, label, icon }) => {
  return (
    <div>
      <div className='flex items-center mb-2'>
        <img className='max-w-[80px] max-h-[75px]' src={icon} alt='icon' />
        <strong className='ml-4 text-3 font-longshotRegular leading-tight'>
          {value}
        </strong>
      </div>
      <p className='text-white text-xl font-normal mx-auto max-w-[160px] text-center'>
        {label}
      </p>
    </div>
  );
};

export default BlkSpent;

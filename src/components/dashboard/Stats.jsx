import React from "react";
const Stats = ({ totalCount, text, todayCount, icon }) => {
  return (
    <div className='grid grid-cols-[auto_90px] gap-4 items-center px-5 py-4 bg-gradient-one rounded-lg_next stats'>
      <div>
        <strong className='text-white block font-trunoSemibold text-[28px] leading-tight'>
          {totalCount}
        </strong>
        <p className='text-white font-trunoRegular tracking-[.48px] text-base leading-snug mb-3'>
          {text}
        </p>
        <p className='text-[#123377] font-trunoRegular tracking-[.48px] text-sm leading-snug'>
          <strong className='font-trunoSemibold text-lg inline-block mr-[2px]'>
            {todayCount}
          </strong>{" "}
          Today
        </p>
      </div>
      <div className=''>
        <img className='max-w-full ml-auto' src={icon} alt='icon' />
      </div>
    </div>
  );
};

export default Stats;

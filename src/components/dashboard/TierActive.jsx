import React from "react";
import Timer from "./Timer";

const TierActive = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 61200);
  return (
    <div>
      <div className='flex justify-between px-4 py-2 bg-[#1E2F65] rounded-tl-lg_next rounded-tr-lg_next mx-2 md:mx-5'>
        <h5 className='text-white font-trunoSemibold text-base md:text-lg'>
          <span className='inline-block text-[#F26D1F]'>#1</span> Bronze
        </h5>
        <p className='text-white font-trunoRegular text-sm md:text-base'>
          <strong className='inline-block font-trunoSemibold text-base md:text-lg'>
            $1.50
          </strong>{" "}
          daily for 40 days
        </p>
      </div>

      <div className='bg-white rounded-lg_next shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] border-1 border-[rgba(0,0,0,0.40)] grid md:grid-cols-[1.5fr_1fr] items-center gap-6 py-7 px-4 md:px-9'>
        <div className='flex items-center flex-wrap space-x-8 md:space-x-16'>
          <div className='text-left md:text-center'>
            <strong className='text-[#1D2E63] text-2xl md:text-[28px] font-trunoSemibold leading-tight mb-1 block'>
              $234/$123
            </strong>
            <p className='text-[15px] font-trunoRegular tracking-[.3px] text-[#898585]'>
              Total Claimed
            </p>
          </div>
          <div className='text-left md:text-center'>
            <strong className='text-[#F2731E] text-2xl md:text-[28px] font-trunoSemibold leading-tight mb-1 block'>
              $134
            </strong>
            <p className='text-[15px] font-trunoRegular tracking-[.3px] text-[#898585]'>
              Total Claimed
            </p>
          </div>
        </div>
        <div>
          <div className='text-right'>
            <p className='text-[#4A4A4A] font-trunoRegular text-[15px]'>
              Earnings expire in
            </p>
            <Timer expiryTimestamp={time} />
          </div>
        </div>
      </div>
      <div className='text-right px-2 md:px-5'>
        <div className='bg-[#17DF1F] rounded-bl-lg_next rounded-br-lg_next text-shadow-one text-[15px] py-2 px-3 text-white ml-auto inline-block'>
          Earnings Active
        </div>
      </div>
    </div>
  );
};

export default TierActive;

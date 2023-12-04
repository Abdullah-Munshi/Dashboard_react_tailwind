import React from "react";
import tree from "../../assets/tree.png";
import totalIncome from "../../assets/totalIncome.png";
import loader from "../../assets/loader.png";
import btnMore from "../../assets/btn-more.png";
import { TitlePrimaryTwo } from "../Utility";
import Stats from "./Stats";
const SinglePack = () => {
  return (
    <div className='space-y-6 sm:space-y-0 sm:grid grid-cols-2 sm:gap-6 items-center p-5 md:p-6'>
      <div className='space-y-4'>
        <div className='flex items-center mb-7 tertiary-ttile'>
          <TitlePrimaryTwo>BUY PACKS</TitlePrimaryTwo>
          <span className='inline-block ml-3 uppercase bg-[#393636] rounded-lg text-white text-base pb-[4px] pt-[6px] tracking-[0.72px] font-bold px-4 '>
            ACTIVE
          </span>
        </div>
        <div className='space-y-5'>
          <Stats value='$12,412' label='My Total Income' icon={totalIncome} />
          <Stats value='2' label='Total Cycles' icon={loader} />
        </div>
        <button className='h-[70px] inline-block'>
          <img
            className='max-w-full max-h-full block'
            src={btnMore}
            alt='btn'
          />
        </button>
      </div>
      <div className='text-center'>
        <img className='max-w-full mx-auto' src={tree} alt='tree' />
      </div>
    </div>
  );
};

export default SinglePack;

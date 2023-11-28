import React from "react";
import copyIcon from "../../assets/copy.png";
const CopyLink = ({ title, link }) => {
  return (
    <div className='relative pr-14 gird grid-cols-[auto_60px] items-center'>
      <div>
        <h4 className='text-white font-trunoSemibold text-[18px] font-bold'>
          {title}
        </h4>
        <input
          className='bg-transparent border-0 outline-none text-[#1F3068] text-[15px] font-trunoRegular w-full h-7'
          type='text'
          value={link}
          readOnly
        />
      </div>

      <button className='absolute right-0 bottom-0 ml-auto'>
        <img className='w-[54px] h-[54px]' src={copyIcon} alt='copy' />
      </button>
    </div>
  );
};

export default CopyLink;

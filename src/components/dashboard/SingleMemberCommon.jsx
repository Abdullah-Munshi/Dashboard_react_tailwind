import React from "react";

const SingleMemberCommon = ({ label, profile, value, color }) => {
  return (
    <div className='memberCommon text-center max-w-[120px]'>
      <img className='w-[65px] mx-auto' src={profile} alt='profile' />
      <p className='text-white font-longshotRegular text-2xl mt-[8px] leading-tight'>
        {label}
      </p>
      <p
        className={`text-primary text-xl uppercase font-longshotRegular tracking-[.2px] ${
          color ? "text-[#8192EA] " : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default SingleMemberCommon;

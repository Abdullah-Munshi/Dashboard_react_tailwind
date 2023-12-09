import React from "react";

const SingleMemberTop = ({ label, profile }) => {
  return (
    <div className='memberTop memberCommon text-center max-w-[120px] mx-auto'>
      <p className='font-longshotRegular text-xl text-white mb-[5px]'>
        {label}
      </p>
      <img className='w-[65px] mx-auto' src={profile} alt='profile' />
    </div>
  );
};

export default SingleMemberTop;

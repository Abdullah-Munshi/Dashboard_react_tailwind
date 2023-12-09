import React from "react";

import triangleShape from "../../assets/triangle-shape.png";
import memberImg from "../../assets/member-2.png";
import SingleMemberTop from "./SingleMemberTop";
import SingleMemberCommon from "./SingleMemberCommon";
const MemberTree = () => {
  return (
    <div className='text-center memberTree max-w-[180px] mx-auto space-y-4'>
      <SingleMemberTop label='You' profile={memberImg} />
      <div className='relative triangle-outer mx-auto'>
        <img className='w-full' src={triangleShape} alt='shape' />
      </div>
      <div className='flex justify-between'>
        <SingleMemberCommon label='#112' profile={memberImg} value='$25 BNB' />
        <SingleMemberCommon
          label='#142'
          profile={memberImg}
          value='CYCLED'
          color='blue'
        />
      </div>
    </div>
  );
};

export default MemberTree;

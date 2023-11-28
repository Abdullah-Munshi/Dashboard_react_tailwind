import React from "react";
import bgMembership from "../../assets/bg-membership.webp";

const Blk = ({ value, label }) => {
  return (
    <div>
      <strong className='text-white text-2xl md:text-[24px] font-trunoSemibold leading-tight mb-[2px] block'>
        {value}
      </strong>
      <p className='text-[15px] font-trunoSemibold tracking-[.3px] text-[#123377] '>
        {label}
      </p>
    </div>
  );
};

const BlkTwo = ({ value, label }) => {
  return (
    <div>
      <strong className='text-white text-3xl md:text-[36px] font-trunoSemibold leading-tight mb-2 block'>
        {value}
      </strong>
      <p className='text-[15px] font-trunoSemibold tracking-[.3px] text-[#123377]'>
        {label}
      </p>
    </div>
  );
};

const MembershipBlk = ({
  id,
  activeTiers,
  totalClaimed,
  totalPending,
  totalMembership,
}) => {
  return (
    <div
      className='rounded-lg_next overflow-hidden'
      style={{
        backgroundImage: `url(${bgMembership})`,
        backgroundPosition: "center -15px",
      }}
    >
      <div className='p-8 space-y-12 md:space-y-14'>
        <div className='flex justify-between'>
          <Blk value={`#${id}`} label='Membership ID' />
          <div className='text-right'>
            <Blk value={`${activeTiers}/9`} label='Active Tiers' />
          </div>
        </div>
        <div className='flex justify-around'>
          <BlkTwo value={`$${totalClaimed}`} label='Total Claimed' />
          <BlkTwo value={`$${totalPending}`} label='Pending Rewards' />
        </div>
        <div className='text-center !mb-4'>
          <button className='bg-gradient-one border-2 border-white drop-shadow-[drop-shadow(10px_10px_30px_rgba(0,0,0,0.30)] rounded-2xl text-lg font-trunoSemibold uppercase text-white px-4 py-3 w-[220px] h-[60px] text-shadow-one'>
            View Tiers
          </button>
        </div>
      </div>
      <div className='bg-gradient-two'>
        <p className='m-0 text-white text-[15px] tracking-[.3px] font-trunoRegular text-center px-4 py-5'>
          <strong className='block font-trunoSemibold text-lg'>
            {totalMembership} Memberships
          </strong>
          Purchased Globally after this Pack
        </p>
      </div>
    </div>
  );
};

export default MembershipBlk;

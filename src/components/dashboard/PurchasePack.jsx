import React from "react";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import packTrans from "../../assets/pack-trans.png";

const PurchasePack = () => {
  return (
    <div className='bg-gradient-three relative rounded-[20px] box-shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] overflow-hidden'>
      <div className='p-5 md:p-6 lg:p-8 pt-4 md:pt-5 lg:pt-7 relative'>
        <h3 className='text-white text-shadow-three font-trunoSemibold tracking-[.9px] mb-4 text-[24px] md:text-3xl'>
          Purchase Memberships
        </h3>
        <div className='mb-7'>
          <strong className='block text-white tracking-[1.95px] text-shadow-four leading-tight text-[50px] md:text-[60px] font-trunoSemibold'>
            $50
          </strong>
          <span className='tracking-[.54px] text-base text-white font-trunoRegular block'>
            Cost Per Pack
          </span>
        </div>
        <div className='grid grid-cols-[50px_auto_50px] max-w-[160px] mb-8'>
          <button className='bg-[#312D2D] hover:bg-[#123377] transition duration-200 rounded-[5px] inline-flex items-center justify-center w-[45px] h-[45px]'>
            <img src={minus} alt='-' className='img-fluid' />
          </button>
          <input
            type='text'
            value='1'
            readOnly
            className='border-0 h-[45px] w-full text-black text-3xl font-extrabold bg-transparent outline-none text-center'
          />
          <button className='bg-[#312D2D] hover:bg-[#123377] transition duration-200 rounded-[5px] inline-flex items-center justify-center w-[45px] h-[45px]'>
            <img src={plus} alt='+' className='img-fluid' />
          </button>
        </div>
        <button className='bg-gradient-four border-2 border-white drop-shadow-[drop-shadow(10px_10px_30px_rgba(0,0,0,0.30)] rounded-lg_next text-lg font-trunoSemibold uppercase text-white inline-flex justify-between items-center min-w-[300px] px-6 py-3  h-[60px] text-shadow-one'>
          <span>Purchase now</span>{" "}
          <span className='inline-block ml-3'>$50</span>
        </button>
      </div>
      <img
        className='absolute pack-trans-img hidden lg:block'
        src={packTrans}
        alt='img'
      />
    </div>
  );
};

export default PurchasePack;

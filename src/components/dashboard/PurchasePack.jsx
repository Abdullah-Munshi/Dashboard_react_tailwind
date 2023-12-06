import React from "react";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import coin from "../../assets/coin.png";
import btnPurchase from "../../assets/btn-purchase.png";
import b1 from "../../assets/b-1.png";
import b2 from "../../assets/b-2.png";
import b3 from "../../assets/b-3.png";
import { TitlePrimaryTwo } from "../Utility";
import BlkSpent from "./BlkSpent";

const PurchasePack = () => {
  return (
    <div className='p-5 md:p-8 relative rounded-[20px] box-shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)]'>
      <div className='grid grid-cols-1 lg:grid-cols-[350px_auto] gap-6 items-end'>
        <div className='space-y-7'>
          <div className='flex items-center'>
            <TitlePrimaryTwo>BUY PACKS</TitlePrimaryTwo>
            <span className='inline-block ml-3 bg-[#393636] rounded-lg text-white text-base pb-[4px] pt-[6px] tracking-[0.72px] font-bold px-4 '>
              $65 Per Pack
            </span>
          </div>
          <div className=''>
            <h6 className='text-white tracking-[1.3px] font-medium text-lg mb-4'>
              Choose how many packs to buy
            </h6>
            <div className='grid grid-cols-[50px_auto_50px] max-w-[160px]'>
              <button className='bg-[#923131] hover:bg-[#123377] transition duration-200 rounded-[5px] inline-flex items-center justify-center w-[45px] h-[45px]'>
                <img src={minus} alt='-' className='img-fluid' />
              </button>
              <input
                type='text'
                value='1'
                readOnly
                className='border-0 h-[45px] w-full text-primary text-3xl font-extrabold bg-transparent outline-none text-center'
              />
              <button className='bg-[#1F844E] hover:bg-[#123377] transition duration-200 rounded-[5px] inline-flex items-center justify-center w-[45px] h-[45px]'>
                <img src={plus} alt='+' className='img-fluid' />
              </button>
            </div>
          </div>

          <button className='h-[100px]'>
            <img
              className='max-w-full block max-h-full'
              src={btnPurchase}
              alt='btn'
            />
          </button>
        </div>
        <div>
          <h3 className='text-primary text-3xl translate-y-1 font-longshotRegular font-normal tracking-[1.5px] mb-6'>
            How $65 is Spent
          </h3>
          <div className='p-5 space-y-6 md:space-y-0 md:p-7 mt-6 flex justify-around flex-wrap rounded-2xl_next bg-[rgba(24,22,22,0.70)] box-shadow-[0px_11px_10px_0px_rgba(0,0,0,0.10)]'>
            <BlkSpent
              value='$15'
              label='Fast start bonus to 
your direct sponsor'
              icon={b1}
            />
            <BlkSpent
              value='$15'
              label='Enrolls you into 1x2
              Global 3x Cycler'
              icon={b2}
            />
            <BlkSpent
              value='$15'
              label='Enrolls you into 10 UNI-LEVEL Personal Build.'
              icon={b3}
            />
          </div>
        </div>
      </div>
      <img
        className='absolute pack-trans-img hidden md:block'
        src={coin}
        alt='img'
      />
    </div>
  );
};

export default PurchasePack;

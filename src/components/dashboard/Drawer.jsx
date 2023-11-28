import React from "react";
import ShortHeaderInfo from "./ShortHeaderInfo";
import currency from "../../assets/currency.png";
import wallet from "../../assets/wallet.png";
import user from "../../assets/user.png";

const Drawer = ({ onCloseDrawer }) => {
  return (
    <div>
      <button onClick={onCloseDrawer} className='text-white mb-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-x-lg'
          viewBox='0 0 16 16'
        >
          <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
        </svg>
      </button>
      <div className='space-y-5 mb-4'>
        <ShortHeaderInfo
          icon={currency}
          title='Wallet Balance'
          value='23 BNB'
        />
        <ShortHeaderInfo
          icon={wallet}
          title='Connected Wallet'
          value='0x123456789'
        />
        <ShortHeaderInfo icon={user} title='Hey, ' value='helloword (#12)' />
      </div>
    </div>
  );
};

export default Drawer;

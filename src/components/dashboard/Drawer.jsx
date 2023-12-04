import React from "react";
import ShortHeaderInfo from "./ShortHeaderInfo";
import currency from "../../assets/currency.png";
import wallet from "../../assets/wallet.png";
import user from "../../assets/user.png";
import Stats from "./Stats";
import i1 from "../../assets/i-1.png";
import i2 from "../../assets/i-2.png";
import i3 from "../../assets/i-3.png";
import i4 from "../../assets/i-4.png";
import i5 from "../../assets/i-5.png";
import i6 from "../../assets/i-6.png";
import i7 from "../../assets/i-7.png";
import st1 from "../../assets/st-1.png";
import st2 from "../../assets/st-2.png";
import st3 from "../../assets/st-3.png";
import st4 from "../../assets/st-4.png";
import { TitlePrimary } from "../Utility";
import MenuLink from "./MenuLink";

const Drawer = ({ onCloseDrawer }) => {
  return (
    <div className='drawer'>
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

      <div className='space-y-5 mb-4 -ml-3'>
        <ShortHeaderInfo icon={currency} title='BNB BAlANCE' value='23 BNB' />
        <ShortHeaderInfo icon={wallet} title='WALLET' value='0x13..3Da' />
        <ShortHeaderInfo icon={user} title='Username' value='ID 13' />
      </div>

      <div className='space-y-7 mt-7'>
        <ul>
          <MenuLink icon={i1} text='Dashboard' />
          <MenuLink icon={i2} text='1x2 Plan' />
          <MenuLink icon={i3} text='UniLevel Plan' />
          <MenuLink icon={i4} text='My Referrals' />
          <MenuLink icon={i5} text='All Activity' />
          <MenuLink icon={i6} text='Connect Telegram' />
          <MenuLink icon={i7} text='Logout' />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

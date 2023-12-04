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

      <div className='space-y-7 mt-7'>
        <div className='grid grid-cols-2 gap-4 menu'>
          <MenuLink icon={i1} text='Dashboard' />
          <MenuLink icon={i2} text='Memberships' notification='13' />
          <MenuLink icon={i3} text='Referrals' />
          <MenuLink icon={i4} text='Payments' />
          <MenuLink icon={i5} text='Alert System' />
          <MenuLink icon={i6} text='Products' />
          <MenuLink icon={i7} text='View Contract' />
        </div>
        <div>
          <TitlePrimary>My Statistics</TitlePrimary>
          <div className='space-y-4'>
            <Stats
              totalCount='500'
              text='Total Memberships'
              todayCount='123'
              icon={st1}
            />
            <Stats
              totalCount='500'
              text='Total Claimed'
              todayCount='123'
              icon={st2}
            />
            <Stats
              totalCount='500'
              text='Sponsor Match'
              todayCount='123'
              icon={st3}
            />
            <Stats
              totalCount='500'
              text='Fast Start Earned'
              todayCount='123'
              icon={st4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

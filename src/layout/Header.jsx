import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ShortHeaderInfo from "../components/dashboard/ShortHeaderInfo";
import logo from "../assets/logo.png";
import currency from "../assets/currency.png";
import wallet from "../assets/wallet.png";
import user from "../assets/user.png";
import Drawer from "../components/dashboard/Drawer";
import { Overlay } from "../components/Utility";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1279 });
  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <header className='bg-transparent px-4 md:px-5'>
      <Overlay overlay={drawer && isSmallScreen} />
      <div className='flex items-center justify-between relative z-50'>
        <Link className='-mb-8'>
          <img
            src={logo}
            alt='logo'
            className='max-w-[100px] lg:max-h-[124px] lg:max-w-[250px]'
          />
        </Link>
        <div className='hidden xl:block ml-auto space-y-3'>
          <div className='flex items-center justify-end space-x-5 xl:space-x-8'>
            <ShortHeaderInfo
              icon={currency}
              title='BNB BAlANCE'
              value='23 BNB'
            />
            <ShortHeaderInfo icon={wallet} title='WALLET' value='0x13..3Da' />
            <ShortHeaderInfo icon={user} title='Username' value='ID 13' />
          </div>
        </div>
        <div
          className={`${
            drawer && isSmallScreen ? "translate-x-0" : "translate-x-full"
          } fixed h-screen w-[290px] bg-black right-0 top-0 z-50 p-6 transition duration-300 yScroll`}
        >
          <Drawer onCloseDrawer={closeDrawer} />
        </div>

        <button
          onClick={() => setDrawer(true)}
          className='mobile-bar ml-auto mr-4 xl:hidden'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#123377'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-9 h-9 transition duration-300'
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

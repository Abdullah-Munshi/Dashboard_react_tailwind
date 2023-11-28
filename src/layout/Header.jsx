import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ShortHeaderInfo from "../components/dashboard/ShortHeaderInfo";
import logo from "../assets/logo.png";
import currency from "../assets/currency.png";
import wallet from "../assets/wallet.png";
import user from "../assets/user.png";
import telegram from "../assets/telegram.png";
import Drawer from "../components/dashboard/Drawer";
import { Overlay } from "../components/Utility";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <header className='bg-white px-4 py-3 md:px-6'>
      <Overlay overlay={drawer && isSmallScreen} />
      <div className='flex items-center justify-between relative z-50'>
        <Link>
          <img src={logo} alt='logo' className='max-h-[80px] max-w-[250px]' />
        </Link>
        <div className='hidden lg:block ml-auto mr-8 space-y-3'>
          <div className='flex items-center justify-end space-x-5 xl:space-x-8'>
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
            <ShortHeaderInfo
              icon={user}
              title='Hey, '
              value='helloword (#12)'
            />
          </div>
        </div>
        <div
          className={`${
            drawer && isSmallScreen ? "translate-x-0" : "translate-x-full"
          } fixed h-screen w-[290px] bg-black right-0 top-0 z-50 p-6 transition duration-300`}
        >
          <Drawer onCloseDrawer={closeDrawer} />
        </div>

        <button
          onClick={() => setDrawer(true)}
          className='mobile-bar ml-auto mr-4 lg:hidden'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
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
        <Link className='w-[48px]'>
          <img className='max-w-full' src={telegram} alt='telegram' />
        </Link>
      </div>
    </header>
  );
};

export default Header;

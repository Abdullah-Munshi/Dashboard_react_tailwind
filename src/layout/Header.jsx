import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ShortHeaderInfo from "../components/dashboard/ShortHeaderInfo";
import logo from "../assets/logo.png";
import currency from "../assets/currency.png";
import wallet from "../assets/wallet.png";
import user from "../assets/user.png";
import iconPeople from "../assets/people.png";
import Drawer from "../components/dashboard/Drawer";
import { Overlay } from "../components/Utility";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1279 });
  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <header className="bg-gradient-to-b from-[#373737] to-[#1E1E1E] px-4 md:px-6 py-3 lg:py-4 relative z-10 shadow-lg shadow-black/50">
      <Overlay overlay={drawer && isSmallScreen} />
      <div className="grid grid-cols-[110px_auto] gap-10 items-center relative z-50">
        <Link className="">
          <img src={logo} alt="logo" className="w-14 md:w-16 xl:w-[100px]" />
        </Link>
        <div className="hidden xl:block space-y-3">
          <div className="flex items-center justify-end space-x-5 xl:space-x-10">
            <ShortHeaderInfo
              icon={currency}
              title="BNB Balance"
              value="5.3BNB"
            />
            <ShortHeaderInfo icon={wallet} title="WALLET" value="0x123456789" />
            <ShortHeaderInfo icon={user} title="Username" value="Level 10" />
          </div>
          <span className=" bg-[#0B0B0B] w-full h-[1px] my-4 block"></span>
          <div className="grid grid-cols-[auto_40px] items-center gap-4">
            <div className="space-y-1 text-right">
              <h4 className="text-white text-sm font-medium leading-tight">
                Personal Inviter Link
              </h4>
              <Link className="text-primary text-lg font-bold inline-block leading-tight">
                https://heal.estate.io/grantor/username
              </Link>
            </div>
            <img className="max-w-full" src={iconPeople} alt="ppl" />
          </div>
        </div>
        <div
          className={`${
            drawer && isSmallScreen ? "translate-x-0" : "translate-x-full"
          } fixed h-screen w-[290px] bg-black right-0 top-0 z-50 p-6 transition duration-300 yScroll xl:hidden`}
        >
          <Drawer onCloseDrawer={closeDrawer} />
        </div>

        <button
          onClick={() => setDrawer(true)}
          className="mobile-bar ml-auto xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FCDF8F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-9 h-9 transition duration-300"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

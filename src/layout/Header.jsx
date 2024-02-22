import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Drawer from "../components/dashboard/Drawer";
import { Overlay } from "../components/common/Utils";

import IconLogo from "../assets/logo.png";
import IconWallet from "../assets/wallet.png";
import IconNetwork from "../assets/network.png";

import Logo from "../components/header/Logo";
import UserInfo from "../components/header/UserInfo";
import Network from "../components/header/Network";
import { ButtonGray } from "../components/common/Buttons";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1279 });
  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <header className="header bg-transparent px-4 py-[14px] md:px-6 md:py-5 lg:px-8 lg:py-6">
      <Overlay overlay={drawer && isSmallScreen} />
      <div className="flex items-center justify-between">
        <Logo logo={IconLogo} />
        <div className="hidden md:flex space-x-10">
          <UserInfo
            icon={IconWallet}
            label="Connected Wallet"
            value="0x123456789"
          />
          <div className="flex items-center space-x-3">
            <Network icon={IconNetwork} />
            <ButtonGray onClick={() => console.log("Disconnect")}>
              Disconnect
            </ButtonGray>
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
          className="mobile-bar ml-auto md:hidden"
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

import { Avatar, Button } from "@material-tailwind/react";
import CopyButtonWithTooltip from "../components/dashboard/CopyButtonWithTooltip";
import bellActive from "../assets/bell-active.png";
import plus from "../assets/plus.png";
import avater from "../assets/Avatar.png";
import logoSingle from "../assets/logo-single.png";
import { SidebarWithBurgerMenu } from "../components/dashboard/SidebarWithBurgerMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-3 xl:px-8 py-3 md:py-5 lg:block items-center justify-between bg-white border-b border-[#DCDCDC]">
      <div className="flex items-center justify-between mb-3 lg:mb-0">
        <div className="flex items-center space-x-4">
          <Link>
            <img className="w-[64px]" src={logoSingle} alt="" />
          </Link>
          <div className="hidden lg:block">
            <CopyButtonWithTooltip />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-3 lg:space-x-6 xl:space-x-8">
          <div className="-mr-[5px] lg:-mr-[12px]">
            <img src={bellActive} alt="" />
          </div>
          <Avatar src={avater} />
          <div className="hidden lg:block">
            <Button className="bg-[#04D88C] inline-flex items-center gap-3 rounded-full text-base font-semibold capitalize shadow-none">
              Buy Entries <img src={plus} alt="" />
            </Button>
          </div>
          <div className="xl:hidden !-mr-2 lg:!ml-3">
            <SidebarWithBurgerMenu />
          </div>
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3">
        <div>
          <CopyButtonWithTooltip />
        </div>
        <Button className="bg-[#04D88C] flex justify-between md:inline-flex items-center gap-3 rounded-full text-base font-semibold capitalize shadow-none">
          Buy Entries <img src={plus} alt="" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

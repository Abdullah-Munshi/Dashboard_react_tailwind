import { Avatar, Button } from "@material-tailwind/react";
import CopyButtonWithTooltip from "../components/dashboard/CopyButtonWithTooltip";
import bellActive from "../assets/bell-active.png";
import plus from "../assets/plus.png";
import avater from "../assets/Avatar.png";
import { SidebarWithBurgerMenu } from "../components/dashboard/SidebarWithBurgerMenu";

const Header = () => {
  return (
    <header className="px-8 py-5 flex items-center justify-between bg-white border-b border-[#DCDCDC]">
      <CopyButtonWithTooltip />
      <div className="flex items-center justify-end space-x-8">
        <div className="-mr-[12px]">
          <img src={bellActive} alt="" />
        </div>
        <Avatar src={avater} />
        <Button className="bg-[#04D88C] inline-flex items-center gap-3 rounded-full text-base font-semibold capitalize shadow-none">
          Buy Entries <img src={plus} alt="" />
        </Button>
        <div className="md:hidden">
          <SidebarWithBurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

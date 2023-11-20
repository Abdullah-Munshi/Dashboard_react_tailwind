import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoLong from "../assets/logo-long.png";
const Header = () => {
  return (
    <header className="bg-[#1B1B1B] px-4 py-4 md:px-6">
      <div className="flex items-center justify-between ">
        <Link>
          <img src={logoLong} alt="logo" className="h-[60px] hidden lg:block" />
          <img src={logo} alt="logo" className="h-[50px] lg:hidden" />
        </Link>
        <div className="fixed h-screen w-[290px] bg-white right-0 top-0 z-50 md:relative md:bg-transparent md:h-auto md:w-auto">
          offcanvas menu
        </div>
        <button class="mobile-bar md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-9 h-9 transition duration-300"
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

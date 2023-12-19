import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import walletBg from "../assets/wallet-bg.png";
import Menu from "../components/dashboard/Menu";

const ConnectedWallet = () => {
  return (
    <div className="inline-flex items-center justify-end space-x-1 sm:space-x-3">
      <div className="font-oxanium text-white relative px-3 py-3 pb-[10px] min-w-[150px] lg:min-w-[180px]">
        <img
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0"
          src={walletBg}
          alt="bg"
        />
        <p className="block txt_shadow_one font-bold text-xs_next relative z-0 leading-tight">
          Connected Wallet
        </p>
        <strong className="block txt_shadow_one text-base leading-tight font-extrabold relative z-0">
          0xAbb1..aSA1
        </strong>
      </div>

      <button>
        <svg
          width="44"
          height="43"
          viewBox="0 0 44 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2304_86)">
            <path
              d="M22.1406 43C34.0147 43 43.6406 33.3741 43.6406 21.5C43.6406 9.62588 34.0147 0 22.1406 0C10.2665 0 0.640625 9.62588 0.640625 21.5C0.640625 33.3741 10.2665 43 22.1406 43Z"
              fill="#F44336"
            />
            <path
              d="M29.9187 32.8375C29.4506 32.839 28.9869 32.7475 28.5544 32.5685C28.1219 32.3894 27.7292 32.1263 27.3992 31.7944L22.1417 26.5387L16.8843 31.797C16.2161 32.4652 15.3098 32.8406 14.3648 32.8406C13.4198 32.8406 12.5135 32.4652 11.8452 31.797C11.177 31.1287 10.8016 30.2224 10.8016 29.2774C10.8016 28.3324 11.177 27.4261 11.8452 26.7579L17.1027 21.4996L11.8444 16.2422C11.1762 15.574 10.8008 14.6677 10.8008 13.7227C10.8008 12.7777 11.1762 11.8714 11.8444 11.2032C12.5126 10.5349 13.4189 10.1595 14.3639 10.1595C15.3089 10.1595 16.2152 10.5349 16.8835 11.2032L22.1417 16.4606L27.3992 11.2023C27.73 10.8714 28.1228 10.609 28.5551 10.4299C28.9874 10.2509 29.4508 10.1587 29.9187 10.1587C30.3866 10.1587 30.8499 10.2509 31.2822 10.4299C31.7145 10.609 32.1073 10.8714 32.4382 11.2023C32.7691 11.5332 33.0315 11.926 33.2106 12.3583C33.3897 12.7906 33.4818 13.2539 33.4818 13.7218C33.4818 14.1898 33.3897 14.6531 33.2106 15.0854C33.0315 15.5177 32.7691 15.9105 32.4382 16.2414L27.1808 21.4996L32.4391 26.7571C32.9373 27.2552 33.2766 27.89 33.414 28.581C33.5514 29.272 33.4808 29.9883 33.2111 30.6392C32.9414 31.2901 32.4847 31.8464 31.8988 32.2377C31.3129 32.629 30.6241 32.8377 29.9195 32.8375H29.9187Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2304_86">
              <rect
                width="43"
                height="43"
                fill="white"
                transform="translate(0.640625)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-transparent">
      <div className="flex items-center justify-start md:justify-center z-50 relative h-[56px]">
        <Link>
          <img
            src={logo}
            alt="logo"
            className="max-w-[120px] md:max-h-[100px] xl:max-h-[124px] lg:max-w-[200px]"
          />
        </Link>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <ConnectedWallet />
        </div>

        <div className="fixed sm:absolute w-full left-0 right-0 bottom-0 sm:bottom-auto sm:top-[70px] lg:top-[80px] z-50 bg-[rgba(3,0,12,0.30)] py-3 sm:border-[3px] sm:border-secondary sm:rounded-2xl_next sm:mx-auto sm:px-4 sm:py-3 sm:w-[380px]">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;

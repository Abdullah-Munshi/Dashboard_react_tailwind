import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import avater from "../assets/avater.png";
import wallet from "../assets/wallet.svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = ({ onToggleSidebar }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1279 });
  return (
    <header className='bg-[rgba(20,82,156,0.45)] shadow-one rounded-10'>
      <div className='flex items-center justify-between xl:block px-4 md:px-6'>
        <Link className='xl:hidden'>
          <img src={logo} alt='logo' className='w-[90px] -ml-1' />
        </Link>
        <div className='flex items-center justify-end space-x-3 md:space-x-5 h-[90px]'>
          {/* Wallet markup start  */}
          <div className='flex items-center space-x-3 xl:border-r xl:border-[#627A90] xl:mr-[3px] xl:pr-6'>
            <div className='text-end hidden xl:block font-ibm-plex-sans '>
              <span className='block text-white text-xs_next font-normal'>
                Registered Wallet
              </span>
              <strong className='block text-white text-lg leading-tight font-bold'>
                0x123aBcD...0FaX
              </strong>
            </div>
            <Menu as='div' className='relative'>
              <div className='bg-[#002464] xl:bg-transparent rounded-10 xl:rounded-none w-[36px] sm:w-[40px] h-[36px] sm:h-[40px] xl:w-auto xl:h-auto flex items-center justify-center'>
                <Menu.Button disabled={isSmallScreen ? false : true}>
                  <img
                    src={wallet}
                    alt='wallet'
                    className='w-6 md:w-7 xl:w-7'
                  />
                </Menu.Button>
              </div>
              {isSmallScreen && (
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items
                    as='ul'
                    className='absolute top-full right-0 mt-1 w-48 origin-top-right z-30 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  >
                    <Menu.Item>
                      <li className='px-4 py-2 space-x-1'>
                        <span class='block text-black text-sm font-ibm-plex-sans font-normal'>
                          Registered Wallet
                        </span>
                        <strong class='block text-black text-lg leading-tight'>
                          0x123aBcD...0FaX
                        </strong>
                      </li>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              )}
            </Menu>
          </div>
          {/* Wallet markup end  */}
          {/* User markup start  */}
          <div className='flex items-center xl:space-x-3'>
            <Menu as='div' className='relative'>
              <div className='flex items-center justify-center'>
                <Menu.Button disabled={isSmallScreen ? false : true}>
                  <img
                    src={avater}
                    alt='Avater'
                    className='w-9 h-9 sm:w-[40px] sm:h-[40px] rounded-full block'
                  />
                </Menu.Button>
              </div>
              {isSmallScreen && (
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items
                    as='ul'
                    className='absolute top-full right-0 mt-1 w-48 origin-top-right z-30 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  >
                    <Menu.Item>
                      <li className='px-4 py-2 space-x-1'>
                        <span>Howdy</span>
                        <strong>Username</strong>
                      </li>
                    </Menu.Item>
                    <Menu.Item>
                      <li className='px-4 py-2 space-x-1'>
                        <span>User ID</span>
                        <strong>129</strong>
                      </li>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              )}
            </Menu>

            <div className='hidden xl:block font-ibm-plex-sans'>
              <span className='block text-white text-xs_next font-normal'>
                User ID
              </span>
              <strong className='block text-white text-base_next leading-tight font-bold'>
                129
              </strong>
            </div>
          </div>
          {/* User markup end  */}

          <div className='bg-primary rounded-10 w-[36px] sm:w-[40px] h-[36px] sm:h-[40px] flex items-center justify-center'>
            <svg
              width='25'
              height='26'
              viewBox='0 0 25 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3654 4.34496C13.8023 4.15216 13.1995 4.04791 12.5744 4.04791C9.75031 4.04791 7.38 6.17597 7.07669 8.98374L6.80764 11.4745C6.80034 11.542 6.79669 11.5758 6.79279 11.6093C6.66777 12.682 6.32682 13.7184 5.7905 14.6558C5.77381 14.685 5.7567 14.7143 5.72253 14.7729L5.72242 14.7731L5.14227 15.7677C4.59222 16.7106 4.3172 17.1821 4.40375 17.566C4.44802 17.7623 4.55048 17.9407 4.69776 18.0779C4.98574 18.3461 5.53157 18.3461 6.62323 18.3461H18.5256C19.6173 18.3461 20.1631 18.3461 20.4511 18.0779C20.5983 17.9407 20.7008 17.7623 20.7451 17.566C20.8316 17.1821 20.5566 16.7106 20.0066 15.7677L19.4264 14.7731L19.4263 14.773C19.3921 14.7143 19.375 14.685 19.3583 14.6558C18.9133 13.8779 18.6028 13.0319 18.4385 12.1535C15.652 12.1029 13.546 9.78668 13.546 7.1118C13.546 6.10476 13.8445 5.14857 14.3654 4.34496ZM16.8343 6.05141C16.6514 6.36051 16.546 6.7235 16.546 7.1118C16.546 8.08183 17.2034 8.89393 18.085 9.10246L18.0721 8.98374C17.9517 7.86892 17.5054 6.86126 16.8343 6.05141Z'
                fill='#373345'
              />
              <path
                d='M9.59578 18.3461C9.59578 18.7484 9.67282 19.1468 9.82252 19.5186C9.97221 19.8903 10.1916 20.228 10.4682 20.5125C10.7448 20.7971 11.0732 21.0227 11.4346 21.1767C11.796 21.3307 12.1833 21.4099 12.5745 21.4099C12.9657 21.4099 13.353 21.3307 13.7144 21.1767C14.0758 21.0227 14.4042 20.7971 14.6808 20.5125C14.9574 20.228 15.1768 19.8903 15.3265 19.5185C15.4762 19.1468 15.5532 18.7484 15.5532 18.3461L12.5745 18.3461H9.59578Z'
                fill='#373345'
              />
              <path
                d='M18.5318 9.6544C19.9179 9.6544 21.0177 8.50266 21.0177 7.1118C21.0177 5.72095 19.9179 4.56921 18.5318 4.56921C17.1458 4.56921 16.046 5.72095 16.046 7.1118C16.046 8.50266 17.1458 9.6544 18.5318 9.6544Z'
                fill='#373345'
                stroke='#373345'
              />
            </svg>
          </div>
          <button
            className='xl:hidden'
            disabled={isSmallScreen ? false : true}
            onClick={() => onToggleSidebar()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ffffff'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-8 h-8'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

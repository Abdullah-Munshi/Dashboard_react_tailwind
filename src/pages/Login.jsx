import React from "react";
import bgLoginPge from "../assets/bg-login.webp";
import logo from "../assets/logo.png";
import btnCreateaccount from "../assets/btn-createaccount.png";
import btnLogin from "../assets/btn-login.png";
import btnConnect from "../assets/btn-connectwallet.png";
import lock from "../assets/lock.png";
import titleimg from "../assets/LOGIN ACCOUNT.png";

const Login = () => {
  return (
    <div className='min-h-screen relative font-khand'>
      <div
        className='w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgLoginPge})` }}
      ></div>
      <div className='min-h-screen flex flex-col justify-center z-10 relative py-8'>
        <main>
          <div className='max-w-[1080px] mx-auto px-4 lg:px-8 lg:grid grid-cols-2 lg:gap-6 items-center'>
            <div className='text-center mb-9 lg:mb-0'>
              <img
                className='w-[150px] lg:w-[200px] mx-auto mb-6'
                src={logo}
                alt='Logo'
              />
              <p className='text-white font-semibold text-base lg:text-lg mb-2 text-center'>
                New here?{" "}
              </p>
              <button className='h-[80px] inline-block'>
                <img
                  className='max-w-full max-h-full block'
                  src={btnCreateaccount}
                  alt='btn'
                />
              </button>
            </div>
            <div className='lgn-blk relative rounded-2xl_next border-[3px] border-[#F9F293] px-4 py-6 md:py-12 md:px-14'>
              <div className=' space-y-6 pt-2'>
                <div className='h-[35px] lg:h-[45px] mb-7 lg:mb-10'>
                  <img
                    className='max-w-full max-h-full block mx-auto'
                    src={titleimg}
                    alt='title'
                  />
                </div>
                <div className='text-center'>
                  <p className='text-[#DFCA45] font-semibold text-xl md:text-[22px] mb-3'>
                    1. Connect BSC Wallet
                  </p>
                  <button className='h-[90px] inline-block'>
                    <img
                      className='max-w-full max-h-full block'
                      src={btnConnect}
                      alt='btn'
                    />
                  </button>
                </div>
                <div className='text-center'>
                  <p className='text-[#DFCA45] font-semibold text-xl md:text-[22px] mb-3'>
                    2. Authenticate wallet
                  </p>
                  <button className='h-[80px] inline-block'>
                    <img
                      className='max-w-full max-h-full block'
                      src={btnLogin}
                      alt='btn'
                    />
                  </button>
                </div>
              </div>

              <img
                className='absolute -left-10 -bottom-10 w-[60px] lg:w-[80px]'
                src={lock}
                alt='lock'
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;

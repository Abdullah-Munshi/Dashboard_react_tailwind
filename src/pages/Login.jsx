import React from "react";
import bgLoginPge from "../assets/bg-login.jpg";
import logo from "../assets/logo-2.png";
const Login = () => {
  return (
    <div className='min-h-screen relative font-trunoRegular'>
      <div
        className='w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgLoginPge})` }}
      ></div>
      <div className='min-h-screen flex flex-col justify-center z-10 relative py-8'>
        <main>
          <div className='max-w-[1080px] mx-auto px-4 lg:px-8'>
            <div className='text-center mb-9'>
              <h1 className='text-[#123377] font-trunoSemibold text-[26px] md:text-[40px] mb-1'>
                Welcome to
              </h1>
              <img
                className='w-[200px] md:w-[300px] mx-auto mb-8'
                src={logo}
                alt='Logo'
              />
              <p className='text-[#090909] text-base mb-2 text-center'>
                New here?{" "}
              </p>
              <button className='bg-gradient-eight border-2 border-[#EE3D24] drop-shadow-[drop-shadow(10px_10px_30px_rgba(0,0,0,0.30)] rounded-lg_next text-base md:text-xl font-trunoSemibold uppercase text-white px-5 py-3 min-w-[290px] h-[60px] text-shadow-one'>
                Create an account first
              </button>
            </div>
            <div className='bg-gradient-seven rounded-[20px] border-[3px] border-[#243775] shadow-[20px_20px_50px_0px_rgba(0,0,0,0.40)] px-4 py-6 md:py-12 md:px-14'>
              <div className='md:flex justify-center space-y-6 md:space-y-0 md:space-x-14'>
                <div className='text-center'>
                  <p className='text-[#243775] font-trunoSemibold text-xl md:text-[22px] mb-3'>
                    1. Connect BSC Wallet
                  </p>
                  <button class='bg-gradient-one border-2 border-[#243775] drop-shadow-[drop-shadow(10px_10px_30px_rgba(0,0,0,0.30)] rounded-lg_next text-base md:text-xl font-trunoSemibold uppercase text-white px-5 py-3 min-w-[290px] h-[60px] text-shadow-one'>
                    Connect Wallet
                  </button>
                </div>
                <div className='text-center'>
                  <p className='text-[#243775] font-trunoSemibold text-xl md:text-[22px] mb-3'>
                    2. Authenticate wallet
                  </p>
                  <button class='bg-gradient-one border-2 border-[#243775] drop-shadow-[drop-shadow(10px_10px_30px_rgba(0,0,0,0.30)] rounded-lg_next text-base md:text-xl font-trunoSemibold uppercase text-white px-5 py-3 min-w-[290px] h-[60px] text-shadow-one'>
                    login Now
                  </button>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-center mt-[40px] md:mt-[60px]'>
                  <div className='flex items-center justify-center mr-4'>
                    <span class='loader'></span>
                  </div>
                  <p className='text-sm md:text-base leading-tight font-trunoRegular text-[#464669]'>
                    <strong className='block font-trunoSemibold text-black text-base md:text-xl'>
                      Validating Transaction
                    </strong>{" "}
                    Your Transaction : 0xD123AC..AS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;

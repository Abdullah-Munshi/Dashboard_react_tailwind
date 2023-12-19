import React from "react";
import bgLoginPge from "../assets/bg.webp";
import logo from "../assets/logo.png";
import disk from "../assets/disk-1.png";

const ConnectNow = () => {
  return (
    <button className="w-full h-full border-[5px] border-white bg-[#211F1D] rounded-full inline-flex flex-col items-center justify-center leading-[1] font-orbitron text-white text-4xl uppercase transition duration-300 hover:border-primary hover:text-primary">
      <span className="block text-lg">CONNECT</span>
      NOW
    </button>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen relative font-oxanium font-normal">
      <div
        className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center-top"
        style={{ backgroundImage: `url(${bgLoginPge})` }}
      >
        <span className="w-full h-full bg-one block absolute top-0 left-0 right-0 bottom-0"></span>
      </div>
      <div className="min-h-screen flex flex-col justify-center z-10 relative overflow-hidden">
        <main>
          <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-8 flex items-center justify-center min-h-[calc(100vh_-_70px)]">
            <div className="disk_wrapper mx-auto w-[780px] relative">
              <img className="w-full" src={disk} alt="Disk Image" />
              <div className="disk_top text-center absolute left-1/2 -translate-x-1/2 z-10">
                <img className="logo mx-auto block" src={logo} alt="Logo" />
                <p className="txt_1 font-euphoriaScript">
                  People helping people
                </p>
              </div>
              <div className="middle_point absolute left-1/2 -translate-x-1/2 z-10">
                <ConnectNow />
              </div>
              <div className="disk_bottom absolute left-1/2 -translate-x-1/2 z-10"></div>
            </div>
          </div>
        </main>
        <footer className="mt-auto border-[5px] border-b-0 border-white rounded-tl-[45px] rounded-tr-[45px] bg-two shadow-one px-4 py-5 relative w-[calc(100vw_+_20px)] -left-[10px]">
          <p className="text-center font-bold text-white txt_shadow_one text-lg leading-tight">
            Sponsored by : 0x2170ed0880ac9a755fd29b2688956bd959f933f8
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;

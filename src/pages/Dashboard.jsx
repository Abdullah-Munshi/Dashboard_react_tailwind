import React from "react";
import bgDashboard from "../assets/bg-dashboard.webp";
import Header from "../layout/Header";
import CopyLink from "../components/dashboard/CopyLink";
import disk from "../assets/disk-1.png";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";

const BuyNow = () => {
  return (
    <button className="w-full h-full border-[3px] sm:border-[5px] border-white bg-[#211F1D] rounded-full inline-flex flex-col items-center justify-center leading-tight sm:leading-[1] font-orbitron text-white text-xl xl:text-[28px] uppercase transition duration-300 hover:border-primary hover:text-primary">
      <span className="block text-base xl:text-2xl">BUY</span>
      NOW
    </button>
  );
};

const ClaimNow = () => {
  return (
    <button className="w-full h-full border-[3px] sm:border-[5px] border-white bg-[#211F1D] rounded-full inline-flex flex-col items-center justify-center leading-tight sm:leading-[1] font-orbitron text-white text-xl xl:text-[28px] uppercase transition duration-300 hover:border-primary hover:text-primary">
      <span className="block text-base xl:text-2xl">CLAIM</span>
      NOW
    </button>
  );
};

const Dashboard = () => {
  return (
    <div className="bg-[#0B002B] relative font-khand px-4 pb-4 md:p-6 pt-4 overflow-hidden">
      <div
        className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgDashboard})` }}
      >
        <span className="w-full h-full bg-one block absolute top-0 left-0 right-0 bottom-0"></span>
      </div>
      <div className="mb-[30px] sm:mb-[130px] md:mb-[120px]">
        <Header />
      </div>
      <main className="relative z-10 mb-20 sm:mb-0 ">
        <div className="disk-outer mx-auto max-w-[1200px]">
          <div className="md:flex justify-between">
            <div className="disk_wrapper type-2 mx-auto relative">
              <img className="w-full" src={disk} alt="Disk" />
              <div className="disk_top text-center absolute left-1/2 -translate-x-1/2 z-10">
                <h4 className="text-white txt_shadow_one font-orbitron font-bold">
                  BUY
                  <span className="block">CONTRACTS</span>
                </h4>
              </div>
              <div className="middle_point absolute left-1/2 -translate-x-1/2 z-10">
                <BuyNow />
              </div>
              <div className="disk_bottom  text-center absolute left-1/2 -translate-x-1/2 z-10">
                <p className="text-white txt_shadow_one font-oxanium font-bold text-base xl:text-[24px] leading-[1.1]">
                  Buy 2 for
                </p>
                <strong className="text-white block txt_shadow_one font-oxanium font-bold text-3xl xl:text-[42px] leading-tight">
                  $36
                </strong>

                <div className="incrementor absolute flex items-center justify-between">
                  <button className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-[#FF6D6D] inline-flex items-center justify-center ">
                    <img className="w-[24px] xl:w-[24px]" src={minus} alt="-" />
                  </button>
                  <button className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-[#49A6FC] inline-flex items-center justify-center">
                    <img
                      className="translate-x-[1px] xl:translate-x-[2px] w-[24px] xl:w-[40px]"
                      src={plus}
                      alt="+"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="disk_wrapper type-2 mx-auto relative">
              <img className="w-full" src={disk} alt="Disk" />
              <div className="disk_top text-center absolute left-1/2 -translate-x-1/2 z-10">
                <h4 className="text-white txt_shadow_one font-orbitron font-bold">
                  CLAIM
                  <span className="block">REWARDS</span>
                </h4>
              </div>
              <div className="middle_point absolute left-1/2 -translate-x-1/2 z-10">
                <ClaimNow />
              </div>
              <div className="disk_bottom  text-center absolute left-1/2 -translate-x-1/2 z-10">
                <p className="text-white txt_shadow_one font-oxanium font-bold text-base xl:text-[24px] leading-[1.1]">
                  Rewards Accumulated
                </p>
                <strong className="text-white block txt_shadow_one font-oxanium font-bold text-3xl xl:text-[42px] leading-tight">
                  $36.00
                </strong>
              </div>
            </div>
          </div>

          <div className="mb-5 max-w-[1054px] mx-auto">
            <CopyLink
              title="MY UNIQUE LINK"
              link="https://www.plan18.io/0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

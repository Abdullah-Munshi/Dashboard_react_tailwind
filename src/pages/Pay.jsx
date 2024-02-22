import React from "react";
import { Container, Viewport } from "../components/common/Utils";
import logo from "../assets/logo-black.png";
import Logo from "../components/header/Logo";
import { ChainLight, TokenLight } from "../components/common/Chains";
import i1 from "../assets/light-i1.png";
import i2 from "../assets/light-i2.png";
import i3 from "../assets/light-i3.png";
import token1 from "../assets/token-light.png";
import token2 from "../assets/toekn-light-2.png";
import { ButtonPrimaryGradient } from "../components/common/Buttons";
import { Link } from "react-router-dom";
const Pay = () => {
  return (
    <Viewport>
      <Container>
        <div className="min-h-screen py-8 flex flex-col justify-center">
          <div className="pay max-w-[544px] w-full bg-[#FAF9FF] rounded-[15px] overflow-hidden mx-auto">
            <div className="bg-primary flex items-center justify-between px-4 md:px-5 py-[18px]">
              <Logo logo={logo} />
              <button className="inline-flex justify-end text-white font-bold text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#fff"
                  className="bi bi-x-lg mr-[5px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                Cancel
              </button>
            </div>
            <div className="px-4 md:px-5 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#646464] text-sm font-normal">
                  Paying Dexloot
                </p>
                <strong className="block text-[#636363] text-base font-bold">
                  Add funds to wallet
                </strong>
                <span className="block text-[#646464] text-[11px] font-normal">
                  #91827394812398
                </span>
              </div>
              <div>
                <p className="text-[#636363] text-base font-normal leading-tight text-right">
                  Amount
                </p>
                <strong className="text-primary font-bold text-4xl leading-[1.1]">
                  <span className="inline-block text-xl">$</span>500
                </strong>
              </div>
            </div>
            <div className="processing-fee px-4 md:px-5 py-3 flex items-center justify-between">
              <div>
                <p className="text-[#636363] text-xs font-normal">
                  Processing Fees
                </p>
              </div>
              <div>
                <p className="text-primary text-sm font-bold">$0.5</p>
              </div>
            </div>

            <div className="px-4 md:px-5 text-center space-y-8 py-8">
              <div>
                <h6 className="text-[#636363] text-base font-normal mb-7">
                  Choose Network
                </h6>
                <div className="chains flex flex-wrap justify-center sm:space-x-6">
                  <ChainLight
                    icon={i1}
                    name="Ethereum
Mainnet"
                    isActive={true}
                  />
                  <ChainLight
                    icon={i2}
                    name="Binance
                  Smart Chain"
                  />
                  <ChainLight
                    icon={i3}
                    name="Polygon
                  Mainnet"
                  />
                </div>
                <div className="quick-btn text-center mt-6">
                  <ButtonPrimaryGradient>
                    Connect Wallet to Pay
                  </ButtonPrimaryGradient>
                </div>
              </div>
              <div>
                <h6 className="text-[#636363] text-base font-normal mb-7">
                  Choose Method to Pay
                </h6>
                <div className="flex justify-center space-x-3 sm:space-x-6">
                  <TokenLight icon={token1} name="USDT" isActive={true} />
                  <TokenLight icon={token2} name="USDC" isActive={false} />
                </div>
                <div className="quick-btn text-center mt-6">
                  <ButtonPrimaryGradient>Proceed to Pay</ButtonPrimaryGradient>
                </div>
              </div>
            </div>
            <div className="text-center px-4 md:px-5 pb-8">
              <span className="loader"></span>
              <h5 className="text-primary text-xl font-bold mt-3 mb-3">
                Confirming Payment
              </h5>
              <p className="text-[#777777] text-sm">
                Your transaction is in progress. Your payment <br />
                will be confirmed automatically
              </p>
            </div>
            <div className="px-4 md:px-5 py-5 text-center bg-[#323232]">
              <p className="text-[#A4A4A4] text-sm font-bold help">
                Need help?{" "}
                <Link className="hover:text-primary transition duration-200">
                  Click here
                </Link>
              </p>
            </div>
          </div>
          <p className="text-center text-[#6F6F6F] text-sm mt-6">
            Powered by dexloot’s decentralised payment gateway
          </p>
        </div>
      </Container>
    </Viewport>
  );
};

export default Pay;

import React from "react";
import { Button, Input } from "@material-tailwind/react";
import imgOne from "../assets/img-1.png";
import arwLeftSqure from "../assets/arw-left-square.svg";
import IconWallet from "../assets/wallet.png";
import IconLogin from "../assets/login.png";
import IconRegister from "../assets/register.png";
import IconTicket from "../assets/ticket.png";

const Title = ({ children }) => {
  return (
    <h2 className="text-richBlack font-semibold text-3xl xl:text-[44px] mb-2 xl:mb-5">
      {children}
    </h2>
  );
};

const Auth = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <main className="xl:grid grid-cols-2 items-center relative min-h-screen">
        <div className="h-1/5 w-full xl:h-screen xl:w-1/2 xl:absolute right-0 top-0 bottom-0 xl:p-7">
          <div className="bg-[#A1CDFF] grid place-content-center p-6 h-full xl:rounded-[50px]">
            <img
              src={imgOne}
              alt="img"
              className="w-1/2 mx-auto max-w-[250px] xl:max-w-[400px] max-h-full"
            />
          </div>
        </div>
        <div className="px-5 py-8 lg:px-14 xl:px-20 lg:py-14">
          <a
            href="#"
            className="text-gray font-medium text-lg inline-flex items-center gap-2 mb-6 lg:mb-10 xl:mb-14"
          >
            <img src={arwLeftSqure} alt="<" />
            Back to Home
          </a>

          <div className="space-y-6 xl:space-y-14">
            <div>
              <Title>
                1. <span className="inline-block highlight-title">Connect</span>{" "}
                your wallet ?
              </Title>
              <div className="mt-5 xl:mt-8">
                <Button
                  variant="gradient"
                  className="bg-primaryGradient_to_right flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
                >
                  Connect <img className="w-6 h-6" src={IconWallet} alt="i" />
                </Button>
              </div>
            </div>
            <div className="border-dashed border-2 border-t-0 border-l-0 border-r-0 border-[#E5E5E5] pb-10 xl:pb-14">
              <Title>
                2.
                <span className="inline-block highlight-title">
                  Empower
                </span>{" "}
                Your Experience
              </Title>
              <p className="text-gray text-lg leading-snug">
                Unlock the full potential of NewUnity by logging in or{" "}
                <br className="hidden md:block" />
                registering below.
              </p>
              <div className="mt-6 flex items-center space-x-5">
                <Button
                  variant="gradient"
                  className="bg-[#04D88C] flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
                >
                  Log in <img className="w-6 h-6" src={IconLogin} alt="i" />
                </Button>
                <Button
                  variant="gradient"
                  className="bg-primaryGradient_to_right flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
                >
                  Register{" "}
                  <img className="w-6 h-6" src={IconRegister} alt="i" />
                </Button>
              </div>
            </div>
            <div>
              <Title>Referral Code ?</Title>
              <div className="relative mb-8">
                <img
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                  src={IconTicket}
                  alt=""
                />
                <Input
                  variant="static"
                  placeholder="Code"
                  className="pl-8 !py-4 text border-b-2 border-[#E5E5E5]"
                />
              </div>
              <Button
                variant="gradient"
                className="bg-primaryGradient_to_right flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;

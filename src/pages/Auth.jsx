import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import imgOne from "../assets/img-1.png";
import arwLeftSqure from "../assets/arw-left-square.svg";
import IconWallet from "../assets/wallet.png";

const Title = ({ children }) => {
  return (
    <h2 className="text-richBlack font-semibold text-[44px] mb-2">
      {children}
    </h2>
  );
};

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="min-h-screen relative bg-white">
      <main className="grid grid-cols-2 items-center relative min-h-screen">
        <div className="px-16 py-14">
          <a
            href="#"
            className="text-gray font-medium text-lg inline-flex items-center gap-2"
          >
            <img src={arwLeftSqure} alt="<" />
            Back to Home
          </a>

          <div className="space-y-8">
            <div>
              <Title>
                1. <span className="inline-block highlight-title">Connect</span>{" "}
                your wallet ?
              </Title>
              <Button
                variant="gradient"
                className="bg-primaryGradient_to_right flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
              >
                Connect <img className="w-6 h-6" src={IconWallet} alt="i" />
              </Button>
            </div>
            <div>
              <Title>
                2.
                <span className="inline-block highlight-title">
                  Empower
                </span>{" "}
                Your Experience
              </Title>
              <p className="text-gray text-lg leading-snug">
                Unlock the full potential of NewUnity by logging in or <br />
                registering below.
              </p>
              <div className="mt-6">
                <Button
                  variant="gradient"
                  className="bg-primaryGradient_to_right flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
                >
                  Log in <img className="w-6 h-6" src={IconWallet} alt="i" />
                </Button>
                <Button
                  variant="gradient"
                  className="bg-primaryGradient_to_right flex items-center gap-3 font-semibold font-sans text-lg rounded-full capitalize"
                >
                  Register <img className="w-6 h-6" src={IconWallet} alt="i" />
                </Button>
              </div>
            </div>
            <div>
              <Title>Referral Code ?</Title>
              <div>
                <Input variant="static" label="Static" placeholder="Code" />
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
        <div className="h-screen w-1/2 absolute right-0 top-0 bottom-0 p-7">
          <div className="bg-[#A1CDFF] grid place-content-center p-6 h-full rounded-[50px]">
            <img src={imgOne} alt="img" className="max-w-[400px] max-h-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;

import React from "react";
import { PrimaryHeading } from "../components/common/Headings";
import { ContentBox } from "../components/common/Utils";
import { LabelBoxInput } from "../components/common/Inputs";
import {
  ButtonPrimary,
  ButtonPrimaryType2,
} from "../components/common/Buttons";
import arwRight from "../assets/arw-right.png";
import { ChainDark, TokenDark } from "../components/common/Chains";
import i1 from "../assets/i-1.png";
import i2 from "../assets/i-2.png";
import i3 from "../assets/i-3.png";
import token1 from "../assets/token-1.png";
import token2 from "../assets/token-2.png";

const Manage = () => {
  return (
    <div>
      <div className="mb-4 lg:mb-6">
        <PrimaryHeading>Payments Dashboard</PrimaryHeading>
      </div>
      <div className="tabs grid grid-cols-2 gap-3 sm:gap-0 sm:flex flex-wrap mb-4 sm:mb-3">
        <button className="active">Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
      </div>
      <ContentBox>
        <div className="space-y-6">
          <LabelBoxInput />
          <div>
            <h6 className="text-white text-sm font-normal mb-5">
              Choose Accepted Chains
            </h6>
            <div className="flex flex-wrap space-x-3 sm:space-x-6">
              <ChainDark
                icon={i1}
                name="Ethereum
Mainnet"
                isActive={true}
              />
              <ChainDark
                icon={i2}
                name="Binance
                  Smart Chain"
              />
              <ChainDark
                icon={i3}
                name="Polygon
                  Mainnet"
              />
            </div>
          </div>
          <div>
            <h6 className="text-white text-sm font-normal mb-5">
              Accepted Tokens
            </h6>
            <div className="flex space-x-3 sm:space-x-6">
              <TokenDark icon={token1} name="USDT" isActive={true} />
              <TokenDark icon={token2} name="USDC" isActive={false} />
            </div>
          </div>
          <LabelBoxInput />
          <LabelBoxInput />

          <ButtonPrimaryType2>
            Create Project <img src={arwRight} alt=">" />
          </ButtonPrimaryType2>
        </div>
      </ContentBox>
    </div>
  );
};

export default Manage;

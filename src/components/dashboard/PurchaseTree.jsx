import React from "react";
import { CardBlack } from "../Utility";
import user from "../../assets/member.png";
import bnb from "../../assets/bnb.png";
import recycle from "../../assets/recycle.png";
import arwLeft from "../../assets/arw-left.png";
import arwRight from "../../assets/arw-right.png";

const PurchaseTree = () => {
  return (
    <CardBlack>
      <div className="p-6">
        <div className="tree">
          <div className="tree-rw text-center">
            <div className="member w-[150px] mx-auto">
              <p className="text-white text-base font-medium tracking-[.75px] mb-2">
                Me
              </p>
              <img
                className="mx-auto w-[70px] h-[70px] rounded-full"
                src={user}
                alt="user"
              />
            </div>
          </div>
          <div className="text-center my-2">
            <svg
              width="274"
              height="89"
              viewBox="0 0 274 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M1 88.168V55.668H137M273 88.168V55.668H137M137 55.668V0.167969"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="tree-rw two relative flex justify-between text-center mx-auto">
            <div className="member w-[150px] relative">
              <p className="text-white text-base font-medium tracking-[.75px] mb-2">
                #429
              </p>
              <img
                className="mx-auto w-[70px] h-[70px] rounded-full"
                src={user}
                alt="user"
              />

              <button className="absolute left-3 -bottom-7">
                <img className="w-8" src={bnb} alt="" />
              </button>
            </div>
            <div className="member w-[150px] relative">
              <p className="text-white text-base font-medium tracking-[.75px] mb-2">
                #123{" "}
              </p>
              <img
                className="mx-auto w-[70px] h-[70px] rounded-full"
                src={user}
                alt="user"
              />
              <button className="absolute right-3 -bottom-7">
                <img className="w-8" src={recycle} alt="" />
              </button>
            </div>
          </div>

          <div className="text-center mt-16 mb-14">
            <div class="flex justify-between max-w-[200px] bg-[#4F4F4F] rounded-2xl_next px-4 py-3 mx-auto">
              <button class="bg-transparent rounded-[5px]">
                <img
                  src={arwLeft}
                  alt="left"
                  className="w-[40px] basis-[40px]"
                />
              </button>
              <input
                type="text"
                readonly=""
                class="border-0 h-[30px] w-full text-white text-2xl font-extrabold bg-transparent outline-none text-center"
                value="01"
              />
              <button class="bg-transparent rounded-[5px]">
                <img src={arwRight} alt="Right" class="w-[40px] basis-[40px]" />
              </button>
            </div>
          </div>

          <div className="total-wrapper flex justify-around">
            <div className="total w-[150px] text-center">
              <p className="text-white text-lg tracking-[.6px] opacity-70 font-medium mb-3 leading-[1.4]">
                Total Earned <br />
                From Pack
              </p>

              <strong className="font-Bungee text-[#E3FF93] text-[34px]">
                $14
              </strong>
            </div>
            <div className="total w-[150px] text-center">
              <p className="text-white text-lg tracking-[.6px] opacity-70 font-medium mb-3 leading-[1.4]">
                Total Earned <br />
                From Pack
              </p>

              <strong className="font-Bungee text-[#E3FF93] text-[34px]">
                4
              </strong>
            </div>
          </div>
        </div>
      </div>
    </CardBlack>
  );
};

export default PurchaseTree;

import React from "react";
import Header from "../layout/Header";
import {
  CommonCard,
  TitlePrimary,
  TitleSecondary,
} from "../components/Utility";
import { Button } from "@material-tailwind/react";
import Sidebar from "../components/dashboard/Sidebar";
import RecentActivity from "../components/dashboard/RecentActivity";
import StatisticsChart from "../components/dashboard/StatisticsChart";
import current from "../assets/current.png";
import total from "../assets/total.png";
import down from "../assets/down.png";
import up from "../assets/up.png";

const Dashboard = () => {
  return (
    <>
      <div className="bg-primaryGradient_to_right p-3 xl:p-6  min-h-screen">
        <div className="bg-richBlack rounded-3xl xl:rounded-[50px] p-3 xl:p-6 xl:grid grid-cols-[290px_auto]">
          <div className="hidden xl:block">
            <Sidebar />
          </div>
          <div className="bg-[#F4F4F4] rounded-3xl xl:rounded-[30px] overflow-hidden">
            <Header />
            <div className="px-3 xl:px-8 py-4 xl:py-6">
              <div className="mb-5">
                <TitlePrimary>Home</TitlePrimary>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-3">
                <CommonCard>
                  <div className="text-left md:text-center mb-5">
                    <TitleSecondary variant="light-orange">
                      20,000 People have united ahead of you
                    </TitleSecondary>
                  </div>
                  <div className="statistics bg-[#F4F4F4] rounded-[20px] p-3 mb-5 grid lg:grid-cols-2 gap-4 ">
                    <div className="bg-[#FCFCFC] rounded-[12px] p-4 grid grid grid-cols-[30px_auto] sm:grid-cols-[40px_auto] relative gap-4">
                      <div className="absolute right-3 top-3 bg-[#FFE7E4] rounded-lg px-2 py-[5px] text-xs font-bold text-[#FF6A55] inline-flex items-center justify-center">
                        <img src={down} className="mr-1" alt="" />
                        37.8%
                      </div>
                      <div className="pt-1">
                        <img src={current} alt="" />
                      </div>
                      <div className="text-left">
                        <p className="inline-flex items-center text-[#6F767E] font-semibold text-[13px] mb-[2px]">
                          Current Balance
                        </p>
                        <strong className="block text-[#1A1D1F] text-4xl md:text-5xl font-semibold">
                          $4110
                        </strong>
                      </div>
                    </div>
                    <div className="bg-transparent rounded-[12px] p-4 grid grid-cols-[30px_auto] sm:grid-cols-[40px_auto] relative gap-4">
                      <div className="absolute right-2 top-3 bg-[#FCFCFC] rounded-lg px-2 py-[5px] text-xs font-bold text-[#83BF6E] inline-flex items-center justify-center">
                        <img src={up} className="mr-1" alt="" />
                        37.8%
                      </div>
                      <div className="pt-1">
                        <img src={total} alt="" />
                      </div>
                      <div className="text-left">
                        <p className="inline-flex items-center text-[#6F767E] font-semibold text-[13px] mb-[2px]">
                          Total Earned
                        </p>
                        <strong className="block text-[#1A1D1F] text-4xl md:text-5xl font-semibold">
                          $4110
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="graph">
                    <StatisticsChart />
                  </div>
                </CommonCard>
                <CommonCard>
                  <div className="mb-0">
                    <TitleSecondary variant="light-blue">
                      My Statistics
                    </TitleSecondary>
                  </div>
                  <div>
                    <div>
                      <div className="pb-6 overflow-scroll">
                        <table className="w-full text-left table-auto min-w-max">
                          <tbody>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0 ">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0 ">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0 ">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 pl-0 ">
                                <div className="flex flex-col">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p className="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td className="p-4 pr-0">
                                <div className="flex flex-col items-end">
                                  <p className="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <Button
                      variant="outlined"
                      fullWidth
                      className="border border-[#EFEFEF] rounded-[12px] text-[#1A1D1F] text-[15px] font-bold capitalize"
                    >
                      {" "}
                      View all Payments
                    </Button>
                  </div>
                </CommonCard>
                <CommonCard>
                  <div className="mb-4">
                    <TitleSecondary variant="light-blue">
                      Recent Activity
                    </TitleSecondary>
                  </div>
                  <div>
                    <RecentActivity />
                  </div>
                </CommonCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

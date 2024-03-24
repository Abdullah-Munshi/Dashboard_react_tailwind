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
import graph from "../assets/graph.png";
import StatisticsChart from "../components/dashboard/StatisticsChart";

const Dashboard = () => {
  return (
    <>
      <div className="bg-primaryGradient_to_right p-3 md:p-6  min-h-screen">
        <div className="bg-richBlack rounded-3xl md:rounded-[50px] p-3 md:p-6 xl:grid grid-cols-[290px_auto]">
          <div className="hidden xl:block">
            <Sidebar />
          </div>
          <div className="bg-[#F4F4F4] rounded-3xl md:rounded-[30px] overflow-hidden">
            <Header />
            <div className="px-8 py-6">
              <div className="mb-4">
                <TitlePrimary>Home</TitlePrimary>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-3">
                <CommonCard>
                  <div className="text-center">
                    <TitleSecondary variant="light-orange">
                      20,000 People have united ahead of you
                    </TitleSecondary>
                    <div className="statistics">
                      <div></div>
                      <div></div>
                    </div>
                    <div className="graph">
                      <StatisticsChart />
                    </div>
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
                      <div class="pb-6 overflow-scroll">
                        <table class="w-full text-left table-auto min-w-max">
                          <tbody>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0 ">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0 ">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0 ">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
                                    $2,453.80
                                  </p>
                                  <span className="inline-block bg-[#EAFAE5] rounded-[4px] text-xs font-bold text-[#83BF6E] px-3 py-1">
                                    Active
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-4 pl-0 ">
                                <div class="flex flex-col">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F]">
                                    Stats text
                                  </p>
                                  <p class="block font-sans text-[15px] antialiased font-normal leading-normal text-[#7A7A7A]">
                                    Stats description
                                  </p>
                                </div>
                              </td>
                              <td class="p-4 pr-0">
                                <div class="flex flex-col items-end">
                                  <p class="block font-sans text-[15px] antialiased font-semibold leading-normal text-[#1A1D1F] mb-1">
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

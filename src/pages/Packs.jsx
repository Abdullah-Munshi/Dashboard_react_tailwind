import React from "react";
import bgDashboard from "../assets/bg-dashboard.webp";
import Header from "../layout/Header";
import {
  BlkContainer,
  BlkContainerTwo,
  TitlePrimary,
  TitlePrimaryTwo,
  TitleSecondary,
} from "../components/Utility";
import i1 from "../assets/i-1.png";
import i2 from "../assets/i-2.png";
import i3 from "../assets/i-3.png";
import i4 from "../assets/i-4.png";
import i5 from "../assets/i-5.png";
import i6 from "../assets/i-6.png";
import i7 from "../assets/i-7.png";
import iTotalIncome from "../assets/total-income.png";
import iTotalExpense from "../assets/total-expense.png";

import PurchasePack from "../components/dashboard/PurchasePack";
import CopyLink from "../components/dashboard/CopyLink";
import DetailsTable from "../components/dashboard/DetailsTable";
import MenuLink from "../components/dashboard/MenuLink";
import Stats from "../components/dashboard/Stats";
import SinglePack from "../components/dashboard/SinglePack";
import Table from "../components/dashboard/Table";

const Packs = () => {
  return (
    <div className='bg-[#0B002B] relative font-khand px-4 pb-4 md:p-6 pt-4'>
      <div
        className='w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0'
        style={{ backgroundImage: `url(${bgDashboard})` }}
      ></div>
      <div className='mb-[11px]'>
        <Header />
      </div>
      <main className='overflow-hidden relative px-4 py-6 md:p-6 md:pb-10 bg-one broder-[3px] border-[#E9E38B] rounded-xl drop-shadow-[0px_19px_20px_rgba(0,0,0,0.30)]'>
        <div className='xl:grid xl:grid-cols-[250px_auto] gap-7 relative z-10'>
          <div className='space-y-8 hidden xl:block'>
            <ul>
              <MenuLink icon={i1} text='Dashboard' />
              <MenuLink icon={i2} text='1x2 Plan' />
              <MenuLink icon={i3} text='UniLevel Plan' />
              <MenuLink icon={i4} text='My Referrals' />
              <MenuLink icon={i5} text='All Activity' />
              <MenuLink icon={i6} text='Connect Telegram' />
              <MenuLink icon={i7} text='Logout' />
            </ul>
          </div>
          <div>
            <div className='space-y-8 md:space-y-0 md:flex justify-between items-center mt-3 mb-7 md:mb-10'>
              <TitlePrimary>1x2 PLAN - PACKS</TitlePrimary>
              <div className='space-y-6 sm:space-y-0 sm:flex jusity-end items-center sm:space-x-16'>
                <Stats
                  value='$12,412'
                  label='My Total Income'
                  icon={iTotalIncome}
                />
                <Stats
                  value='$12,412'
                  label='My Spendings'
                  icon={iTotalExpense}
                />
              </div>
            </div>

            <div className='space-y-12'>
              <div className='space-y-5 md:space-y-0 md:grid grid-cols-2 gap-5 xl:gap-6'>
                <BlkContainerTwo>
                  <SinglePack />
                </BlkContainerTwo>
                <BlkContainerTwo>
                  <SinglePack />
                </BlkContainerTwo>
                <BlkContainerTwo>
                  <SinglePack />
                </BlkContainerTwo>
                <BlkContainerTwo>
                  <SinglePack />
                </BlkContainerTwo>
              </div>
              <div>
                <BlkContainer>
                  <div className='p-5 md:p-6'>
                    <div className='mb-5'>
                      <TitleSecondary>PAYMENTS RECEIVED</TitleSecondary>
                    </div>
                    <Table />
                  </div>
                </BlkContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Packs;

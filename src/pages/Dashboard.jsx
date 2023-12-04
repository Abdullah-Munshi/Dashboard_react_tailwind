import React from "react";
import bgDashboard from "../assets/bg-dashboard.webp";
import Header from "../layout/Header";
import {
  BlkContainer,
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

const Dashboard = () => {
  return (
    <div className='bg-[#0B002B] relative font-khand p-6 pt-4'>
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
            <div className='flex justify-between items-center mt-3 mb-10'>
              <TitlePrimary>DASHBOARD</TitlePrimary>
              <div className='flex jusity-end items-center space-x-16'>
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
              <div>
                <BlkContainer>
                  <PurchasePack />
                </BlkContainer>
              </div>
              <div>
                <BlkContainer>
                  <div className='text-center p-6 space-y-8 pt-8'>
                    <TitlePrimaryTwo>SHARE YOUR LINK</TitlePrimaryTwo>
                    <div className='md:grid grid-cols-2 gap-6 p-6 bg-[rgba(24,22,22,0.70)] rounded-2xl_next box-shadow-[0px_11px_10px_0px_rgba(0,0,0,0.10)]'>
                      <CopyLink
                        title='Link to registration'
                        link='https://app.myinfinity.io/register/username'
                      />
                      <CopyLink
                        title='Link to registration'
                        link='https://app.myinfinity.io/register/username'
                      />
                    </div>
                  </div>
                </BlkContainer>
              </div>
              <div className='lg:grid grid-cols-3 gap-7'>
                <BlkContainer>
                  <div className='p-6 space-y-3'>
                    <TitleSecondary>My Details</TitleSecondary>

                    <DetailsTable list={[0, 0, 0, 0, 0, 0, 0, 0]} />
                  </div>
                </BlkContainer>
                <BlkContainer>
                  <div className='p-6 space-y-3'>
                    <TitleSecondary>My Details</TitleSecondary>

                    <DetailsTable list={[0, 0, 0, 0, 0, 0, 0, 0]} />
                  </div>
                </BlkContainer>
                <BlkContainer>
                  <div className='p-6 space-y-3'>
                    <TitleSecondary>My Details</TitleSecondary>

                    <DetailsTable list={[0, 0, 0, 0, 0, 0, 0, 0]} />
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

export default Dashboard;

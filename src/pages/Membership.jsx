import React from "react";
import bgDashboard from "../assets/bg-dashboard.webp";
import Header from "../layout/Header";
import { TitlePrimary } from "../components/Utility";
import Stats from "../components/dashboard/Stats";

import TabSingle from "../components/dashboard/TabSingle";
import i1 from "../assets/i-1.png";
import i2 from "../assets/i-2.png";
import i3 from "../assets/i-3.png";
import i4 from "../assets/i-4.png";
import i5 from "../assets/i-5.png";
import i6 from "../assets/i-6.png";
import i7 from "../assets/i-7.png";
import i8 from "../assets/i-8.png";
import st1 from "../assets/st-1.png";
import st2 from "../assets/st-2.png";
import st3 from "../assets/st-3.png";
import st4 from "../assets/st-4.png";
import TierActive from "../components/dashboard/TierActive";
import MembershipBlk from "../components/dashboard/MembershipBlk";

const Membership = () => {
  return (
    <div className='bg-[#0B002B] font-trunoRegular'>
      <Header />
      <main className='overflow-hidden relative px-4 py-6 md:p-6 xl:p-7 min-h-screen'>
        <div
          className='w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0'
          style={{ backgroundImage: `url(${bgDashboard})` }}
        ></div>
        <div className='xl:grid xl:grid-cols-[320px_auto] gap-7 relative z-10'>
          <div className='space-y-8 hidden xl:block'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-2 gap-4 md:gap-6'>
              <TabSingle icon={i1} text='Dashboard' />
              <TabSingle icon={i2} text='Memberships' notification='13' />
              <TabSingle icon={i3} text='Referrals' />
              <TabSingle icon={i4} text='Payments' />
              <TabSingle icon={i5} text='Alert System' />
              <TabSingle icon={i6} text='Products' />
              <TabSingle icon={i7} text='View Contract' />
              <TabSingle icon={i8} text='Logout' />
            </div>
            <div>
              <TitlePrimary>My Statistics</TitlePrimary>
              <div className='xl:space-y-6 grid grid-cols-1 sm:grid-cols-2 xl:block gap-4 md:gap-6 xl:gap-0'>
                <Stats
                  totalCount='500'
                  text='Total Memberships'
                  todayCount='123'
                  icon={st1}
                />
                <Stats
                  totalCount='500'
                  text='Total Claimed'
                  todayCount='123'
                  icon={st2}
                />
                <Stats
                  totalCount='500'
                  text='Sponsor Match'
                  todayCount='123'
                  icon={st3}
                />
                <Stats
                  totalCount='500'
                  text='Fast Start Earned'
                  todayCount='123'
                  icon={st4}
                />
              </div>
            </div>
          </div>
          <div className='space-y-8 md:space-y-12'>
            <div>
              <TitlePrimary>My Memberships</TitlePrimary>
              <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-7'>
                <MembershipBlk
                  id='7'
                  activeTiers='2'
                  totalClaimed='234'
                  totalPending='134'
                  totalMembership='38229'
                />
                <MembershipBlk
                  id='7'
                  activeTiers='2'
                  totalClaimed='234'
                  totalPending='134'
                  totalMembership='38229'
                />
                <MembershipBlk
                  id='7'
                  activeTiers='2'
                  totalClaimed='234'
                  totalPending='134'
                  totalMembership='38229'
                />
              </div>
            </div>
            <div>
              <TitlePrimary>Viewing Membership #7</TitlePrimary>
              <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] xl:grid-cols-1 2xl:grid-cols-[1fr_2fr] gap-6 lg:gap-7 items-start'>
                <MembershipBlk
                  id='7'
                  activeTiers='2'
                  totalClaimed='234'
                  totalPending='134'
                  totalMembership='38229'
                />
                <div className='space-y-8'>
                  <TierActive />
                  <TierActive />
                  <TierActive />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Membership;

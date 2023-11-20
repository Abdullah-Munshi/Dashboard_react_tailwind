import React from "react";
import bgDashboard from "../assets/bg-dashboard-pge.webp";
import Header from "../layout/Header";
import { TitlePrimary } from "../components/Utility";
import Statistics from "../components/dashboard/Statistics";
import Announcement from "../components/dashboard/Announcement";
import AccountDetails from "../components/dashboard/AccountDetails";

const Dashboard = () => {
  return (
    <div className='bg-[#0B002B]'>
      <Header />
      <main className='overflow-hidden relative p-4 md:p-6 min-h-screen'>
        <div
          className='w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0'
          style={{ backgroundImage: `url(${bgDashboard})` }}
        ></div>
        <div className='lg:grid grid-cols-[560px_auto] gap-6 relative z-10'>
          <div>
            <TitlePrimary>Dashboard</TitlePrimary>
            <div>
              <Statistics />
              <Statistics />
              <Statistics />
              <Statistics />
              <Statistics />
              <Statistics />
            </div>
            <div>
              <AccountDetails />
            </div>
          </div>
          <div>
            <div>
              <TitlePrimary>Global Statistics</TitlePrimary>
            </div>
            <div>
              <Announcement />
            </div>
            <div>
              <TitlePrimary>My Statistics</TitlePrimary>
              <div>
                <Statistics />
                <Statistics />
                <Statistics />
                <Statistics />
                <Statistics />
                <Statistics />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

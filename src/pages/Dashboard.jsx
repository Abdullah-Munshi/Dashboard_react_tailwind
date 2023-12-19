import React from "react";
import bgDashboard from "../assets/bg-dashboard.webp";
import Header from "../layout/Header";
import { TitlePrimary } from "../components/Utility";

import CopyLink from "../components/dashboard/CopyLink";

const Dashboard = () => {
  return (
    <div className="bg-[#0B002B] relative font-khand px-4 pb-4 md:p-6 pt-4">
      <div
        className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgDashboard})` }}
      >
        <span className="w-full h-full bg-one block absolute top-0 left-0 right-0 bottom-0"></span>
      </div>
      <div className="mb-[120px]">
        <Header />
      </div>
      <main className="overflow-hidden relative px-4 py-6 md:p-6 md:pb-10 bg-one broder-[3px] border-[#E9E38B] rounded-xl drop-shadow-[0px_19px_20px_rgba(0,0,0,0.30)]">
        <div>
          <div className="space-y-8 md:space-y-0 md:flex justify-between items-center mt-3 mb-7 md:mb-10">
            <TitlePrimary>DASHBOARD</TitlePrimary>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

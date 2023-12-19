import React from "react";
import bgDashboard from "../assets/bg-dashboard.webp";
import Header from "../layout/Header";
import { TitlePrimary } from "../components/Utility";
import Table from "../components/dashboard/Table";
import Contract from "../components/dashboard/Contract";

const Dashboard = () => {
  return (
    <div className="bg-[#0B002B] relative px-4 pb-4 md:p-6 pt-4 min-h-screen">
      <div
        className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgDashboard})` }}
      >
        <span className="w-full h-full bg-one block absolute top-0 left-0 right-0 bottom-0"></span>
      </div>
      <div className="mb-[30px] sm:mb-[130px] md:mb-[150px]">
        <Header />
      </div>
      <main className="relative z-10 mb-16 sm:mb-0">
        <div className="space-y-10 md:space-y-16">
          {/* Contracts Wrapper Start  */}
          <div>
            <div className="text-center mb-7 md:mb-9">
              <TitlePrimary>MY CONTRACTS</TitlePrimary>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
              <Contract />
              <Contract />
              <Contract />
              <Contract />
            </div>
          </div>
          {/* Contracts Wrapper End  */}
          <div className="border-[5px] border-white rounded-2xl_next bg-three shadow-one p-4 md:p-7 pb-5">
            <div className="text-center mb-5 md:mb-7">
              <TitlePrimary>Payments Received</TitlePrimary>
            </div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

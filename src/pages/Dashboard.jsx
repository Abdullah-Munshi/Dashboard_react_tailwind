import React from "react";
import dashboardBg from "../assets/dashboard-bg.webp";
import Header from "../layout/Header";
import { TitleSecondary } from "../components/Utility";
import i1 from "../assets/i-1.png";
import i2 from "../assets/i-2.png";
import i3 from "../assets/i-3.png";
import i4 from "../assets/i-4.png";
import i5 from "../assets/i-5.png";
import i6 from "../assets/i-6.png";
import i7 from "../assets/i-7.png";
import iTotalIncome from "../assets/total-income.png";
import iTotalExpense from "../assets/total-expense.png";
import DetailsTable from "../components/dashboard/DetailsTable";
import MenuLink from "../components/dashboard/MenuLink";
import Stats from "../components/dashboard/Stats";
import StatsGeneral from "../components/dashboard/StatsGeneral";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main
        className="bg-[#0B002B] relative font-khand px-4 pb-4 md:p-6 pt-4 "
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <div className="grid grid-cols-[250px_auto]">
          <div className="-mr-7 relative z-10 mt-5">
            <div className="space-y-8 hidden xl:block bg-secondaryGradient_to_b rounded-xl p-5">
              <ul className="space-y-2">
                <MenuLink icon={i1} text="Dashboard" isActive={true} />
                <MenuLink icon={i2} text="1x2 Plan" />
                <MenuLink icon={i3} text="UniLevel Plan" />
                <MenuLink icon={i4} text="My Referrals" />
                <MenuLink icon={i5} text="All Activity" />
                <MenuLink icon={i6} text="Connect Telegram" />
                <MenuLink icon={i7} text="Logout" />
              </ul>
            </div>
            <div>
              <Stats
                value="$12,412"
                label="My Total Income"
                icon={iTotalIncome}
              />
              <Stats
                value="$12,412"
                label="My Spendings"
                icon={iTotalExpense}
              />
            </div>
          </div>

          {/* right part  */}
          <div className="border-[3px] border-[#FBBA04] rounded-3xl bg-gradient-to-b from-[#181818]/80 to-[#000000]/80 shadow-lg shadow-black/40 px-4 md:px-10 pb-5">
            <div>
              <StatsGeneral />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 space-y-3">
                <TitleSecondary>My Details</TitleSecondary>
                <DetailsTable list={[0, 0, 0, 0, 0, 0, 0, 0]} />
              </div>
              <div>
                <TitleSecondary>My Details</TitleSecondary>
                <DetailsTable list={[0, 0, 0, 0, 0, 0, 0, 0]} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

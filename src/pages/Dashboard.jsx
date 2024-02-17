import React from "react";
import dashboardBg from "../assets/dashboard-bg.webp";
import Header from "../layout/Header";
import { Button, TableTitle } from "../components/Utility";
import i1 from "../assets/i-1.png";
import i2 from "../assets/i-2.png";
import i3 from "../assets/i-3.png";
import i4 from "../assets/i-4.png";
import i5 from "../assets/i-5.png";
import i6 from "../assets/i-6.png";
import i7 from "../assets/i-7.png";
import iconUser from "../assets/total-user.png";
import iconEarn from "../assets/total-earn.png";
import MenuLink from "../components/dashboard/MenuLink";
import Stats from "../components/dashboard/Stats";
import StatsGeneral from "../components/dashboard/StatsGeneral";
import Table from "../components/dashboard/Table";
import Level from "../components/dashboard/Level";
import TableTwo from "../components/dashboard/TableTwo";
import LevelActive from "../components/dashboard/LevelActive";
import LevelLocked from "../components/dashboard/LevelLocked";
import { Link } from "react-router-dom";
import iconPeople from "../assets/people.png";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main
        className="bg-[#0B002B] relative px-4 pb-4 md:p-6 pt-4 shadow-md shadow-black/50"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <div className="xl:grid grid-cols-[250px_auto]">
          <div className="-mr-7 relative z-10 mt-6 space-y-6 hidden xl:block">
            <div className="space-y-8 hidden xl:block bg-secondaryGradient_to_b rounded-xl p-5 shadow-lg shadow-black/50">
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
            <div className="bg-gradient-to-b from-[#1C1C1C] to-[#2A2A2A] px-5 py-7 shadow-lg shadow-black/50 rounded-xl">
              <h4 className="text-white uppercase font-bold text-base mb-1 text-center">
                PROJECT STATS
              </h4>
              <ul className="mb-2">
                <li className="border-b border-[#616161] last:border-none py-4">
                  <Stats value="1234" label="Total Users" icon={iconUser} />
                </li>
                <li className="border-b border-[#616161] last:border-none py-4">
                  <Stats
                    value="$ 1,312,312"
                    label="Earned by Users"
                    icon={iconEarn}
                  />
                </li>
              </ul>
              <div className="text-center">
                <Button variant="green" classes="view-contract">
                  VIEW CONTRACT
                </Button>
              </div>
            </div>
          </div>

          {/* right part  */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center rounded-2xl p-4 md:p-6 mb-6 xl:hidden bg-gradient-to-b from-[#1C1C1C] to-[#2A2A2A]">
            <ul className="mb-2 grid sm:grid-cols-2 items-center gap-4 md:gap-6">
              <li className="p-4 border-2 border-primary rounded-xl">
                <Stats value="1234" label="Total Users" icon={iconUser} />
              </li>
              <li className="p-4 border-2 border-primary rounded-xl">
                <Stats
                  value="$ 1,312,312"
                  label="Earned by Users"
                  icon={iconEarn}
                />
              </li>
            </ul>
            <div className="grid grid-cols-[auto_40px] items-center gap-4">
              <div className="space-y-1 text-right">
                <h4 className="text-white text-sm font-medium leading-tight">
                  Personal Inviter Link
                </h4>
                <Link className="text-primary text-base md:text-lg font-bold inline-block leading-tight">
                  https://heal.estate.io/grantor/username
                </Link>
              </div>
              <img className="max-w-full" src={iconPeople} alt="ppl" />
            </div>
          </div>
          <div className="border-[3px] border-primary rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#181818]/80 to-[#000000]/80 shadow-lg shadow-black/40 p-4 md:pl-6 xl:pl-[50px] md:pr-6 md:py-6 space-y-9">
            <div>
              <StatsGeneral />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-6 space-y-2 bg-secondaryGradient_to_b rounded-xl">
                <TableTitle title="My Details" buttonText="VIEW PROFILE" />
                <Table />
              </div>
              <div className="p-6 space-y-2 bg-gradient-to-b from-[#282828] to-[#141414] rounded-xl shadow-md shadow-[#36221E]">
                <TableTitle
                  title="Community wise Income"
                  buttonText="VIEW ALL"
                />
                <TableTwo />
              </div>
            </div>
            <div className="">
              <h2 className="text-white font-russoOne text-[27px] mb-4">
                All Levels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <Level />
                <LevelActive />
                <LevelLocked />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

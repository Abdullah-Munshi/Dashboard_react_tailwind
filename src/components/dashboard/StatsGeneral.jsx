import React from "react";
import iconSg1 from "../../assets/sg-1.png";
import iconSg2 from "../../assets/sg-2.png";
import iconSg3 from "../../assets/sg-3.png";
import iconSg4 from "../../assets/sg-4.png";
const SingleStat = ({ label, totalAmount, todayAmount, icon, isActive }) => {
  return (
    <div className="bg-gradient-to-b from-[#C1FF72] to-[#60AB00] rounded-xl shadow-md shadow-black/50 grid grid-cols-[auto_65px] gap-7 items-center p-7">
      <div>
        <p className="font-medium text-base mb-1">{label}</p>
        <strong className="block text-[26px] font-bold">${totalAmount}</strong>
        <span className="block bg-[#8B8B8B] w-full h-[1px] my-2"></span>
        <p className="font-medium text-[15px]">Today ${todayAmount}</p>
      </div>
      <div>
        <img src={icon} alt="icon" className="max-w-full" />
      </div>
    </div>
  );
};

const StatsGeneral = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SingleStat
        label="Total Income"
        totalAmount="5000"
        todayAmount="10"
        icon={iconSg1}
        isActive={false}
      />
      <SingleStat
        label="Total Income"
        totalAmount="5000"
        todayAmount="10"
        icon={iconSg2}
        disabled={false}
      />
      <SingleStat
        label="Total Income"
        totalAmount="5000"
        todayAmount="10"
        icon={iconSg3}
        disabled={false}
      />
      <SingleStat
        label="Total Income"
        totalAmount="5000"
        todayAmount="10"
        icon={iconSg4}
        disabled={false}
      />
    </div>
  );
};

export default StatsGeneral;

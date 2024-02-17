import React from "react";
import iconSg1 from "../../assets/sg-1.png";
import iconSg2 from "../../assets/sg-2.png";
import iconSg3 from "../../assets/sg-3.png";
import iconSg4 from "../../assets/sg-4.png";
const SingleStat = ({ label, totalAmount, todayAmount, icon, isActive }) => {
  return (
    <div className="bg-gradient-to-b from-[#C1FF72] to-[#60AB00] rounded-lg drop-shadow-md">
      <div>
        <p>{label}</p>
        <strong>${totalAmount}</strong>
        <span></span>
        <p>Today ${todayAmount}</p>
      </div>
      <div>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

const StatsGeneral = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
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

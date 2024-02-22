import React from "react";
const UserInfo = ({ icon, label, value }) => {
  return (
    <div className="grid grid-cols-[34px_auto] gap-3 align-items-center items-center">
      <img className="max-w-full block w-full" src={icon} alt="icon" />
      <div>
        <span className="text-white text-sm font-medium block leading-tight mb-[3px]">
          {label}
        </span>
        <strong className="text-primary text-base font-bold block leading-tight">
          {value}
        </strong>
      </div>
    </div>
  );
};

export default UserInfo;

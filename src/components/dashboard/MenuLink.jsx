import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ icon, text, isActive }) => {
  return (
    <li className="block">
      <NavLink
        className={`${
          isActive ? "bg-[#2C0033]" : "bg-transparent"
        } flex items-center px-4 py-3 rounded-lg text-white text-base font-medium hover:text-primary transition duration-200`}
      >
        <span className="inline-block mr-4 w-7 h-7">
          <img className="max-w-full" src={icon} alt="icon" />
        </span>
        {text}
      </NavLink>
    </li>
  );
};

export default MenuLink;

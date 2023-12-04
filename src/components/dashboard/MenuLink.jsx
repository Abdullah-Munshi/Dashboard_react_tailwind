import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ icon, text }) => {
  return (
    <li className='block border-b border-[#3B3737] last:border-none'>
      <NavLink className='py-3 inline-flex flex-row flex-wrap items-center text-white font-khand font-semibold tracking-[1.2px] text-lg hover:text-primary transition duration-200'>
        <span className='w-14 h-14 mr-3 bg-[#4E4D4B] p-3 basis-14 rounded-full inline-flex items-center justify-center drop-shadow-[0px_4px_14px_rgba(0,0,0,0.25)]'>
          <img className='max-w-full' src={icon} alt='icon' />
        </span>
        {text}
      </NavLink>
    </li>
  );
};

export default MenuLink;

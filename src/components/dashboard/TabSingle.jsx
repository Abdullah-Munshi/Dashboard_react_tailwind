import React from "react";
import { NavLink } from "react-router-dom";

const TabSingle = ({ icon, text, notification }) => {
  return (
    <div className='bg-[#08B6DD] mt-3 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] rounded-lg_next border border-[rgba(0,0,0,0.40)] text-center'>
      <NavLink className='px-4 pb-5 inline-block relative'>
        {notification ? (
          <span className='absolute w-6 h-6 inline-flex items-center justify-center text-white font-trunoSemibold text-[14px] rounded-[5px] bg-[#123377] -right-4 -top-2'>
            {notification}
          </span>
        ) : (
          ""
        )}
        <img className='w-16 h-16 -mt-3 mx-auto mb-2' src={icon} alt='icon' />
        <span className='text-[15px] font-trunoSemibold text-[#243775] block'>
          {text}
        </span>
      </NavLink>
    </div>
  );
};

export default TabSingle;

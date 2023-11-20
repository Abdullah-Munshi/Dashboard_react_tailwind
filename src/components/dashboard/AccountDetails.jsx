import React from "react";
import { TitleSecondary } from "../Utility";
const detailsRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const AccountDetails = () => {
  return (
    <div className='bg-black border-2 border-secondary rounded-2xl_next shadow-one'>
      <div className='text-center py-3 px-5'>
        <TitleSecondary>My Account Details</TitleSecondary>
      </div>
      <div>
        <ul>
          {detailsRow.map((row) => {
            return (
              <li className='odd:bg-[#2D2B21] grid grid-cols-2 gap-4 text-white tracking-[.6px] font-semibold text-base px-5 py-2'>
                <span className='block'>Text 12345</span>
                <span className='block text-right'>Answer</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AccountDetails;

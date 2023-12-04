import React from "react";
const DetailsTable = ({ list }) => {
  return (
    <div>
      <ul className='detail-list'>
        {list.map((row, index) => {
          return (
            <li
              key={index}
              className='text-white font-khand tracking-[1px] grid grid-cols-2 gap-4 font-normal text-[17px] py-2 min-h-[54px] items-center'
            >
              <span className='block'>Text 12345</span>
              <span className='block text-right font-bold'>Answer</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsTable;

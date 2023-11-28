import React from "react";
const DetailsTable = ({ list }) => {
  return (
    <div className='bg-gradient-six border-3 border-[#243775] rounded-lg_next'>
      <ul className='detail-list'>
        {list.map((row, index) => {
          return (
            <li
              key={index}
              className='border-b border-[#123377] text-[#123377] tracking-[.45px] grid grid-cols-2 gap-4 font-trunoRegular text-[15px] px-5 md:px-6 py-2 min-h-[54px] items-center'
            >
              <span className='block'>Text 12345</span>
              <span className='block text-right font-trunoSemibold'>
                Answer
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsTable;

import React from "react";
const CopyLink = ({ title, link }) => {
  return (
    <div className="relative p-4 md:p-6 pr-20 gird grid-cols-[auto_60px] items-center bg-[rgba(3,0,12,0.72)] border-[3px] border-orange rounded-2xl_next">
      <div>
        <h4 className="text-orange font-orbitron txt_shadow_one text-xl xl:text-[28px] font-bold">
          {title}
        </h4>
        <input
          className="bg-transparent border-0 outline-none text-white text-[15px] font-orbitron w-full h-7"
          type="text"
          value={link}
          readOnly
        />
      </div>

      <button className="absolute right-[8px] md:right-[14px] top-1/2 -translate-y-1/2 ml-auto">
        <svg
          width="91"
          height="91"
          viewBox="0 0 91 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 md:w-[56px] h-10 md:h-[56px]"
        >
          <path
            d="M68.2494 68.2502H34.1243C29.9535 68.2502 26.541 64.8377 26.541 60.6668V15.1668C26.541 10.996 29.9535 7.5835 34.1243 7.5835H68.2494C72.4202 7.5835 75.8327 10.996 75.8327 15.1668V60.6668C75.8327 64.8377 72.4202 68.2502 68.2494 68.2502ZM34.1243 15.1668V60.6668H68.2494V15.1668H34.1243Z"
            fill="#40C5E6"
          />
          <path
            d="M56.875 83.4167H18.9583C14.7875 83.4167 11.375 80.0042 11.375 75.8333V26.5417C11.375 24.2667 12.8917 22.75 15.1667 22.75C17.4417 22.75 18.9583 24.2667 18.9583 26.5417V75.8333H56.875C59.15 75.8333 60.6667 77.35 60.6667 79.625C60.6667 81.9 59.15 83.4167 56.875 83.4167Z"
            fill="#40C5E6"
          />
        </svg>
      </button>
    </div>
  );
};

export default CopyLink;

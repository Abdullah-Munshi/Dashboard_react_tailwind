import React from "react";

const AuthTitle = ({ heading, subHeading }) => {
  return (
    <div className="bg-[#3D3D3D] rounded-xl p-6 text-center -mt-9 max-w-[750px] mx-auto pb-7 shadow-lg shadow-black/30">
      <h2 className="text-primary font-russoOne text-[42px] leading-tight mb-1">
        {heading}
      </h2>
      <p className="text-white text-2xl">{subHeading}</p>
    </div>
  );
};

export default AuthTitle;

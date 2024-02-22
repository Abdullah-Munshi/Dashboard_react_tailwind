import React from "react";

const BulkImgTitleDesc = ({ img, title, description }) => {
  return (
    <div className="text-center max-w-[220px] mx-auto">
      <div className="mx-auto max-w-[70px] h-[70px] mb-3">
        <img src={img} alt="img" />
      </div>
      <h4 className="text-white text-lg sm:text-[19px] font-bold leading-[1.3] mb-3">
        {title}
      </h4>
      <p className="text-[#E1E1E1] text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  );
};

export default BulkImgTitleDesc;

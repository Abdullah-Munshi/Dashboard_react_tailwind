import React from "react";
import { Link } from "react-router-dom";
const CopyLink = ({ title, link }) => {
  return (
    <div className='space-y-1'>
      <h4 className='text-primary text-[22px] font-khand font-bold'>{title}</h4>
      <Link className='text-white text-lg font-medium inline-block'>
        {link}
      </Link>
    </div>
  );
};

export default CopyLink;

import React from "react";

const Network = ({ icon }) => {
  return (
    <div className="bg-[#393939] w-[47px] h-[47px] rounded-lg_next inline-flex items-center jusitfy-center p-2">
      <img src={icon} alt="N" className="max-w-full" />
    </div>
  );
};

export default Network;

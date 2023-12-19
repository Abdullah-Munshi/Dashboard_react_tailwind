import React from "react";

const Contract = () => {
  return (
    <div className="rounded-[50px] border-[5px] border-white min-h-[450px] relative box-border p-6">
      <h4 className="text-white text-xl txt_shadow_one font-orbitron font-bold text-center">
        CONTRACT #13
      </h4>

      <button className="bg-four w-[calc(100%_+_10px)] h-32 border-[5px] border-white rounded-[50px] inline-flex flex-col items-center justify-center leading-tight sm:leading-[1] font-orbitron text-white text-xl sm:text-3xl uppercase transition duration-300 hover:border-primary hover:text-primary absolute -bottom-[5px] -left-[5px] right-0 ">
        <span className="block text-xs sm:text-lg">CANCEL CONTRACT</span>
        GET REFUND
      </button>
    </div>
  );
};

export default Contract;

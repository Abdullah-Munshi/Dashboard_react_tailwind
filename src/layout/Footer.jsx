import React from "react";
import { ButtonGray } from "../components/common/Buttons";

const Footer = () => {
  return (
    <div className="footer mt-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-5 md:px-6 md:py-5 lg:px-8 lg:py-6">
      <p className="text-[#828282] text-sm font-normal mt-4 md:mt-0">
        Copyright © 2010-2024 Dexloot | v1.0.1
      </p>
      <ButtonGray onClick={() => console.log("contact us")}>
        Contact Us
      </ButtonGray>
    </div>
  );
};

export default Footer;

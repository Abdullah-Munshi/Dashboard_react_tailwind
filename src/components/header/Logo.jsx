import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <Link className="logo inline-block">
      <img className="block w-[150px]" src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;

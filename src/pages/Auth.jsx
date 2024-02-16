import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import authBg from "../assets/auth-bg.webp";
import logo from "../assets/logo.png";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="min-h-screen relative">
      <div
        className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${authBg})` }}
      ></div>
      <div className="min-h-screen flex items-center z-10 relative py-10">
        <main className="max-w-[1140px] basis-full mx-auto">
          <div className="text-center mb-20">
            <Link to="/dashboard" className="inline-block">
              <img className="w-[150px] block" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="border-2 border-[#FFDE59] rounded-3xl bg-gradient-to-b from-[#181818]/80 to-[#000000]/80 min-h-[400px] shadow-lg shadow-black/40 px-4 pb-5">
            <div>{isLoggedIn ? <Login /> : <Register />}</div>
          </div>
          <div className="text-center mt-16">
            <p className="bg-[#A5A6A8] px-5 pt-2.5 pb-2 rounded-lg inline-block font-semibold text-black shadow-lg shadow-black/20">
              © 2024 Heal.Estate - All Rights Reserved | v1.0.0
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Auth;

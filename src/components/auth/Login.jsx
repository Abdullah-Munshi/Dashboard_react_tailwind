import React from "react";
import AuthTitle from "./AuthTitle";
import { Button } from "../Utility";

const Login = () => {
  const handleRegistration = () => {
    console.log("Handle Registration Function!");
  };
  const handleLogin = () => {
    console.log("Handle Login Function!");
  };
  return (
    <div className="space-y-14">
      <div className="">
        <AuthTitle
          heading="Welcome to Heal.Estate"
          subHeading="Let’s Get Started"
        />
      </div>
      <div className="grid grid-cols-2 gap-14 max-w-[750px] mx-auto">
        <div className="max-w-[300px]">
          <p className="text-white text-center text-base font-bold mb-5">
            New to Heal.Estate?
          </p>
          <Button
            onClick={handleRegistration}
            type="button"
            variant="cyan"
            classes="w-full"
          >
            CREATE AN ACCOUNT
          </Button>
        </div>
        <div className="max-w-[300px]">
          <p className="text-white text-center text-base font-bold mb-5">
            Already have an account?
          </p>
          <Button
            onClick={handleLogin}
            type="button"
            variant="pink"
            classes="w-full"
          >
            LOGIN TO BACKOFFICE
          </Button>
        </div>
      </div>
      <div className="text-center max-w-[750px] mx-auto">
        <p className="text-white text-sm">
          You were referred by{" "}
          <strong className="inline-block">Username</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;

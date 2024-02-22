import React from "react";
import { Container, Viewport } from "../components/common/Utils";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BulkImgTitleDesc from "../components/auth/BulkImgTitleDesc";

import s1 from "../assets/s-1.png";
import s2 from "../assets/s-2.png";
import s3 from "../assets/s-3.png";
import s4 from "../assets/s-4.png";
import {
  ButtonPrimary,
  ButtonPrimaryOutline,
} from "../components/common/Buttons";
const Auth = () => {
  return (
    <Viewport>
      <Header />
      <Container>
        <div className="pt-8 pb-8 xl:pt-16 space-y-14 xl:space-y-[76px] max-w-[1120px] mx-auto">
          <div className="welcome-wrapper text-center">
            <h1 className="text-primary text-4xl md:text-5xl xl:text-[64px] font-aleo font-bold leading-tight">
              Welcome to Dexloot
            </h1>
            <p className="text-white text-lg md:text-[22px] font-aleo font-normal lg:mt-2">
              Decentralised Payment Gateway for your business
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-[290px] sm:max-w-[540px] mx-auto mt-6 lg:mt-10">
              <ButtonPrimary onClick={() => console.log("Create new project")}>
                Create new project
              </ButtonPrimary>
              <ButtonPrimaryOutline onClick={() => console.log("Login")}>
                Login to existing project
              </ButtonPrimaryOutline>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-xl sm:text-2xl font-aleo font-bold mb-6 lg:mb-12 xl:mb-[60px] text-center">
              How are we different?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <BulkImgTitleDesc
                img={s1}
                title="Decentralized Payment Processing"
                description="We utilize smart contracts for payment processing, ensuring transparency and security without the need for intermediaries."
              />
              <BulkImgTitleDesc
                img={s2}
                title="Decentralized Payment Processing"
                description="We utilize smart contracts for payment processing, ensuring transparency and security without the need for intermediaries."
              />
              <BulkImgTitleDesc
                img={s3}
                title="Decentralized Payment Processing"
                description="We utilize smart contracts for payment processing, ensuring transparency and security without the need for intermediaries."
              />
              <BulkImgTitleDesc
                img={s4}
                title="Decentralized Payment Processing"
                description="We utilize smart contracts for payment processing, ensuring transparency and security without the need for intermediaries."
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Viewport>
  );
};

export default Auth;

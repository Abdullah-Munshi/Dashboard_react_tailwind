import React from "react";
import { PrimaryHeading } from "../components/common/Headings";
import { ContentBox } from "../components/common/Utils";
import { ButtonPrimaryType2 } from "../components/common/Buttons";
import IconPlus from "../assets/plus.png";

const Create = () => {
  return (
    <div>
      <div className="mb-4 lg:mb-6">
        <PrimaryHeading>Payments Dashboard</PrimaryHeading>
      </div>
      <ContentBox>
        <div className="min-h-[300px] text-center flex flex-col items-center justify-center">
          <h6 className="text-white text-base lg:text-lg font-bold mb-5">
            Create payment gateway for your project
          </h6>
          <ButtonPrimaryType2>
            <span>Create Project</span>{" "}
            <img className="w-[18px] ml-6" src={IconPlus} alt="+" />
          </ButtonPrimaryType2>
        </div>
      </ContentBox>
    </div>
  );
};

export default Create;

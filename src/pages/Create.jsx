import React from "react";
import { PrimaryHeading } from "../components/common/Headings";
import { ContentBox } from "../components/common/Utils";
import { ButtonPrimaryType2 } from "../components/common/Buttons";

const Create = () => {
  return (
    <div>
      <PrimaryHeading>Payments Dashboard</PrimaryHeading>
      <ContentBox>
        <div className="min-h-[300px] text-center">
          <h6>Create payment gateway for your project</h6>
          <ButtonPrimaryType2>Create Project</ButtonPrimaryType2>
        </div>
      </ContentBox>
    </div>
  );
};

export default Create;

import React from "react";
import { PrimaryHeading } from "../components/common/Headings";
import { ContentBox } from "../components/common/Utils";
import Table from "../components/dashboard/Table";

const Transactions = () => {
  return (
    <div>
      <div className="mb-4 lg:mb-6">
        <PrimaryHeading>Payments Dashboard</PrimaryHeading>
      </div>
      <div className="tabs grid grid-cols-2 gap-3 sm:gap-0 sm:flex flex-wrap mb-4 sm:mb-3">
        <button className="active">Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
      </div>
      <ContentBox>
        <div>
          <h6 className="text-white text-lg font-bold mb-6">
            Recent Transactions
          </h6>
          <Table />
        </div>
      </ContentBox>
    </div>
  );
};

export default Transactions;

import React from "react";
const trs = [0, 0, 0, 0, 0];
const TableTwo = () => {
  return (
    <div className="table-custom-scroller">
      <div className="table-custom two w-full">
        <div className="tbl-head-row border-b border-[#54567F]">
          <div className="tbl-td !text-primary !font-bold inline-flex items-center">
            Product
          </div>
          <div className="tbl-td !text-primary !font-bold inline-flex items-center justify-end">
            Level 1 Income
          </div>
          <div className="tbl-td !text-primary !font-bold inline-flex items-center justify-end">
            Level 2 Income
          </div>
        </div>
        {trs.map((tr) => {
          return (
            <div className="tbl-row" key={Math.random() * 5}>
              <div className="tbl-td">Stat text</div>
              <div className="tbl-td justify-end">
                <strong>Stat text</strong>
              </div>
              <div className="tbl-td justify-end">
                <strong>Stat text</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableTwo;

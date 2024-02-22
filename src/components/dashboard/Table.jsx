import React from "react";
const trs = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const Table = () => {
  return (
    <div className="table-custom-scroller">
      <div className="table-custom w-full">
        <div className="tbl-head-row bg-[#565656] shadow-lg shadow-black/10 rounded-lg_next">
          <div className="tbl-td">Title</div>
          <div className="tbl-td">Title</div>
          <div className="tbl-td">Title</div>
          <div className="tbl-td">Title</div>
          <div className="tbl-td">Title</div>
        </div>
        {trs.map((tr) => {
          return (
            <div className="tbl-row" key={Math.random() * 5}>
              <div className="tbl-td">Stat text</div>
              <div className="tbl-td ">text text</div>
              <div className="tbl-td ">text text</div>
              <div className="tbl-td ">text text</div>
              <div className="tbl-td ">
                <strong>Stat text</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;

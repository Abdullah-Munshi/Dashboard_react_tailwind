import React from "react";
const trs = [0, 0, 0, 0, 0, 0];
const Table = () => {
  return (
    <div className="table-custom-scroller">
      <div className="table-custom w-full">
        {trs.map((tr) => {
          return (
            <div className="tbl-row" key={Math.random() * 5}>
              <div className="tbl-td">Stat text</div>
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

export default Table;

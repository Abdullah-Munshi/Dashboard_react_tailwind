import React from "react";
const trs = [0, 0, 0, 0, 0, 0];
const Table = () => {
  return (
    <div className='table-custom-scroller'>
      <table className='table-custom font-khand w-full'>
        <tbody>
          {trs.map((tr) => {
            return (
              <tr>
                <td>Stat text</td>
                <td>
                  <strong>Stat text</strong>
                </td>
                <td>
                  <strong>Stat text</strong>
                </td>
                <td>
                  <strong>Stat text</strong>
                </td>
                <td>
                  <strong>Stat text</strong>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
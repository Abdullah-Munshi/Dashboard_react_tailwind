import React from "react";
import { ButtonGray, ButtonPrimary } from "../common/Buttons";
import Stats from "./Stats";
import IconDoller from "../../assets/doller.png";

const Drawer = ({ onCloseDrawer }) => {
  return (
    <div className="drawer">
      <button onClick={onCloseDrawer} className="text-white mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>

      <div className="sidebar space-y-5 mb-4">
        <ButtonPrimary>Payment Gateway</ButtonPrimary>
        <ButtonGray>Payout System</ButtonGray>
        <ul className="bg-[#474747] rounded-lg_next block">
          <li className="border-b border-[#313131] last:border-0 px-6 py-5">
            <Stats
              icon={IconDoller}
              label="Payments"
              value="$124<span class='sub'>(24)</span>"
              subLabel="$124 (10) today"
            />
          </li>
          <li className="block px-6 py-5">
            <Stats
              icon={IconDoller}
              label="Payments"
              value="$124<span class='sub'>(24)</span>"
              subLabel="$124 (10) today"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

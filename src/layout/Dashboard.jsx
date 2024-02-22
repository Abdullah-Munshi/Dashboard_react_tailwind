import React from "react";
import { Container, Viewport } from "../components/common/Utils";
import Header from "./Header";
import Footer from "./Footer";
import { ButtonGray, ButtonPrimary } from "../components/common/Buttons";
import { Outlet } from "react-router-dom";
import Stats from "../components/dashboard/Stats";
import IconDoller from "../assets/doller.png";

const Dashboard = () => {
  return (
    <Viewport>
      <Header />
      <Container>
        <div className="lg:grid grid-cols-[250px_auto] gap-8">
          <div className="sidebar space-y-4">
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
          <div className="maincontent">
            <Outlet />
          </div>
        </div>
      </Container>
      <Footer />
    </Viewport>
  );
};

export default Dashboard;

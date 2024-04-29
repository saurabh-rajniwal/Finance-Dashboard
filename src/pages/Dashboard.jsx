import React from "react";
import IconTextGenerator from "../components/IconTextGenerator";
import { items, management } from "../constants/constant";
import Aurora from "../assets/Aurora.png";
import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";

function Dashboard() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="bg-custom-sidebar w-1/4 pt-8 px-5">
          <img src={Aurora} alt="logo" className="mx-auto mb-8" />
          <div className="mb-8 font-semibold text-base text-custom-black">
            <IconTextGenerator
              heading="General"
              items={items}
              count={items.length}
              setButton={false}
            />
          </div>
          <div className="mb-8 text-custom-text font-semibold text-sm">
            <IconTextGenerator
              heading="Management"
              items={management}
              count={management.length}
              setButton={false}
            />
          </div>
          <p className="text-sm text-custom-text px-5">
            2023 © Lucas Marques Expire in 09/2023
          </p>
        </div>
        <div className="bg-custom-mainTab w-3/4">
          <div className="p-4">
            <HeaderComponent />
            <ContentComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

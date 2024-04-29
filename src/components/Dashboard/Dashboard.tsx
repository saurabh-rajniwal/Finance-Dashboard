import React from "react";
import Searchbar from "../Searchbar";
import { ReactSVG } from "react-svg";
import notificationSVG from "../../assets/svgs/notification.svg";
import downloadSVG from "../../assets/svgs/download.svg";
import graph from "../../assets/svgs/graph.svg";
import people from "../../assets/svgs/people.svg";
import loginUser from "../../assets/Avatar.png";

import Button from "../Button";
import Card from "../Card";
import CustomInfo from "../CustomInfo";
import TryAurora from "../TryAurora";
import AreaChart from "../AreaChart";
import StackChart from "../StackChart";

function Dashboard() {
  const handleSearch = (event) => {
    console.log(event);
  };
  return (
    <main className="flex flex-col bg-custom-main-tab w-full px-14 py-11">
      <div className="flex items-center justify-between w-full pb-8">
        <div className="flex w-2/3 justify-between">
          <h1 className="text-4xl font-bold text-custom-black">Dashboard</h1>
          <div className="ml-6">
            <Searchbar placeholder="Search Dashboard" onSearch={handleSearch} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 w-1/3">
          <ReactSVG src={notificationSVG} />
          <Button
            variation="primary"
            rightSlot={<ReactSVG src={downloadSVG} wrapper="span" />}
          >
            Import
          </Button>
          <img src={loginUser} alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/3 flex flex-col">
          <div className="flex mb-14">
            <div className="max-w-96 max-h-56">
              <AreaChart />
            </div>
            <div>Div2</div>
          </div>

          <div className="flex mb-20 gap-20">
            <Card
              variations={
                <CustomInfo
                  icon={<ReactSVG src={graph} />}
                  heading={"Earning"}
                  subheading={"$350.40"}
                />
              }
              isCustomInfo={true}
            />
            <Card
              variations={
                <CustomInfo
                  icon={<ReactSVG src={people} />}
                  heading={"New Client"}
                  subheading={"321"}
                />
              }
              isCustomInfo={true}
            />
          </div>
          <div className="max-w-2xl">
            <Card variations={<TryAurora />} isCustomInfo={false} />
          </div>
        </div>
        <div className="w-1/3">
          <div className="max-w-96 max-h-56">
            <StackChart />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;

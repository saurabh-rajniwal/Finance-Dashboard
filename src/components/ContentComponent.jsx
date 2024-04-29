import React from "react";
import IconTextGenerator from "./IconTextGenerator";
import { earning, client, transfer, transactions } from "../constants/constant";

function ContentComponent() {
  return (
    <div className="p-2 flex">
      <div className="body1">
        <div className="flex">
          <div className="text-black">Graph</div>
          <div>
            <div className="p-4 text-black">
              <IconTextGenerator
                heading="Your Transfers"
                items={transfer}
                count={transfer.length}
                setButton={true}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white rounded-lg p-4 text-black">
            <IconTextGenerator
              heading=""
              items={earning}
              count={earning.length}
              setButton={false}
            />
          </div>
          <div className="bg-white rounded-lg p-4 text-black">
            <IconTextGenerator
              heading=""
              items={client}
              count={client.length}
              setButton={false}
            />
          </div>
        </div>
        <div className="bodies">Bodies</div>
      </div>
      <div className="body2">
        <div className="bodies2 text-black">Graph 2</div>
        <div className="bg-white rounded-lg p-4 text-black">
          <IconTextGenerator
            heading="Your Transactions"
            items={transactions}
            count={transactions.length}
            setButton={true}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentComponent;

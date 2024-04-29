import React from "react";

function CustomInfo({ icon, heading, subheading }) {
  return (
    <div className="flex w-max gap-7">
      <div>{icon}</div>
      <div>
        <p className="text-custom-black text-sm">{heading}</p>
        <p className="text-custom-purple text-2xl font-bold">{subheading}</p>
      </div>
    </div>
  );
}

export default CustomInfo;

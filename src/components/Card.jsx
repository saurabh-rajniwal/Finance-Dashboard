import React from "react";

function Card({ variations, isCustomInfo }) {
  return (
    <div
      className={`p-5 bg-white rounded-[20px] ${
        isCustomInfo ? "w-72 h-24" : "max-w-2xl h-96"
      }`}
    >
      {variations}
    </div>
  );
}

export default Card;

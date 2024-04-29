import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

function CustomButton({ text, icon }) {
  return (
    <div>
      <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-full">
        <span className="mr-2">{text}</span> {icon && <FaArrowAltCircleDown />}
      </button>
    </div>
  );
}

export default CustomButton;

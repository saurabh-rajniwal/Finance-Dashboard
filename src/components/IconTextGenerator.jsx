import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FaArrowRight } from "react-icons/fa";

function IconTextGenerator({ heading, items, setButton }) {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl">
        <h2 className="font-bold mb-4 text-custom-header text-sm">{heading}</h2>
        <div>
          {items.map((item, index) => (
            <div className="flex items-center m-2 gap-4" key={index}>
              <img src={item.icon} alt={item.text} className="mr-2" />
              <div>
                <p>{item.text}</p>
                <p>{item.subheading}</p>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        {setButton && (
          <div className="flex justify-end mt-4">
            <button className="text-black px-4 py-2 rounded flex items-center">
              <span className="mr-2">View all</span>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default IconTextGenerator;

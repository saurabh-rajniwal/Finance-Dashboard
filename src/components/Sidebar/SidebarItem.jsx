import { ReactSVG } from "react-svg";

function SidebarItem({ image, text, active, variation }) {
  const secondaryStyles = "text-custom-light-grey font-normal text-xs";
  return (
    <div
      className={`flex items-center gap-2 hover:bg-custom-main-tab px-3 py-2 rounded-3xl ${
        active && "bg-custom-main-tab"
      }`}
    >
      <ReactSVG src={image} />
      <span
        className={`text-base ml-3 overflow-hidden text-ellipsis font-semibold   ${
          variation === "secondary" ? secondaryStyles : "black"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default SidebarItem;

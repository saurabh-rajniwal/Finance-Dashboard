import SidebarItem from "./SidebarItem";

function SidebarList({ heading, listItems, variation }) {
  return (
    <div>
      <div className="uppercase text-custom-light-grey text-sm font-semibold mb-7">
        {heading}
      </div>
      <ul>
        {listItems.map((item) => (
          <li
            className={`py-3 ${variation === "secondary" && "pl-2"}`}
            key={item.id}
          >
            <a href={item.to}>
              <SidebarItem
                variation={variation}
                active={item.active}
                image={item.icon}
                text={item.text}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarList;

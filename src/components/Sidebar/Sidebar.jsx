import AuroraLogo from "../../assets/Aurora.png";
import SidebarList from "./SidebarList";
import dashboardSVG from "../../assets/svgs/dashboard.svg";
import organizationSVG from "../../assets/svgs/organisation.svg";
import reportSVG from "../../assets/svgs/report.svg";
import documentSVG from "../../assets/svgs/document.svg";
import salesSVG from "../../assets/svgs/sales.svg";
import accountingSVG from "../../assets/svgs/accounting.svg";
import bankingSVG from "../../assets/svgs/banking.svg";
import purchasesSVG from "../../assets/svgs/purchases.svg";

function Sidebar() {
  return (
    <aside className="flex gap-10 flex-col py-11 px-8">
      <a href="/" className="w-44">
        <img className="w-full" src={AuroraLogo} alt="Aurora Logo" />
      </a>
      {/* General List */}
      <SidebarList
        heading="General"
        listItems={[
          {
            id: 1,
            icon: dashboardSVG,
            text: "Dashboard",
            to: "/#dashboard",
            active: true,
          },
          {
            id: 2,
            icon: organizationSVG,
            text: "Organization",
            to: "/#organization",
          },
          {
            id: 3,
            icon: reportSVG,
            text: "Reports",
            to: "/#reports",
          },
          {
            id: 4,
            icon: documentSVG,
            text: "Documents",
            to: "/#documents",
          },
        ]}
      />

      {/* Management List */}
      <SidebarList
        heading="Management"
        variation="secondary"
        listItems={[
          {
            id: 1,
            icon: salesSVG,
            text: "Sales",
            to: "/#sales",
          },
          {
            id: 2,
            icon: purchasesSVG,
            text: "Purchase",
            to: "/#purchase",
          },
          {
            id: 3,
            icon: accountingSVG,
            text: "Accounting",
            to: "/#accounting",
          },
          {
            id: 4,
            icon: bankingSVG,
            text: "Banking",
            to: "/#banking",
          },
        ]}
      />

      <div className="text-custom-light-grey text-sm text-wrap max-w-[180px]">
        2023 &#169; Lucas Marques Expire in 09/2023
      </div>
    </aside>
  );
}

export default Sidebar;

import dashboard from "../assets/dashboard.png";
import leftIcon from "../assets/leftIcon.png";
import handShake from "../assets/handShake.png";
import document from "../assets/document.png";
import bullsEye from "../assets/bullsEys.png";
import eye from "../assets/eye.png";
import wallet from "../assets/wallet.png";
import university from "../assets/university.png";
import people from "../assets/people.png";
import graph from "../assets/graph.png";

export const items = [
  {
    icon: dashboard,
    text: "Dashboard",
    subheading: "",
    value: "",
  },
  { icon: leftIcon, text: "Organization", subheading: "" },
  { icon: handShake, text: "Report", subheading: "" },
  { icon: document, text: "Documents", subheading: "" },
];

export const management = [
  { icon: bullsEye, text: "Sales" },
  { icon: wallet, text: "Purchase" },
  { icon: eye, text: "Accounting" },
  { icon: university, text: "Banking" },
];

export const earning = [
  { icon: graph, text: "Earnings", subheading: "$350.40" },
];

export const client = [
  { icon: people, text: "New Client", subheading: "$321" },
];

export const transfer = [
  {
    icon: people,
    text: "From Alex Manda",
    subheading: "Today 16:26",
    value: "+$50",
  },
  {
    icon: people,
    text: "To Laura Santos",
    subheading: "Today 8:49",
    value: "-$27",
  },
];

export const transactions = [
  {
    icon: people,
    text: "Public Transport",
    subheading: "22 September 2020",
  },
  {
    icon: people,
    text: "Grocery Store",
    subheading: "18 September 2020",
  },
  {
    icon: people,
    text: "Public Transport",
    subheading: "20 September 2020",
  },
];

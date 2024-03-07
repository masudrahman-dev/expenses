import React from "react";
import { v4 } from "uuid";
import clx from "../../../utils/clx";

const sidebarItems = [
  {
    label: "Dashboard",
    path: "dashboard",
  },
  {
    label: "Expenses",
    path: "expenses",
  },
  {
    label: "Wallets",
    path: "wallets",
  },
  {
    label: "Summary",
    path: "summary",
  },
  {
    label: "Accounts",
    path: "accounts",
  },
  {
    label: "Settings",
    path: "settings",
  },
];

const SidebarItems: React.FC = () => {
  return (
    <ul className="flex flex-col gap-[30px] md:mt-[117px] mt-12 items-center md:items-start ">
      {sidebarItems.map((item) => {
        return (
          <li
            className={clx("text-2xl text-gray  font-semibold hover:text-white ", {
              "text-white": item.label === "Expenses",
            })}
            key={v4()}
          >
            {item?.label}
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarItems;

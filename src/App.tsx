import React from "react";
import Profile from "./components/profile";
import profileImg from "../src/assets/profile.png";
import { v4 } from "uuid";

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

const App = () => {
  return (
    <div className="p-5 bg-black text-white w-full h-screen">
      <div className="flex">
        <div className="border pl-20 pt-20">
          <Profile />

          <ul className="flex flex-col gap-[30px] mt-[117px] ">
            {sidebarItems.map((item) => {
              return (
                <li className="text-2xl text-gray  font-semibold " key={v4()}>
                  {item?.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border">contetn</div>
      </div>
    </div>
  );
};

export default App;

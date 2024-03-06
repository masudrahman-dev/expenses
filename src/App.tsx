import React from "react";
import Profile from "./components/profile";
import SidebarItems from "./components/sidebar/sidebar-items";
import avatar1Img from "../src/assets/avatar1.png";
import avatar2Img from "../src/assets/avatar2.png";
import avatar3Img from "../src/assets/avatar3.png";
import Avatar from "./components/avatar";
import ChartMonth from "./components/chart";
import Sidebar from "./components/sidebar";
import Analytics from "./components/analytics";

const App = () => {
  return (
    <div className="p-5 bg-black w-full h-screen">
      <div className="flex">
        <Sidebar />
        <div className=" rounded-[30px] w-full bg-white border grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className=" md:col-span-9 w-full">
            <Analytics />
          </div>
          <div className=" md:col-span-3 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

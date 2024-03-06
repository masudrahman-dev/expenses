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
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Line from "./components/line";
const Title = () => {
  return (
    <>
      <div
        className="flex items-center mt-12 justify-between border-b-gray-light 
       border-b-2 pb-3"
      >
        <h2 className="text-lg">Today</h2>
        <button className=" inline-flex gap-1 text-gray-light" type="button">
          <div className="w-2 h-2 block bg-blue-light rounded-full"></div>
          <div className="w-2 h-2 block bg-blue-light rounded-full"></div>
          <div className="w-2 h-2 block bg-blue-light rounded-full"></div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              clipRule="evenodd"
            />
          </svg> */}
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="p-5 bg-black w-full h-screen">
      <div className="flex">
        <Sidebar />
        <div className=" rounded-[30px] w-full bg-white border grid grid-cols-1 gap-3 md:grid-cols-12">
          {/*  className=" pt-[60px] px-[100px]" */}
          <div className=" md:col-span-9 w-full pt-[60px] px-[100px] ">
            <Analytics />
            <div>
              <Title />
              <div className="pt-6 flex flex-col gap-6">
                <Line />
                <Line />
                <Line />
              </div>
            </div>

            <div>
              <Title />
              <div className="pt-6 flex flex-col gap-6">
                <Line />
                <Line />
                <Line />
              </div>
            </div>
          </div>
          <div className=" md:col-span-3 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

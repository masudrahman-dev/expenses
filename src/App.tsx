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
import Space from "./components/space";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <div
        className="flex items-center  justify-between border-b-gray-light 
       border-b-2 pb-3"
      >
        <h2 className="text-lg">{title}</h2>
        <button className=" inline-flex gap-1 text-gray-light" type="button">
          <div className="w-2 h-2 block bg-blue-light rounded-full"></div>
          <div className="w-2 h-2 block bg-blue-light rounded-full"></div>
          <div className="w-2 h-2 block bg-blue-light rounded-full"></div>
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="px-5 pt-5 bg-black w-full h-screen">
      <div className="flex">
        <Sidebar />
        <div className=" rounded-[30px] w-full bg-white border grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className=" md:col-span-9 w-full py-[60px] h-full  px-[100px] ">
            <div className="border">
              <Analytics />
              <div>
                <Space className="pt-[47px]" />
                <Title title="Today" />
                <Space className="pb-[24px]" />
                <div className=" flex flex-col gap-6">
                  <Line />
                  <Line />
                  <Line />
                </div>
              </div>

              <div>
                <Space className="pt-[49px]" />
                <Title title="Monday, 23 March 2020" />
                <Space className="pb-[24px]" />
                <div className="flex flex-col gap-6">
                  <Line />
                  <Line />
                  <Line />
                </div>
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

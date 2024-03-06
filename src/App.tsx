import React from "react";

import Sidebar from "./components/sidebar";
import Analytics from "./components/analytics";
import {
  BellAlertIcon,
  HomeIcon,
  PlayCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import Line from "./components/line";
import Space from "./components/space";
import BusIcon from "./components/icons/bus-icon";

import SidebarRight from "./components/sidebar-right";

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
    <div className="  bg-black md:h-screen ">
      <div className="flex flex-col md:flex-row px-5 pt-5 w-full max-w-[1440px] mx-auto ">
        <Sidebar />
          <Space className="pt-12 md:pt-0"/>
        <div className=" rounded-[30px] w-full bg-white  grid grid-cols-1 gap-3 md:grid-cols-12">
          
          <div className=" md:col-span-8 w-full md:py-[60px] p-4 h-full  md:px-[100px] ">
            <div className="">
              <Analytics />
              <div>
                <Space className="pt-[47px]" />
                <Title title="Today" />
                <Space className="pb-[24px]" />
                <div className=" flex flex-col gap-6 ">
                  <Line
                    label="Grocery"
                    iconBgColor="bg-blue"
                    amount={"326.800"}
                    time="5:12 pm"
                    place="Belanja di pasar "
                    icon={<ShoppingCartIcon className=" w-4 h-4 text-white " />}
                  />

                  <Line
                    label="Transportation"
                    iconBgColor="bg-purple"
                    amount={"15.000"}
                    time="5:12 pm"
                    place="Naik bus umum"
                    icon={<BusIcon />}
                  />
                  <Line
                    label="Housing"
                    iconBgColor="bg-yellow"
                    amount={"326.800"}
                    time="5:12 pm"
                    place="Bayar Listrik"
                    icon={<HomeIcon className=" w-4 h-4 text-white " />}
                  />
                </div>
              </div>

              <div className="">
                <Space className="pt-[59px]" />
                <Title title="Monday, 23 March 2020" />
                <Space className="pb-[24px]" />
                <div className="flex flex-col gap-6">
                  <Line
                    label="Food and Drink"
                    iconBgColor="bg-red"
                    amount={"326.800"}
                    time="5:12 pm"
                    place="Makan Steak"
                    icon={<BellAlertIcon className=" w-4 h-4 text-white " />}
                  />
                  <Line
                    label="Entertainment"
                    iconBgColor="bg-blue"
                    amount={"326.800"}
                    time="5:12 pm"
                    place="Nonton Bioskop"
                    icon={<PlayCircleIcon className=" w-4 h-4 text-white " />}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 w-full">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

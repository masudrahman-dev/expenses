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
import Title from "./components/title";

const App = () => {
  return (
    <div className="   bg-black lg:h-screen ">
      <div className="flex flex-col   lg:flex-row w-full lg:w-[1440px] mx-auto  pt-4 px-4 ">
        <Sidebar />
        <Space className="pt-12 lg:pt-0" />
        <div className=" grid lg:grid-cols-12 grid-cols-1 pb-4 lg:pb-0 rounded-[30px] bg-white lg:min-w-[1060px] lg:h-[860px]  ">
          <div className="lg:col-span-8 gap-4  lg:pt-[60px] lg:px-[100px] pt-4 px-4 ">
            <Analytics />
            <div>
              <Space className="pt-[47px]" />
              <Title title="Today" />
              <Space className="pb-[24px]" />
              <div className=" flex flex-col gap-6 h-[200px] pr-4 overflow-y-auto ">
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

                <Line
                  label="Housing"
                  iconBgColor="bg-yellow"
                  amount={"326.800"}
                  time="5:12 pm"
                  place="Bayar Listrik"
                  icon={<HomeIcon className=" w-4 h-4 text-white " />}
                />
                <Line
                  label="Housing"
                  iconBgColor="bg-yellow"
                  amount={"326.800"}
                  time="5:12 pm"
                  place="Bayar Listrik"
                  icon={<HomeIcon className=" w-4 h-4 text-white " />}
                />

                <Line
                  label="Housing"
                  iconBgColor="bg-yellow"
                  amount={"326.800"}
                  time="5:12 pm"
                  place="Bayar Listrik"
                  icon={<HomeIcon className=" w-4 h-4 text-white " />}
                />
                <Line
                  label="Housing"
                  iconBgColor="bg-yellow"
                  amount={"326.800"}
                  time="5:12 pm"
                  place="Bayar Listrik"
                  icon={<HomeIcon className=" w-4 h-4 text-white " />}
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
            <div className=" ">
              <Space className="pt-[59px]" />
              <Title title="Monday, 23 March 2020" />
              <Space className="pb-[24px]" />
              <div className="flex flex-col gap-6 h-[130px] pr-4 overflow-y-auto">
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
                <Line
                  label="Entertainment"
                  iconBgColor="bg-blue"
                  amount={"326.800"}
                  time="5:12 pm"
                  place="Nonton Bioskop"
                  icon={<PlayCircleIcon className=" w-4 h-4 text-white " />}
                />
                <Line
                  label="Entertainment"
                  iconBgColor="bg-blue"
                  amount={"326.800"}
                  time="5:12 pm"
                  place="Nonton Bioskop"
                  icon={<PlayCircleIcon className=" w-4 h-4 text-white " />}
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
            <SidebarRight />
        </div>
        <Space className="h-12 " />
      </div>
    </div>
  );
};

export default App;

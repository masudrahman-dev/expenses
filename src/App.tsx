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
import ProgressBar from "./components/progress-bar";

import saveImg from "../src/assets/save.png";
import treeImg from "../src/assets/tree.png";

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
        <div className=" rounded-[30px] w-full bg-white  grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className=" md:col-span-9 w-full py-[60px] h-full  px-[100px] ">
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
          <div className=" md:col-span-3 w-full border-l px-[50px]">
            <Space className="pt-[76px]" />
            <h1 className="text-xl text-black font-semibold text-center">
              Where your money go?
            </h1>
            <Space className="pt-[30px]" />

            <div className="flex flex-col gap-[30px]">
              <ProgressBar
                label="Food and Drinks"
                amount="872.400"
                parent={30}
              />
              <ProgressBar label="Shopping" amount="1.378.200" parent={30} />
              <ProgressBar label="Housing" amount="928.500" parent={30} />
              <ProgressBar
                label="Transportation"
                amount="420.700"
                parent={30}
              />
              <ProgressBar label="Vehicle" amount="520.000" parent={30} />
            </div>
            <Space className="pt-[86px]" />
            <div className="px-[25px] pb-[25px] relative  bg-blue-light rounded-xl ">
              <img
                className="w-[84.15px] h-[72.43px] absolute  -top-6 left-6  "
                src={saveImg}
                alt="save money"
              />
              <img
                className="w-[52.53px] h-[90.12px] absolute  -top-10 right-6"
                src={treeImg}
                alt="save money tree"
              />

              <Space className="pt-[70px]" />
              <div>
                <h6 className="text-base font-semibold text-center pb-1">
                  Save more money
                </h6>
                <p className="text-xs leading-6 text-gray text-balance pb-5">
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim.
                </p>

                <button className="block rounded-lg bg-black px-[62px]  py-[14px] text-white text-xs ">
                  VIEW TIPS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

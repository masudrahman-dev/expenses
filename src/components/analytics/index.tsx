import React from "react";

import avatar1Img from "../../assets/avatar1.png";
import avatar2Img from "../../assets/avatar2.png";
import avatar3Img from "../../assets/avatar3.png";
import Avatar from "../avatar";
import ChartMonth from "../chart";
import Space from "../space";

const Analytics = () => {
  return (
    <>
      <div>
        <div className=" flex w-full items-start justify-between">
          <div>
            <h1 className="text-black text-4xl font-semibold tracking-wider	">
              Expenses
            </h1>
            <p className="text-gray text-base pt-[10px]">01 - 25 March, 2020</p>
          </div>
          <div className="flex gap-3 items-center  ">
            <div className=" flex items-center -space-x-1 relative ">
              <Avatar
                src={avatar1Img}
                className="z-30  hover:z-40 focus:z-40"
              />
              <Avatar
                src={avatar2Img}
                className="z-20  hover:z-40 focus:z-40"
              />
              <Avatar
                src={avatar3Img}
                className="z-10  hover:z-40 focus:z-40"
              />
            </div>
            <div className="text-lg w-10 h-10  flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12   text-gray-light"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <Space className="pt-[46px]" />
        <ChartMonth />
      </div>
    </>
  );
};

export default Analytics;

import React from "react";
import Space from "../space";
import ProgressBar from "../progress-bar";
import SaveCard from "../save-card";

const SidebarRight = () => {
  return (
    <div className=" bg-[#F9FAFC] md:px-[50px] px-4 rounded-r-[30px] ">
      <Space className="md:pt-[76px] pt-10" />
      <h1 className="text-xl text-black font-semibold text-center">
        Where your money go?
      </h1>
      <Space className="pt-[30px]" />

      <div className="flex flex-col gap-[30px]">
        <ProgressBar label="Food and Drinks" amount="872.400" parent={30} />
        <ProgressBar label="Shopping" amount="1.378.200" parent={30} />
        <ProgressBar label="Housing" amount="928.500" parent={30} />
        <ProgressBar label="Transportation" amount="420.700" parent={30} />
        <ProgressBar label="Vehicle" amount="520.000" parent={30} />
      </div>
      <Space className="pt-[86px]" />
      <SaveCard />

      <Space className="pt-[70px] md:pt-0" />
    </div>
  );
};

export default SidebarRight;

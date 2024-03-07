import React from "react";
import Space from "../space";
import saveImg from "../../assets/save.png";
import treeImg from "../../assets/tree.png";
const SaveCard = () => {
  return (
    <div className="px-[25px] pb-[25px] relative   bg-blue-light rounded-xl ">
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

      <Space className="pt-[60px]" />
      <div className="">
        <h6 className="text-base font-semibold text-center lg:text-start pb-1">
          Save more money
        </h6>
        <p className="text-xs leading-6 text-gray text-center lg:text-start text-balance pb-5">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>

        <div className="flex justify-center items-center  rounded-lg bg-black font-semibold w-full py-5 h-[14px] text-white text-xs ">
          <button type="button">VIEW TIPS</button>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;

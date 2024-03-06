import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

const Line = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-blue rounded-full w-12 h-12  flex justify-center items-center">
            <ShoppingCartIcon className=" w-4 h-4 text-white " />
          </div>
          <div>
            <h3 className="text-lg">Grocery</h3>
            <p className="text-xs text-gray">5:12 pm • Belanja di pasar</p>
          </div>
        </div>
        <h4 className="text-lg font-semibold">-326.800</h4>
      </div>
    </>
  );
};

export default Line;

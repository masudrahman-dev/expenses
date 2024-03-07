import React from "react";

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

export default Title
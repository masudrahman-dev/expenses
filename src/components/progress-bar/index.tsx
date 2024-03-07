import React from "react";
interface ProgressBarProps {
  label: string;
  amount: string;
  parent: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  amount,
  parent = 0,
}) => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <h6 className="text-xs text-gray font-semibold pb-2">{label}</h6>
        <p className="text-xs text-gray">{amount ? amount : "00"}</p>
      </div>
      <div className="relative">
        <div className="h-[5px] bg-blue-light rounded-full"></div>
        <div
          style={{ width: `${parent}%` }}
          className="h-[5px] absolute  inset-0 bg-green rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import clx from "../../utils/clx";

const IconProvider = ({
  children,
  iconBgColor,
}: {
  children: ReactNode;
  iconBgColor: string;
}) => {
  return (
    <div
      className={clx(
        "bg-white rounded-full w-12 h-12  flex justify-center items-center",
        iconBgColor
      )}
    >
      {children}
    </div>
  );
};

interface LineProps {
  iconBgColor: string;
  label: string;
  time: string;
  place: string;
  amount: string ;
  icon: ReactNode;
}
const Line: React.FC<LineProps> = ({
  amount,
  time,
  place,
  iconBgColor,
  label,
  icon,
}) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {icon && (
            <IconProvider iconBgColor={iconBgColor}>{icon}</IconProvider>
          )}
          <div>
            <h3 className="text-lg">{label}</h3>
            <p className="text-xs pt-1 text-gray">
              {time} • {place}
            </p>
          </div>
        </div>
        <h4 className="text-lg font-semibold">-{amount ? amount : "00"}</h4>
      </div>
    </>
  );
};

export default Line;

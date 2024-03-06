import React from "react";
import Profile from "../profile";
import SidebarItems from "./sidebar-items";

const Sidebar = () => {
  return (
    <>
      <div className="px-20 pt-20  text-white">
        <Profile />
        <SidebarItems />
      </div>
    </>
  );
};

export default Sidebar;

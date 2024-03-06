import React from "react";
import Profile from "../profile";
import SidebarItems from "./sidebar-items";

const Sidebar = () => {
  return (
    <>
      <div className="md:px-20 md:pt-20  text-white">
        <Profile />
        <SidebarItems />
      </div>
    </>
  );
};

export default Sidebar;

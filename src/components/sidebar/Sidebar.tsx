import React from "react";
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import UserCard from "./userCard/UserCard";
const Sidebar = () => {
  return (
    <div className="w-64">
      <SidebarHeader />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default Sidebar;

import React from "react";
import ServerNavbar from "../ServerNavbar/ServerNavbar";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <ServerNavbar />
      <h1>Hello i'm sidebar</h1>
    </div>
  );
}

export default Sidebar;

import React from "react";
import ChannelNavbar from "../ChannelNavbar/ChannelNavbar";
import ServerNavbar from "../ServerNavbar/ServerNavbar";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <ServerNavbar />
      {/* <ChannelNavbar /> */}
    </div>
  );
}

export default Sidebar;

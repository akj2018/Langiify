import React from "react";

import "./sidebar.styles.scss";

import { ReactComponent as LanguifyLogo } from "../../assets/languify-LOGO.svg";
import { ReactComponent as UserProfileLogo } from "../../assets/profile-icon.svg";
import DarkIconTray from "../dark-icon-tray/dark-icon-tray.components";
import LightIconTray from "../light-icon-tray/light-icon-tray.components";

const Sidebar = (props) => {
  var mini = true;
  const toggleSidebar = () => {
    if (mini) {
      console.log("opening sidebar");
      document.getElementById("sidebar").style.width = "175px";
      document.getElementById("sidebar-item").style.width = "175px";
      document.getElementById("homepage").style.marginLeft = "12rem";
      document.getElementById("header").style.marginLeft = "11rem";

      mini = false;
    } else {
      console.log("closing sidebar");
      document.getElementById("sidebar").style.width = "65px";
      document.getElementById("sidebar-item").style.width = "65px";
      document.getElementById("homepage").style.marginLeft = "5rem";
      document.getElementById("header").style.marginLeft = "4rem";
      mini = true;
    }
  };

  return (
    <div
      className="sidebar"
      id="sidebar"
      onMouseOver={toggleSidebar}
      onMouseOut={toggleSidebar}
    >
      <div className="logo-container">
        <LanguifyLogo />
      </div>
      <div className="user-profile-container">
        <UserProfileLogo />
      </div>
      <DarkIconTray />
      <div
        style={{
          border: "1px solid #f5f4f4",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      ></div>
      <LightIconTray />
    </div>
  );
};

export default Sidebar;

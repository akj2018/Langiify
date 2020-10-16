import React from "react";

import "./sidebar.styles.scss";

import { ReactComponent as LanguifyLogo2 } from "../../assets/languify-LOGO-2.svg";
import { ReactComponent as LanguifyLogo1 } from "../../assets/languify-LOGO.svg";
import { ReactComponent as UserProfileLogo } from "../../assets/profile-icon.svg";
import DarkIconTray from "../dark-icon-tray/dark-icon-tray.components";
import LightIconTray from "../light-icon-tray/light-icon-tray.components";

const Sidebar = (props) => {
  var mini = true;
  const toggleSidebar = () => {
    let x, y, i;
    if (mini) {
      console.log("opening sidebar");
      document.getElementById("sidebar").style.width = "200px";
      x = document.querySelectorAll(".sidebar-item");
      y = document.querySelectorAll(".icon-title");
      for (i = 0; i < x.length; i++) {
        x[i].style.width = "190px";
        y[i].style.opacity = "1";
      }
      document.getElementById("homepage").style.marginLeft = "12rem";
      document.getElementById("header").style.marginLeft = "11rem";
      document.querySelector(".user-profile-info").style.opacity = "1";

      mini = false;
    } else {
      console.log("closing sidebar");
      document.getElementById("sidebar").style.width = "65px";
      x = document.querySelectorAll(".sidebar-item");
      y = document.querySelectorAll(".icon-title");
      for (i = 0; i < y.length; i++) {
        x[i].style.width = "65px";
        y[i].style.opacity = "0";
      }
      document.getElementById("homepage").style.marginLeft = "5rem";
      document.getElementById("header").style.marginLeft = "4rem";
      document.querySelector(".user-profile-info").style.opacity = "0";

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
        <span className="logo-1">
          <LanguifyLogo1 />
        </span>
      </div>
      <div className="user-profile-container">
        <UserProfileLogo />
        <div className="user-profile-info">
          <h3>Username</h3>
          <h4>useremail@gmail.com</h4>
        </div>
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

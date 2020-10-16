import React from "react";

import "./dark-icon-tray.styles.scss";
import DarkIconPack from "./sidebar.data.dark";

import { Link } from "react-router-dom";

const DarkIconTray = () => {
  return (
    <div className="dark-icon-tray">
      {DarkIconPack.map((icon) => {
        const Icon = icon.icon;
        return (
          <Link to="/" className="sidebar-item" id="sidebar-item" key={icon.id}>
            <Icon />
            <h4 className="icon-title">{icon.title}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default DarkIconTray;

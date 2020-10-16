import React from "react";

import "./dark-icon-tray.styles.scss";
import DarkIconPack from "./sidebar.data.dark";

import { Link } from "react-router-dom";

const DarkIconTray = () => {
  return (
    <ul className="dark-icon-tray">
      {DarkIconPack.map((icon) => {
        const Icon = icon.icon;
        return (
          <li className="sidebar-item" id="sidebar-item" key={icon.id}>
            <Link to="/" className="link">
              <Icon />
              <span className="icon-title" id="icon-title">
                {icon.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DarkIconTray;

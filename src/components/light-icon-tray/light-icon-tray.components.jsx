import React from "react";

import "./light-icon-tray.styles.scss";
import LightIconPack from "./sidebar.data.light";
import { Link } from "react-router-dom";

const LightIconTray = () => {
  return (
    <ul className="dark-icon-tray">
      {LightIconPack.map((icon) => {
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

export default LightIconTray;

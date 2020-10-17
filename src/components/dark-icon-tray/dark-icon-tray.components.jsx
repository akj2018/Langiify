import React from "react";

import "./dark-icon-tray.styles.scss";
import DarkIconPack from "./sidebar.data.dark";

import { NavLink } from "react-router-dom";

const DarkIconTray = () => {
  return (
    <ul className="dark-icon-tray">
      {DarkIconPack.map((icon) => {
        const Icon = icon.icon;
        return (
          <li className="sidebar-item active" id="sidebar-item" key={icon.id}>
            <NavLink
              to={icon.path}
              exact
              className="link"
              activeClassName="selected"
            >
              <Icon />
              <span className="icon-title" id="icon-title">
                {icon.title}
              </span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default DarkIconTray;

import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import { ReactComponent as DropdownArrow } from "../../assets/dropdown-arrow.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="search-field-container">
        <SearchIcon />
        <h2>Search</h2>
      </div>
      <div className="navigation-container">
        <button>
          Company{" "}
          <span>
            <DropdownArrow />
          </span>
        </button>
        <Link className="notification-container" to="/">
          <NotificationIcon className="notification-icon" />
        </Link>
        <h3>sign out</h3>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as NotificationIcon } from "../../assets/notification.svg";
import SearchField from "../search-field/search-field.component";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Header extends React.Component {
  componentDidMount() {
    let input = document.querySelector(
      "div.search-field-container  input[type='text']"
    );

    input.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        input.blur();
      }
    });
  }

  render() {
    return (
      <div className="header" id="header">
        <div className="search-field-container">
          <SearchField />
        </div>
        <div className="navigation-container">
          <DropdownButton
            id="dropdown-basic-button"
            title="Company"
            variant="outline-primary"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <Link className="notification-container" to="/">
            <NotificationIcon className="notification-icon" />
          </Link>
          <h3>sign out</h3>
        </div>
      </div>
    );
  }
}

export default Header;

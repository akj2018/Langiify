import React from "react";

import "./lead-button.styles.scss";

const LeadButton = ({ background, boxShadow, ...props }) => {
  return (
    <div
      className="lead-button"
      style={{
        background: `${background}`,
        boxShadow: `${boxShadow}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default LeadButton;

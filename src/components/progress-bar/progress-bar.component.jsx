import React from "react";

import "./progress-bar.styles.scss";

import { ReactComponent as ProgressLine } from "../../assets/progress-line.svg";

const ProgressBar = (props) => {
  let barList = Array.from({ length: 51 }, (_, i) => (
    <div className="progress-item" key={i}>
      <ProgressLine className="progress-line" id="progress-line"></ProgressLine>
      <h5 className="progress-value">{(i * 2) / 10}</h5>
    </div>
  ));
  return <div className="progress-bar">{barList}</div>;
};

export default ProgressBar;

import React from "react";

import "./progress-bar.styles.scss";

const ProgressBar = (props) => {
  const value = 40;
  // const minValue = 0;
  const maxValue = 100;

  const progress = Math.min((value / maxValue) * 100, 100);

  const barHeight = 12;
  const pointerWidth = 49;
  const indicatorWidth = 50;

  const root = document.documentElement;

  root.style.setProperty("--bar-height", barHeight + "px");
  root.style.setProperty("--indicator-width", indicatorWidth + "px");
  root.style.setProperty("--pointer-width", pointerWidth + "px");
  root.style.setProperty("--progress", progress);
  root.style.setProperty("--progress-percentage", progress + "%");

  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }
    counter("indicator", 0, value, 2000);
  });

  return (
    <div className="custom-progress-bar">
      <div className="custom-meter">
        <span className="custom-bar"></span>
        <span className="custom-pointer"></span>
        <span id="indicator" className="custom-indicator">
          {value}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

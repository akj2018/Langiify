import React from "react";

import "./light-icon-tray.styles.scss";
import LightIconPack from "./sidebar.data.light";

const LightIconTray = () => {
  return (
    <div className="light-icon-tray">
      {LightIconPack.map((icon) => {
        const Icon = icon.icon;
        return <Icon key={icon.id} />;
      })}
    </div>
  );
};

export default LightIconTray;

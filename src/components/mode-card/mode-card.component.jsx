import React from "react";

import "./mode-card.styles.scss";

const ModeCard = (props) => {
  let classnameList = ["mode-card", props.className];
  let str = classnameList.join(` `);
  return <div className={str}>{props.children}</div>;
};

export default ModeCard;

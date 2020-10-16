import React from "react";

import "./card.styles.scss";

const Card = (props) => {
  let classnameList = ["card", props.className];
  let str = classnameList.join(` `);
  return <div className={str}>{props.children}</div>;
};

export default Card;

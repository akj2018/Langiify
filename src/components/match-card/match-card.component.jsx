import React from "react";

import "./match-card.styles.scss";
import { ReactComponent as SendIcon } from "../../assets/send.svg";
import { ReactComponent as CommentsIcon } from "../../assets/comments.svg";

const MatchCard = (props) => {
  let classnameList = ["match-card", props.className];
  let str = classnameList.join(` `);
  return (
    <div className={str}>
      <h4>{props.name}</h4>
      <SendIcon className="send-icon" />
      <CommentsIcon className="comments-icon" />
    </div>
  );
};

export default MatchCard;

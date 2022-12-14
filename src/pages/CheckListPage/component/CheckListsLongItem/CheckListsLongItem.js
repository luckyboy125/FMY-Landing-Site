import { useEffect, useState } from "react";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import "./CheckListsLongItem.css";

function CheckListsLongItem({ className, title, avatar, user, click, type }) {
  const handleClick = () => {
    click();
  };
  const colorType = {
    blue: "#75B3FF",
    green: "#37CE4A",
    orange: "#FF7A00",
  };

  return (
    <div className={`checkListsLongItem ${className}`}>
      <div className="firstPart">
        <div className="circleIcon"></div>
        <span className="checkListsTitle">{title}</span>
      </div>
      <div className="secondPart">
        <div className="secondFirstPart">
          <div className="avatarRoot">
            <img src={avatar} className="avatar" alt="avatar" />
            {user}
          </div>
          <ColorBtn name="10 Mar" width={128} color={colorType[type]} />
        </div>
        <div className="dotGroup" onClick={handleClick}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckListsLongItem;

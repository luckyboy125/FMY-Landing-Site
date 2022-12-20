import { useEffect, useState } from "react";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import checkIcon from "../../../../asset/images/check_icon.svg";
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
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = () => {
    setCheckStatus(!checkStatus);
  };

  return (
    <div
      className={`checkListsLongItem ${className}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="firstPart">
        <div className="circleIcon" onClick={handleCheck}>
          {checkStatus ? (
            <img src={checkIcon} className="checkIcon" alt="checkIcon" />
          ) : (
            <></>
          )}
        </div>
        <span
          className="checkListsTitle"
          style={{ textDecoration: checkStatus ? "line-through" : "initial" }}
        >
          {title}
        </span>
      </div>
      <div className="secondPart">
        <div className="secondFirstPart">
          <div className="avatarRoot">
            <img src={avatar} className="avatar" alt="avatar" />
            <span className="userName">{user}</span>
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

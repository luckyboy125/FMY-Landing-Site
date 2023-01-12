import { useState } from "react";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import checkIcon from "../../../../asset/images/check_icon.svg";
import "./CheckListsShortItem.css";

function CheckListsShortItem({ className, title, type, avatar, user, click }) {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = () => {
    setCheckStatus(!checkStatus);
  };

  return (
    <div
      className={`checkListsShortItem ${className}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="circleIcon" onClick={handleCheck}>
        {checkStatus ? (
          <img src={checkIcon} className="checkIcon" alt="checkIcon" />
        ) : (
          <></>
        )}
      </div>
      <div className="checkListsShortItemContent">
        <div
          className="title"
          style={{ textDecoration: checkStatus ? "line-through" : "initial" }}
        >
          {title}
        </div>
        <div className="des"></div>
        <div className="items">
          <div className="itemsFirst">
            <ColorBtn
              className="itemBtn"
              name="10 Mar"
              color="#FF0000"
              width={128}
            />
            <div className="avatarRoot">
              <img src={avatar} className="avatar" alt="avatar" />
              {user}
            </div>
          </div>
          <div className="deleteIcon">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="dotGroup" onClick={() => click()}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default CheckListsShortItem;

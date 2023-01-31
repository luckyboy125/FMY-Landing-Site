import { useState } from "react";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import checkIcon from "../../../../asset/images/check_icon.svg";
import "./TaskShortItem.css";

function TaskShortItem({ className, title, type, avatar, user, click }) {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = () => {
    setCheckStatus(!checkStatus);
  };
  return (
    <div
      className={`taskShortItem ${className}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="circleIcon" onClick={handleCheck}>
        {checkStatus ? <img src={checkIcon} alt="checkIcon" /> : <></>}
      </div>
      <div className="taskShortItemContent">
        <div
          className="title"
          style={{ textDecoration: checkStatus ? "line-through" : "initial" }}
        >
          {title}
        </div>
        <div className="des">#{type}</div>
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
      <ThreeDotBtn className="dotBtn" action={() => {}} />
    </div>
  );
}

export default TaskShortItem;

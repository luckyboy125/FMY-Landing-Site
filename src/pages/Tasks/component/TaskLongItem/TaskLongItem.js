import { useEffect, useState } from "react";
import checkIcon from "../../../../asset/images/check_icon.svg";
import "./TaskLongItem.css";

function TaskLongItem({
  className,
  title,
  avatar,
  dropdown,
  click,
  date,
  check,
  onCheck,
  checkedStatus,
}) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const handleClick = () => {
    click();
  };
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date(date * 1000).toLocaleDateString("en-US", options));
  }, [date]);

  const handleCheck = () => {
    onCheck();
  };

  return (
    <div
      className={`taskLongItem ${className}`}
      style={{ opacity: check ? 0.4 : 1 }}
    >
      <div className="firstPart">
        {checkedStatus ? <i className="fas fa-chevron-right"></i> : <></>}
        <div className="circleIcon" onClick={handleCheck}>
          {check ? (
            <img src={checkIcon} className="checkIcon" alt="checkIcon" />
          ) : (
            <></>
          )}
        </div>
        <div className="titleRoot">
          <div className="taskTitle">{title}</div>
        </div>
      </div>
      <div className="secondPart">
        {dropdown}
        <div className="avatarRoot">
          <img src={avatar} className="avatar" alt="avatar" />
          <span className="avatarDes"></span>
        </div>
        <div className="itemDate">
          <div className="itemDateDay">{time.split(",")[0]}</div>
          <div className="itemDateTime">
            {time.split(",")[1]}
            {time.split(",")[2]}
          </div>
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

export default TaskLongItem;

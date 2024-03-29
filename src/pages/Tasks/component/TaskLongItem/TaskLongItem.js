import { useEffect, useState } from "react";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import checkIcon from "../../../../asset/images/check_icon.svg";
import "./TaskLongItem.css";

function TaskLongItem({ className, title, avatar, dropdown, click, date }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [time, setTime] = useState("");
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(() => {
    setTime(new Date(date * 1000).toLocaleDateString("en-US", options));
  }, [date]);

  const handleCheck = () => {
    setCheckStatus(!checkStatus);
  };

  return (
    <div
      className={`taskLongItem ${className}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="firstPart">
        <div className="circleIcon" onClick={handleCheck}>
          {checkStatus ? <img src={checkIcon} alt="checkIcon" /> : <></>}
        </div>
        <div className="titleRoot">
          <div
            className="taskTitle"
            style={{ textDecoration: checkStatus ? "line-through" : "initial" }}
          >
            {title}
          </div>
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
        <ThreeDotBtn action={() => click()} />
      </div>
    </div>
  );
}

export default TaskLongItem;

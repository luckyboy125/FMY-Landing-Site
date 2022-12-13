import { useEffect, useState } from "react";
import "./TaskLongItem.css";

function TaskLongItem({ className, title, avatar, dropdown, click, date }) {
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

  return (
    <div className={`taskLongItem ${className}`}>
      <div className="firstPart">
        <div className="circleIcon"></div>
        <span className="taskTitle">{title}</span>
      </div>
      <div className="secondPart">
        {dropdown}
        <img src={avatar} className="avatar" alt="avatar" />
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

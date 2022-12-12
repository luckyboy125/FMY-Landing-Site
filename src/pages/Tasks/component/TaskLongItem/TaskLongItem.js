import { useEffect, useState } from "react";
import "./TaskLongItem.css";

function TaskLongItem({ className, title, avatar, dropdown, click, date }) {
  const dateConvert = (timeStamp) => {
    const time = new Date(timeStamp * 1000);
    const Month = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const Week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return {
      date:
        time.getDate() +
        " " +
        Month[time.getMonth()] +
        " " +
        time.getFullYear(),
      day: Week[time.getDay()],
    };
  };

  const handleClick = () => {
    click();
  };
  const [day, setDay] = useState("asdf");
  const [time, setTime] = useState("asdfa");
  useEffect(() => {
    setDay(dateConvert(date).day);
    setTime(dateConvert(date).date);
  }, [date]);

  return (
    <div className={`taskLongItem ${className}`}>
      <div className="firstPart">
        <div className="circleIcon">
          <div class="circle__inner"></div>
        </div>
        <span className="taskTitle">{title}</span>
      </div>
      <div className="secondPart">
        {dropdown}
        <img src={avatar} className="avatar" alt="avatar" />
        <div className="itemDate">
          {day},<span>{time}</span>
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

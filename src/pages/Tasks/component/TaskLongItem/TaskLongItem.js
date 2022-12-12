import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import Person1 from "../../../../asset/person1.svg";
import "./TaskLongItem.css";

function TaskLongItem({ className }) {
  return (
    <div className={`taskLongItem ${className}`}>
      <div className="firstPart">
        <div className="circleIcon">
          <div class="circle__inner"></div>
        </div>
        <span className="taskTitle">Lorem ipsum dolor sit</span>
      </div>
      <div className="secondPart">
        <ColorBtn className="btn" name="High" width={130} color="#FF7A00" />
        <img src={Person1} className="avatar" alt="avatar" />
        <div className="itemDate">
          Monday,
          <span>4 April 2022</span>
        </div>
        <div className="dotGroup">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default TaskLongItem;

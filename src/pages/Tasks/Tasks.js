import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import TaskLongItem from "./component/TaskLongItem/TaskLongItem";
import Person1 from "../../asset/person1.svg";
import Person2 from "../../asset/person2.svg";
import Person3 from "../../asset/person3.svg";
import "./Tasks.css";
import ColorBtn from "../../components/ColorBtn/ColorBtn";

function Tasks() {
  return (
    <div className="tasksRoot">
      <div className="tasksTitle">Tasks</div>
      <div className="tasksHeaderRoot">
        <ActionTab />
        <PlusButton />
      </div>
      <div className="tasksContainer">
        <div className="tasksContainerHeader">
          <div className="firstItem">
            <div className="headerTitle">Today</div>
            <div className="headerDesRoot">
              <i className="far fa-angle-right"></i>
              <span>17 Tasks</span>
            </div>
          </div>
          <div className="secondItem">
            <div className="headerTitle">Overdue</div>
            <div className="headerDesRoot">
              <i className="fas fa-angle-down"></i>
              <span>17 Tasks</span>
            </div>
          </div>
        </div>
        <div className="tasksContent">
          <div className="firstContent">
            <TaskLongItem
              className="marBottom10"
              avatar={Person1}
              dropdown={
                <ColorBtn
                  className="btn"
                  name="High"
                  width={130}
                  color="#FF7A00"
                />
              }
              date={1670850086}
            />
            <TaskLongItem
              className="marBottom10"
              avatar={Person2}
              dropdown={
                <ColorBtn
                  className="btn"
                  name="Medium"
                  width={130}
                  color="#75B3FF"
                />
              }
              date={1670677286}
            />
            <TaskLongItem
              className="marBottom10"
              avatar={Person3}
              dropdown={
                <ColorBtn
                  className="btn"
                  name="Low"
                  width={130}
                  color="#37CE4A"
                />
              }
              date={1672405286}
            />
          </div>
          <div className="secondContent">second content</div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;

import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import TaskLongItem from "./component/TaskLongItem/TaskLongItem";
import "./Tasks.css";

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
            <TaskLongItem className="marBottom10" />
            <TaskLongItem className="marBottom10" />
            <TaskLongItem className="marBottom10" />
          </div>
          <div className="secondContent">second content</div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;

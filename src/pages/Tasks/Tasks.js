import ActionTab from "../../components/ActionTab/ActionTab";
import "./Tasks.css";

function Tasks() {
  return (
    <div className="tasksRoot">
      <div className="tasksTitle">Tasks</div>
      <div className="tasksHeaderRoot">
        <ActionTab />
      </div>
    </div>
  );
}

export default Tasks;

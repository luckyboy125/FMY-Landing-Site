import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import "./Tasks.css";

function Tasks() {
  return (
    <div className="tasksRoot">
      <div className="tasksTitle">Tasks</div>
      <div className="tasksHeaderRoot">
        <ActionTab />
        <PlusButton />
      </div>
    </div>
  );
}

export default Tasks;

import { useState } from "react";
import TaskLongItem from "./component/TaskLongItem/TaskLongItem";
import NewTaskModal from "./component/NewTaskModal/NewTaskModal";
import TaskShortItem from "./component/TaskShortItem/TaskShortItem";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import Person1 from "../../asset/person1.svg";
import Person2 from "../../asset/person2.svg";
import Person3 from "../../asset/person3.svg";
import "./Tasks.css";

function Tasks() {
  const [newTaskModalShow, setNewTaskModalShow] = useState(false);
  const tabData = ["All", "Complete"];
  const [tab, setTab] = useState(tabData[0]);

  const handleNewTaskModal = () => {
    setNewTaskModalShow(true);
  };
  const handleTab = (e) => {
    setTab(e);
  };

  return (
    <>
      <div className="tasksRoot">
        <div className="tasksTitle">Tasks</div>
        <div className="tasksHeaderRoot">
          <ActionTab
            data={tabData}
            onSelect={(e) => handleTab(e)}
            select={tab}
          />
          <PlusButton content="+ New task" action={handleNewTaskModal} />
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
              <div className="tasksContentItem">
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasksItem"
                  avatar={Person1}
                  dropdown={
                    <ColorBtn
                      name="High"
                      width={130}
                      arrowShow
                      color="#FF7A00"
                    />
                  }
                  date={1670850086}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasksItem"
                  avatar={Person2}
                  dropdown={
                    <ColorBtn
                      name="Medium"
                      width={130}
                      arrowShow
                      color="#75B3FF"
                    />
                  }
                  date={1670677286}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="lastTasksItem"
                  avatar={Person3}
                  dropdown={
                    <ColorBtn
                      name="Low"
                      width={130}
                      arrowShow
                      color="#37CE4A"
                    />
                  }
                  date={1672405286}
                />
                <div className="addTaskBtn" onClick={handleNewTaskModal}>
                  + New Task
                </div>
              </div>
              <div className="tasksContentItem">
                <div className="headerRoot">
                  <div className="headerTitle">Tomorrow</div>
                  <div className="headerDesRoot">
                    <i className="far fa-angle-right"></i>
                    <span>17 Tasks</span>
                  </div>
                </div>
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasksItem"
                  avatar={Person1}
                  dropdown={
                    <ColorBtn
                      name="High"
                      width={130}
                      arrowShow
                      color="#FF7A00"
                    />
                  }
                  date={1670850086}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasksItem"
                  avatar={Person2}
                  dropdown={
                    <ColorBtn
                      name="Medium"
                      width={130}
                      arrowShow
                      color="#75B3FF"
                    />
                  }
                  date={1670677286}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="lastTasksItem"
                  avatar={Person3}
                  dropdown={
                    <ColorBtn
                      name="Low"
                      width={130}
                      arrowShow
                      color="#37CE4A"
                    />
                  }
                  date={1672405286}
                />
                <div className="addTaskBtn" onClick={handleNewTaskModal}>
                  + New Task
                </div>
              </div>
              <div className="tasksContentItem">
                <div className="headerRoot">
                  <div className="headerTitle">Upcoming</div>
                  <div className="headerDesRoot">
                    <i className="far fa-angle-right"></i>
                    <span>17 Tasks</span>
                  </div>
                </div>
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasksItem"
                  avatar={Person1}
                  dropdown={
                    <ColorBtn
                      name="High"
                      width={130}
                      arrowShow
                      color="#FF7A00"
                    />
                  }
                  date={1670850086}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasksItem"
                  avatar={Person2}
                  dropdown={
                    <ColorBtn
                      name="Medium"
                      width={130}
                      arrowShow
                      color="#75B3FF"
                    />
                  }
                  date={1670677286}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="lastTasksItem"
                  avatar={Person3}
                  dropdown={
                    <ColorBtn
                      name="Low"
                      width={130}
                      arrowShow
                      color="#37CE4A"
                    />
                  }
                  date={1672405286}
                />
              </div>
            </div>
            <div className="overdueContent">
              <TaskShortItem
                className="taskShortItem"
                avatar={Person1}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Noy"
              />
              <TaskShortItem
                className="taskShortItem"
                avatar={Person3}
                title="Lorem ipsum dolor sit"
                type="work"
                user="Nimrod"
              />
              <TaskShortItem
                className="taskShortItem"
                avatar={Person2}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Yaniv"
              />
            </div>
          </div>
          <div
            className="addTaskBtn"
            style={{ marginTop: "18px" }}
            onClick={handleNewTaskModal}
          >
            + New Task
          </div>
        </div>
      </div>
      <NewTaskModal
        show={newTaskModalShow}
        onClose={() => setNewTaskModalShow(false)}
      />
    </>
  );
}

export default Tasks;

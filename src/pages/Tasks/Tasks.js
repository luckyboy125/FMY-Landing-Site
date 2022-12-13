import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import TaskLongItem from "./component/TaskLongItem/TaskLongItem";
import Person1 from "../../asset/person1.svg";
import Person2 from "../../asset/person2.svg";
import Person3 from "../../asset/person3.svg";
import "./Tasks.css";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import TaskShortItem from "./component/TaskShortItem/TaskShortItem";

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
            <div className="tasksContentItem">
              <TaskLongItem
                title="Lorem ipsum dolor sit"
                className="tasksItem"
                avatar={Person1}
                dropdown={
                  <ColorBtn
                    className="btn"
                    name="High"
                    width={130}
                    iconShow
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
                    className="btn"
                    name="Medium"
                    width={130}
                    iconShow
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
                    className="btn"
                    name="Low"
                    width={130}
                    iconShow
                    color="#37CE4A"
                  />
                }
                date={1672405286}
              />
              <div className="addTaskBtn">+ New Task</div>
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
                    className="btn"
                    name="High"
                    width={130}
                    iconShow
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
                    className="btn"
                    name="Medium"
                    width={130}
                    iconShow
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
                    className="btn"
                    name="Low"
                    width={130}
                    iconShow
                    color="#37CE4A"
                  />
                }
                date={1672405286}
              />
              <div className="addTaskBtn">+ New Task</div>
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
                    className="btn"
                    name="High"
                    width={130}
                    iconShow
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
                    className="btn"
                    name="Medium"
                    width={130}
                    iconShow
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
                    className="btn"
                    name="Low"
                    width={130}
                    iconShow
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
        <div className="addTaskBtn" style={{ marginTop: "18px" }}>
          + New Task
        </div>
      </div>
    </div>
  );
}

export default Tasks;

import { useState, useCallback } from 'react';
import TaskLongItem from './component/TaskLongItem/TaskLongItem';
import NewTaskModal from './component/NewTaskModal/NewTaskModal';
import TaskShortItem from './component/TaskShortItem/TaskShortItem';
import ColorBtn from '../../components/ColorBtn/ColorBtn';
import ActionTab from '../../components/ActionTab/ActionTab';
import PlusButton from '../../components/PlusButton/PlusButton';
import Person1 from '../../asset/person1.svg';
import Person2 from '../../asset/person2.svg';
import Person3 from '../../asset/person3.svg';
import './Tasks.css';

function Tasks() {
  const [newTaskModalShow, setNewTaskModalShow] = useState(false);
  const tabData = ['All', 'Complete'];
  const [tab, setTab] = useState(tabData[0]);

  const handleNewTaskModal = useCallback(() => {
    setNewTaskModalShow(true);
  }, []);

  const handleTab = useCallback((e: string) => {
    setTab(e);
  }, []);

  return (
    <>
      <div className="tasks">
        <div className="tasks__title">Tasks</div>
        <div className="tasks__header">
          <ActionTab data={tabData} onSelect={handleTab} select={tab} />
          <PlusButton content="+ New task" action={handleNewTaskModal} />
        </div>
        <div className="tasks__container">
          <div className="tasks__container-header">
            <div className="tasks__container-header-item--first">
              <div className="tasks__header-title">Today</div>
              <div className="tasks__header-desc">
                <i className="far fa-angle-right"></i>
                <span>17 Tasks</span>
              </div>
            </div>
            <div className="tasks__container-header-item--second">
              <div className="tasks__header-title">Overdue</div>
              <div className="tasks__header-desc">
                <i className="fas fa-angle-down"></i>
                <span>17 Tasks</span>
              </div>
            </div>
          </div>
          <div className="tasks__content">
            <div className="tasks__content-left">
              <div className="tasks__content-item">
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item"
                  avatar={Person1}
                  dropdown={
                    <ColorBtn
                      label="High"
                      width={130}
                      showArrow
                      color="#FF7A00"
                    />
                  }
                  date={1670850086}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item"
                  avatar={Person2}
                  dropdown={
                    <ColorBtn
                      label="Medium"
                      width={130}
                      showArrow
                      color="#75B3FF"
                    />
                  }
                  date={1670677286}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item--last"
                  avatar={Person3}
                  dropdown={
                    <ColorBtn
                      label="Low"
                      width={130}
                      showArrow
                      color="#37CE4A"
                    />
                  }
                  date={1672405286}
                />
                <div className="tasks__add-btn" onClick={handleNewTaskModal}>
                  + New Task
                </div>
              </div>
              <div className="tasks__content-item">
                <div className="tasks__item-header">
                  <div className="tasks__header-title">Tomorrow</div>
                  <div className="tasks__header-desc">
                    <i className="far fa-angle-right"></i>
                    <span>17 Tasks</span>
                  </div>
                </div>
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item"
                  avatar={Person1}
                  dropdown={
                    <ColorBtn
                      label="High"
                      width={130}
                      showArrow
                      color="#FF7A00"
                    />
                  }
                  date={1670850086}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item"
                  avatar={Person2}
                  dropdown={
                    <ColorBtn
                      label="Medium"
                      width={130}
                      showArrow
                      color="#75B3FF"
                    />
                  }
                  date={1670677286}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item--last"
                  avatar={Person3}
                  dropdown={
                    <ColorBtn
                      label="Low"
                      width={130}
                      showArrow
                      color="#37CE4A"
                    />
                  }
                  date={1672405286}
                />
                <div className="tasks__add-btn" onClick={handleNewTaskModal}>
                  + New Task
                </div>
              </div>
              <div className="tasks__content-item">
                <div className="tasks__item-header">
                  <div className="tasks__header-title">Upcoming</div>
                  <div className="tasks__header-desc">
                    <i className="far fa-angle-right"></i>
                    <span>17 Tasks</span>
                  </div>
                </div>
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item"
                  avatar={Person1}
                  dropdown={
                    <ColorBtn
                      label="High"
                      width={130}
                      showArrow
                      color="#FF7A00"
                    />
                  }
                  date={1670850086}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item"
                  avatar={Person2}
                  dropdown={
                    <ColorBtn
                      label="Medium"
                      width={130}
                      showArrow
                      color="#75B3FF"
                    />
                  }
                  date={1670677286}
                />
                <TaskLongItem
                  title="Lorem ipsum dolor sit"
                  className="tasks__item--last"
                  avatar={Person3}
                  dropdown={
                    <ColorBtn
                      label="Low"
                      width={130}
                      showArrow
                      color="#37CE4A"
                    />
                  }
                  date={1672405286}
                />
              </div>
            </div>
            <div className="tasks__overdue">
              <TaskShortItem
                className="tasks__overdue-item"
                avatar={Person1}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Noy"
              />
              <TaskShortItem
                className="tasks__overdue-item"
                avatar={Person3}
                title="Lorem ipsum dolor sit"
                type="work"
                user="Nimrod"
              />
              <TaskShortItem
                className="tasks__overdue-item"
                avatar={Person2}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Yaniv"
              />
            </div>
          </div>
          <div
            className="tasks__add-btn"
            style={{ marginTop: '18px' }}
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

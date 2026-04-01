import { useState, useCallback } from 'react';
import CheckListsLongItem from './component/CheckListsLongItem/CheckListsLongItem';
import NewCheckListsModal from './component/NewCheckListsModal/NewCheckListsModal';
import CheckListsShortItem from './component/CheckListsShortItem/CheckListsShortItem';
import ActionTab from '../../components/ActionTab/ActionTab';
import PlusButton from '../../components/PlusButton/PlusButton';
import Person1 from '../../asset/person1.svg';
import Person2 from '../../asset/person2.svg';
import Person3 from '../../asset/person3.svg';
import './CheckLists.css';

function CheckLists() {
  const [newCheckListModalShow, setNewCheckListModalShow] = useState(false);
  const tabData = ['All', 'Daily', 'Weekly'];
  const [tab, setTab] = useState(tabData[0]);

  const handleNewCheckListsModal = useCallback(() => {
    setNewCheckListModalShow(true);
  }, []);

  const handleTab = useCallback((e: string) => {
    setTab(e);
  }, []);

  return (
    <>
      <div className="check-lists">
        <div className="check-lists__title">Checklists</div>
        <div className="check-lists__header">
          <ActionTab data={tabData} onSelect={handleTab} select={tab} />
          <PlusButton content="+ New task" action={handleNewCheckListsModal} />
        </div>
        <div className="check-lists__container">
          <div className="check-lists__container-header">
            <div className="check-lists__part--first">
              <div className="check-lists__title-root">
                <div className="check-lists__header-title">Review all platforms</div>
                <div className="check-lists__header-description">
                  <i className="far fa-angle-right"></i>
                  <span>17 Tasks</span>
                </div>
              </div>
              <div className="check-lists__complete-count">5/17 completed</div>
            </div>
            <div className="check-lists__part--second">
              <div className="check-lists__header-title">Overdue</div>
              <div className="check-lists__header-description">
                <i className="fas fa-angle-down"></i>
                <span>3 Tasks</span>
              </div>
            </div>
          </div>
          <div className="check-lists__content">
            <div className="check-lists__left">
              <div className="check-lists__content-item">
                <CheckListsLongItem
                  user="If it has long name item, I will add 3dots in this field"
                  title="There are a lot of cases in future. So we have to add this function in this field. If there is a this function, we can keep pixel perfect in this page."
                  className="check-lists__item"
                  avatar={Person1}
                  type="blue"
                />
                <CheckListsLongItem
                  user="Yaniv"
                  title="Twitter"
                  className="check-lists__item"
                  avatar={Person2}
                  type="green"
                />
                <CheckListsLongItem
                  user="Nimrod"
                  title="Reddit"
                  className="check-lists__item--last"
                  avatar={Person3}
                  type="orange"
                />
                <div
                  className="check-lists__add-button"
                  onClick={handleNewCheckListsModal}
                >
                  + New Task
                </div>
              </div>
              <div className="check-lists__content-item">
                <div className="check-lists__item-header">
                  <div className="check-lists__title-root">
                    <div className="check-lists__header-title">Review all languages</div>
                    <div className="check-lists__header-description">
                      <i className="far fa-angle-right"></i>
                      <span>17 Tasks</span>
                    </div>
                  </div>
                  <div className="check-lists__complete-count">5/17 completed</div>
                </div>
                <CheckListsLongItem
                  user="Noy"
                  title="English"
                  className="check-lists__item"
                  avatar={Person1}
                  type="blue"
                />
                <CheckListsLongItem
                  user="Yaniv"
                  title="Arabic"
                  className="check-lists__item"
                  avatar={Person2}
                  type="green"
                />
                <CheckListsLongItem
                  user="Nimrod"
                  title="Pharsi"
                  className="check-lists__item--last"
                  avatar={Person3}
                  type="orange"
                />
                <div
                  className="check-lists__add-button"
                  onClick={handleNewCheckListsModal}
                >
                  + New Task
                </div>
              </div>
              <div className="check-lists__content-item">
                <div className="check-lists__item-header">
                  <div className="check-lists__title-root">
                    <div className="check-lists__header-title">Review open cases</div>
                    <div className="check-lists__header-description">
                      <i className="far fa-angle-right"></i>
                      <span>17 Tasks</span>
                    </div>
                  </div>
                  <div className="check-lists__complete-count">5/17 completed</div>
                </div>
                <CheckListsLongItem
                  user="Noy"
                  title="Germany-France relations"
                  className="check-lists__item"
                  avatar={Person1}
                  type="blue"
                />
                <CheckListsLongItem
                  user="Yaniv"
                  title="Anti COVID operation"
                  className="check-lists__item"
                  avatar={Person2}
                  type="green"
                />
                <CheckListsLongItem
                  user="Nimrod"
                  title="Pro Putin operation"
                  className="check-lists__item--last"
                  avatar={Person3}
                  type="orange"
                />
              </div>
            </div>
            <div className="check-lists__overdue">
              <CheckListsShortItem
                className="check-lists__short-item"
                avatar={Person1}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Noy"
              />
              <CheckListsShortItem
                className="check-lists__short-item"
                avatar={Person3}
                title="Lorem ipsum dolor sit"
                type="work"
                user="Nimrod"
              />
              <CheckListsShortItem
                className="check-lists__short-item"
                avatar={Person2}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Yaniv"
              />
            </div>
          </div>
          <div
            className="check-lists__add-button"
            style={{ marginTop: '18px' }}
            onClick={handleNewCheckListsModal}
          >
            + New Task
          </div>
        </div>
      </div>
      <NewCheckListsModal
        show={newCheckListModalShow}
        onClose={() => setNewCheckListModalShow(false)}
      />
    </>
  );
}

export default CheckLists;
